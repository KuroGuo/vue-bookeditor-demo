<template>
<div class="page" v-style="width: page.width + 'px', height: page.height + 'px', transform: 'scale(' + scaling + ')'">
  <div v-component="{{box.type}}" v-repeat="box: page.boxes" v-with="scaling: scaling, selectedBoxes: selectedBoxes"></div>
</div>
</template>

<script>
module.exports = {
  replace: true,
  ready: function () {
    document.addEventListener('mousedown', this.clearSelectedBoxes)
    document.addEventListener('touchstart', this.clearSelectedBoxes)
  },
  destroy: function () {
    document.removeEventListener('mousedown', this.clearSelectedBoxes)
    document.removeEventListener('touchstart', this.clearSelectedBoxes)
  },
  methods: {
    clearSelectedBoxes: function () {
      this.selectedBoxes = {}
    }
  },
  data: function () {
    return {
      selectedBoxes: {}
    }
  },
  components: {
    imgbox: require('./imgbox.vue')
  }
}
</script>