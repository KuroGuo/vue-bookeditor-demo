var Vue = require('vue')
var kDrag = require('k-drag')

module.exports = Vue.extend({
  replace: true,
  ready: function () {
    this.$el.addEventListener('mousedown', this.onpointerdown)
    this.$el.addEventListener('touchstart', this.onpointerdown)

    kDrag.bind(this.$el)

    this.$el.addEventListener('k.dragstart', this.ondragstart)
    this.$el.addEventListener('k.drag', this.ondrag)

    document.addEventListener('mousedown', this.cancelSelect)
    document.addEventListener('touchstart', this.cancelSelect)
  },
  destroyed: function () {
    document.removeEventListener('mousedown', this.cancelSelect)
    document.removeEventListener('touchstart', this.cancelSelect)
  },
  computed: {
    selected: {
      get: function () {
        var vue = this

        if (!vue.selectedBoxes)
          return false

        return vue.selectedBoxes.some(function (box) {
          return box.id === vue.box.id
        })
      },
      set: function (val) {
        var vue = this
        
        if (val) {
          if (!vue.selectedBoxes.some(function (box) {
            return box.id === vue.box.id
          }))
            vue.selectedBoxes.push(vue.box)

          if (vue.editingBox)
            vue.editingBox = null
        } else {
          vue.selectedBoxes.$remove(vue.box)
        }
      }
    }
  },
  methods: {
    onpointerdown: function (e) {
      e.preventDefault()
      e.stopPropagation()

      if (e.metaKey || e.ctrlKey) {
        if (this.selected) {
          this.selected = false
        } else {
          this.selected = true
        }
      } else {
        if (!this.selected){
          this.selectedBoxes.splice(0, this.selectedBoxes.length)
        }
        this.selected = true
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
      this.selected = true
    },
    cancelSelect: function () {
      this.selected = false
    }
  }
})