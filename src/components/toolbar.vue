<template>
<button v-on="click: addImgbox">添加图片框</button>
<select v-model="scaling">
  <option value="0.25">25%</option>
  <option value="0.5" selected="selected">50%</option>
  <option value="0.75">75%</option>
  <option value="1">100%</option>
  <option value="1.25">125%</option>
  <option value="1.5">150%</option>
  <option value="2">200%</option>
  <option value="3">300%</option>
  <option value="4">400%</option>
</select>
</template>

<script>
module.exports = {
  methods: {
    addImgbox: function (e) {
      e.preventDefault()

      var newImgbox = this.page.addImgbox()

      this.selectedBoxes = [newImgbox]
    }
  }
}
</script>