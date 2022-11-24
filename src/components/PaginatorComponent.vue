<template>
  <div class="paginator-component d-flex justify-content-center">
    <button
      class="btn"
      :class="[havePrev ? 'disabled' : '']"
      @click="prev"
      :disabled="havePrev"
    >
      <img
        class="img-fluid prev"
        src="../assets/imgs/next-white.png"
        width="42"
        height="42"
        alt="paginator"
      />
    </button>
    <div class="number mx-3">
      <span>{{ props.page }}</span>
    </div>
    <button
      :class="[haveNext ? 'disabled' : '']"
      class="btn"
      @click="next"
      :disabled="haveNext"
    >
      <img
        class="img-fluid"
        src="../assets/imgs/next-white.png"
        width="42"
        height="42"
        alt="paginator"
      />
    </button>
  </div>
</template>
<script setup>
import { defineEmits, computed } from "vue";
const props = defineProps(["page", "pages"]);
const emit = defineEmits(["next", "prev"]);

function next() {
  emit("next");
}

function prev() {
  emit("prev");
}
const haveNext = computed(() => {
  if (props.pages > props.page) {
    return false;
  } else {
    return true;
  }
});
const havePrev = computed(() => {
  if (props.page == 1) {
    return true;
  } else {
    return false;
  }
});
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

  .btn {
    color: #fff;
    &:hover {
      color: rgb(0, 190, 149);
    }
    &.disabled {
      border: none;
      opacity: 0.2;
    }
    .prev{
      rotate: 180deg;
    }
  }
}
</style>