<style>
.imgbox {
  position: absolute;
  background-color: #aaa;
  -webkit-transform-origin: left top;
          transform-origin: left top;
}
</style>

<template>
<div class="box imgbox" v-on="
  mousedown: preventDefault,
  k.dragstart: ondragstart,
  k.dragSync: ondrag
" v-style="
  width: box.width + 'px',
  height: box.height + 'px',
  transform: 'translate(' + box.x + 'px,' + box.y + 'px) rotate(' + box.rotation + 'deg)'
">
  <div v-component="selection-handles" v-with="
    box: box,
    displayScaling: displayScaling
  "></div>
</div>
</template>

<script>
var BoxVue = require('./box')

module.exports = BoxVue.extend({
  components: {
    'selection-handles': require('./selection-handles.vue')
  }
})
</script>