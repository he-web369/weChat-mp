<template>
  <div class="personal_container">
      <div class="header">
          <img :src="user.avatarUrl||'/static/imgs/personal/personal.png'" alt="12">
          <button open-type='getUserInfo' @getuserinfo='getUserInfo'>{{user.nickName||"登录"}}</button>
      </div>
      <div class="cardList">
          <div class="card" @click='scan'>
              <span>扫码看书  {{scanCode}}</span>
              <span class="more"> > </span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
   beforeMount () {
     wx.getUserInfo({
         success:(res)=>{
            this.user=res.userInfo
         }
     })  
   }, 
   methods: {
       getUserInfo(res){
           this.user=res.mp.detail.userInfo||{}
       },
       scan(){
           wx.scanCode({
               success:(res)=>{
                   this.scanCode=res.result
               }
           })
       }
   },
   data () {
       return {
           user:{},
           scanCode:''
       }
   }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
.personal_container
  .header
    padding 40rpx
    background #CD5555
    img 
      width 100rpx
      height 100rpx
      vertical-align middle
      border-radius 50% 
    button 
      display inline-block
      height 50rpx
      border-radius 10rpx
      margin-left 40rpx
      vertical-align middle  
      background rgba(255,255,255,.3)
      max-width 200rpx
      line-height 50rpx
  .cardList
    .card
      width 90%
      height 80rpx
      line-height 80rpx
      margin 10rpx auto
      border-bottom 1rpx solid #eee
      .more
        float right 
        font-size 34rpx
</style>
 