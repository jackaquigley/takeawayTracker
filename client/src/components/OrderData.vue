<template lang="html">
<div id="orderDetail">

<h4>{{order.takeaway}}</h4>

<p>{{order.time}} {{order. date}}</p>

<p>Rating: {{order.rating}}</p>

<p>{{order.on_time}}</p>

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
  margin: 6px;
}
</style>
