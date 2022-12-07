<template>
  <div class="card-item-component">
    <router-link
      v-if="item.isRoute"
      :to="{ name: 'person', params: { id: item?.props?.id } }"
    >
      <div class="custom-card p-4">
        <div class="custom-header mx-auto text-center">
          <img
            class="img-fluid img"
            :src="item.props.image"
            :alt="item.props.name"
          />
        </div>
        <div :class="[item.isRoute ? 'isRoute' : '']" class="custom-card-body mt-4">
          <h4 class="text-center">{{ item.props.name }}</h4>
        </div>
      </div>
    </router-link>
    <div class="custom-card p-4" v-else>
      <div class="custom-header mx-auto text-center">
        <img
          class="img-fluid img"
          :src="item.props.image"
          :alt="item.props.name"
        />
      </div>
      <div class="custom-card-body mt-4">
        <h4 class="text-center">
          {{ item?.props?.name }}
        </h4>
        <hr class="mx-auto" style="color: black; width: 50%" />

        <div class="d-flex flex-lg-row flex-column justify-content-lg-center mt-4 line-border align-items-lg-center">
          <div class="d-flex flex-column flex-lg-row align-items-start">
            <div class="d-flex align-items-start mb-lg-0 mb-3 mx-lg-4">
              <img
                class="me-1"
                width="32"
                height="32"
                src="@/assets/imgs/CardItem/gender.png"
                alt="Gender"
              />
              <p>{{ item?.props?.gender }}</p>
            </div>
            <div class="d-flex mb-lg-0 mb-3">
              <img
                class="me-1"
                width="28"
                height="28"
                src="@/assets/imgs/CardItem/alien.png"
                alt="species"
              />
              <p>{{ item?.props?.species }}</p>
            </div>
          </div>
          <div class="d-flex flex-column flex-lg-row align-items-center">
            <div class="d-flex align-items-start mx-lg-4 mb-lg-0 mb-3 mt-lg-1">
              <div class="status mx-lg-2 mx-1 me-2 " :class="item?.props?.status"></div>
              <p class="pb-0 mb-0 mt-n1">{{ item?.props?.status }}</p>
            </div>
            <div class="d-flex align-items-start">
              <img
                class="me-1"
                width="22"
                height="22"
                src="@/assets/imgs/CardItem/location.png"
                alt="Earth"
              />
              <p>{{ origin }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
const item = defineProps(["props", "isRoute"]);
const origin = computed(() => {
  if (item?.props?.origin?.name.includes("Replacement")) {
    return "Earth";
  } else {
    return item?.props?.origin?.name;
  }
});
</script>
<style lang="scss" scoped>
.card-item-component {
  position: relative;
  a {
    text-decoration: none;
  }
  .custom-card {
    border-radius: 16px;
    background: #888888;
    .custom-header {
      background: transparent;
      .img {
        border-radius: 20px;
      }
    }
    .custom-card-body {
      //display: flex;
      &.isRoute{
        height: 50px;
      }
      h4 {
        font-family: "Roboto", sans-serif;
        color: #fff;
      }
      p {
        color: #fff;
        font-size: 18px;
        margin-bottom: 0px;
        padding-bottom: 0px;
      }
      .status {
        height: 18px;
        width: 18px;
        border-radius: 50%;
        &.Alive {
          background-color: green;
        }
        &.Dead {
          background-color: red;
        }
        &.unknown {
          background-color: whitesmoke;
        }
      }

      .line-border {
        border: 2px solid #000;
        padding: 16px;
      }
    }
  }
}
</style>
