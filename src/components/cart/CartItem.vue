<template>
  <div class="cart-item">
    <img
      class="cart-item__img"
      :src="require('../../assets/images/' + cart_item_data.image)"
      alt=""
    />
    <div class="cart-item__info">
      <p>{{ cart_item_data.name }}</p>
      <p>Price: {{ cart_item_data.price | toFix | formatedPrice }}</p>
      <p>Article: {{ cart_item_data.article }}</p>
    </div>
    <div class="cart-item__quantity">
      <p>Quantity</p>
      <div class="cart-item__quantity__inc_dec">
        <i class="material-icons" @click="decrementItem">
          remove
        </i>
        <div class="cart-item__quantity__value">
          {{ cart_item_data.quantity }}
        </div>
        <i class="material-icons" @click="incrementItem">
          add
        </i>
      </div>
    </div>
    <button class="btn" @click="deleteFromCart">
      <i class="material-icons" @click="deleteFromCart">
        delete_forever
      </i>
    </button>
  </div>
</template>

<script>
import toFix from '../../filters/toFix';
import formatedPrice from '../../filters/priceFormat';
export default {
  name: 'CartItem',
  props: {
    cart_item_data: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {},
  filters: {
    toFix,
    formatedPrice,
  },
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
  &__quantity {
    &__inc_dec {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__value {
      font-size: 20px;
    }
    &__btn {
      cursor: pointer;
    }
  }
  i {
    cursor: pointer;
  }
}
</style>
