<template>
<div class="box imgbox" v-on="mousedown: preventDefault, k.drag: ondrag" v-style="transform: 'translate(' + x + 'px,' + y + 'px)'"></div>
</template>

<script>
var BoxVue = require('./box')

module.exports = BoxVue.extend({
  methods: {
    preventDefault: function (e) {
      e.preventDefault()
    },
    ondrag: function (e) {
      this.x += e.stepX
      this.y += e.stepY
    }
  }
})
</script>