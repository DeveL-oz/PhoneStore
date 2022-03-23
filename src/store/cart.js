export default {
	namespaced: true,
	state: {
		products: [],
	},
	getters: {
		items: state => state.products,
		itemCntSum: state => state.products.reduce((s, i) => s = s + i.cnt, 0),
		length: state => state.products.length,
		itemCnt: state => id => state.products.find(item => item.id === id).cnt,

		total(state, _getters, _rootState, rootGetters) {
			let total = 0;
			state.products.forEach(item => total += rootGetters['products/getItem'](item.id).price * item.cnt)
			return total;
		},
		has: state => id => state.products.some(pr => pr.id === id)

	},
	mutations: {
		loadCart(state, items) {
			state.products = items;
		},
		add(state, id) {
			state.products.push({ id, cnt: 1 });

		},
		remove(state, id) {
			state.products = state.products.filter(pr => pr.id !== id);
		},
		increase(state, id) {
			state.products.find(pr => pr.id == id).cnt++
		},
		decrease(state, id) {
			state.products.find(pr => pr.id == id).cnt--
		},
		updateCart(state) {
			localStorage.setItem('items', JSON.stringify(state.products))
		},
		resetCart(state) {
			state.products = [];
		}


	},
	actions: {
		add(store, id) {
			if (!store.getters.has(id)) {
				store.commit('add', id);
				store.commit('updateCart');

			}
		},
		remove(store, id) {
			if (store.getters.has(id)) {
				store.commit('remove', id);
				store.commit('updateCart');
			}
		},

		increase(store, id) {
			store.commit('increase', id)
			store.commit('updateCart')
		},
		decrease(store, id) {
			if (store.getters.itemCnt(id) > 1) {
				store.commit('decrease', id)
				store.commit('updateCart')
			}
		},
		load(store) {
			let items = JSON.parse(localStorage.getItem('items'));
			store.commit('loadCart', items);
		},
		reset(store) {
			store.commit('resetCart');
			store.commit('updateCart');

		}


	}
}