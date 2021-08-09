<template>
  <v-app>
  <start-bar  @clickDrawer="changeDrawer" title="Template01.임시"/>
    <drawer :value="drawer" @clickDrawer="changeDrawer"/>
    <v-main>
      <start-menu @clickStartMenu="clickStartMenu"/>
      <v-container fluid>
    <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import StartMenu from "../components/start/StartMenu";
import StartBar  from "../components/start/StartBar";
import Drawer    from "../components/Drawer";

export default {
  name: "StartLayout",
  components: {Drawer, StartBar, StartMenu},
  data:()=>({
    drawer:null
  }),
  methods:{
    changeDrawer(val) {
      this.drawer = !val;
      console.log("this.drawer?"+this.drawer);
    },
    clickStartMenu(id){
      this.$router.push('/start/'+id);
    }
  }
}
</script>

<style scoped>

</style>