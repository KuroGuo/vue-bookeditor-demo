<style>
.selection-handles {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.handle {
  display: block;
  background-color: #48b;
  position: absolute;
  margin: auto;
  border-radius: 50%;
  box-shadow: 0 0 2px #666;
  box-sizing: border-box;
}

.handle-center-top {
  left: 0;
  right: 0;
}
.handle-left-center {
  top: 0;
  bottom: 0;
}
.handle-right-center {
  top: 0;
  bottom: 0;
}
.handle-center-bottom {
  left: 0;
  right: 0;
}

.handle-rotate {
  left: 0;
  right: 0;
  display: block;
  background-color: #48b;
  position: absolute;
  margin: auto;
  border-radius: 50%;
  box-sizing: border-box;
}

.border {
  border-color: #48b;
  border-style: solid;
  border-width: 0;
  position: absolute;
}

.border-left {
  left: 0;
  top: 0;
  bottom: 0;
}
.border-right {
  right: 0;
  top: 0;
  bottom: 0;
}
.border-top {
  left: 0;
  right: 0;
  top: 0;
}
.border-bottom {
  left: 0;
  right: 0;
  bottom: 0;
}
.border-rotate {
  left: 0;
  right: 0;
  width: 0;
  margin: 0 auto;
}
</style>

<template>
<div class="selection-handles">
  <span class="border border-left" v-style="border-left-width: 1 / displayScaling + 'px'"></span>
  <span class="border border-right" v-style="border-right-width: 1 / displayScaling + 'px'"></span>
  <span class="border border-top" v-style="border-top-width: 1 / displayScaling + 'px'"></span>
  <span class="border border-bottom" v-style="border-bottom-width: 1 / displayScaling + 'px'"></span>
  <span class="border border-rotate" v-style="
    top: -30 / displayScaling + 'px',
    height: 30 / displayScaling + 'px',
    border-left-width: 1 / displayScaling + 'px'
  "></span>
  <span class="handle handle-center-top" v-style="
    top: -6 / displayScaling + 'px',
    width: 12 / displayScaling + 'px',
    height: 12 / displayScaling + 'px',
    border: 1 / displayScaling + 'px solid white',
    box-shadow: '0 0 ' + 2 / displayScaling + 'px #666'
  "></span>
  <span class="handle handle-left-top" v-style="
    left: -6 / displayScaling + 'px',
    top: -6 / displayScaling + 'px',
    width: 12 / displayScaling + 'px',
    height: 12 / displayScaling + 'px',
    border: 1 / displayScaling + 'px solid white',
    box-shadow: '0 0 ' + 2 / displayScaling + 'px #666'
  "></span>
  <span class="handle handle-right-top" v-style="
    right: -6 / displayScaling + 'px',
    top: -6 / displayScaling + 'px',
    width: 12 / displayScaling + 'px',
    height: 12 / displayScaling + 'px',
    border: 1 / displayScaling + 'px solid white',
    box-shadow: '0 0 ' + 2 / displayScaling + 'px #666'
  "></span>
  <span class="handle handle-left-center" v-style="
    left: -6 / displayScaling + 'px',
    width: 12 / displayScaling + 'px',
    height: 12 / displayScaling + 'px',
    border: 1 / displayScaling + 'px solid white',
    box-shadow: '0 0 ' + 2 / displayScaling + 'px #666'
  "></span>
  <span class="handle handle-right-center" v-style="
    right: -6 / displayScaling + 'px',
    width: 12 / displayScaling + 'px',
    height: 12 / displayScaling + 'px',
    border: 1 / displayScaling + 'px solid white',
    box-shadow: '0 0 ' + 2 / displayScaling + 'px #666'
  "></span>
  <span class="handle handle-left-bottom" v-style="
    left: -6 / displayScaling + 'px',
    bottom: -6 / displayScaling + 'px',
    width: 12 / displayScaling + 'px',
    height: 12 / displayScaling + 'px',
    border: 1 / displayScaling + 'px solid white',
    box-shadow: '0 0 ' + 2 / displayScaling + 'px #666'
  "></span>
  <span class="handle handle-center-bottom" v-style="
    bottom: -6 / displayScaling + 'px',
    width: 12 / displayScaling + 'px',
    height: 12 / displayScaling + 'px',
    border: 1 / displayScaling + 'px solid white',
    box-shadow: '0 0 ' + 2 / displayScaling + 'px #666'
  "></span>
  <span class="handle handle-right-bottom" v-style="
    right: -6 / displayScaling + 'px',
    bottom: -6 / displayScaling + 'px',
    width: 12 / displayScaling + 'px',
    height: 12 / displayScaling + 'px',
    border: 1 / displayScaling + 'px solid white',
    box-shadow: '0 0 ' + 2 / displayScaling + 'px #666'
  "></span>
  <span class="handle-rotate" v-style="
    top: -30 / displayScaling + 'px',
    width: 16 / displayScaling + 'px',
    height: 16 / displayScaling + 'px',
    border: 1 / displayScaling + 'px solid white',
    box-shadow: '0 0 ' + 2 / displayScaling + 'px #666'
  "></span>
</div>
</template>

<script>
var kDrag = require('k-drag')

module.exports = {
  replace: true,
  ready: function () {
    var vue = this
    var handles = this.$el.querySelectorAll('.handle, .handle-rotate')

    Array.prototype.forEach.call(handles, function (handle) {
      kDrag.bind(handle)

      handle.addEventListener('mousedown', vue.stopPropagationAndPreventDefault)
      handle.addEventListener('touchstart', vue.stopPropagationAndPreventDefault)
      handle.addEventListener('k.dragstart', vue.ondragstart)
      handle.addEventListener('k.dragSync', vue.ondrag)
    })
  },
  computed: {
    radian: function () {
      return this.box.rotation / (180 / Math.PI)
    },
    r: function () {
      return Math.sqrt(this.box.width * this.box.width + this.box.height * this.box.height) / 2
    },
    angle: function () {
      return Math.atan(this.box.height / this.box.width)
    }
  },
  methods: {
    stopPropagationAndPreventDefault: function (e) {
      e.stopPropagation()
      e.preventDefault()
    },
    ondragstart: function (e) {
      var classList = e.target.classList

      this.dragstartBoxWidth = this.box.width
      this.dragstartBoxHeight = this.box.height
      this.dragstartBoxX = this.box.x
      this.dragstartBoxY = this.box.y
      this.dragstartBoxRotation = this.box.rotation

      if (classList.contains('handle-rotate')) {
        this.rect = this.$el.getBoundingClientRect()
        this.centerPageX = this.rect.left + this.rect.width / 2 + window.pageXOffset
        this.centerPageY = this.rect.top + this.rect.height / 2 + window.pageYOffset
        this.dragstartPointerRotation = computeRotation(e.pageX, e.pageY, this.centerPageX, this.centerPageY)
        this.centerBoxX = this.box.x + this.r * Math.cos(this.angle + this.radian)
        this.centerBoxY = this.box.y + this.r * Math.sin(this.angle + this.radian)
      }
    },
    ondrag: function (e) {
      var classList = e.target.classList

      var deltaRotation, deltaWidth, deltaHeight

      if (classList.contains('handle-rotate')) {
        deltaRotation = computeRotation(e.pageX, e.pageY, this.centerPageX, this.centerPageY) - this.dragstartPointerRotation

        this.box.rotation = this.dragstartBoxRotation + deltaRotation

        this.box.x = this.centerBoxX - this.r * Math.cos(this.angle + this.radian)
        this.box.y = this.centerBoxY - this.r * Math.sin(this.angle + this.radian)
      } else {
        var deltaX = e.deltaX / this.displayScaling
        var deltaY = e.deltaY / this.displayScaling

        deltaWidth = deltaX * Math.cos(this.radian) + deltaY * Math.sin(this.radian)
        deltaHeight = deltaX * Math.sin(this.radian) - deltaY * Math.cos(this.radian)

        var positionX, positionY

        if (classList.contains('handle-left-top'))
          positionX = 'left', positionY = 'top'
        else if (classList.contains('handle-center-top'))
          positionX = 'center', positionY = 'top'
        else if (classList.contains('handle-right-top'))
          positionX = 'right', positionY = 'top'
        else if (classList.contains('handle-left-center'))
          positionX = 'left', positionY = 'center'
        else if (classList.contains('handle-right-center'))
          positionX = 'right', positionY = 'center'
        else if (classList.contains('handle-left-bottom'))
          positionX = 'left', positionY = 'bottom'
        else if (classList.contains('handle-center-bottom'))
          positionX = 'center', positionY = 'bottom'
        else if (classList.contains('handle-right-bottom'))
          positionX = 'right', positionY = 'bottom'
        
        var width, height, x, y

        if (positionX === 'left')
          width = this.dragstartBoxWidth - deltaWidth
        else if (positionX === 'right')
          width = this.dragstartBoxWidth + deltaWidth

        if (positionY === 'top')
          height = this.dragstartBoxHeight + deltaHeight
        else if (positionY === 'bottom')
          height = this.dragstartBoxHeight - deltaHeight

        if (width < 50) { 
          deltaWidth += width - 50
          width = 50
        }
        if (height < 50) {
          deltaHeight -= height - 50
          height = 50
        }

        if (width !== undefined)
          this.box.width = width
        if (height !== undefined)
          this.box.height = height

        x = this.dragstartBoxX
        y = this.dragstartBoxY

        if (positionX === 'left') {
          x += deltaWidth * Math.cos(this.radian)
          y += deltaWidth * Math.sin(this.radian)
        }
        if (positionY === 'top') {
          x += deltaHeight * Math.sin(this.radian)
          y -= deltaHeight * Math.cos(this.radian)
        }

        if (x !== undefined)
          this.box.x = x
        if (y !== undefined)
          this.box.y = y
      }
    }
  }
}

function computeRotation(pageX, pageY, centerPageX, centerPageY) {
  var x = centerPageY - pageY
  var y = pageX - centerPageX
  var l = Math.sqrt(x * x + y * y)

  var rotation = Math.acos(x / l) / (Math.PI / 180)

  if (y < 0)
    rotation = -rotation

  return rotation
}
</script>