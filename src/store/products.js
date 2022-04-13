import { loadProducts } from '../api/server.js';

export default {
  namespaced: true,
  state: {
    items: [],
  },
  getters: {
    all: (state) => state.items,
    getItem: (state) => (id) => state.items.find((item) => item.id === id),
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    },

  },
  actions: {
    async loadItems(store) {
      const items = await loadProducts();
      store.commit('setItems', items);
    },

  },
};
