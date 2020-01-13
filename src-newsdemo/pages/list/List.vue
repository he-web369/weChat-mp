<template>
  <div class="listContainer">
      <swiper  indicator-dots indicator-active-color='orange' autoplay circular>
        <swiper-item>
          <img src="/static/images/detail/carousel/01.jpg" alt="轮播">
        </swiper-item>
        <swiper-item>
          <img src="/static/images/detail/carousel/02.jpg" alt="轮播">
        </swiper-item>
        <swiper-item>
          <img src="/static/images/detail/carousel/03.jpg" alt="轮播">
        </swiper-item>
        <swiper-item>
          <img src="/static/images/detail/carousel/04.jpg" alt="轮播">
        </swiper-item>
      </swiper>
      <ListTemplate  v-for="(item ,index) in listTmp" :key='index' :item='item' :index='index'/>    
  </div>
</template>

<script>
import ListTemplate from '../list_template/list_template'
import {mapState,mapActions} from 'vuex'
export default {
  components: {
    ListTemplate
  },
  methods: {
    ...mapActions(['getList']),
    
  },
  beforeMount () {
      this.getList()
  },
  computed: {
      ...mapState(['listTmp'])
  }
 }
</script>

<style >
.listContainer swiper{
  width: 100%;
  height: 400rpx;
}
.listContainer swiper img{
  width: 100%;
  height: 100%;
}
</style>
 