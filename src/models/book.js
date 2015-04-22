function Book(bookData) {
  this.pages = bookData.pages.map(function (pageData) {
    return new Page(pageData)
  })
}

Book.prototype.addPage = function (pageData) {
  if (!pageData)
    pageData = {
      num: (parseFloat(this.pages[this.pages.length - 1].num) + 1).toString(),
      boxes: []
    }

  this.pages.push(new Page(pageData))
}

function Page(pageData) {
  this.num = pageData.num
  this.boxes = pageData.boxes.map(function (boxData) {
    return new ({
      imgbox: Imgbox
    }[boxData.type])(boxData)
  })
}

Page.prototype.addImgbox = function (imgboxData) {
  if (!imgboxData)
    imgboxData = {
      x: 10,
      y: 10
    }

  this.boxes.push(new Imgbox(imgboxData))
}

function Imgbox(imgboxData) {
  this.type = 'imgbox'
  this.x = imgboxData.x
  this.y = imgboxData.y
}

Imgbox.prototype = new Box()

function Box() {
}

module.exports = Book