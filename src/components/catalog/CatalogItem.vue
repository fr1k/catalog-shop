<template>
  <div class="catalog-item">
    <img
      class="catalog-item__img"
      :src="require(`../../assets/images/${product_data.image}`)"
      :alt="product_data.image"
    />
    <p class="catalog-item__name">{{ product_data.name }}</p>
    <p class="catalog-item__price">
      Price: {{ product_data.price }}₽
    </p>
    <button
      class="btn catalog-item__add_to_cart_btn"
      @click="addToCart"
    >
      <i class="material-icons">
        add_shopping_cart
      </i>
      Add
    </button>
  </div>
</template>

<script>
export default {
  name: 'CatalogItem',
  props: {
    product_data: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data);
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
}
</style>
