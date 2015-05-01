<template>
<div class="page" v-style="width: page.width + 'px', height: page.height + 'px', transform: 'scale(' + scaling + ')'">
  <div v-component="{{box.type}}" v-repeat="box: page.boxes" v-with="scaling: scaling, selectedBoxes: selectedBoxes"></div>
</div>
</template>

<script>
module.exports = {
  replace: true,
  components: {
    imgbox: require('./imgbox.vue')
  }
}
</script>