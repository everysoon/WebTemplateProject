<template>
<<<<<<< HEAD
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
=======
<router-view/>
</template>

<script>
export default {
  name: "AuthLayout"
>>>>>>> 9341e59035599ee62c980c994ae1147654be5532
}
</script>

<style scoped>

</style>