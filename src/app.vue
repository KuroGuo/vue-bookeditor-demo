<template>
<div v-component="{{currentView}}" v-with="book: editor.book, currentPage: editor.currentPage"></div>
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
              width: 1000,
              height: 1000,
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