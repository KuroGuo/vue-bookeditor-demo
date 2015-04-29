<style>
.json-viewer {
  position: absolute;
  left: 500px;
  top: 0;
  width: 500px;
  -webkit-transform: translateZ(0);
          transform: translateZ(0);
}
</style>

<template>
<div v-component="toolbar" v-with="page: currentPage"></div>
<div v-component="stage" v-with="page: currentPage"></div>
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