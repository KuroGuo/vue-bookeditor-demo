<style>
.page-navigitor-btn {
  margin-right: 3px;
}
.page-navigitor-btn.current {
  font-weight: bold;
}
</style>

<template>
<div class="page-navigitor">
  <button class="page-navigitor-btn" v-repeat="page: book.pages" v-class="current: currentPage.num === page.num" v-on="click: currentPage = page">{{page.num}}</button>
  <button v-on="click: addPage">添加页</button>
</div>
</template>

<script>
module.exports = {
  replace: true,
  methods: {
    addPage: function (e) {
      e.preventDefault()

      var newPage = this.book.addPage()

      this.currentPage = newPage
    }
  }
}
</script>