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
        <div class="custom-card-body mt-4">
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
        <div class="d-flex align-items-start">
          <img width="32" height="32" src="@/assets/imgs/CardItem/gender.png" alt="Gender">
          <p>{{ item?.props?.gender }}</p>
        </div>
        <p>Species:{{ item?.props?.species }}</p>
        <p>Status:{{ item?.props?.status }}</p>
        <div class="d-flex align-items-start">
          <img class="me-1" width="24" height="24" src="@/assets/imgs/CardItem/location.png" alt="Earth">
          <p>{{item?.props?.origin?.name}}</p>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script setup>
const item = defineProps(["props", "isRoute"]);
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
      h4 {
        font-family: "Roboto", sans-serif;
        color: #fff;
      }
      p{
        color: #fff;
        font-size: 18px;
      }
    }
  }
}
</style>
