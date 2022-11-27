<template>
  <div class="search-view">
    <loading
      color="#00BE95"
      loader="bars"
      opacity="0.9"
      background-color="#000"
      v-model:active="isLoading"
      :is-full-page="true"
    />
    <div class="header">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="form-group position-relative">
              <input
                v-model="search"
                class="form-control mt"
                type="text"
                placeholder="Search"
              />
              <button v-if="search.length" class="position-absolute button-close">
                <img width="32" height="32" src="../assets/imgs/icon-close.png" alt="Icon">
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="container py-5">
        <div v-if="error.length" class="empty">
          <em class="py-5">{{ error }} "{{ search }}"</em>
        </div>
        <div v-else class="row">
          <em v-if="search.length > 0">
            Resultado encontrados para: {{ search }}
          </em>
          <div class="col-lg-3 mb-4 pt-4" v-for="item in items" :key="item">
            <card-item class="size" :props="item" :isRoute="true" />
          </div>
        </div>
        <div class="mx-auto w-100">
          <paginator-component
            @next="nextPage"
            @prev="prevPage"
            :page="page"
            :pages="count"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { ref, watchEffect, computed, onMounted } from "vue";
import CardItem from "@/components/characters/CardItem.vue";
import PaginatorComponent from "@/components/PaginatorComponent.vue";
import { useRoute, useRouter } from "vue-router";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

const store = useStore();
const route = useRoute();
const router = useRouter();
const error = ref("");
const page = ref(route.query.page || 1);
const search = ref(route.query.s || "");
const isLoading = ref(false);

const items = computed(() => {
  return store.state.items;
});
const count = computed(() => {
  return store.state.count;
});

watchEffect(() => {
  store
    .dispatch("search", { name: search.value, page: page.value })
    .then()
    .catch(() => {
      error.value = "nenhum item encontrado para:";
    });
});

onMounted(() => {
  isLoading.value = true;
  store
    .dispatch("search", { name: search.value, page: page.value })
    .finally(() => {
      isLoading.value = false;
    });
});

//next
function nextPage() {
  if (count.value > page.value) {
    isLoading.value = true;
    page.value++;
    store
      .dispatch("search", { name: search.value, page: page.value })
      .finally(() => {
        setTimeout(() => {
          isLoading.value = false;
        }, 1000);
      });
    router.push({ ...route, query: { s: search.value, page: page.value } });
  }
}

//prev
function prevPage() {
  if (page.value > 1) {
    isLoading.value = true;
    page.value--;
    store
      .dispatch("search", { name: search.value, page: page.value })
      .finally(() => {
        setTimeout(() => {
          isLoading.value = false;
        }, 1000);
      });
    router.push({ ...route, query: { s: search.value, page: page.value } });
  }
}
</script>
<style lang="scss" scoped>
.search-view {
  .header {
    min-height: 250px;
    background-image: url(../assets/imgs/portal-bg.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    .mt {
      margin-top: 120px;
    }

    .button-close{
      right: 0;
      top: 0;
      background: transparent;
      border: none;
    }
  }
  .body {
    .empty {
      height: 40vh;
    }
  }
}
</style>