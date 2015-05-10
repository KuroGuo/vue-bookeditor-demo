<style>
.selection-handles {
  width: 0;
  height: 0;
  left: 0;
  top: 0;
  position: absolute;
}

.handle, .handle-rotate {
  border: 1px solid white;
  box-shadow: 0 0 2px #666;
  box-sizing: border-box;
  border-radius: 100%;
  position: absolute;
  background-color: #48b;
  position: absolute;
  left: 0;
  top: 0;
}
.handle {
  width: 12px;
  height: 12px;
}
.handle-rotate {
  width: 16px;
  height: 16px;
  top: -25px;
}

.border {
  border-color: #48b;
  border-style: solid;
  border-width: 0;
  position: absolute;
  left: 0;
  top: 0;
}

.border-left {
  width: 0;
  border-left-width: 1px;
}
.border-right {
  width: 0;
  border-right-width: 1px;
}
.border-top {
  height: 0;
  border-top-width: 1px;
}
.border-bottom {
  height: 0;
  border-bottom-width: 1px;
}
.border-rotate {
  width: 0;
  height: 30px;
  top: -30px;
  border-left-width: 1px;
}
</style>

<template>
<div class="selection-handles" v-style="
  transform: 'translateZ(0)'
    + 'translate(' + (box.x * scaling) + 'px,' + (box.y * scaling) + 'px)'
    + 'rotate(' + box.rotation + 'deg)'
">
  <span class="border border-left" v-style="
    transform: 'translateZ(0) translateX(-50%)',
    height: (box.height * scaling) + 'px'
  "></span>
  <span class="border border-right" v-style="
    transform: 'translateZ(0)translateX(' + (box.width * scaling) + 'px) translateX(-50%)',
    height: (box.height * scaling) + 'px'
  "></span>
  <span class="border border-top" v-style="
    transform : 'translateZ(0) translateY(-50%)',
    width: (box.width * scaling) + 'px'
  "></span>
  <span class="border border-bottom" v-style="
    transform: 'translateZ(0)translateY(' + (box.height * scaling) + 'px) translateY(-50%)',
    width: (box.width * scaling) + 'px'
  "></span>
  <span class="border border-rotate" v-style="
    transform: 'translateZ(0)translateX(' + (box.width / 2 * scaling) + 'px) translateX(-50%)'
  "></span>
  <span v-if="resizeable" class="handle handle-center-top" v-style="
    transform: 'translateZ(0)translateX(' + (box.width / 2 * scaling) + 'px)' + 'translate(-50%, -50%)'
  "></span>
  <span v-if="resizeable" class="handle handle-left-top" v-style="
    transform: 'translateZ(0)translate(-50%, -50%)'
  "></span>
  <span v-if="resizeable" class="handle handle-right-top" v-style="
    transform: 'translateZ(0)translateX(' + (box.width * scaling) + 'px)' + 'translate(-50%, -50%)'
  "></span>
  <span v-if="resizeable" class="handle handle-left-center" v-style="
    transform: 'translateZ(0)translateY(' + (box.height / 2 * scaling) + 'px)' + 'translate(-50%, -50%)'
  "></span>
  <span v-if="resizeable" class="handle handle-right-center" v-style="
    transform: 'translateZ(0)translate(' + (box.width * scaling) + 'px,' + (box.height / 2 * scaling) + 'px)' + 'translate(-50%, -50%)' 
  "></span>
  <span v-if="resizeable" class="handle handle-left-bottom" v-style="
    transform: 'translateZ(0)translateY(' + (box.height * scaling) + 'px)' + 'translate(-50%, -50%)'
  "></span>
  <span v-if="resizeable" class="handle handle-center-bottom" v-style="
    transform: 'translateZ(0)translate(' + (box.width / 2 * scaling) + 'px,' + (box.height * scaling) + 'px)' + 'translate(-50%, -50%)'
  "></span>
  <span v-if="resizeable" class="handle handle-right-bottom" v-style="
    transform: 'translateZ(0)translate(' + (box.width * scaling) + 'px,' + (box.height * scaling) + 'px)' + 'translate(-50%, -50%)'
  "></span>
  <span class="handle-rotate" v-style="
    transform: 'translateZ(0)translateX(' + (box.width / 2 * scaling) + 'px)' + 'translate(-50%, -50%)'
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
    },
    resizeable: function () {
      return this.box.type === 'textbox' ? false : true
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
        this.centerPageX = this.rect.left + this.r * Math.cos(this.angle + this.radian) * this.scaling + window.pageXOffset
        this.centerPageY = this.rect.top + this.r * Math.sin(this.angle + this.radian) * this.scaling + window.pageYOffset
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
        var deltaX = e.deltaX / this.scaling
        var deltaY = e.deltaY / this.scaling

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