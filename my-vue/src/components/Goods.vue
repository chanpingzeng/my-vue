<template>
  <div id="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <div v-for="(item,index) in goods" :key="index" class="menu-item"  :class="{active : currentIndex === index}" @click="selectIndex(index,$event)">
        <div class="item-wrapper border-1px">
          <span class="icon" v-show="item.type > 0" :class="classMap[item.type]"></span>
          <span class="item-text">{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="food-wrapper" ref="foodWrapper">
      <ul>
        <li v-for="(items,index) in goods"  :key="index" class="food-list">
          <div class="food-list-title">{{items.name}}</div>
          <ul>
            <li v-for="(item1,index) in items.foods"  :key="index" class="food-list-item1 border-1px">
              <div class="item1-icon">
                <img :src="item1.icon" alt="">
              </div>
              <div class="item1-content border-1px">
                <div class="item1-name">{{item1.name}}</div>
                <div class="item1-description" v-show="item1.description">{{item1.description}}</div>
                <div class="ratings">
                  <span class="ratings-sellCount">月售{{items.sellCount}}份</span>
                  <span class="ratings-rating">好评率{{item1.rating}}%</span>
                </div>
                <div class="price">
                  <span class="price-icon">￥</span>
                  <span class="price-new">{{item1.price}}</span>
                  <span class="price-old" v-if="item1.oldPrice">{{item1.oldPrice}}</span>
                </div>
                <div class="cont">
                  <my-add></my-add>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import BScroll from 'better-scroll'
import Add from './Add'
export default {
  name: 'goods',
  data () {
    return {
      goods : [],
      classMap : [],
      heightList : [],
      scrollY : 0
    }
  },
  components : {
    'my-add' : Add
  },
  created(){
    this.classMap = ['decrease','discount','special','invoice_1','guarantee']
    axios.get('./good/goods').then(res=>{
      if(res.data.code === 0){
        this.goods = res.data.data
        Vue.nextTick(() => {
          this._initscroll()
          this._caculateHeight()
        })
      }
    })
  },
  computed : {
    currentIndex(){
      for(let i = 0; i < this.heightList.length; i++){
        let height1 = this.heightList[i]
        let height2 = this.heightList[i + 1]
        if(!height2 || (this.scrollY >= height1 && this.scrollY < height2)){
          return i
        }
      }
      return 0
    }
  },
  methods : {
    selectIndex($index ,$event){
     if(!$event._constructed){
       return
     }
     let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list')
     this.foodScroll.scrollToElement(foodList[$index],100)
    },
    _initscroll(){
       this.menuScroll = new BScroll(this.$refs.menuWrapper,{
        click : true
      })
      this.foodScroll = new BScroll(this.$refs.foodWrapper,{
        probeType : 3,
        click : true
      })
      this.foodScroll.on('scroll',(pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    _caculateHeight(){
      let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list')
      let height = 0;
      this.heightList.push(height)
      for(let i = 0; i < foodList.length; i++){
        let item = foodList[i]
        height += item.clientHeight
        this.heightList.push(height)
      }
    }
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus">
  @import '../assets/stylus/index.styl'
  #goods{
    position absolute
    left 0
    right 0
    top 353px
    bottom 100px
    display flex
    width 100%
    overflow hidden
    .icon{
      display inline-block
      vertical-align top
      width 28px
      height 28px
      background-size 28px 28px
      margin-right 8px
      &.decrease{
        bg-image('decrease_3')
      }
      &.discount{
        bg-image('discount_3')
      }
      &.special{
        bg-image('special_3')
      }
      &.invoice_1{
        bg-image('invoice_3')
      }
      &.guarantee{
        bg-image('guarantee_3')
      }
    }
    .menu-wrapper{
      width 180px
      background-color #f3f5f7
      .menu-item{
        padding 0 24px
        font-size 0
        line-height 28px
        &.active{
          position relative
          margin-top -2px
          background-color #ffffff
          &:after{
            border-top 1px solid #ffffff
          }
          .item-text{
            font-size 24px
            line-height 28px
            font-weight 500
          }
        }
        .item-wrapper{
          display table-cell
          vertical-align middle
          height 108px
          width 112px
          border-1px(rgba(7,17,27,0.1))
        }
        .item-text{
          font-size 24px
          line-height 28px
          font-weight 200
        }
      }
    }
    .food-wrapper{
      flex 1
      background-color #ffffff
      .food-list{
        width 100%
        .food-list-title{
          font-size 24px
          line-height 54px
          height 54px
          padding-left 40px
          background-color #f3f5f7
          color rgb(137,153,159)
          border-left 8px solid #d9dde1
        }
        .food-list-item1{
          display flex
          position relative
          margin 36px
          padding-bottom 36px
          background-color #ffffff
          border-bottom 1px solid rgba(7,17,27,0.1)
          &:last-child{
            border-1px(rgb(255,255,255))
            margin-bottom 0
          }
          .item1-icon{
            flex 0 0 114px
            img{
              set-img(114px)
            }
          }
          .item1-content{
            position relative
            width 100%
            margin-left 20px
            .item1-name{
              font-size 28px
              line-height 28px
              margin-top 4px
              color rgb(7,17,27)
              font-weight bold
            }
            .item1-description,
            .ratings{
              margin-top 16px
            }
            .ratings-sellCount,
            .ratings-rating,
            .item1-description{
              font-size 20px
              line-height 20px
              color rgb(147,153,159)
            }
            .price{
              margin-top 16px
              color red
              line-height 48px
              .price-new{
                font-size 28px
                font-weight 700
              }
              .price-icon,
              .price-old{
                font-size 20px
              }
              .price-old{
                color rgb(147,153,159)
                text-decoration line-through
              }
            }
          }
        }
      }
    }
  }
</style>
