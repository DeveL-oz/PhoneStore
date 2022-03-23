import { createRouter, createWebHistory } from 'vue-router';

import Cart from '@/views/Cart';
import Checkout from '@/views/Base';
import ProductsList from '@/views/ProductsList';
import Product from '@/views/Product';

import E404 from '@/views/E404'
import Pay from '@/views/Pay'

let routes = [
	{
		name: 'cart',
		path: '/cart',
		component: Cart
	},
	{
		name: 'checkout',
		path: '/order',
		component: Checkout,
		
	},
	{
		name: 'catalog',
		path: '/',
		component: ProductsList
	},
	{
		name: 'products-item',
		path: '/product/:id',
		component: Product
	},
	{
		name: '404',
		path: '/:pathMatch(.*)',
		component: E404
	},
	{
		name: 'Pay',
		path: '/pay',
		component: Pay
	}


];

export default createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL)
});