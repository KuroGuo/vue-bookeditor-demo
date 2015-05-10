<style>
.textbox-content {
  min-width: 100%;
  min-height: 100%;
  padding: 14px;
  outline: none;
  box-sizing: border-box;
  white-space: nowrap;
  cursor: pointer;
  cursor: -webkit-grab;
}
.textbox-content:active {
  cursor: -webkit-grabbing;
}
.textbox-content.vertical {
  -webkit-writing-mode: tb-rl;
  -webkit-writing-mode: vertical-rl;
  writing-mode: tb-rl;
}
.textbox-content.editing {
  display: none;
}
</style>

<template>
<g></g>
</template>

<script>
var BoxVue = require('./box')

module.exports = BoxVue.extend({
  compiled: function () {
    var vue = this

    var foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject')

    vue.$content = document.createElement('div')
    vue.$content.classList.add('textbox-content')
    vue.$content.setAttribute('spellcheck', 'false')
    vue.$content.addEventListener('mousedown', this.onTextPointerdown)
    vue.$content.addEventListener('touchstart', this.onTextPointerdown)
    vue.$content.addEventListener('mouseup', this.onTextPointerup)
    vue.$content.addEventListener('touchend', this.onTextPointerup)
    vue.$content.addEventListener('click', this.onTextClick)
    vue.$content.addEventListener('input', function (e) {
      vue.box.content = vue.$content.innerHTML
    })

    foreignObject.appendChild(vue.$content)

    this.$watch('box.width', function (val) {
      foreignObject.setAttribute('width', val)
      this.$content.style.width = val + 'px'
    }, false, true)
    this.$watch('box.height', function (val) {
      foreignObject.setAttribute('height', val)
      this.$content.style.height = val + 'px'
    }, false, true)
    this.$watch('{ x: box.x, y: box.y, rotation: box.rotation }', function (box) {
      foreignObject.setAttribute('transform', 'translate(' + box.x + ',' + box.y + ') rotate(' + box.rotation + ')')
    }, false, true)
    this.$watch('box.fontSize', function (val) {
      this.$content.style.fontSize = val + 'px'
    }, false, true)
    this.$watch('box.content', function (val, oldVal) {
      if (!val || val === '<br>')
        val = '请输入文字'
      if (this.$content.innerHTML !== val) {
        this.$content.innerHTML = val
      }
    }, false, true)
    this.$watch('box.vertical', function (val) {
      if (val)
        this.$content.classList.add('vertical')
      else
        this.$content.classList.remove('vertical')
    }, false, true)

    this.$watch('editing', function (val) {
      if (val)
        this.$content.classList.add('editing')
      else
        this.$content.classList.remove('editing')
    }, false, true)

    this.$el = foreignObject
  },
  ready: function () {
    document.addEventListener('mousedown', this.cancelEdit)
    document.addEventListener('touchstart', this.cancelEdit)
  },
  destroyed: function () {
    document.removeEventListener('mousedown', this.cancelEdit)
    document.removeEventListener('touchstart', this.cancelEdit)
  },
  computed: {
    editing: {
      get: function () {
        return this.editingBox === this.box
      },
      set: function (val) {
        if (val) {
          this.editingBox = this.box
          this.selectedBoxes.splice(0, this.selectedBoxes.length)
        } else{
          this.editingBox = null
        }
      }
    }
  },
  methods: {
    onTextPointerdown: function (e) {
      if (this.editing)
        e.stopPropagation()

      this.pointerdownSelected = this.selected

      var pageX, pageY

      if (e.type === 'mousedown')
        pageX = e.pageX, pageY = e.pageY
      else if (e.type === 'touchstart')
        pageX = e.changedTouches[0].pageX, pageY = e.changedTouches[0].pageY

      this.pointerdownPageX = pageX
      this.pointerdownPageY = pageY
    },
    onTextPointerup: function (e) {
      if (e.type === 'mouseup')
        pageX = e.pageX, pageY = e.pageY
      else if (e.type === 'touchend')
        pageX = e.changedTouches[0].pageX, pageY = e.changedTouches[0].pageY

      if (Math.abs(pageX - this.pointerdownPageX) <= 3 && Math.abs(pageY - this.pointerdownPageY) <= 3)
        if (this.pointerdownSelected)
          this.onTextTap()
    },
    onTextTap: function (e) {
      this.edit()
    },
    edit: function () {
      if (!this.editing)
        this.editing = true
    },
    cancelEdit: function () {
      this.editing = false
    }
  }
})
</script>