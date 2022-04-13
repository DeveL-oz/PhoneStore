<template>
  <div>
    <router-link :to="{ name: 'catalog' }">
      Назад в каталог
    </router-link>
    <div v-if="!getProduct">
      <h5>Такого товара не существует!</h5>
    </div>
    <div v-else>
      <hr>
      <div class="bg-white rounded">
        <h1>{{ getProduct.title }}</h1>
        <img
          :src="getProduct.img"
          alt="img"
          width="150"
          height="150"
          class="mb-3"
        >
        <p>{{ getProduct.info }}</p>
        <p> Цена: {{ getProduct.price }} $</p>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('products', { product: 'getItem' }),
    getProduct() {
      return this.product(+(this.$route.params.id));
    },
  },

  methods: {},
};
</script>
