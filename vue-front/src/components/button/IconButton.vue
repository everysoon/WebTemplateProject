<template>
  <v-btn icon v-if="!link" @click="changeIcon">
    <v-icon :size="size">mdi-{{icon}}</v-icon>
  </v-btn>
  <!--v-btn block depressed-->
  <v-btn icon v-else @click="newPageRedirect" color="white">
    <v-icon :size="size">mdi-{{icon}}</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "IconButton",
  props:{
    icon:String,
    color:String,
    size:String,
    link:Boolean,
    goToLink:String
  },
  methods:{
    changeIcon(){
      this.$emit('changeIcon',this.icon);
    },
    newPageRedirect(){
      window.open(this.goToLink,"_blank");
    }

  }
}
</script>