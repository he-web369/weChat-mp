<template>
  <div class="book_list_container" v-if="list.length">
      <div class="book_item" v-for="(item,index) in list" :key="index">
            <img class="book_img" :src="item.image" :alt="index">
            <div class="info">
                <p >{{item.title}}</p>
                <p >作者：{{item.author}}</p>
                <p >出版社：{{item.publisher}}</p>
            </div>
          <p class="price">{{item.price}}</p>
      </div>
  </div>
</template>

<script>
export default {
   mounted () {

       this.list=this.$mp?JSON.parse(this.$mp.query.list):[]
       wx.setNavigationBarTitle({
         title:this.$mp?"图书列表":'其他图书'
       })
   },
   data () {
       return {
           list:[]
       }
   },
   props: ['list']
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.book_list_container
  .book_item
    display flex
    padding 10rpx
    border-bottom 1rpx solid
    img 
      width 140rpx
      height 140rpx
      margin-right 20rpx
    .info
      width 70%
      font-size 30rpx
      line-height 50rpx
    .price
      color red
      font-size 40rpx
      font-weight bold    
</style>
 