import {GET_LIST,TOGGLE_MUSIC_PLAY,GET_MOVIES} from './mutation-types'

export default {
    [GET_LIST](state,{datas}){
        state.listTmp=datas
    },
    [TOGGLE_MUSIC_PLAY](state){
        state.musicPlay=!state.musicPlay
    },
    [GET_MOVIES](state,{data}){
        state.movies=data
    }
}