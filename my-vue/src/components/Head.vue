<template>
  <div class="head">
    <div class="bg">
      <img :src="seller.avatar">
    </div>
    <div class="wrapper">
        <div class="head clearfix">
          <div class="headImg">
            <img :src="seller.avatar" alt="">
          </div>
          <div class="headContent">
            <div class="headTitle">
              <span class="brand bg-image"></span>
              <span class="headTitle-content">{{seller.name}}</span>
            </div>
            <div class="head-description">
              <span>{{seller.description}}</span>
              <span>/{{seller.deliveryTime}}分钟送达</span>
            </div>
            <div class="head-supports" v-if="seller.supports">
              <span class="icon bg-image" :class="classMap[seller.supports[0].type]"></span>
              <span>{{seller.supports[0].description}}</span>
            </div>
            <div class="head-length">
              <span>5个</span>
              <i class="el-icon-arrow-right"></i>
            </div>  
          </div>
        </div>
    </div>
     <div class="bulletin">
        <span class="icon bg-image"></span>
        <span class="ellipsis">{{seller.bulletin}}</span>
        <i class="el-icon-arrow-right"></i>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'my-head',
  props : {
    seller : {
      type : Object
    }
  },
  data () {
    return {
      data : [],
      classMap : []
    }
  },
  created(){
    this.classMap = ['decrease','discount','special','invoice_1','guarantee']
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus">
  @import '../assets/stylus/index.styl';
  .head{  
    width 100%
    position relative
    overflow hidden
    .bg{
        position absolute
        left 0
        top 0
        width 100%
        z-index -1
        filter blur(10px)
        img{
          width 100%
          background-size cover
        }     
    }
    .wrapper{
      background-color rgba(7,17,27,0.5)
      padding 48px 25px 36px 48px
      .head{
        .headImg{
          float left
          img{
            width 128px
            height 128px
            border-radius 2px
            }
        }  
        .headContent{
          position relative
          margin-left 160px
          margin-top 4px
          color rgb(255,255,255)
          .headTitle{
            .brand{
              display inline-block
              width 60px
              height 36px
              background-size 60px 36px
              bg-image('brand')
              vertical-align top
            }
            .headTitle-content{
              font-size 36px
              line-height 36px
              font-weight bold
            }
          }
          .head-description{
            margin-top 16px
            span{
              font-size 24px
              line-height 24px
              font-weight 200
              margin 16px 0 20px 0
            }
          }
          .head-supports{
            font-size 20px
            line-height 24px
            font-weight 200
            margin-top 20px
            .icon{
              display inline-block
              width 28px
              height 28px
              background-size 28px 28px
              vertical-align top
              &.decrease{
                bg-image('decrease_2')
              }
              &.discount{
                bg-image('discount_2')
              }
              &.special{
                bg-image('special_2')
              }
              &.invoice_1{
                bg-image('invoice_2')
              }
              &.guarantee{
                bg-image('guarantee_2')
              }
            }
          }
          .head-length{
            position absolute
            right 0
            bottom 0
            background-color rgba(0,0,0,0.2)
            font-size 20px
            line-height 24px
            font-weight 200
            padding 14px 16px
            border-radius 20px
          }
        }
      }
    }
    .bulletin{
      line-height 56px
      font-size 20px
      font-weight 200
      color rgb(255,255,255)
      height 56px
      display flex
      padding 0 24px 0 24px
      background-color rgba(7,17,27,0.2)
      .icon{
        display inline-block
        flex-shrink 0
        height 36px
        width 60px
        background-size 60px 36px
        bg-image('bulletin')
        margin-top 10px
      }
      .ellipsis{
        flex-strink 1
        display inline-block
        margin-left 8px
        white-space nowrap
        overflow hidden
        text-overflow: ellipsis
      }
      .el-icon-arrow-right{
        line-height 56px
        flex-strink 0
      }
    }
  }
</style>
