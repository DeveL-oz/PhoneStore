export default {
  namespaced: true,
  state: {
    products: [],
  },
  getters: {
    items: (state) => state.products,
    itemCount: (state) => (id) => state.products.find((item) => item.id === id).cnt,

    total: (state, _getters, _rootState, rootGetters) => state.products.reduce((total, item) => total += rootGetters['products/getItem'](item.id).price * item.cnt, 0),

    has: (state) => (id) => state.products.some((pr) => pr.id === id),
    itemCountSum: (state) => state.products.reduce((s, i) => s += i.cnt, 0),

  },
  mutations: {
    loadCart(state, items) {
      state.products = items;
    },
    add(state, id) {
      state.products.push({ id, cnt: 1 });
    },
    remove(state, id) {
      state.products = state.products.filter((pr) => pr.id !== id);
    },
    increase(state, id) {
      state.products.find((pr) => pr.id == id).cnt++;
    },
    decrease(state, id) {
      state.products.find((pr) => pr.id == id).cnt--;
    },
    updateCart(state) {
      localStorage.setItem('items', JSON.stringify(state.products));
    },
    resetCart(state) {
      state.products = [];
    },

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
      store.commit('increase', id);
      store.commit('updateCart');
    },
    decrease(store, id) {
      if (store.getters.itemCnt(id) > 1) {
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
