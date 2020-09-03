<template>
  <div class="catalog">
    <Notification :messages="messages" :timeOut="timeOut">
    </Notification>

    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="catalog__link_to_cart">
        Cart: {{ CART.length }}
        <i class="material-icons">
          shopping_cart
        </i>
      </div>
    </router-link>

    <h1>Catalog</h1>
    <div class="filters">
      <v-select
        :selected="selected"
        :options="categories"
        @select="sortByCategories"
      />
      <div class="range-slider">
        <input
          type="range"
          min="0"
          max="10000"
          step="50"
          v-model.number="minPrice"
          @change="setRangeSlider"
        />
        <input
          type="range"
          min="0"
          max="10000"
          step="50"
          v-model.number="maxPrice"
          @change="setRangeSlider"
        />
      </div>
      <div class="range-values">
        <p>Min: {{ minPrice }}</p>
        <p>Max: {{ maxPrice }}</p>
      </div>
    </div>

    <div class="catalog__list">
      <CatalogItem
        v-for="item in filteredProducts"
        :key="item.article"
        :product_data="item"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import CatalogItem from './CatalogItem.vue';
import vSelect from '../v-select';
import Notification from '../notifications/Notification';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Catalog',
  components: {
    CatalogItem,
    vSelect,
    Notification,
  },
  data() {
    return {
      categories: [
        { name: 'All', value: 'ALL' },
        { name: 'Men', value: 'm' },
        { name: 'Women', value: 'w' },
      ],
      selected: 'All',
      sortedProducts: [],
      minPrice: 0,
      maxPrice: 10000,
      messages: [],
      timeOut: 3000,
    };
  },
  computed: {
    ...mapGetters(['PRODUCTS', 'CART', 'SEARCH_VALUE']),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.PRODUCTS;
      }
    },
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),

    addToCart(data) {
      this.ADD_TO_CART(data).then(() => {
        let timeStamp = Date.now().toLocaleString();
        this.messages.unshift({
          name: 'Товар добавлен в корзину',
          icon: 'check_circle',
          id: timeStamp,
        });
      });
    },
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        let tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
      this.sortByCategories();
    },
    sortByCategories(category) {
      this.sortedProducts = [...this.PRODUCTS];
      this.sortedProducts = this.sortedProducts.filter((item) => {
        return (
          item.price >= this.minPrice && item.price <= this.maxPrice
        );
      });
      if (category) {
        this.sortedProducts = this.sortedProducts.filter((item) => {
          this.selected = category.name;
          return item.category === category.name;
        });
      }
    },
    sortProductBySearchValue(value) {
      this.sortedProducts = [...this.PRODUCTS];
      if (value) {
        this.sortedProducts = this.sortedProducts.filter((item) => {
          return item.name
            .toLowerCase()
            .includes(value.toLowerCase());
        });
      } else {
        this.sortedProducts = this.PRODUCTS;
      }
    },
  },
  watch: {
    SEARCH_VALUE() {
      this.sortProductBySearchValue(this.SEARCH_VALUE);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        this.sortByCategories();
        this.sortProductBySearchValue(this.SEARCH_VALUE);
      }
    });
  },
};
</script>

<style lang="scss">
.catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
  &__link_to_cart {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: $padding;
    border: 1px solid black;
    background-color: #ffffff;
  }
  &__link_to_test_site {
    position: absolute;
    top: 10px;
    left: 10px;
    padding: $padding;
    border: 1px solid black;
  }
  .filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .range-slider {
      width: 200px;
      margin: auto 16px;
      text-align: center;
      position: relative;

      input[type='range'] {
        position: absolute;
        left: 0;
        bottom: 0;
      }
      input[type='range']::-webkit-slider-thumb {
        z-index: 2;
        position: relative;
        top: 2px;
        margin-top: -7px;
      }
    }
  }
}
</style>
