<template>
<svg class="page" v-attr="
  width: page.width,
  height: page.height
" v-style="transform: 'scale(' + scaling + ')'">
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
  data: function () {
    return {
      translateZ: true
    }
  },
  watch: {
    scaling: function () {
      var vue = this
      vue.translateZ = false
      setTimeout(function () {
        vue.translateZ = true  
      })
    }
  },
  components: {
    imgbox: require('./imgbox.vue'),
    textbox: require('./textbox.vue')
  }
}
</script>