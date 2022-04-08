<template>
  <div>
    <h2>Корзина:</h2>
  </div>
  <div v-if="lengthCart === 0"><h3>Добавьте товар в корзину</h3></div>
  <table class="table bg-white rounded" v-else>
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Наименование</th>
        <th scope="col">Цена</th>
        <th scope="col">Количество</th>
        <th scope="col"></th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) in cart" :key="item.id">
        <th scope="row">{{ i + 1 }}</th>
        <td>{{ products.find((pr) => pr.id === item.id).title }}</td>
        <td>{{ products.find((pr) => pr.id === item.id).price }} $</td>
        <td>{{ item.cnt }}</td>
        <td>
          <button class="btn btn-warning" @click="decrease(item.id)">-1</button>
          <button class="btn btn-success" @click="increase(item.id)">+1</button>
        </td>
        <td>
          <button class="btn btn-danger" @click="remove(item.id)">
            Удалить
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <div v-if="lengthCart != 0">
    <h5>Итого: {{ totalCart }} $</h5>
    <router-link
      :to="{ name: 'checkout' }"
      class="btn btn-success"
      @click="activeOrder"
      >Оформить заказ</router-link
    >
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("cart", { cart: "items", lengthCart: "length", totalCart: "total" }),
    ...mapGetters("products", { products: "all" }),
  },
  methods: {
    ...mapActions("cart", ["increase", "decrease", "remove", "activeOrder"]),
  },
};
</script>