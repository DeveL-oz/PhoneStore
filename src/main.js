import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import router from './router';


let app = createApp(App);
app.use(store);
app.use(router);

store.dispatch('products/loadItems').then(() => {
	app.mount('#app');
})
store.dispatch('cart/load');

import 'bootstrap/dist/css/bootstrap.css'