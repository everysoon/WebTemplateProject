<template>
<v-btn :class="{menu:tab,auth:!tab}" >{{title}}</v-btn>
</template>

<script>
export default {
  name: "MenuButton",
  props:{
    title:String,
    tab:Boolean,
  }
}
</script>

<style  lang="scss">
.menu{
  height: 70px;
  width: 80px;
  border:1px solid red;
  color:$gray;
}
.auth{
  padding:5px 10px;
  margin-right: 5px;
  height: 60px;
  width:50px;
  color:$dark-gray;
  border:1px solid yellow;
}
</style>