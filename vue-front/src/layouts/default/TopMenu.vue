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
      <div v-if="!login">
      <menu-button :item="menu[4]"/>
      <menu-button :item="menu[5]"/>
      </div>
      <div v-else>
        <menu-button :item="menu[6]"/>
      </div>
      <v-spacer/>
    </v-app-bar>
</template>

<script>
import MenuButton from "@/components/MenuButton";
import SoonTitle  from "@/components/SoonTitle";

export default {
  name: "TopMenu",
  components: {SoonTitle, MenuButton},
  data:()=>({
    login:false,
    menu:[
      {
        title:"시작하기",
        tab:true,
        link:"/start"
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
        link:"/qna/notice"
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
    ]
  })
}
</script>

<style scoped>

</style>