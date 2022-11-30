<template>
  <div class="row row-cols-3 justify-content-between">
    <items-item v-for="item in items" :item="item" :key="item.id"/>
  </div>
</template>

<script>
import ItemsItem from '@/components/ItemsItem'
export default {
  data () {
    return {
    }
  },
  props: {
    items: Array
  },
  components: {
    ItemsItem
  }
}
</script>

<style scoped>

</style>
