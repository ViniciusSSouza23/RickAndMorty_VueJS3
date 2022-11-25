<template>
  <div class="characters-view py-5">
    <loading
      color="#00BE95"
      loader="bars"
      opacity="0.9"
      background-color="#000"
      v-model:active="isLoading"
      :is-full-page="true"
    />
    <div class="container">
      <h2 class="text-center mb-5">All characters</h2>
      <div class="row">
        <div v-for="(item, i) in items" :key="i" class="col-lg-3 mb-4">
          <card-item :props="item" :isRoute="true" />
        </div>
      </div>
      <div class="mx-auto w-100">
        <paginator-component
          @next="nextPage"
          @prev="prevPage"
          :page="page"
          :pages="pages"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { onMounted, computed, ref } from "vue";
import CardItem from "@/components/characters/CardItem.vue";
import PaginatorComponent from "@/components/PaginatorComponent.vue";
import { useRouter, useRoute } from "vue-router";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
const router = useRouter();
const route = useRoute();
const store = useStore();
const page = ref(route.query.page || 1);
const isLoading = ref(false);

onMounted(() => {
  isLoading.value = true;
  store.dispatch("getAll", page.value).finally(() => {
    isLoading.value = false;
  });
});
const items = computed(() => {
  return store.state.items;
});
const pages = computed(() => {
  return store.state.count;
});

//next
function nextPage() {
  isLoading.value = true;
  page.value++;
  store.dispatch("getAll", page.value).finally(() => {
    setTimeout(() => {
      isLoading.value = false;
    }, 1500);
  });
  router.push({ ...route, query: { page: page.value } });
}

//prev
function prevPage() {
  if (page.value > 1) {
    isLoading.value = true;
    page.value--;
    store.dispatch("getAll", page.value).finally(() => {
      setTimeout(() => {
        isLoading.value = false;
      }, 1500);
    });
    router.push({ ...route, query: { page: page.value } });
  }
}
</script>
