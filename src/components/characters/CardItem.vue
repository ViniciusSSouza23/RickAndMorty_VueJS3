<template>
  <div class="card-item-component">
    <router-link :to="{ name: 'person', params: { id: item?.props?.id } }">
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
          <!-- <p>{{item.props.id}}</p> -->
        </div>
      </div>
    </router-link>
  </div>
</template>
<script setup>
const item = defineProps(["props"]);
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
    }
  }
}
</style>
