<template>
  <div id="sell">
     <div class="name-wrapper">
       <div class="name-wrapper-top">
         <h1>{{goods.name}}</h1>
         <div class="name-wrapper-socre">
           <div class="rating-img">
            <img src="../assets/images/star24_on@2x.png" alt="">
            <img src="../assets/images/star24_on@2x.png" alt="">
            <img src="../assets/images/star24_on@2x.png" alt="">
            <img src="../assets/images/star24_on@2x.png" alt="">
            <img src="../assets/images/star24_off@2x.png" alt="">
          </div>
          <span class="score">({{goods.score}})</span>
          <span class="sellCount">月售{{goods.sellCount}}单</span>
         </div>
         <div class="like" @click="islike">
           <i class="icon icon-favorite" :class="{active : falg}"></i>
           <p>{{msg}}</p>
         </div>
       </div>
       <div class="name-wrapper-bottom">
         <div class="name-item">
           <p>起送价</p>
           <div>
             <span class="number">{{goods.minPrice}}</span>
             <span>元</span>
           </div>
         </div>
         <div class="name-item">
           <p>商家配送</p>
           <div>
             <span class="number">{{goods.deliveryPrice}}</span>
             <span>元</span>
           </div>
         </div>
         <div class="name-item">
           <p>平均配送时间</p>
           <div>
             <span class="number">{{goods.deliveryTime}}</span>
             <span>分钟</span>
           </div>
         </div>
       </div>
     </div>
    <div class="cut-off"></div>
    <div class="content">
      <h1>公告与活动</h1>
      <div class="content-item">
        <p>{{goods.bulletin}}</p>
      </div>
      <div class="content-item" v-for="(item,index) in goods.supports" :key="index">
        <span class="icon bg-image" :class="classMap[item.type]"></span>
        <span>{{item.description}}</span>
      </div>
    </div>
    <div class="cut-off"></div>
    <div class="content-img">
      <h1>商家实景</h1>
      <div class="content-item">
        <div class="img-wrapper"  v-for="(item1,index) in goods.pics" :key="index">
          <img :src="item1" alt="">
        </div>
      </div>
    </div>
    <div class="cut-off"></div>
    <div class="content">
      <h1>商家信息</h1>
      <div class="content-item" v-for="(item2,index) in goods.infos" :key="index">
        <span>{{item2}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'sell',
  data () {
    return {
      classMap : [],
      goods : [],
      falg : false,
      msg : "收藏"
    }
  },
  methods : {
    islike : function(){
      if(!this.falg){
        this.falg = true
        this.msg = '已收藏'
      }else{
        this.falg = false
        this.msg = '收藏'
      }
    }
  },
  created(){
    this.classMap = ['decrease','discount','special','invoice_1','guarantee']
    axios.get('./good/seller').then(res=>{
      if(res.data.code === 0){
        this.goods = res.data.data
      }
    })
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus">
  @import '../assets/stylus/index.styl'
  $border = rgba(7,17,27,0.1)
  $color-b = rgb(7,17,27)
  #sell{
    width 100%
    margin-bottom 100px
    .name-wrapper{
      position relative
      width 100%
      .name-wrapper-top{
        margin 36px 36px 0px 36px
        padding-bottom 36px
        border-bottom 1px solid $border
        h1{
          set-font(28px)
          color $color-b
        }
        .name-wrapper-socre{
          padding-top 16px
          font-size 20px
          line-height 36px
          color rgb(77,85,93)
          .rating-img{
            display inline-block
            img{
              set-img(24px)
            }
          }
          .score{
            margin-left 16px
            margin-right 24px
          }
        }
        .like{
          position absolute
          right 36px
          top 0
          text-align center
          .icon-favorite{
            set-font(48px)
            color rgb(77,85,93)
            &.active{
              color rgb(240,20,20)
            }
          }
          p{
            margin-top 8px
            set-font(20px)
            color rgb(77,85,93)
          }
        }
      }
      .name-wrapper-bottom{
        display flex
        padding 36px 0
        &:last-child{
          border-right 1px solid #ffffff
        }
        .name-item{
          width 33.33%
          text-align center
          font-size 20px
          line-height 48px
          border-right 1px solid $border
          p{
            line-height 20px
            color rgb(147,153,159)
          }
          div{
            margin-top 8px
            .number{
              set-font(48px)
              color $color-b
            }
          }
        }
      }
    }
    .cut-off{
      width 100%
      height 35px
      border-top 2px solid #ccc
      border-bottom 2px solid #ccc
      background-color rgb(242,244,246)
    }
    .content{
      margin 36px
      h1{
        set-font(28px)
        color $color-b
        font-weight 500
      }
      .content-item{
        padding 32px 24px
        border-bottom 1px solid $border
        &:last-child{
          border-right 1px solid #ffffff
        }
        p{
          font-size 20px
          line-height 48px
          font-weight 200
          color rgb(240,20,20)
        }
        .icon{
          display inline-block
          width 32px
          height 32px
          background-size 32px 32px
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
        span{
          font-size 24px
          line-height 32px
          font-weight 200
          color $color-b
        }
      }
    }
    .content-img{
      margin 36px
      overflow scroll
      overflow-y hidden
      h1{
        set-font(28px)
        color $color-b
        font-weight 500
      }
      .content-item{
        display flex
        padding-top 24px
        .img-wrapper{
          flex-wrap nowrap
          img{
            width 240px
            height 180px
            margin-right 12px
          }
        }
      }
    }
  }
</style>
