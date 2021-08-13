<template>
  <router-link to="/">
      <v-img alt="logoImg"
             :src="require('@/assets/logo.jpg')"
             @click="goToHome"
             @mouseover="hoverLogo"
             :max-width="home?150:250"
      />
  </router-link>
</template>

<script>
export default {
  name: "Title",
  data:()=>({

  }),
  methods:{
    goToHome(){
      console.log("goToHome");
    },
    hoverLogo(e){
      e.target.style.cursor = "pointer"
    },
  },
  props:{
    home:Boolean
  },

}
</script>

<style scoped>

</style>