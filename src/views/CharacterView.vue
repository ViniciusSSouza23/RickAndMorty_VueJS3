<template>
  <div class="character-view">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <card-item :props="person" :isRoute="false"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import CardItem from "@/components/characters/CardItem.vue";
import { useRoute } from "vue-router";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
const route = useRoute();
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
 
}
</style>