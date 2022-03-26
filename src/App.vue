<template>
  <div>
    <header>
      <div class="container">
        <div class="row">
          <div class="col col-sm-9">
            <h2>Интернет-магазин</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="currentColor"
              class="bi bi-phone"
              viewBox="0 0 16 16"
            >
              <path
                d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"
              />
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
          </div>
          <div class="col col-sm-3">
            <button
              type="button"
              class="btn btn-primary"
              @click="$router.push('/cart')"
              :disabled="cartCnt === 0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-basket3-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z"
                />
              </svg>
              <span v-if="cartCnt > 0">{{ cartCnt }}</span>
            </button>
          </div>
        </div>
        <hr />
      </div>
    </header>
    <section>
      <div class="container">
        <div class="row">
          <div class="col col-sm-3 menu">
            <ul class="list-group">
              <router-link
                v-for="item in menu"
                :key="item.route"
                :to="{ name: item.route }"
                v-slot="{ route, isExactActive, navigate }"
                :custom="true"
              >
                <li
                  class="list-group-item"
                  :class="isExactActive ? 'active' : ''"
                >
                  <a :href="route.fullPath" @click="navigate">{{
                    item.title
                  }}</a>
                </li>
              </router-link>
            </ul>
          </div>
          <div class="col col-sm-9">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    menu: [
      { route: "catalog", title: "Каталог" },
      { route: "cart", title: "Корзина" },
      { route: "checkout", title: "Мои заказы" },
    ],
  }),
  computed: {
    ...mapGetters("cart", { cartCnt: "itemCntSum" }),
    ...mapGetters("cart", { total: "total" }),
  },
};
</script>

<style>
.menu {
  border-right: 1px solid #ddd;
}

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
</style>