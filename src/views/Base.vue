<template>
  <div v-if="cart.length === 0">
    <h2>Оформите заказ</h2>
    <p>После чего он отобразится здесь</p>
  </div>
  <div v-else>
    <h3>Заказ #1</h3>
    <table class="table bg-white rounded">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Наименование
          </th>
          <th scope="col">
            Цена
          </th>
          <th scope="col">
            Количество
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, i) in cart"
          :key="item.id"
        >
          <th scope="row">
            {{ i + 1 }}
          </th>
          <td>{{ item.title }}</td>
          <td>{{ item.price }} $</td>
          <td>{{ item.count }}</td>
        </tr>
      </tbody>
    </table>
    <h5>Итого: {{ total }} $</h5>
    <button
      type="button"
      class="btn btn-success"
      @click="payClick"
    >
      Оплатить
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('cart', {
      cart: 'itemsCart',
      total: 'total',
    }),
    ...mapGetters('products', { products: 'all' }),
  },
  methods: {
    payClick() {
      this.$store.dispatch('cart/reset');
      this.$router.push({ name: 'Pay' });
    },
  },
};
</script>
