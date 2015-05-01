var boxIdSeed = 0

function Book(bookData) {
  this.pages = bookData.pages.map(function (pageData) {
    return new Page(pageData)
  })
}

Book.prototype.addPage = function (pageData) {
  if (!pageData)
    pageData = {
      num: (parseFloat(this.pages[this.pages.length - 1].num) + 1).toString(),
      width: 1000,
      height: 1000,
      boxes: []
    }

  var newPage = new Page(pageData)

  this.pages.push(newPage)

  return newPage
}

function Page(pageData) {
  this.num = pageData.num
  this.width = pageData.width
  this.height = pageData.height
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
      y: 10,
      width: 200,
      height: 200,
      rotation: 0
    }

  var newImgbox = new Imgbox(imgboxData)

  this.boxes.push(newImgbox)

  return newImgbox
}

function Imgbox(imgboxData) {
  this.id = boxIdSeed++
  this.type = 'imgbox'
  this.x = imgboxData.x
  this.y = imgboxData.y
  this.width = imgboxData.width
  this.height = imgboxData.height
  this.rotation = imgboxData.rotation
}

Imgbox.prototype = new Box()

function Box() {
}

module.exports = Book