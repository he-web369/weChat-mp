<template>
  <div v-if='movies'>
    <div @click='jumpToMovie(index)'  v-for="(item ,index) in movies" :key='index' class="movies_container">
      <img :src="item.images.large" alt="index">
      <div class="movies_info">
        <p class="name">{{item.title}}</p>
        <p class="year">年份：{{item.year}}</p>
        <p class="director">导演：{{item.directors[0].name}}</p>
      </div>
      <p class="score">{{item.rating.average}}</p>
    </div>
  </div>
</template>

<script>
const MOVIE_URL='http://t.yushu.im/v2/movie/top250'
import {mapState,mapActions} from 'vuex'
export default {
  beforeMount () {
    //ajax请求电影数据
    this.$fly.get(MOVIE_URL).then(res=>{
      const {data}=res
      this.getMovies(data.subjects)
    })
  },
  computed: {
    ...mapState(['movies'])
  },
  methods: {
    ...mapActions(['getMovies']),
    jumpToMovie(index){
      wx.navigateTo({
        url:'/pages/movie-detail/main?index='+index
      })
    }
  } 
 }
</script>

<style scoped>
 .movies_container{
   display: flex;
   padding: 10rpx;
   border: 1rpx solid;
 }
 .movies_container img{
   width: 128rpx;
   height: 128rpx ;
   margin-right: 20rpx ;
 }
 .movies_info{
   width: 70%;
 }
 .name{
   font-size: 32rpx;
   color: #333;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
 }
 .year{
   font-size: 28rpx;
   color: #333;
   margin: 10rpx 0
 }
 .director{
   font-size: 28rpx;
   color: #333;
 }
 .score{
   font-size: 40rpx;
   font-weight: bold;
   color: red;
 }
</style>
 