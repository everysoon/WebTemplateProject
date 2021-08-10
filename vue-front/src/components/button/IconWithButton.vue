<template>
  <v-btn rounded :width="size">
    <v-icon>mdi-{{icon}}</v-icon>
    &nbsp;{{buttonName}}
  </v-btn>
</template>

<script>
export default {
  name: "IconWithButton",
  props:{
    icon:String,
    buttonName:String,
    size:Number
  }
}
</script>

<style scoped>

</style>