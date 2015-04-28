var Vue = require('vue')
var kDrag = require('k-drag')

module.exports = Vue.extend({
  replace: true,
  ready: function () {
    kDrag.bind(this.$el)
  },
  methods: {
    preventDefault: function (e) {
      e.preventDefault()
    },
    ondragstart: function (e) {
      this.dragstartX = this.box.x
      this.dragstartY = this.box.y
    },
    ondrag: function (e) {
      var x = this.dragstartX + e.deltaX / this.displayScaling
      var y = this.dragstartY + e.deltaY / this.displayScaling

      this.box.x = x
      this.box.y = y
    }
  }
})