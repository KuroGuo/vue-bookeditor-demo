<style>
.stage {
  width: 400px;
  height: 400px;
  box-shadow: 0 1px 6px #aaa;
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;
}

.stage .imgbox {
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: #aaa;
}
</style>

<template>
<div class="stage">
  <div v-component="{{type}}" v-repeat="page.boxes"></div>
</div>
</template>

<script>
module.exports = {
  components: {
    imgbox: require('../components/imgbox.vue')
  }
}
</script>