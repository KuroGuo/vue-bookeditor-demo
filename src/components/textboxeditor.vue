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
}
.textbox-editor .content {
  min-width: 1em;
  min-height: 1em;
  outline: none;
  position: absolute;
}
.textbox-editor .content.vertical {
  -webkit-writing-mode: tb-rl;
  -webkit-writing-mode: vertical-rl;
  writing-mode: tb-rl;
  min-width: 1em;
  min-height: 1em;
}
</style>

<template>
<div class="textbox-content textbox-editor" v-style="
  padding: (14 * scaling) + 'px',
  width: (box.width * scaling) + 'px',
  height: (box.height * scaling) + 'px',
  font-size: (box.fontSize * scaling) + 'px',
  transform: 'translate(' + (box.x * scaling) + 'px,' + (box.y * scaling) + 'px)'
    + 'rotate(' + box.rotation + 'deg)'
">
  <div class="content" v-class="vertical: box.vertical" v-on="
  mousedown: stopPropagation,
  touchstart: stopPropagation,
  input: oninput
" spellcheck="false" contenteditable="true"></div>
</div>
</template>

<script>
module.exports = {
  replace: true,
  ready: function () {
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
      this.box.width = width / this.scaling + 14 * 2
      this.box.height = height / this.scaling + 14 * 2
    }, false, true)
  },
  methods: {
    stopPropagation: function (e) {
      e.stopPropagation()
    },
    oninput: function () {
      this.box.content = this.$content.innerHTML
    }
  }
}
</script>