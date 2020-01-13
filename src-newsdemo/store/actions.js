import {GET_LIST,TOGGLE_MUSIC_PLAY,GET_MOVIES} from './mutation-types'
const {datas}=require('../../static/datas/list-data')
export default {
    getList({commit}){
        //触发对应的mutation
        commit(GET_LIST,{datas})
    },
    toggleMusicPlay({commit}){
        commit(TOGGLE_MUSIC_PLAY)
    },
    getMovies({commit},data){
        commit(GET_MOVIES,{data})
    }
}