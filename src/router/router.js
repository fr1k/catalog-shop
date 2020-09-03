import Vue from 'vue';
import Router from 'vue-router';

import Catalog from '@/components/catalog/Catalog.vue';
import Cart from '@/components/cart/Cart.vue';
import MainPage from '../main-page/MainPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: MainPage,
    },
    {
      path: '/catalog',
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
