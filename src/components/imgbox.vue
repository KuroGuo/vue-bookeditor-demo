<template>
<rect v-attr="
  width: box.width,
  height: box.height,
  transform: 'translate(' + box.x + ',' + box.y + ') rotate(' + box.rotation + ')'
" fill="#aaa" />
</template>

<script>
var BoxVue = require('./box')

module.exports = BoxVue.extend({})
</script>