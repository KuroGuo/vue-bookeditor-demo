var Book = require('../models/book')

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

module.exports = editor