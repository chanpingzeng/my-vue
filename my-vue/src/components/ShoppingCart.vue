<template>
  <div id="shopping">
    <div class="wrapper">
      <div class="icon-wrapper">
        <span class="icon icon-shopping_cart"></span>
        <!-- <span class="number"></span> -->
      </div>
      <div class="price">
        <span>￥12</span>
      </div>
      <div class="deliveryPrice">
        <span>另需配送费￥5元</span>
      </div>
      <div class="goShop" :class="{ok : totalPrice >= 20}">{{money}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shopping',
  data () {
    return {
      msg: 'shopping',
      totalPrice : 21,
      minPrice : 20
    }
  },
  computed : {
    money() {
      if (this.totalPrice === 0) {
        return `¥${this.minPrice}`;
      } else if (this.totalPrice > 0 && this.totalPrice < 20) {
        return `还差¥${20 - this.totalPrice}起送`;
      } else {
        return `去结算`;
      }
    },
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus">
@import '../../static/style.css'
#shopping{
  position fixed
  left 0
  bottom 0
  width 100%
  height 100px
  z-index 300
  .wrapper{
    width 100%
    display flex
    background-color #141d27
    .icon-wrapper{
      flex 0 0 80px
      position relative
      .icon-shopping_cart{
        width: 88px;
        height: 88px;
        border-radius: 88px;
        border: 12px solid #141d27;
        background-color: #2b333b;
        margin-left: 36px;
        margin-top: -20px;
        font-size: 48px;
        color: rgba(255, 255, 255, 0.4);
        line-height: 48px;
        text-align: center;
      }
    }
    .price{
      margin-left 36px  
      font-size 32px
      line-height 100px
      font-weight 700
      color rgba(255,255,255,0.4)
      span{
        padding 12px 24px 12px 0
        border-right 1px solid rgba(255,255,255,0.1)
      }   
    }
    .deliveryPrice{
      font-size 32px
      font-weight 700
      line-height 100px
      color rgba(255,255,255,0.4)
      margin-left 24px 
    }
    .goShop{
      width 210px
      height 100px
      position absolute
      right 0
      bottom 0
      font-size 32px
      font-weight 700
      line-height 100px
      text-align center
      color rgba(255,255,255,0.4)
      &.ok{
        background-color green
      }
    }
  }
}
</style>
