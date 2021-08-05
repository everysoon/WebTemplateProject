<template>

  <v-row justify="center">
    <v-col cols="auto" v-for="(item,i) in items" :key= i >
      <v-btn :class="whatColor"
             :to="item.link"
             :style="[i>1 ? ['margin-right:10px; margin-left:10px']: {}]"
             x-large plain text tile
      >{{item.title}}</v-btn>
    </v-col>
  </v-row>

  <!--
  items : Array [
    Object: {
      title : String,
      link : String,
      color: String
    }
  ]
  -->
</template>

<script>
export default {
  name: "ColorButton",
  data:()=>({
  }),
  props:{
    items:Object,
  },
  methods:{
    whatColor(){
      return this.item.color+'--text font-weight-bold'
    }
  }
}
</script>

<style scoped>

</style>