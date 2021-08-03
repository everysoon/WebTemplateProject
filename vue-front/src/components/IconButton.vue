<template>
  <v-btn icon>
    <v-icon>mdi-{{icon}}</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "IconButton",
  props:{
    icon:String
  }
}
</script>