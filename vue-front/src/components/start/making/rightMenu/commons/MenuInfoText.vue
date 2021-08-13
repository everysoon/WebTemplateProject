<template>
<v-row class="pl-3 pt-3">
  <v-col>
    <p id="infoText" v-for="i in info" :key="i">{{i}}</p>
  </v-col>
</v-row>
</template>

<script>
export default {
  name: "MenuInfoText",
  props:{
    info:Array
  }
}
</script>

<style scoped>
#infoText{
  font-size: 12px;
  color: #5A5A5A;
}
</style>