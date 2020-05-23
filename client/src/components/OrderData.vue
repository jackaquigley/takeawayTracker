<template lang="html">
<div id="orderDetail">

<p>{{order.takeawayName}}</p>

<p>{{order.time}} {{order. date}}</p>

<p>Rating: {{order.rating}}</p>

<p>{{order.on_time}}</p>

<button type="button" name="button">Delete Order</button>

</div>
</template>

<script>

import { eventBus } from '../main'

export default {
  name: 'order-data',
  props: ['order']
}
</script>

<style lang="css" scoped>
#orderDetail {
  border: black 1px solid;
  width: 20%;
  margin: 1%;
  font-size: 12px;
}
</style>
