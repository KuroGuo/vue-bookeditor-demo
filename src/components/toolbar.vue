<template>
<div class="toolbar">
  <button v-on="click: addImgbox">添加图片框</button>
  <button v-on="click: addTextbox">添加文本框</button>
  <select v-model="scaling">
    <option value="0.25">25%</option>
    <option value="0.5">50%</option>
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
    <input type="checkbox" v-model="editingBox.vertical" style="vertical-align: middle; margin: 0 3px"><span style="font-size: 12px; line-height: 1; vertical-align: middle;">文字竖排</span>
  </label>
</div>
</template>

<script>
module.exports = {
  replace: true,
  methods: {
    addImgbox: function (e) {
      e.preventDefault()

      // 在当前页添加一个图片框并返回新图片框
      var newImgbox = this.page.addImgbox()

      this.selectedBoxes.splice(0, this.selectedBoxes.length)
      this.selectedBoxes.push(newImgbox)
    },
    addTextbox: function (e) {
      e.preventDefault()

      // 在当前页添加一个文本框并返回新文本框
      var newTextbox = this.page.addTextbox()

      this.selectedBoxes.splice(0, this.selectedBoxes.length)
      this.selectedBoxes.push(newTextbox)
    },
    stopPropagation: function (e) {
      e.stopPropagation()
    }
  }
}
</script>