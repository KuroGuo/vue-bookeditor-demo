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
</style>

<template>
<div v-component="toolbar" v-with="page: currentPage, scaling: scaling"></div>
<div v-component="stage" v-with="page: currentPage, scaling: scaling"></div>
<div v-component="page-navigitor" v-with="book: book, currentPage: currentPage"></div>
<pre class="json-viewer" v-html="bookStr"></pre>
</template>

<script>
var beautify = require('js-beautify').js_beautify

module.exports = {
  computed: {
    bookStr: function () {
      return beautify(JSON.stringify(this.book), { indent_size: 2 })
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