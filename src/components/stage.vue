<style>
.stage {
  position: relative;
  box-shadow: 0 1px 6px #aaa;
}
.page {
  position: relative;
  -webkit-transform-origin: left top;
          transform-origin: left top;
}
</style>

<template>
<div class="stage" v-style="width: page.width * scaling + 'px', height: page.height * scaling + 'px'">
  <div v-component="page" v-with="
    page: page,
    scaling: scaling,
    selectedBoxes: selectedBoxes
  "></div>
  <div v-repeat="box: selectedBoxes" v-component="selection-handles" v-with="scaling: scaling"></div>
</div>
</template>

<script>
module.exports = {
  replace: true,
  components: {
    page: require('./page.vue'),
    'selection-handles': require('./selection-handles.vue')
  }
}
</script>