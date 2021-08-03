<template>
  <v-card class="overflow-hidden">
    <v-app-bar
        color="lightCoral"
    >
      <v-app-bar-title>Title</v-app-bar-title>
      <menu-button title="시작하기" tab="true"/>
      <menu-button title="활용하기" tab="true"/>
      <menu-button title="자랑하기" tab="true"/>
      <menu-button title="공지/안내" tab="true"/>
      <v-spacer/>
      <div v-if="!login">
      <menu-button title="로그인" tab="false"/>
      <menu-button title="회원가입" tab="false"/>
      </div>
      <div v-else>
        <menu-button title="마이페이지" tab="false"/>
      </div>
    </v-app-bar>
    <v-sheet
        id="scrolling-techniques-3"
        class="overflow-y-auto"
        max-height="600"
    >
    </v-sheet>
  </v-card>
</template>

<script>
import MenuButton from "../../components/MenuButton";
export default {
  name: "TopMenu",
  components: {MenuButton},
  data:()=>({
    login:false,
  })
}
</script>

<style scoped>

</style>