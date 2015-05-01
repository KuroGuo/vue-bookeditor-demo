<template>
<button v-on="click: addImgbox">添加图片框</button>
<select v-model="scaling">
  <option value="0.1">10%</option>
  <option value="0.2">20%</option>
  <option value="0.3">30%</option>
  <option value="0.4" selected="selected">40%</option>
  <option value="0.5">50%</option>
  <option value="0.6">60%</option>
  <option value="0.7">70%</option>
  <option value="0.8">80%</option>
  <option value="0.9">90%</option>
  <option value="1">100%</option>
</select>
</template>

<script>
module.exports = {
  methods: {
    addImgbox: function (e) {
      e.preventDefault()

      this.page.addImgbox()
    }
  }
}
</script>