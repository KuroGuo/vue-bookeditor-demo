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
  },
  computed: {
    selected: function () {
      return !!this.selectedBoxes[this.box.id]
    }
  },
  methods: {
    onpointerdown: function (e) {
      e.preventDefault()
      e.stopPropagation()

      this.selectedBoxes = {}
      this.$set('selectedBoxes[' + this.box.id + ']', 1)
    },
    ondragstart: function (e) {
      this.dragstartX = this.box.x
      this.dragstartY = this.box.y
    },
    ondrag: function (e) {
      var x = this.dragstartX + e.deltaX / this.scaling
      var y = this.dragstartY + e.deltaY / this.scaling

      this.box.x = x
      this.box.y = y
    }
  },
  components: {
    'selection-handles': require('./selection-handles.vue')
  }
})