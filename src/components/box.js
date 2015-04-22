var Vue = require('vue')
var kDrag = require('k-drag')

module.exports = Vue.extend({
  replace: true,
  ready: function () {
    kDrag.bind(this.$el)
  }
})