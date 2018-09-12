<template>
  <div id="ratings">
    <div class="ratings-wrapper">
      <div class="ratings-wrapper-left">
        <h1>3.6</h1>
        <span class="">综合评分</span>
        <p>高于周边商家69.1%</p>
      </div>
      <div class="ratings-wrapper-right">
        <div class="right-serviceScore">
          <span class="serviceScore-title">服务态度</span>
          <div class="serviceScore-img">
            <img src="../assets/images/star24_on@2x.png" alt="">
            <img src="../assets/images/star24_on@2x.png" alt="">
            <img src="../assets/images/star24_on@2x.png" alt="">
            <img src="../assets/images/star24_on@2x.png" alt="">
            <img src="../assets/images/star24_off@2x.png" alt="">
          </div>
          <span class="serviceScore-ratings">4.3</span>
        </div>
        <div class="right-serviceScore margin-16px">
          <span class="serviceScore-title">食物评价</span>
          <div class="serviceScore-img">
            <img src="../assets/images/star24_on@2x.png" alt="">
            <img src="../assets/images/star24_on@2x.png" alt="">
            <img src="../assets/images/star24_on@2x.png" alt="">
            <img src="../assets/images/star24_on@2x.png" alt="">
            <img src="../assets/images/star24_off@2x.png" alt="">
          </div>
          <span class="serviceScore-ratings">4.2</span>
        </div>
        <div class="right-serviceScore margin-16px">
          <span class="serviceScore-title">送达时间</span>
          <span class="sell-time">44分钟</span>
        </div>
      </div> 
    </div>
    <div class="cut-off"></div>
    <div class="content">
      <div class="content-head">
        <div class="content-type">
          <div class="type-item  type-item1" @click="changeType(2,1)" :class="{active : button1}">
            <span>全部</span>
            <span class="type-item-number">{{allLength}}</span>
          </div>
          <div class="type-item  type-item2" @click="changeType(0,2)" :class="{active : button2}">
            <span>满意</span>
            <span class="type-item-number">{{goodL}}</span>
          </div>
          <div class="type-item  type-item3" @click="changeType(1,3)" :class="{active : button3}">
            <span>不满意</span>
            <span class="type-item-number">{{badL}}</span>
          </div>
        </div>
        <div class="content-title">
          <div class="content-title-wrapper" @click="selectContent()">
            <i class="icon el-icon-success" :class="{active : content}"></i>
            <span>只看有内容的评价</span>
            <span class="color-white">{{selectText}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="ratings-content">
      <div class="content-item" v-for="(item,index) in ratings" :key="index">
        <div class="item-img">
          <img :src="item.avatar" alt="">
        </div>
        <div class="item-content">
         <div class="item-content-head">
           <span class="content-head-name">{{item.username}}</span>
           <span class="content-head-time">{{item.rateTime}}</span>
         </div>
         <div class="item-rating-img">
           <div class="rating-img" v-if="item.score < 1">
            <img src="../assets/images/star24_off@2x.png" alt="">
            <img src="../assets/images/star24_off@2x.png" alt="">
            <img src="../assets/images/star24_off@2x.png" alt="">
            <img src="../assets/images/star24_off@2x.png" alt="">
            <img src="../assets/images/star24_off@2x.png" alt="">
          </div>
          <div class="rating-img" v-else-if="item.score < 2 && item.score >=1">
            <img src="../assets/images/star24_on@2x.png" alt="">
            <img src="../assets/images/star24_off@2x.png" alt="">
            <img src="../assets/images/star24_off@2x.png" alt="">
            <img src="../assets/images/star24_off@2x.png" alt="">
            <img src="../assets/images/star24_off@2x.png" alt="">
          </div>
           <div class="rating-img" v-else-if="item.score < 3 && item.score >=2">
            <img src="../assets/images/star24_on@2x.png" alt="">
            <img src="../assets/images/star24_on@2x.png" alt="">
            <img src="../assets/images/star24_off@2x.png" alt="">
            <img src="../assets/images/star24_off@2x.png" alt="">
            <img src="../assets/images/star24_off@2x.png" alt="">
          </div>
           <div class="rating-img" v-else-if="item.score < 4 && item.score >=3">
            <img src="../assets/images/star24_on@2x.png" alt="">
            <img src="../assets/images/star24_on@2x.png" alt="">
            <img src="../assets/images/star24_on@2x.png" alt="">
            <img src="../assets/images/star24_off@2x.png" alt="">
            <img src="../assets/images/star24_off@2x.png" alt="">
          </div>
           <div class="rating-img" v-else-if="item.score < 5 && item.score >=4">
            <img src="../assets/images/star24_on@2x.png" alt="">
            <img src="../assets/images/star24_on@2x.png" alt="">
            <img src="../assets/images/star24_on@2x.png" alt="">
            <img src="../assets/images/star24_on@2x.png" alt="">
            <img src="../assets/images/star24_off@2x.png" alt="">
          </div>
          <div class="rating-img" v-else-if="item.score === 5">
            <img src="../assets/images/star24_on@2x.png" alt="">
            <img src="../assets/images/star24_on@2x.png" alt="">
            <img src="../assets/images/star24_on@2x.png" alt="">
            <img src="../assets/images/star24_on@2x.png" alt="">
            <img src="../assets/images/star24_on@2x.png" alt="">
          </div>
          <span>{{item.deliveryTime}}分钟送达</span>
         </div>
         <div class="ratings-text">
           {{item.text}}
         </div>
         <div class="zan">
           <span class="icon-thumb_up"  v-if="item.rateType < 1"></span>
           <span class="icon-thumb_down"  v-if="item.rateType > 0"></span>
           <span class="recommend" v-for="(item1,index) in item.recommend" :key="index">{{item1}}</span>
         </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ratings',
  data () {
    return {
      msg: 'ratings',
      ratings : [],//渲染专用
      rating : [],//原数组
      content : false,//判断评论是否有内容
      type : 2,//评论的满意类型
      arr : [],//不用管有无评论的中间站数组
      arr1 : [],//只有评论的中间站数组
      arr2 : [],//满意的评论数组，
      allLength : '',//全部评论条数
      goodL : '',//满意条数
      badL : '',//不满意条数
      button1 : true,//以下判断按钮样式
      button2 : false,
      button3 : false
    }
  },
  created(){
    axios.get('./good/ratings').then( res => {
      if(res.data.code === 0){
        this.ratings = res.data.data
        this.ratings.forEach(ele => {
          ele.rateTime = this.format(ele.rateTime)
          if(ele.rateType === 0){
            this.arr2.push(ele)
          }
        });
        this.rating = this.ratings
        this.allLength = this.rating.length
        this.goodL = this.arr2.length
        this.badL = this.allLength - this.goodL
      }
    })
  },
  methods :{
    format(shijianchuo){
      function add0(m){
        return m<10?'0'+m:m
      }
      var time = new Date(shijianchuo);
      var y = time.getFullYear();
      var m = time.getMonth()+1;
      var d = time.getDate();
      var h = time.getHours();
      var mm = time.getMinutes();
      var s = time.getSeconds();
      return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
    },
    changeType(type,button){
      this.type = type
      if(button ===1){
        this.button1 = true
        this.button2 = false
        this.button3 = false
      }else if(button ===2){
        this.button1 = false
        this.button2 = true
        this.button3 = false
      }else{
        this.button1 = false
        this.button2 = false
        this.button3 = true
      }
    },
    selectContent(){
      this.content = !this.content
    }
  },
  computed : {
    selectText : function(){
      this.arr = []
      let $content = this.content
      let $type = this.type
      if(!$content){
        this.rating.filter(ele => {
          if($type === 0){
            if(ele.rateType === 0){
              this.arr.push(ele)
            }
          }else if($type === 1){
             if(ele.rateType === 1){
              this.arr.push(ele)
            }
          }else{
            this.arr.push(ele)
          }
        });
      }else{
        this.arr1 = []
        this.rating.filter(ele => {
          if(!ele.text ==''){
            this.arr1.push(ele)
          }
        })
        this.arr1.filter(ele =>{
          if($type === 0){
            if(ele.rateType === 0){
              this.arr.push(ele)
            }
          }else if($type === 1){
            if(ele.rateType === 1){
              this.arr.push(ele)
            }
          }else{
            this.arr.push(ele)
          }
        })
      }
      this.ratings = this.arr
      return 0
    }
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus">
  @import '../assets/stylus/index.styl'
  #ratings{
    position relative
    width 100%
    margin-bottom 100px
    .margin-16px{
      margin-top 16px
    }
    .color-white{
      color #ffffff
    }
    .ratings-wrapper{
      width 100%
      display flex
      .ratings-wrapper-left{
        width 274px
        margin 36px 0
        text-align center
        border-right 1px solid #d0c0cb
        h1{
          font-size 48px
          line-height 56px
          color rgb(255,153,0)
          }
        span{
          margin-top 12px
          font-size 24px
          line-height 24px
          color rgb(7,17,27)
        }
        p{
          margin-top 16px
          font-size 20px
          line-height 20px
          color rgb(147,153,159)
        }
      }
      .ratings-wrapper-right{
        box-sizing border-box
        width 475px
        padding 36px 48px
        font-size 24px
        line-height 24px
        .right-serviceScore{
          display flex
          .serviceScore-title{
            color rgb(7,17,27)
          }
          .serviceScore-img{
            margin 0 24px
            img{
              set-img(24px)
            }
          }
          .serviceScore-ratings{
            color rgb(255,153,0) 
          }
          .sell-time{
            margin-left 24px
            color rgb(147,153,159) 
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
      width 100%
      border-bottom 2px solid #ccc
      .content-head{
        .content-type{
          padding 36px
          .type-item{
            display inline-block
            font-size 28px
            padding 12px 20px
            line-height 56px
            .type-item-number{
              font-size 20px
            }
            &.active{
              color #ffffff
              background-color rgb(0,160,220)
            }
          }
          .type-item3,
          .type-item2{
            background-color rgb(233,235,237)
            margin-left 15px
          }
        }
      }
      .content-title{
        width 100%
        .content-title-wrapper{
          margin 0 36px 36px 36px
          border-top 1px solid #eeeeee
          font-size 24px
          line-height 28px
          padding 36px 0 0 0
          color rgb(147,153,159)
          .icon{
            &.active{
              color rgb(0,160,220)
            }
          }
        }
      }
    }
    .ratings-content{
      width 100%
      .content-item{
        display flex
        width 100%
        border-bottom 1px solid rgba(7,17,27,0.1)
        .item-img{
          margin 36px 24px 0 36px
          img{
            set-img(56px)
            border-radius 50%
          }
        }
        .item-content{
          width 100%
          padding 36px 36px 36px 0
          .item-content-head{
            font-size 20px
            line-height 24px
            .content-head-name{
              color rgb(7,17,27)
            }
            .content-head-time{
              float right
              color rgb(147,153,159)
            }
          }
          .item-rating-img{
            margin-top 8px
            .rating-img{
              display inline-block
              img{
                set-img(24px)
              }
            }
            span{
              font-size 20px
              line-height 24px
              color rgb(147,153,159)
            }
          }
          .ratings-text{
            font-size 24px
            line-height 32px
            margin-top 12px
            color rgb(7,17,27)
            font-weight 500
          }
          .zan{
            margin-top 16px
            color rgb(147,153,159)
            .icon-thumb_up{
              font-size 24px
              line-height 32px
              color rgb(0,160,220)
            }
            .recommend{
              font-size 18px
              line-height 32px
              padding 7px 12px
              margin-left 16px
              border 2px solid rgba(7,17,27,0.1)
            }
          }
        }
      }
    }
  }

</style>
