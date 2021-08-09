<template>
  <v-btn icon @click="changeIcon">
    <v-icon>mdi-{{icon}}</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "IconButton",
  props:{
    icon:String,
    color:String,
  },
  methods:{
    changeIcon(){
      this.$emit('changeIcon',this.icon);
    },

  }
}
</script>