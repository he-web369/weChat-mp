<template>
  <div class="indexContainer" >
    <img class="index_img" :src="userInfo.avatarUrl||'/static/images/user.png'" alt="用户">
    <p class="userName">hello {{userInfo.nickName}}</p>
    <div class="goStudy" @tap='jump' >
        <p >开启mp之旅</p>
    </div>
    <button v-if='!userInfo.nickName' class="btn" open-type='getUserInfo' @getuserinfo='getUserInfo'>授权登录</button>
  </div>
</template>

<script>
export default {
    beforeMount () {
      this.catchUserInfo()
    },
    data() { 
        return {
            userInfo:{}
        }
    },
    methods: {
        jump(){
            wx.switchTab({
                url:'/pages/list/main'
            })
        },
        catchUserInfo(){
            wx.getUserInfo({
                success:(res)=>{
                    this.userInfo=res.userInfo
                },
                fail(err){}
            })  
        },
        getUserInfo(data){
            if(data.mp.detail.userInfo){
                this.catchUserInfo()
            }
        }
    }
 }
</script>

<style >
page{
    background-color: #8ed145;
}
.indexContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.index_img{
    width: 200rpx;
    height: 200rpx;
    border-radius:100rpx;
    margin:100rpx 0;
}
.userName{
    font-size: 40rpx;
    font-weight: 700;
    margin: 100rpx 0 40rpx 0;
}
.goStudy{
    width: 220rpx;
    height: 80rpx;
    border: 1rpx solid ;
    line-height: 80rpx;
    text-align: center;
    border-radius: 10rpx;
}
.btn{
    background-color: #8ed145;
    width: 220rpx;
    height: 80rpx;
    border: 1rpx solid ;
    margin-top: 20rpx;
}
</style>
 