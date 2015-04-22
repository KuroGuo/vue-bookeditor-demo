<template>
<button v-on="click: addImgbox">添加图片框</button>
</template>

<script>
var editor = require('../view-models/editor')

module.exports = {
  methods: {
    addImgbox: function (e) {
      e.preventDefault()

      this.page.addImgbox()

      console.log(this.page)
    }
  }
}
</script>