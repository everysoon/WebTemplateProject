import Vue    from 'vue'
import Vuex   from 'vuex'
import router from '../router/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:false,
    isLoginError:false,
    allUsers:[],
    userInfo:null,
    isDrawer:false,
    leftMenuId:2,
    radioValue:'',
    startBottomPage:1,
  },
  mutations: {
    // state값을 바꿈
    loginSuccess(state,user){
      state.isLogin = true;
      state.isLoginError = false;
      state.userInfo = user;
    },
    loginError(state){
      state.isLogin=false;
      state.isLoginError = true;
    },
    logout(state){
      state.isLogin =false;
      state.isLoginError = false;
      state.userInfo = null;
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
    changeStartBottom(state,id){
      console.log('changeStartBottom',id);
      state.startBottomPage = id;
    },
    changeSoonRadio(state,e){
      state.radioValue = e;
    }
  },
  actions: {
  // 비지니스로직 관리
    login({state,commit}, obj){
      let selectedUser = null;
      // DB의 allUsers로 가져오기
      state.allUsers.forEach(user=>{
        if(user.email === obj.email) selectedUser = user;
      })
      if(selectedUser === null ||selectedUser.password !== obj.password ){
        commit('loginError');
      }else {
        commit('loginSuccess',selectedUser);
        router.push("/");
      }
    },
    logout({commit}){
      commit('logout');
      router.push("/");
    },
    getStartPage(state){
      console.log('getStartPage',state.startBottomPage);
      return state.startBottomPage;
    }
  },
  modules: {
  },
  getters:{

    getRadioValue(state){
      return state.radioValue;
    },
    getLogin(state){
      return state.isLogin;
    },

  }
})
