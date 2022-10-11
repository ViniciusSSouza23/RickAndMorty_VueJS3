<template>
  <div class="card-item-component">
    <div class="custom-card p-4">
      <div class="custom-header mx-auto text-center">
        <img class="img-fluid img" :src="item.props.image" :alt="item.props.name">
      </div>
      <div class="custom-card-body">
        
      </div>
    </div>
  </div>
</template>
<script setup>
  const item = defineProps(['props'])
</script>
<style lang="scss" scoped>
  .card-item-component{
    .custom-card{
      border-radius: 16px;
      background: #888888;
      .custom-header{
        background:transparent;
        .img{
          border-radius: 20px;
        }
      }
    }
  }
</style>
