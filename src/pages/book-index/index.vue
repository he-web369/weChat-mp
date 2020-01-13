<template>
  <div class="bookContainer">
      <swiper indicator-dots autoplay circular>
        <swiper-item v-for="(item,index) in carousel" :key="index">
            <img :src="item.image" :alt="index">    
        </swiper-item>    
      </swiper>
      <div class="booksList">
          <div class="nav">
              <span>全部商品</span>
              <span class="more" @click='jumpTolist(booksArr)'> >> </span>
          </div>
          <div class="list">
              <div @click='jumpToDetail(index)' class="book-item" v-for="(item,index) in booksArr" :key="index">
                  <img :src="item.image" :alt="index">
                  <p>《{{item.title}}》</p>
                  <p>作者：{{item.author}}</p>
              </div>
          </div>
      </div>    
  </div>
</template>

<script>
import datas from '../../../static/datas/data.json'
export default {
   data () {
       return {
           booksArr:datas
       }
   },
   computed: {
       carousel(){
           return this.booksArr.slice(0,4)
       }
   },
   methods: {
       jumpToDetail(index){
           wx.navigateTo({
               url:"/pages/book-detail/main?index="+index
           })
       },
       jumpTolist(list){
           wx.navigateTo({
               url:'/pages/book-list/main?list='+JSON.stringify(list)
           })
       }
   }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.bookContainer
  width 100%
  height 100%
  swiper 
    img 
      width 100%
      height 400rpx
  .booksList
    .nav
      padding 10rpx
      .more
        float right
        font-size 34rpx
    .list
      display flex
      flex-wrap wrap
      .book-item
        width 50%
        display flex
        flex-direction column
        align-items center
        border-bottom 1rpx solid #eee
        box-sizing border-box
        &:nth-child(2n+1)
          border-right 1rpx solid #eee
        img 
          width 200rpx
          height 200rpx
        p 
          font-size 24rpx
          line-height 50rpx

</style>
 