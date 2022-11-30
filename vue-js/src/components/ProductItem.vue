<template>
  <div class="col">
    <div class="card mb-4 rounded-3 shadow-sm w-auto" style="height: 400px">
      <div class="card-header py-3">
        <h4 class="my-0 fw-normal">{{ item.name }}</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">{{ item.price }} р.</h1>
        <p>{{ item.description }}</p>
        <button type="button" class="w-100 btn btn-lg btn-outline-success">Добавить в корзину</button>
      </div>
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
