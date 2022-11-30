<template>
  <div class="container py-3">
    <products-list :items='$store.getters.getCatalog' />
  </div>
</template>

<script>
import ProductsList from '@/components/ProductsList'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
    }
  },
  components: {
    ProductsList
  },
  methods: {
    ...mapActions({
      fetchProducts: 'fetchProducts'
    })
  },
  mounted () {
    this.fetchProducts()
  }
}
</script>

<style scoped>

</style>
