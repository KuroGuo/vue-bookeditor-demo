<style>
</style>

<template>
<div v-component="{{currentView}}"></div>
</template>

<script>
module.exports = {
  el: '#app',
  data: {
    currentView: 'edit-view'
  },
  components: {
    'edit-view': require('./views/edit-view.vue')
  }
}
</script>