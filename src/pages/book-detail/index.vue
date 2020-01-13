<template>
  <div v-if="item.title" class="detailContainer">
      <div class="bookInfo">
          <h1>{{item.title}}</h1>
          <img :src="item.image" :alt="item.title">
          <div class="info">
              <p>作者：{{item.author}}</p>
              <p>出版社：{{item.publisher}}</p>
              <p>出版日期：{{item.pubdate}}</p>
              <p>定价：{{item.price}}</p>
          </div>
          <button class="btn" open-type='share'>分享给好友</button>
          <div class="content">
              <article>
                  <h2>作者简介</h2>
                  <section>
                      {{item.author_intro}}
                  </section>
              </article>
              <article>
                  <h2>内容简介</h2>
                  <section>
                      {{item.summary}}
                  </section>
              </article>
          </div>
      </div>
  </div>
</template>

<script>
import datas from '../../../static/datas/data.json'
export default {
   beforeMount () {
       this.item=datas[this.$mp.query.index]
       wx.setNavigationBarTitle({
         title:this.item.title
       })
   },
   data () {
       return {
           item:{}
       }
   },
   onShareAppMessage(res){
     return {
       title:this.item.title,
       path:'/pages/book-detail/main'
     }
   }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.detailContainer
  .bookInfo
    display flex
    flex-direction column
    h1 
      text-align center
      font-size 50rpx
      font-weight 700
      margin 10rpx 0
    img 
      width 70%
      height 700rpx
      margin 0 auto   
    .info
      margin-left 15%
      p
        line-height 50rpx
    .btn
      width 70%
      margin 10rpx auto
    .content
      width 70%
      margin 30rpx auto
      article
        margin-top 50rpx
        h2
          font-size 30rpx
          font-weight 700
          color #02a774
          text-align center
        section 
          font-size 28rpx
          text-indent 28rpx

</style>
 