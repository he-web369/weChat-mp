<template>
  <div class="detailContainer" v-if='item.detail_img'>
      <img  class="detail_img" :src="'/static'+item.detail_img" alt="23">
      <img 
      @click='togglePlay'
      class="music_img" 
      :src="musicPlay?'/static/images/music/music-stop.png':'/static/images/music/music-start.png'" alt="">
      <div class="header">
        <img :src="'/static'+item.avatar"  alt="3">
        <span>{{item.author}}</span>
        <span>发布于</span>
        <span>{{item.date}}</span>
      </div>
      <p class="title">{{item.title}}</p>
      <div class="shareContainer">
        <div >
          <img @click='handleShare' src="/static/images/icon/share.png" alt="2">
          <img @tap='handleCollected' v-if="!isCollected" src="/static/images/icon/collection-anti.png" alt="1">
          <img @tap='handleCollected' v-else src="/static/images/icon/collection.png" alt="1">
        </div>
          <div class="line"></div>
      </div>
        <button open-type='share' class="btn">转发此文章</button>
        <p class="contents">{{item.detail_content}}</p>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  computed: {
    ...mapState(['listTmp','musicPlay'])
  },
  beforeMount () {
    this.index=this.$mp.query.index
    this.item=this.listTmp[this.index]
    const collected=wx.getStorageSync('collected')
    this.isCollected=collected?collected[this.index]:false
  },
  data () {
    return {
      item:{},
      isCollected:false,
    }
  },
  methods: {
    ...mapActions(['toggleMusicPlay']),
    handleCollected(){
      this.isCollected=!this.isCollected
      wx.showToast({
        title:this.isCollected?'收藏成功':'取消收藏',
        icon:this.isCollected?'success':'none'
      })
      const oldStorage=wx.getStorageSync('collected')
      if(!oldStorage){
        wx.setStorageSync('collected',{[this.index]:this.isCollected})
      }else{
        wx.setStorageSync('collected',{...oldStorage,[this.index]:this.isCollected})
      }
    },
    togglePlay(){
      this.toggleMusicPlay()
      if(this.musicPlay){
        wx.playBackgroundAudio({
          dataUrl:'http://music.163.com/song/media/outer/url?id=476592630.mp3'
        })
      }else{
        wx.pauseBackgroundAudio()
      }
    },
    handleShare(){
      wx.showActionSheet({
        itemList:['分享到微博','分享到QQ空间','分享到微信']
      })
    }
  }
 }
</script>

<style scoped>
.detailContainer{
  display: flex;
  flex-direction: column;
}
.detail_img{
  width: 100%;
  height: 460rpx;
}
.music_img{
  width: 60rpx;
  height: 60rpx;
  position: absolute;
  top: 20rpx;
  right: 20rpx;
}
.header{
  padding: 10rpx
}
.header img{
  width:64rpx;
  height: 64rpx;
  vertical-align: middle;
}
.header span{
  font-size:28rpx;
  margin-left: 6rpx;
}
.title{
  font-size: 40rpx;
  font-weight: bold;
  padding:10rpx;
}
.shareContainer{
  position: relative;
}
.shareContainer img{
  width: 90rpx ;
  height: 90rpx;
  margin-right: 30rpx;
  float: right;
}
.line{
  position: absolute;
  top: 45rpx;
  left: 5%;
  height: 1px;
  width: 90%;
  background: #333;
  z-index:-1;
}
.btn {
  width: 220rpx;
  height: 80rpx;
  margin:10rpx 0 0 50%;
}
.contents{
  font-size: 32rpx;
  text-indent:32rpx;
  letter-spacing: 3rpx;
  line-height: 50rpx;
}
</style>
 