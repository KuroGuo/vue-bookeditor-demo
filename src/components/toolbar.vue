<template>
<button v-on="click: addImgbox">添加图片框</button>
<button v-on="click: addTextbox">添加文本框</button>
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
<label v-if="editingBox && editingBox.type === 'textbox'" v-on="
  mousedown: stopPropagation,
  touchstart: stopPropagation
">
  <input type="checkbox" v-model="editingBox.vertical"><span style="font-size: 12px;">文字竖排</span>
</label>
</template>

<script>
module.exports = {
  methods: {
    addImgbox: function (e) {
      e.preventDefault()

      // 在当前页添加一个图片框并返回新图片框
      var newImgbox = this.page.addImgbox()

      this.selectedBoxes = [newImgbox]
    },
    addTextbox: function (e) {
      e.preventDefault()

      // 在当前页添加一个文本框并返回新文本框
      var newTextbox = this.page.addTextbox()

      this.selectedBoxes = [newTextbox]
    },
    stopPropagation: function (e) {
      e.stopPropagation()
    }
  }
}
</script>