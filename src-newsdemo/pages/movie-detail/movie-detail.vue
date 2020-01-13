<template>
  <div v-if='item.images'>
      <div class="movieDetail_container">
          <img :src="item.images.large" alt="">
          <p class="movie_name">{{item.title}}</p>
          <p class="score">评分：{{item.rating.average}}</p>
          <p class="casts">主演：{{item.casts[1].name}} {{item.casts[2].name}}</p>
          <p class="director">导演：{{item.directors[0].name}}</p>
          <button class="btn">点击观影</button>
      </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            item:{}
        }
    },
    beforeMount () {
        const index=this.$mp.query.index
        this.item=this.$store.state.movies[index]
    }
 }
</script>

<style scoped>
 .movieDetail_container{
     display: flex;
     flex-direction: column;
     padding: 10%;
 }
.btn{
    width: 100%;
    height: 80rpx;
    margin-top: 20rpx;
    background: orangered;
}
.movie_name{
    font-weight: 700;
    font-size: 40rpx;
    text-align: center;
    margin-top:20rpx;
}
.casts{
    margin: 20rpx 0;
}
.score{
    margin: 20rpx 0 0 0;
}
</style>
 