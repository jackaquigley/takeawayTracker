<template lang="html">
  <div id="app">
    <home />
  </div>
</template>

<script>

import {eventBus} from '@/main.js';
import TakeawayService from './services/TakeawayService.js'
import Home from './components/Home.vue';


export default {
  name: 'App',
components: {
  'home': Home
},
data() {
  return {
    orders: []
  };
},
mounted() {
  this.fetchOrders();
},
methods: {
  fetchOrders() {
    TakeawayService.getOrders()
    .then(orders => this.orders = orders)
  }
}
}

</script>

<style lang="css" scoped>
#aside {
  
}
</style>
