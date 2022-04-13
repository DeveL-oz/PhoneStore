import { createRouter, createWebHistory } from 'vue-router';

import Cart from '../views/Cart.vue';
import Checkout from '../views/Base.vue';
import ProductsList from '../views/ProductsList.vue';
import Product from '../views/Product.vue';

import E404 from '../views/E404.vue';
import Pay from '../views/Pay.vue';

const routes = [
  {
    name: 'cart',
    path: '/cart',
    component: Cart,
  },
  {
    name: 'checkout',
    path: '/order',
    component: Checkout,

  },
  {
    name: 'catalog',
    path: '/',
    component: ProductsList,
  },
  {
    name: 'products-item',
    path: '/product/:id',
    component: Product,
  },
  {
    name: '404',
    path: '/:pathMatch(.*)',
    component: E404,
  },
  {
    name: 'Pay',
    path: '/pay',
    component: Pay,
  },

];

export default createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
});
