export default {
  namespaced: true,
  state: {
    products: [],
  },
  getters: {
    itemsCart: (state) => state.products,
    itemCount: (state) => (id) => state.products.find((item) => item.id === id).count,
    total: (state) => state.products.reduce((total, item) => total + item.price * item.count, 0),
    has: (state) => (id) => state.products.some((item) => item.id === id),
    itemCountSum: (state) => state.products.reduce((s, i) => s + i.count, 0),

  },
  mutations: {
    loadCart(state, items) {
      state.products = items;
    },
    add(state, product) {
      state.products.push({ ...product, count: 1 });
    },
    remove(state, id) {
      state.products = state.products.filter((pr) => pr.id !== id);
    },
    increase(state, id) {
      state.products.find((pr) => pr.id === id).count += 1;
    },
    decrease(state, id) {
      state.products.find((pr) => pr.id === id).count -= 1;
    },
    updateCart(state) {
      localStorage.setItem('items', JSON.stringify(state.products));
    },
    resetCart(state) {
      state.products = [];
    },

  },
  actions: {
    add(store, pr) {
      if (!store.getters.has(pr.id)) {
        store.commit('add', pr);
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
      store.commit('increase', id);
      store.commit('updateCart');
    },
    decrease(store, id) {
      if (store.getters.itemCount(id) > 1) {
        store.commit('decrease', id);
        store.commit('updateCart');
      }
    },
    load(store) {
      let items = [];
      const itemsStorage = JSON.parse(localStorage.getItem('items'));
      if (itemsStorage) items = itemsStorage;
      store.commit('loadCart', items);
    },
    reset(store) {
      store.commit('resetCart');
      store.commit('updateCart');
    },

  },
};
