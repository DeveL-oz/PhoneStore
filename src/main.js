import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';


let app = createApp(App);
app.use(store);
app.use(router);
store.dispatch('cart/load');
store.dispatch('products/loadItems').then(() => {
	app.mount('#app');
})


