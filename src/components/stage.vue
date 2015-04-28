<style>
.page {
  box-shadow: 0 1px 6px #aaa;
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;
  -webkit-transform-origin: left top;
          transform-origin: left top;
}
</style>

<template>
<div class="stage">
  <div class="page" v-style="width: page.width + 'px', height: page.height + 'px', transform: 'scale(' + scaling + ')'">
    <div v-component="{{box.type}}" v-repeat="box: page.boxes" v-with="displayScaling: scaling"></div>
  </div>
</div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      scaling: 0.45
    }
  },
  components: {
    imgbox: require('../components/imgbox.vue')
  }
}
</script>