<template>
  <div class="character-view">
    <loading
      color="#00BE95"
      loader="bars"
      opacity="0.9"
      background-color="#000"
      v-model:active="isLoading"
      :is-full-page="true"
    />
    <div class="container py-5">
      <button @click="router.go(-1)" class="btn btn-return text-white mb-4">
        <img
          width="24"
          height="24"
          src="@/assets/imgs/CardItem/arrow-white.png"
          alt="return"
        />
      </button>
      <div class="row justify-content-center">
        <div class="col-lg-7">
          <card-item :props="person" :isRoute="false" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import CardItem from "@/components/characters/CardItem.vue";
import { useRoute, useRouter } from "vue-router";
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
const route = useRoute();
const router = useRouter();
const id = route.params.id;
const store = useStore();
const isLoading = ref(false);

onMounted(() => {
  isLoading.value = true;
  store.dispatch("getPerson", id).finally(() => {
    setTimeout(() => {
      isLoading.value = false;
    }, 500);
  });
});

const person = computed(() => {
  return store.state.person;
});
</script>
<style lang="scss" scoped>
.character-view {
  .btn-return {
    background-color: transparent;
    color: #000;
    border: none;
  }
}
</style>