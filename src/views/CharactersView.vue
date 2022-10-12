<template>
  <div class="characters-view py-5">
    <div class="container">
      <h2 class="text-center mb-5">All characters</h2>
      <div class="row">
        <div v-for="(item, i) in items" :key="i" class="col-lg-4  mb-4">
          <card-item :props="item" :isRoute="true" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { onMounted, computed } from "vue";
import CardItem from "@/components/characters/CardItem.vue";

const store = useStore();

onMounted(() => {
  store.dispatch("getAll");
});
const items = computed(() => {
  return store.state.items;
});
</script>
