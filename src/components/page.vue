<template>
<svg class="page" v-attr="
  width: page.width * scaling,
  height: page.height * scaling,
  viewBox: '0 0 ' + page.width + ' ' + page.height
">
  <g v-component="{{box.type}}" v-repeat="box: page.boxes" v-with="
    scaling: scaling,
    selectedBoxes: selectedBoxes,
    editingBox: editingBox
  "></g>
</svg>
</template>

<script>
var Vue = require('vue')

module.exports = {
  replace: true,
  components: {
    imgbox: require('./imgbox.vue'),
    textbox: require('./textbox.vue')
  }
}
</script>x