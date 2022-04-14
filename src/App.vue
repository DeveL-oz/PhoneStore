<template>
  <div>
    <header>
      <div class="container">
        <div class="row">
          <div class="col col-sm-11 mb-4">
            <h2>Интернет-магазин</h2>
            <icon-logo></icon-logo>
          </div>
          <div class="col col-sm-1 pt-5">
            <button
              type="button"
              class="btn"
              :disabled="cartCount === 0"
              @click="$router.push('/cart')"
            >
            <icon-cart></icon-cart>
              <span v-if="cartCount > 0">{{ cartCount }}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
    <section>
      <div class="container">
        <div class="line">
        <div class="row">
          <div class="col col-sm-3 menu">
            <ul class="list-group">
              <router-link
                v-for="item in menu"
                :key="item.route"
                v-slot="{ route, isExactActive, navigate }"
                :to="{ name: item.route }"
                :custom="true"
              >
                <li
                  class="list-group-item"
                  :class="{ 'active': isExactActive }"
                >
                  <a
                    :href="route.fullPath"
                    @click="navigate"
                  >{{
                    item.title
                  }}</a>
                </li>
              </router-link>
            </ul>
          </div>
          <div class="col col-sm-9 custom">
            <router-view />
          </div>
        </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="container">
        <div class="row justify-content-center">
          &copy; polyachenkov
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import IconLogo from './components/icons/IconLogo.vue';
import IconCart from './components/icons/IconCart.vue';

export default {
  components: {
    IconLogo, IconCart,
  },
  data: () => ({
    menu: [
      { route: 'catalog', title: 'Каталог' },
      { route: 'cart', title: 'Корзина' },
      { route: 'checkout', title: 'Мои заказы' },
    ],
  }),
  computed: {
    ...mapGetters('cart', { cartCount: 'itemCountSum' }),
    ...mapGetters('cart', { total: 'total' }),
  },
};
</script>

<style>
.list-group-item {
  transition: background 0.3s, color 0.3s;
}

.list-group-item a {
  text-decoration: none;
  display: block;
}

.list-group-item.active a {
  color: inherit;
}

.custom {
  min-height: 650px;
}

div {
  font-family: "Ubuntu", sans-serif;
}

.line{
  border-top: solid 1px rgb(234, 217, 217);
}

</style>
