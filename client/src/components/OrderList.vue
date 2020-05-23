<template lang="html">
  <div>

    <h2>Orders</h2>

    <hr>

    <order-data v-for="(order, index) in orders" :key="index" :order="order"></order-data>
  </div>
</template>

<script>

import { eventBus } from '../main';
import OrderData from './OrderData.vue'


export default {
  name: 'order-list',
  components: {
    'order-data': OrderData
  },
  props: ['orders']
}
</script>

<style lang="css" scoped>

</style>
