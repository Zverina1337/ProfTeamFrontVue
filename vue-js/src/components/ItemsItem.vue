<template>
  <div class="card mt-5">
    <div class="card-body">
      <h5 class="card-title">{{ item.name }}</h5>
      <p class="card-text">{{ item.description }}</p>
      <p class="card-text">{{ item.price }}</p>
      <a href="#" class="btn btn-primary">Добавить в корзину</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    item: Object
  }
}
</script>

<style scoped>
  .card{
    width: 18rem;
  }
</style>
