<style>
</style>

<template>
<div v-component="{{currentView}}" v-with="editor"></div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      editor: (function () {
        var Book = require('./models/book')

        var editor = {}

        editor.book = new Book({
          pages: [
            {
              num: '1',
              boxes: []
            }
          ]
        })

        editor.currentPage = editor.book.pages[0]

        return editor
      })(),
      currentView: 'edit-view'
    }
  },
  components: {
    'edit-view': require('./views/edit-view.vue')
  }
}
</script>