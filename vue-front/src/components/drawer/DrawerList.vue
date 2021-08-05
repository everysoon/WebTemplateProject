<template>
  <v-list dense rounded>
    <v-list-item
        class="mt-2 mb-2 pink--text text--darken-4 font-weight-bold text-caption"
        v-for="item in items"
        :key="item.title"
        :to ="item.to"
        link>
      <v-icon color="pink darken-4">{{item.icon}}</v-icon>
      <v-list-item-content class="text-center">
        <v-list-item-title>{{item.title}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "DrawerList",
  data:()=>({
    items:[
      {
        title:"홈",
        icon:"mdi-home",
        to:"/"
      },
      {
        title:"시작하기",
        icon:"mdi-arrow-bottom-right-thick",
        to:"/start"
      },
      {
        title:"활용하기",
        icon:"mdi-chat-alert",
        to:"/util"
      },
      {
        title:"자랑하기",
        icon:"mdi-charity",
        to:"/affect"
      },
      {
        title:"공지/문의",
        icon:"mdi-bell",
        to:"/qna"
      },
      {
        title:"마이페이지",
        icon:"mdi-account",
        to:"/mypage"
      }
    ],
  })
}
</script>

<style scoped>

</style>