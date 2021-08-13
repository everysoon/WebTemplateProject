import Vue  from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:false,
    isDrawer:false,
    leftMenuId:1,
    radioValue:''
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
    clickLeftMenu(state,id){
      state.leftMenuId = id;
      console.log('leftMenuId'+state.leftMenuId);
    },
    changeSoonRadio(state,e){
      state.radioValue = e;
    }

  },
  actions: {

  },
  modules: {
  },
  getters:{
    getClickLeftMenu(state){
      console.log('getClickLeftMenu'+state.leftMenuId);
      return state.leftMenuId;
    },
    getRadioValue(state){
      return state.radioValue;
    }
  }
})
