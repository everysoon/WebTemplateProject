<template>
  <v-app>
    <start-bar @clickDrawer="changeDrawer" title="Template01.임시"/>
    <drawer :value="drawer" @clickDrawer="changeDrawer"/>
    <v-main>
      <start-menu @clickStartMenu="clickStartMenu"/>
      <v-container fluid>
<!--        <router-view/>-->
        <start-bottom-layout :clickMenu="clickMenu" />
      </v-container>
    </v-main>
    <soon-footer/>
  </v-app>
</template>

<script>
import StartMenu from "../../components/start/StartMenu";
import StartBar from "../../components/start/StartBar";
import Drawer from "../../components/Drawer";
import SoonFooter from "@/components/SoonFooter";
import StartBottomLayout from "@/layouts/start/StartBottomLayout";

export default {
  name: "StartLayout",
  components: {StartBottomLayout, SoonFooter, Drawer, StartBar, StartMenu},
  data: () => ({
    drawer: null,
    clickMenu:1,
  }),
  methods: {
    changeDrawer(val) {
      this.drawer = !val;
    },
    clickStartMenu(id) {
      this.clickMenu = id;
      // this.$router.push('/start/' + id);
    }
  }
}
</script>

<style scoped>

</style>