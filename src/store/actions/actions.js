export default {
  ADD_TO_CART({ commit }, product) {
    commit('SET_CART', product);
  },

  DELETE_FROM_CARD({ commit }, index) {
    commit('REMOVE_FROM_CART', index);
  },

  INCREMENT_CART_ITEM({ commit }, index) {
    commit('INCREMENT_CART_ITEM', index);
  },

  DECREMENT_CART_ITEM({ commit }, index) {
    commit('DECREMENT_CART_ITEM', index);
  },
};
