<template>
<v-card class="pa-5">
  <v-card-title class="font-weight-black">타이틀 텍스트</v-card-title>
  <v-divider/>
  <v-row>
    <v-col>
      <v-radio-group v-model="size" row @change="changeTitleSize">
        <v-radio label="작게" value="text-subtitle-1"/>
        <v-radio label="크게" value="text-h4"/>
      </v-radio-group>
    </v-col>
  </v-row>
  <v-divider/>
  <v-row>
    <v-col>
      <v-radio-group v-model="align" row @change="changeTitleAlign">
        <v-radio label="왼쪽 정렬" value="text-left"/>
        <v-radio label="가운데 정렬" value="text-center"/>
        <v-radio label="오른쪽 정렬" value="text-right"/>
      </v-radio-group>
    </v-col>
  </v-row>
  <v-text-field v-model="titleText" @input="changeTitleText" />
</v-card>
</template>

<script>
export default {
  name: "TitleText",
  data:()=>({
    size:'',
    align:'',
    titleText:''
  }),
 methods:{
    changeTitleText(e){
      console.log("changeTitleText"+e);
      this.$emit('changeTitleText',e);
    },
   changeTitleAlign(e){
     console.log("changeTitleAlign"+e);
     this.$emit('changeTitleAlign',e);
   },
   changeTitleSize(e){
     console.log("changeTitleSize"+e);
     this.$emit('changeTitleSize',e);
   }
 }
}
</script>

<style scoped>

</style>