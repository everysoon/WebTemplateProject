<template>
  <v-app >
    <v-app-bar-nav-icon  @click="clickDrawer" />
    <soon-title class="d-flex mt-15 mb-5 justify-center"/>
    <drawer :value="drawer" @clickDrawer="changeDrawer"/>
    <router-view/>
  </v-app>
</template>

<script>
import SoonTitle from '@/components/button/SoonTitle'
import Drawer    from "@/components/Drawer";

export default {
  name      : "AuthLayout",
  components: {Drawer, SoonTitle},
  data:()=>({
    drawer:null
  })
  ,
  methods:{
    clickDrawer(){
      this.drawer = !this.drawer;
    },
    changeDrawer(val) {
      this.drawer = !val;
    }
  }
}
</script>

<style scoped>

</style>