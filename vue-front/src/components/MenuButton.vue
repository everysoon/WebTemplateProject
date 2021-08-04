<template>
  <router-link v-if="item.tab" :to="item.link"  class="mr-2 ml-2 text-decoration-none" >
    <v-btn class="font-weight-bold text--darken-3 gray--text" tile text x-large>
      {{item.title}}
    </v-btn>
  </router-link>
    <router-link v-else :to="item.link" class="text-decoration-none mt-5 mb-5 ml-1 mr-1" >
      <v-btn  class="pink--text text--darken-4 pink lighten-3"  depressed tile >
      {{item.title}}
      </v-btn>
    </router-link>

</template>

<script>
export default {
  name: "MenuButton",
  props:{
    item : Object
  }
}
</script>

<style scoped lang="scss">
.v-btn:hover:before{

}
.v-btn:focus:before{
  color:black;
}
.logo{
  text-decoration: none;
}
.active {
  color: white;
  background-color: red;
}

.exact-active {
  color: white;
  background-color: blue;
}

</style>