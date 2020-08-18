<template>
  <div class="cart">
    <router-link :to="{ name: 'catalog' }">
      <div class="cart__link_to_catalog">
        Back to catalog<i class="material-icons">shopping_cart</i>
      </div>
    </router-link>
    <h1>Cart</h1>
    <p v-if="!cart_data.length">There are no products in cart...</p>
    <CartItem
      v-for="(item, index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    />
    <div class="cart__total">
      <p class="total_name">Total:</p>
      <p>{{ cartTotalCost }} ₽</p>
    </div>
  </div>
</template>

<script>
import CartItem from './CartItem.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Cart',
  components: {
    CartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    cartTotalCost() {
      let result = [];

      if (this.cart_data) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity);
        }

        result = result.reduce((acc, el) => {
          return acc + el;
        }, 0);
      }

      return result;
    },
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CARD',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM',
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CARD(index);
    },
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
  },
};
</script>

<style lang="scss">
.cart {
  &__link_to_catalog {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: $padding;
    border: 1px solid black;
  }
  &__total {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: $padding * 1;
    display: flex;
    justify-content: center;
    background: #2a98ff;
    color: #ffffff;
    font-size: 20px;
  }
  .total_name {
    margin-right: $margin * 2;
  }
}
</style>
