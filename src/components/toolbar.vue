<template>
<button v-on="click: addImgbox">添加图片框</button>
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