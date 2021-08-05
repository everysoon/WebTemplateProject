<template>
  <div>
    <v-icon x-large :color="iconColor">mdi-ring</v-icon>
<div :class="whatColor">
    <h3 class="float-left">Wedding</h3>
    <h6 class=" ml-1">soon</h6>
</div>
  </div>
</template>

<script>
export default {
  name: "SoonIcon",
  data:()=>({
    myColor:''
  }),
  props:{
    iconColor:String
  },
  methods:{
    whatColor:function(){
      console.log(this.iconColor);
      this.myColor = this.iconColor+'--text'
      return this.myColor;
    }
  }
}
</script>

<style scoped>

</style>