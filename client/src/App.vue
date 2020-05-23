<template lang="html">
  <div class="list">
    <nav id="navStyle">
      <p>Menu</p>
    </nav>

    <hr>

    <span id="orderData">
      <order-list :orders="orders"></order-list>
    </span>

    <span id="takeawayData">
    <p>Takeaway Data</p>
  </span>

    <span id="newForms" >
      <p>Form</p>
    </span>
  </div>
</template>

<script>

import {eventBus} from '@/main.js';
import TakeawayService from './services/TakeawayService.js'
import OrderList from './components/OrderList.vue';


export default {
  name: 'App',
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
},
components: {
  'order-list': OrderList
}
}

</script>

<style lang="css" scoped>
#newForms {
  width: 30%;
    padding-left: 15px;
    margin-right: 15px;
    text-align: center;
    float: right;
    background-color: lightgray;
}

#takeawayData {
  width: 65%;
    padding-left: 15px;
    margin-left: 15px;
    text-align: center;
    float: left;
    background-color: lightgray;
}

#orderData {
  width: 65%;
    padding-left: 15px;
    margin-left: 15px;
    text-align: center;
    float: left;
    background-color: lightgray;
    margin: 15px;
}

#navStyle {
  text-align: center;
}

hr {
  color: lightgray;
}

</style>
