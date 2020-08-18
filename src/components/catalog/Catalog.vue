<template>
  <div class="catalog">
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="catalog__link_to_cart">
        Cart: {{ CART.length }}
        <i class="material-icons">
          shopping_cart
        </i>
      </div>
    </router-link>

    <h1>Catalog</h1>
    <v-select
      :selected="selected"
      :options="categories"
      @select="sortByCategories"
    />
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
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Catalog',
  components: {
    CatalogItem,
    vSelect,
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
    };
  },
  computed: {
    ...mapGetters(['PRODUCTS', 'CART']),
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
      this.ADD_TO_CART(data);
    },
    sortByCategories(category) {
      this.sortedProducts = [];
      this.PRODUCTS.map((item) => {
        if (item.category === category.name) {
          this.sortedProducts.push(item);
        }
      });
      this.selected = category.name;
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log('Data arrived');
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
  }
  &__link_to_test_site {
    position: absolute;
    top: 10px;
    left: 10px;
    padding: $padding;
    border: 1px solid black;
  }
}
</style>
