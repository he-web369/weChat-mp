<template>
  <div class="firstContainer">
      <swiper :indicator-dots='current!==2' @change='handleSwiper'>
        <swiper-item>
          <img src="/static/imgs/firstView/1.jpg" alt="1">
        </swiper-item>
        <swiper-item>
          <img src="/static/imgs/firstView/2.jpg" alt="2">
        </swiper-item>
        <swiper-item>
          <img src="/static/imgs/firstView/3.jpg" alt="3">
        </swiper-item>
      </swiper> 
      <button v-show='current===2' @click='jump' class="btn">开始体验</button> 
  </div>
</template>

<script>
export default {
  methods: {
    handleSwiper(e){
      this.current=e.mp.detail.current
    },
    jump(){
      wx.navigateTo({
        url:"/pages/book-index/main"
      })
    }
  },
  data () {
    return {
      current:0
    }
  }
 }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.firstContainer
  width 100%
  height 100%
  swiper 
    width 100%
    height 100%
    img 
      width 100%
      height 100%
  .btn
    width 280rpx
    height 80rpx
    position absolute
    bottom 20rpx
    left 0
    right 0
    background rgba(255,255,255,.3)
</style>
 
 