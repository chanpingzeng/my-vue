<template>
  <div id="add">
      <div class="wrapper">
        <i class="icon icon-remove_circle_outline"></i>
        <div>1</div>
        <i class="icon icon-add_circle"></i>
      </div>
  </div>
</template>

<script>
export default {
  name: 'add',
  data () {
    return {
      msg: 'sell'
    }
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus">
@import '../../static/style.css'
#add{
  .wrapper{
    position absolute
    right 0
    bottom 0
    height 48px
    .icon{
      line-height 48px
      color rgb(0,160,220)
    }
    .icon-remove_circle_outline{
      font-size 48px
    }
    .icon-add_circle{
      font-size 44px
      line-height 44px
    }
    div{
      display inline-block
      font-size 24px
      line-height 44px
      color rgb(147,153,159)
      margin-left 14px
      margin-right 10px
    }
  }
}
</style>
