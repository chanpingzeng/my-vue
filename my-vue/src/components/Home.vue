<template>
  <div id="app">
    <div class="tap">
      <div class="tap-item">
        <router-link to="goods">商品</router-link>
      </div>
      <div class="tap-item">
        <router-link to="ratings">评价</router-link>
      </div>
      <div class="tap-item">
        <router-link to="sell">商家</router-link>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: '110'
    }
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus">
  #app{
    .tap{
      width 100%
      display flex
      .tap-item{
        flex 1
        text-align center
      }
    }
  }
</style>
