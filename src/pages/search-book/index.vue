<template>
  <div class="search_container" >
    <input @confirm='handleConfirm' @input='msg=""'
    confirm-type="搜索" v-model="searchContent" type="text" placeholder="please enter keyword" 
    placeholder-style="text-align:center;font-size:30rpx;">
    <span @click='searchContent=""' class="clear" v-show="searchContent"> X </span>
    <BookList :list='books'/>
    <p v-if="msg" class="msg">{{msg}}</p>
  </div>
</template>

<script>
import BookList from '../book-list/index'
export default {
   data () {
     return {
       searchContent:'',
       books:[],
       msg:''
     }
   },
   methods: {
     handleConfirm(e){
       const data={req:this.searchContent}
       wx.request({
         url:'http://localhost:3000/searchBooks',
         data,
         success:(res)=>{
           this.books=res.data
           if(!this.books.length){
             this.msg='无搜索结果'
           }else{
             this.msg=''
           }
         }
       })
     }
   },
   components: {
     BookList
   }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
 .search_container
   width 80%
   height 80rpx
   margin 10rpx auto 
   border-bottom 1rpx solid #eeeeee
   position relative
   input 
     height 100%
     width 100%
   .clear
     width 50rpx
     height 50rpx
     position absolute
     top 22rpx 
     right 22rpx
     z-index 10
   .msg
     font-weight 700
     color #aaa
     text-align center
</style>
 