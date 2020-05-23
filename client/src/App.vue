<template lang="html">
<div>
  <nav id="navStyle">
    <p>Menu</p>
  </nav>

  <div id="mainPageWrapper">

    <hr>

    <div id="orderData">
      <order-list :orders="orders"></order-list>
    </div>

    <div id="takeawayData">
    <p>Takeaway Data</p>
  </div>

    <div id="newForms" >
    <order-form></order-form>
    </div>

  </div>
</div>
</div>
</template>

<script>

import {eventBus} from '@/main.js';
import TakeawayService from './services/TakeawayService.js'
import OrderList from './components/OrderList.vue';
import OrderForm from './components/OrderForm.vue';


export default {
  name: 'App',
data() {
  return {
    orders: [],
    takeaways: []
  };
},
mounted() {
  this.fetchOrders();

  eventBus.$on('submit-order', payload => {
    TakeawayService.postOrder(payload)
    .then(order => this.orders.push(order))
  })
},
methods: {
  fetchOrders() {
    TakeawayService.getOrders()
    .then(orders => this.orders = orders)
  }
},
components: {
  'order-list': OrderList, 'order-form': OrderForm
}
}

</script>

<style lang="css" scoped>
#newForms {
    width: 30%;
    margin: 15px;
    text-align: center;
    float: right;
    background-color: lightgray;
    float: left;
}

#takeawayData {
    width: 60%;
    margin-left: 15px;
    text-align: center;
    float: left;
    float: right;
    margin: 15px;
    background-color: lightgray;
}

#orderData {
    width: 60%;
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

#mainPageWrapper {
 display: flex
}
</style>
