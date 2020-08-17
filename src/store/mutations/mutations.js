export default {
  SET_PRODUCTS_TO_STATE: (state, response) => {
    state.products = response;
  },

  SET_CART: (state, product) => {
    let isProductExist = false;
    state.cart.map(function(item) {
      if (item.article === product.article) {
        isProductExist = true;
        item.quantity++;
      }
    });
    isProductExist || state.cart.push({ ...product, quantity: 1 });
  },

  REMOVE_FROM_CART: (state, index) => {
    state.cart.splice(index, 1);
  },

  INCREMENT_CART_ITEM: (state, index) => {
    state.cart[index].quantity++;
  },

  DECREMENT_CART_ITEM: (state, index) => {
    if (state.cart[index].quantity > 1) {
      state.cart[index].quantity--;
    }
  },
};
