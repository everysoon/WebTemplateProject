<template>
  <v-app>
    <start-bar @clickDrawer="changeDrawer" title="Template01.임시"/>
    <drawer :value="drawer" @clickDrawer="changeDrawer"/>
    <v-main>
      <start-menu/>
      <v-container fluid>
<!--        <router-view/>-->
        <start-bottom-layout :clickMenu="startBottomPage" />
      </v-container>
    </v-main>
    <soon-footer/>
  </v-app>
</template>

<script>
import StartMenu         from "../../components/start/StartMenu";
import StartBar          from "../../components/start/StartBar";
import Drawer            from "../../components/Drawer";
import SoonFooter        from "@/components/SoonFooter";
import StartBottomLayout from "@/layouts/start/StartBottomLayout";
import {mapState}        from 'vuex';

export default {
  name: "StartLayout",
  components: {StartBottomLayout, SoonFooter, Drawer, StartBar, StartMenu},
  data: () => ({
    drawer: null
  }),
  computed:{
...mapState(['startBottomPage'])
  },
  methods: {
    changeDrawer(val) {
      this.drawer = !val;
    },
  }
}
</script>

<style scoped>

</style>