<template>
  <div v-if="length === 0">
    <h2>Оформите заказ</h2>
    <hr />
    <p>После чего он отобразится здесь</p>
  </div>
  <div v-else>
    <h3>Заказ #1</h3>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Наименование</th>
          <th scope="col">Цена</th>
          <th scope="col">Количество</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in cart" :key="item.id">
          <th scope="row">{{ i + 1 }}</th>
          <td>{{ products.find((pr) => pr.id === item.id).title }}</td>
          <td>{{ products.find((pr) => pr.id === item.id).price }} $</td>
          <td>{{ item.cnt }}</td>
        </tr>
      </tbody>
    </table>
    <h4>К оплате: {{ total }} $</h4>
    <button type="button" class="btn btn-success" @click="payClick">
      Оплатить
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    payClick() {
      this.$store.dispatch('cart/reset');
      this.$router.push('/pay')

    },
  },
  computed: {
    ...mapGetters("cart", {
      cart: "items",
      length: "length",
      total: "total",
    }),
    ...mapGetters("products", { products: "all" }),
  },
};
</script>
