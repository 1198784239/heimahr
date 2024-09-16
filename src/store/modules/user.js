import {getToken,setToken,removeToken} from '@/utils/auth'
import  {login}  from "@/api/user";
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
  async login(context, data) {
    console.log(data)
    // 调用接口
    const token =  await login(data)
    context.commit('setToken',token)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}