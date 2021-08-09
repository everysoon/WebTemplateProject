<template>
  <v-card class="pa-5">
    <v-card-title class="font-weight-black">{{title}} 텍스트</v-card-title>
    <v-divider/>
    <v-row v-if="title==='타이틀'">
      <v-col>
        <v-radio-group v-model="size" row @change="changeSize">
          <v-radio label="작게" value="text-subtitle-1"/>
          <v-radio label="크게" value="text-h4"/>
        </v-radio-group>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col>
        <v-radio-group v-model="kinds" row @change="changeKinds">
          <v-radio label="본문형" value="본문형"/>
          <v-radio label="목록형" value="목록형"/>
        </v-radio-group>
      </v-col>
    </v-row>
    <v-divider/>
    <v-row v-if="kind">
      <v-col>
        <v-radio-group v-model="listkinds" row @change="changeListkinds">
          <v-radio label="번호형" value="ol"/>
          <v-radio label="기호형" value="ul"/>
        </v-radio-group>
      </v-col>
    </v-row>
    <v-divider/>
    <v-row>
      <v-col>
        <v-radio-group v-model="align" row @change="changeAlign">
          <v-radio label="왼쪽 정렬" value="text-left"/>
          <v-radio label="가운데 정렬" value="text-center"/>
          <v-radio label="오른쪽 정렬" value="text-right"/>
        </v-radio-group>
      </v-col>
    </v-row>
    <v-text-field v-model="titleText" @input="changeText" />
  </v-card>
</template>

<script>
export default {
  name: "TextMenu",
  props:{
    title:String
  },
  data:()=>({
    kinds:'',
    listkinds:'',
    align:'',
    titleText:'',
    size:'',
    list:[]
  }),
  computed:{
    kind(){
      return this.kinds === '목록형'
    }
  },
  methods:{
    changeText(e){
      console.log("changeTitleText"+e);
      this.$emit('changeText',e);
    },
    changeAlign(e){
      console.log("changeTitleAlign"+e);
      this.$emit('changeAlign',e);
    },
    changeKinds(e){
      console.log("changeTitleKinds"+e);
      this.$emit('changeKinds',e);
    },
    changeSize(e){
      console.log("changeTitleSize"+e);
      this.$emit('changeSize',e);
    },
    changeListkinds(e){
      this.list.push({text:this.titleText});
      console.log("changeTitleListkinds"+e+this.list);
      this.$emit('changeListkinds',e,this.list);
    }
  }
}
</script>

<style scoped>

</style>