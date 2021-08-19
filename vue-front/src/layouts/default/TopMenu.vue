<template>
    <v-app-bar
        color="white rounded-0"
        flat
    >
      <v-spacer/>
      <soon-title :home="true"/>
      <div v-for="(m,index) in menu " :key="index">
        <menu-button v-if="index<4" :item="m"/>
      </div>
      <v-spacer/>
      <div v-if="isLogin">
        <text-button :title="`${userInfo.name}님`"/>
        <menu-button :item="menu[6]"/>
        <menu-button :item="menu[7]"/>
      </div>
      <div v-else>
        <menu-button :item="menu[4]"/>
        <menu-button :item="menu[5]"/>
      </div>
      <v-spacer/>
    </v-app-bar>
</template>

<script>
import MenuButton from "@/components/button/MenuButton";
import SoonTitle  from "@/components/button/SoonTitle";
import {mapState} from 'vuex'
import TextButton from "../../components/button/TextButton";

export default {
  name: "TopMenu",
  components: {TextButton, SoonTitle, MenuButton},
  computed:{
    ...mapState(['isLogin','userInfo'])
  },
  data:()=>({
    menu:[
      {
        title:"시작하기",
        tab:true,
        link:"/start/1"
      },
      {
        title:"활용하기",
        tab:true,
        link:"/util"
      },
      {
        title:"자랑하기",
        tab:true,
        link:"/affect"
      },
      {
        title:"공지/안내",
        tab:true,
        link:"/qna"
      },
      {
        title:"로그인",
        tab:false,
        link:"/auth/sign-in"
      },
      {
        title:"회원가입",
        tab:false,
        link:"/auth/sign-up"
      },
      {
        title:"마이페이지",
        tab:false,
        link:"/mypage"
      },
      {
        title:"로그아웃",
        tab:false,
        link:"/logout"
      },
    ]
  })
}
</script>

<style scoped>

</style>