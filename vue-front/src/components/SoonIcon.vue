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
    iconColor:''
  }),
  props:{
    iconColor:String
  },
  computed:{
    whatColor:function(){
      console.log(this.iconColor);
      return this.iconColor+'--text'
    }
  }
}
</script>

<style scoped>

</style>