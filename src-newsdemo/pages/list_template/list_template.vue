<template>
  <div @tap='jumpToDetail' class="temContainer">
      <div class="avatar_date">
          <img :src="'/static'+item.avatar" alt="头像">
          <span>{{item.date}}</span>
      </div>
      <p class="title">{{item.title}}</p>
      <img class="list_img" :src="'/static'+item.detail_img" alt="大图">
      <p class="content">{{item.detail_content}}</p>
      <div class="view_star_container" >
          <img src="/static/images/icon/star.png" alt="图片">
          <p>{{item.love_count}}</p>
          <img src="/static/images/icon/view.png" alt="图片">
          <p>{{item.attention_count}}</p>
      </div>
  </div>
</template>

<script>
export default {
  props: {
      item: Object,
      index:Number
  },
  methods: {
      jumpToDetail(){
        wx.navigateTo({
            url:'/pages/list-detail/main?index='+this.index
        })
      }
  }
 }
</script>

<style scoped>
 .temContainer{
     display: flex;
     flex-direction: column;
     border-bottom: 1rpx solid;
 }
  .avatar_date{
      padding: 10rpx;
  }
 .avatar_date img{
     width: 60rpx;
     height: 60rpx;
     vertical-align: middle;
 }
 .title{
     font-size: 40rpx;
     font-weight: bold;
     margin-left: 10rpx;
 }
 .list_img{
     width:100%;
     height: 460rpx;
 }
.content{
    font-size: 32rpx;
    text-indent: 32rpx;
    line-height: 50rpx;
    letter-spacing: 3rpx;
}
.view_star_container{
    display: flex;
    flex-direction: row;
    padding-bottom: 10rpx;
}
.view_star_container img{
    width:32rpx;
    height: 32rpx;
    vertical-align: middle;
    margin-left: 10rpx;
}
.view_star_container p{
    font-size: 24rpx;
    color: #333;
    margin-left: 10rpx;
}
</style>
 