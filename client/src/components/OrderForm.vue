<template lang="html">
  <div>
    <form id="orderForm" v-on:submit.prevent="handleSubmit">

      <h2>Add an Order</h2>

      <label for="">Time:   </label>
      <input type="text" id="time" v-model="time">

      <br>

      <label for="">Date: </label>
      <input type="text" v-model="date">

      <br>

      <label for="">Rating (Out of 10): </label>
      <input type="number" v-model="rating" max=10 min=1>

      <br>

      <label for="">Takeaway: </label>
      <select>
        <option v-model="takeawayName" value="Test">Test</option>
      </select>

      <br>

      <label for="">Time: </label>
      <select class="" name="">
        <option value="early">Early</option>
        <option value="onTime">On Time</option>
        <option value="late">Late</option>
        <option value="veryLate">Very Late</option>
      </select>

      <br>

      <input type="submit">

    </form>
  </div>
</template>

<script>

import { eventBus } from '../main.js'

export default {
  name: 'order-form',
  data() {
    return {
      date: '',
      time: '',
      rating: '',
      takeawayName: '',
      onTime: ''
    }
  },
  props: ['takeaway'],
  methods: {
    handleSubmit() {
      const payload = {
        date: this.date,
        time: this.time,
        rating: this.rating,
        takeawayName: this.takeawayName,
        onTime: this.onTime
      }

      eventBus.$emit('submit-order', payload)
    }
  }
}
</script>

<style lang="css" scoped>

input {
  margin: 6px;
}

select {
  margin: 6px;
}
</style>
