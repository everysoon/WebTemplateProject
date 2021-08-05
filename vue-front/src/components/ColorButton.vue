<template>

  <v-row justify="center" class="mt-3">
    <v-col cols="auto" v-for="(item,i) in items" :key= i >
      <v-btn class="font-weight-bold teal lighten-1 white--text"
             @click="onClickColorButton(i)"
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
      kind: String
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
    items:Array,
  },

  methods:{
    onClickColorButton(index){
      console.log("in colorButton "+this.items[index].kind);
      this.$emit('whatKindColorButton',this.items[index].kind);
    }
  }
}
</script>

<style scoped>

</style>