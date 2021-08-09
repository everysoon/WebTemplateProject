<template>
  <v-btn rounded>
    <v-icon>mdi-{{icon}}</v-icon>
    &nbsp;{{buttonName}}
  </v-btn>
</template>

<script>
export default {
  name: "IconWithButton",
  props:{
    icon:String,
    buttonName:String
  }
}
</script>

<style scoped>

</style>