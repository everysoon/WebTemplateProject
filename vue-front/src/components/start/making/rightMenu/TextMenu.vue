<template>
  <v-card class="pa-5">
    <menu-title :title="`${title} 텍스트`"/>
    <v-divider/>
    <soon-radio v-if="title==='타이틀'" :item="size"/>
<!--    <v-row v-if="title==='타이틀'">-->
<!--      <v-col>-->
<!--        <v-radio-group v-model="size" row @change="changeSize">-->
<!--          <v-radio label="작게" value="text-subtitle-1"/>-->
<!--          <v-radio label="크게" value="text-h4"/>-->
<!--        </v-radio-group>-->
<!--      </v-col>-->
<!--    </v-row>-->
    <soon-radio v-else :item="kinds" @changeRadio="selectList"/>
<!--    <v-row v-else>-->
<!--      <v-col>-->
<!--        <v-radio-group v-model="kinds" row @change="changeKinds">-->
<!--          <v-radio label="본문형" value="본문형"/>-->
<!--          <v-radio label="목록형" value="목록형"/>-->
<!--        </v-radio-group>-->
<!--      </v-col>-->
<!--    </v-row>-->
    <v-divider/>
    <soon-radio v-if="list" :item="listKinds"/>
<!--    <v-row v-if="kind">-->
<!--      <v-col>-->
<!--        <v-radio-group v-model="listkinds" row @change="changeListkinds">-->
<!--          <v-radio label="번호형" value="ol"/>-->
<!--          <v-radio label="기호형" value="ul"/>-->
<!--        </v-radio-group>-->
<!--      </v-col>-->
<!--    </v-row>-->
    <v-divider/>
    <soon-radio :item="align"/>
<!--    <v-row>-->
<!--      <v-col>-->
<!--        <v-radio-group v-model="align" row @change="changeAlign">-->
<!--          <v-radio label="왼쪽 정렬" value="text-left"/>-->
<!--          <v-radio label="가운데 정렬" value="text-center"/>-->
<!--          <v-radio label="오른쪽 정렬" value="text-right"/>-->
<!--        </v-radio-group>-->
<!--      </v-col>-->
<!--    </v-row>-->
    <v-text-field v-model="titleText" @input="changeText" />
  </v-card>
</template>
<script>

import SoonRadio from "@/components/start/making/rightMenu/commons/SoonRadio";
import MenuTitle from "@/components/start/making/rightMenu/commons/MenuTitle";
export default {
  name: "TextMenu",
  components: {MenuTitle, SoonRadio },
  props:{
    getClickLeftMenu:Number,
  },
  data:()=>({
    size:[
      {
        label:'작게',
        value:'text-subtitle-1'
      },
      {
        label:'크게',
        value:'text-h4'
      }
    ],
    kinds:[
      {
        label:'본문형',
        value:'본문형'
      }  ,
      {
        label:'목록형',
        value:'목록형'
      }
    ],
    listKinds:[
      {
        label:'번호형',
        value:'ol'
      }   ,
      {
        label:'기호형',
        value:'ul'
      }
    ],
    align:[
      {
        label:'왼쪽 정렬',
        value:'text-left'
      }  ,
      {
        label:'가운데 정렬',
        value:'text-center'
      },
      {
        label:'오른쪽 정렬',
        value:'text-right'
      }
    ],
    titleText:'',
    list:false
  }),
  computed:{
    title(){
       if(this.getClickLeftMenu===4) return '목록형'
      else if(this.getClickLeftMenu===3) return '본문형'
      else return '타이틀'
    }
  },
  methods:{
    selectList(e){
      console.log('selectList e?'+e);
      this.list = (e === '목록형');
      console.log('this.list?'+this.list);
    },
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