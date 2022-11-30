<template>
  <div class="container">
    <items-list :items='$store.getters.getCatalog'/>
  </div>
</template>

<script>
import ItemsList from '@/components/ItemsList'

export default {
  data () {
    return {
    }
  },
  components: {
    ItemsList
  }
}
</script>

<style scoped>

</style>
