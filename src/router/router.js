import Vue from 'vue';
import Router from 'vue-router';

import Catalog from '@/components/catalog/Catalog.vue';
import Cart from '@/components/cart/Cart.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'catalog',
      component: Catalog,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      props: true,
    },
  ],
});
