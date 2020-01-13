import Vue from 'vue'
import Index from './index.vue'
Vue.config.errorHandler=function(err){
    if(console&&console.error){
        console.error(err)
    }
}
const index=new Vue(Index)
index.$mount()