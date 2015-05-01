var Vue = require('vue')
var kDrag = require('k-drag')

module.exports = Vue.extend({
  replace: true,
  ready: function () {
    this.$el.addEventListener('mousedown', this.onpointerdown)
    this.$el.addEventListener('touchstart', this.onpointerdown)

    kDrag.bind(this.$el)

    this.$el.addEventListener('k.dragstart', this.ondragstart)
    this.$el.addEventListener('k.dragSync', this.ondrag)

    document.addEventListener('mousedown', this.cancelSelect)
    document.addEventListener('touchstart', this.cancelSelect)
  },
  destroyed: function () {
    document.removeEventListener('mousedown', this.cancelSelect)
    document.removeEventListener('touchstart', this.cancelSelect)
  },
  computed: {
    selected: function () {
      var vue = this

      if (!vue.selectedBoxes)
        return false

      return vue.selectedBoxes.some(function (box) {
        return box.id === vue.box.id
      })
    }
  },
  methods: {
    onpointerdown: function (e) {
      e.preventDefault()
      e.stopPropagation()

      if (e.metaKey || e.ctrlKey) {
        if (this.selected) {
          this.cancelSelect()
        } else {
          this.select()
        }
      } else {
        if (!this.selected)
          this.selectedBoxes = []
        this.select()
      }
    },
    ondragstart: function (e) {
      var vue = this

      vue.selectedBoxesDragstartPoint = {}
      vue.selectedBoxes.forEach(function (box) {
        vue.selectedBoxesDragstartPoint[box.id] = { x: box.x, y: box.y }
      })
    },
    ondrag: function (e) {
      var vue = this
      var deltaX = e.deltaX, deltaY = e.deltaY

      vue.selectedBoxes.forEach(function (box) {
        var dragstartPoint = vue.selectedBoxesDragstartPoint[box.id]
        box.x = dragstartPoint.x + deltaX / vue.scaling
        box.y = dragstartPoint.y + deltaY / vue.scaling
      })
    },
    select: function () {
      var vue = this
      var exist = vue.selectedBoxes.some(function (box) {
        return box.id === vue.box.id
      })
      if (!exist)
        vue.selectedBoxes.push(vue.box)
    },
    cancelSelect: function () {
      this.selectedBoxes.$remove(this.box)
    }
  },
  components: {
    'selection-handles': require('./selection-handles.vue')
  }
})