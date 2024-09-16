import {getToken,setToken,removeToken} from '@/utils/auth'

const state = {
  token:getToken()
}

const mutations = {
  setToken(state,token){
    state.token=token
    setToken(token)
  },
  removeToken(){
    //删除token
    state.token=null
    removeToken()
  }
}

const actions = {
  login(context, data) {
    // console.log(data)
    context.commit('setToken','123456')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}