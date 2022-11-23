<template>
  <div class="character-view">
    <div class="container py-5">
      <button @click="router.go(-1)" class="btn btn-return text-white mb-4">
        <img
          width="24"
          height="24"
          src="@/assets/imgs/CardItem/arrow-white.png"
          alt="return"
        />
        Voltar
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
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
const route = useRoute();
const router = useRouter();
const id = route.params.id;
const store = useStore();

onMounted(() => {
  store.dispatch("getPerson", id);
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