<template>
  <div class="paginator-component d-flex justify-content-center">
    <button  class="btn" @click="prev">Prev</button>
    <div class="number mx-3">
      <span>{{ props.page }}</span>
    </div>
    <button class="btn" @click="next">Next</button>
  </div>
</template>
<script setup>
import { defineEmits } from "vue";
const props = defineProps(["page"]);
const emit = defineEmits(["next", "prev"]);

function next() {
  emit("next");
}

function prev() {
  emit("prev");
}
</script>
<style lang="scss" scoped>
.paginator-component {
  .number {
    background-color: #8a8a8c;
    padding: 8px 16px 8px 16px;
    border-radius: 4px;
    span {
      font-size: 18px;
      color: #fff;
    }
  }

  .btn{
    color: #fff;
    &:hover{
      color: aquamarine;
    }
  }
}
</style>