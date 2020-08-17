<template>
  <div class="cart-item">
    <img
      class="cart-item__img"
      :src="require('../../assets/images/' + cart_item_data.image)"
      alt=""
    />
    <div class="cart-item__info">
      <p>{{ cart_item_data.name }}</p>
      <p>Price: {{ cart_item_data.price }}₽</p>
      <p>Article: {{ cart_item_data.article }}</p>
    </div>
    <div class="cart-item__quantity">
      <p>Quantity</p>
      <span class="quantity__btn" @click="decrementItem">-</span>
      {{ cart_item_data.quantity }}
      <span class="quantity__btn" @click="incrementItem">+</span>
    </div>
    <button class="btn" @click="deleteFromCart">delete</button>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    cart_item_data: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {},
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart');
    },
    decrementItem() {
      this.$emit('decrement');
    },
    incrementItem() {
      this.$emit('increment');
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  box-shadow: 0 0 5px 0px #e0e0e0;
  padding: $padding * 2;
  margin-bottom: $margin * 2;
  &__img {
    width: 50px;
  }

  .quantity__btn {
    cursor: pointer;
  }
}
</style>
