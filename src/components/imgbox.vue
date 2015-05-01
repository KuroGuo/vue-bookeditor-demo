<style>
.imgbox {
  position: absolute;
  background-color: #aaa;
  -webkit-transform-origin: left top;
          transform-origin: left top;
}
</style>

<template>
<div class="box imgbox" v-style="
  width: box.width + 'px',
  height: box.height + 'px',
  transform: 'translateZ(0) translate(' + box.x + 'px,' + box.y + 'px) rotate(' + box.rotation + 'deg)'
">
  <div v-show="selected" v-component="selection-handles" v-with="
    box: box,
    scaling: scaling
  "></div>
</div>
</template>

<script>
var BoxVue = require('./box')

module.exports = BoxVue.extend({})
</script>