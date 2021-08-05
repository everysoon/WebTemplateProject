import Vue  from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:false,
    isDrawer:false,
  },
  mutations: {
    setIsLogin(state,isLogin){
      state.isLogin = isLogin;
    },
    changeDrawer(state){
      console.log(state.isDrawer)
      state.isDrawer = !state.isDrawer;
      console.log(state.isDrawer)
    },

  },
  actions: {
  },
  modules: {
  }
})
