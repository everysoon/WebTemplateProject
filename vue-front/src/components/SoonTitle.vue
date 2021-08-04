<template>
  <router-link to="/">
      <v-img   alt="logoImg" src="@/assets/logo.png"  @click="goToHome" @mouseover="hoverLogo" max-width="150"/>
  </router-link>
</template>

<script>
export default {
  name: "Title",
  methods:{
    goToHome(){
      console.log("goToHome");
    },
    hoverLogo(e){
      e.target.style.cursor = "pointer"
    }
  }
}
</script>

<style scoped>

</style>