<template>
  <div class="catalog-item">
    <Popup
      v-if="isInfoPopupVisible"
      @closePopup="closePopup"
      @rightBtnAction="addToCart"
      rightBtnTitle="Add to cart"
      :popupTitle="product_data.name"
    >
      <img
        class="catalog-item__img"
        :src="require(`../../assets/images/${product_data.image}`)"
        :alt="product_data.image"
      />
      <div>
        <p class="catalog-item__name">{{ product_data.name }}</p>
        <p class="catalog-item__price">
          Price: {{ product_data.price | toFix | formatedPrice }}
        </p>
        <p class="catalog-item__category">
          {{ product_data.category }}
        </p>
      </div>
    </Popup>
    <img
      class="catalog-item__img"
      :src="require(`../../assets/images/${product_data.image}`)"
      :alt="product_data.image"
    />
    <p class="catalog-item__name">{{ product_data.name }}</p>
    <p class="catalog-item__price">
      Price: {{ product_data.price | toFix | formatedPrice }}
    </p>
    <div class="catalog-item__buttons">
      <button
        class="btn catalog-item__show-info"
        @click="showPopupInfo"
      >
        Show info
      </button>
      <button
        class="btn catalog-item__add_to_cart_btn"
        @click="addToCart"
      >
        Add
      </button>
    </div>
  </div>
</template>

<script>
import Popup from '../popup/Popup';
import toFix from '../../filters/toFix';
import formatedPrice from '../../filters/priceFormat';
export default {
  name: 'CatalogItem',
  components: {
    Popup,
  },
  props: {
    product_data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      isInfoPopupVisible: false,
    };
  },
  filters: {
    toFix,
    formatedPrice,
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data);
    },
    showPopupInfo() {
      this.isInfoPopupVisible = true;
    },
    closePopup() {
      this.isInfoPopupVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 5px #e0e0e0;
  padding: $padding * 2;
  margin-bottom: $margin * 2;
  &__img {
    width: 100px;
  }
  &__buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
