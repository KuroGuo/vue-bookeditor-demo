<style>
.textbox-editor {
  position: absolute;
  left: 0;
  top: 0;
  min-width: 0;
  min-height: 0;
  box-shadow: 0 0 8px #aaa inset;
  -webkit-transform-origin: left top;
          transform-origin: left top;
  cursor: text;
  padding: 14px;
}
.textbox-editor .content {
  min-width: 5em;
  min-height: 1em;
  outline: none;
  position: absolute;
}
.textbox-editor .content.vertical {
  -webkit-writing-mode: tb-rl;
  -webkit-writing-mode: vertical-rl;
  writing-mode: tb-rl;
  min-width: 1em;
  min-height: 5em;
}
</style>

<template>
<div class="textbox-content textbox-editor" v-style="
  width: box.width + 'px',
  height: box.height + 'px',
  font-size: box.fontSize + 'px',
  transform: 'translate(' + (box.x * scaling) + 'px,' + (box.y * scaling) + 'px)'
    + 'rotate(' + box.rotation + 'deg)'
    + 'scale(' + scaling + ')'
" v-on="mousedown: onpointerdown, touchstart: onpointerdown">
  <div class="content" v-class="vertical: box.vertical" v-on="input: oninput" spellcheck="false" contenteditable="true"></div>
</div>
</template>

<script>
var Vue = require('vue')

module.exports = {
  replace: true,
  ready: function () {
    var vue = this

    this.$content = this.$el.children[0]

    this.$content.focus()

    this.$watch('box.content', function (val) {
      if (this.$content.innerHTML !== val)
        this.$content.innerHTML = val
    }, false, true)

    this.$watch('{ content: box.content, fontSize: box.fontSize, vertical: box.vertical }', function () {
      var computedStyle = window.getComputedStyle(this.$content)
      var width = parseFloat(computedStyle.width)
      var height = parseFloat(computedStyle.height)
      this.box.width = width + 14 * 2
      this.box.height = height + 14 * 2
    }, false, true)

    var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.setTimeout

    vue.animationFrameToken = requestAnimationFrame(function () {
      var callee = arguments.callee
      if (vue.box.vertical) {
        vue.box.vertical = false
        Vue.nextTick(function () {
          vue.box.vertical = true
        })
      }
      Vue.nextTick(function () {
        vue.animationFrameToken = requestAnimationFrame(callee)  
      })
    })
  },
  detached: function () {
    var cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame || window.clearTimeout

    cancelAnimationFrame(this.animationFrameToken)
  },
  methods: {
    onpointerdown: function (e) {
      e.stopPropagation()
    },
    oninput: function () {
      this.box.content = this.$content.innerHTML
    }
  }
}
</script>