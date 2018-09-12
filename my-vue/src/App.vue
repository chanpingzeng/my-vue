<template>
  <div id="app">
    <my-head :seller="seller"></my-head>
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
    <my-shopCart></my-shopCart>
    <div class="notice"></div>
  </div>
</template>

<script>
import Head from './components/Head'
import ShoppingCart from './components/ShoppingCart'
import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
     seller : {}
    }
  },
  components : {
    'my-head': Head,
    'my-shopCart' : ShoppingCart
  },
  created(){
      axios.get('./good/seller').then(
          res => {
              if(res.data.code === 0){
                  this.seller = res.data.data
              }
          }
      )
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus">
  @import 'assets/stylus/index.styl';
  #app{
    .tap{
      width 100%
      display flex
      border-bottom 1px solid #cccccc
      .tap-item{
        flex 1
        text-align center
        height 80px
        line-height 80px
        font-size 28px
        a{
          color rgb(77,85,93)
          &.router-link-exact-active{
            color rgb(240,20,20)
          }
        }
      }
    }
    .notice{
      width 100%
      height 100%
      z-index 10000
      background-color rgba(7,17,27,0.8)
      blur(10px)
      position absolute
      left 0
      top 0
    }
  }
</style>
