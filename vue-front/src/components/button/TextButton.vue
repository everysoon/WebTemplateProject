<template>
  <v-btn  class="pink--text text--darken-4 pink lighten-3
        mt-5 mb-5 ml-1 mr-1" depressed tile plain disabled >
    {{title}}
  </v-btn>
</template>

<script>
export default {
  name: "TextButton",
  props:{
    title:String
  }
}
</script>

<style scoped>

</style>