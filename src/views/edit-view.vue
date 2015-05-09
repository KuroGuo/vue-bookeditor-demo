<style>
.json-viewer {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 300px;
  pointer-events: none;
  -webkit-transform: translateZ(0);
          transform: translateZ(0);
}

.stage {
  margin: 8px 0 8px 4px;
}

.fps {
  font-size: 30px;
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>

<template>
<div v-component="toolbar" v-with="
  page: currentPage,
  scaling: scaling,
  selectedBoxes:selectedBoxes,
  editingBox: editingBox
"></div>
<div v-component="stage" v-with="
  page: currentPage,
  scaling: scaling,
  selectedBoxes: selectedBoxes,
  editingBox: editingBox
"></div>
<div v-component="page-navigitor" v-with="book: book, currentPage: currentPage"></div>
<pre class="json-viewer" v-html="bookStr"></pre>
<span class="fps"></span>
</template>

<script>
module.exports = {
  data: function () {
    return {
      selectedBoxes: [],
      editingTextbox: null
    }
  },
  ready: function () {
    var vue = this
    var lastTime = 0
    var fps
    window.requestAnimationFrame(function (time) {
      var timeSpan = time - lastTime
      lastTime = time

      fps = Math.round(1000 / timeSpan)

      window.requestAnimationFrame(arguments.callee)
    })

    setInterval(function () {
      document.querySelector('.fps').innerHTML = fps
    }, 300)
  },
  watch: {
    'currentPage': function (val, oldVal) {
      if (val && oldVal && val.num !== oldVal.num)
        this.selectedBoxes = []
    }
  },
  computed: {
    bookStr: function () {
      return JSON.stringify(this.book, null, '  ')
    }
  },
  components: {
    toolbar: require('../components/toolbar.vue'),
    stage: require('../components/stage.vue'),
    'page-navigitor': require('../components/page-navigitor.vue')
  }
}

window.book = module.exports.book
</script>