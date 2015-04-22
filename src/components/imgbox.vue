<template>
<div class="box imgbox" v-on="
  mousedown: preventDefault,
  k.dragstart: ondragstart,
  k.dragSync: ondrag
" v-style="transform: 'translate(' + x + 'px,' + y + 'px)'"></div>
</template>

<script>
var BoxVue = require('./box')

module.exports = BoxVue.extend({
  methods: {
    preventDefault: function (e) {
      e.preventDefault()
    },
    ondragstart: function (e) {
      this.dragstartX = this.x
      this.dragstartY = this.y
    },
    ondrag: function (e) {
      var x = this.dragstartX + e.deltaX
      var y = this.dragstartY + e.deltaY

      if (x < 0)
        x = 0
      else if (x > 300)
        x = 300

      if (y < 0)
        y = 0
      else if (y > 300)
        y = 300

      this.x = x
      this.y = y
    }
  }
})
</script>