<template>
<v-app>
  <v-main>
    <top-menu/>
    <router-view fluid />
  </v-main>
</v-app>
</template>

<script>
import TopMenu from "./TopMenu";
export default {
  name: "DefaultLayout",
  components:{
    TopMenu

  }
}
</script>

<style scoped>

</style>