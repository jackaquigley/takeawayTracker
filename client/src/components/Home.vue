<template lang="html">
  <div class="list">
    <nav id="navStyle">
      <p>Menu</p>
    </nav>

    <hr>

    <div id="orderData">
      <p>Order Data</p>
    </div>

    <div id="takeawayData">
    <p>Takeaway Data</p>
  </div>

    <div id="newForms" >
      <p>Form</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
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
