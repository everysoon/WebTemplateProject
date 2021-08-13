<template>
  <v-card class="pa-5">
    <menu-title title="게시글 쓰기"/>
    <soon-radio :item="item"/>
    <v-divider/>
    <menu-title title="댓글 설정" :use="true"/>
    <v-divider/>
    <menu-title title="글쓰기 안내 문구"/>
    <v-textarea class="pl-3 pr-3" placeholder="미 입력시 '내용을 입력해주세요'가 노출됩니다."/>
  </v-card>
</template>

<script>
import MenuTitle from "./commons/MenuTitle";
import SoonRadio from "./commons/SoonRadio";

export default {
  name      : "CongratulationMenu",
  components: { SoonRadio, MenuTitle},
  data:()=>({
    item:[
      {
        label:'누구나',
        value:'anyone'
      },{
      label: '관리자만',
        value:'admin'
      }
    ]
  }),
  methods:{
    changeBoardGrant(e){
      console.log('changeBoardGrant'+e);
      this.$emit('changeBoardGrant',e);
    }
  }
}
</script>

<style scoped>

</style>