<template>
  <div>
    <h2>Корзина:</h2>
  </div>
  <div v-if="cart.length === 0">
    <h5>Добавьте товар в корзину</h5>
  </div>
  <table
    v-else
    class="table bg-white rounded"
  >
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
        <th scope="col" />
        <th scope="col" />
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
        <td>
          <button
            class="btn btn-warning"
            @click="decrease(item.id)"
          >
            -1
          </button>
          <button
            class="btn btn-success"
            @click="increase(item.id)"
          >
            +1
          </button>
        </td>
        <td>
          <button
            class="btn btn-danger"
            @click="remove(item.id)"
          >
            Удалить
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <div v-if="cart.length != 0">
    <h5>Итого: {{ totalCart }} $</h5>
    <router-link
      :to="{ name: 'checkout' }"
      class="btn btn-success"
      @click="activeOrder"
    >
      Оформить заказ
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('cart', { cart: 'itemsCart', totalCart: 'total' }),
    ...mapGetters('products', { products: 'all' }),
  },
  methods: {
    ...mapActions('cart', ['increase', 'decrease', 'remove', 'activeOrder']),
  },
};
</script>
