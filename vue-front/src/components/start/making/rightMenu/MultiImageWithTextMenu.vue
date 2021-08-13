<template>
  <v-card class="pa-5">
    <menu-title title="이미지 여러장" :image="true" :subTitleUse="true" sub-title="이미지와 텍스트를 함께 추가합니다."/>
    <v-divider/>
   <soon-radio :item="item"/>
    <v-divider/>
    <v-row class="pa-5">
      <v-checkbox class="mr-5" v-model="titleWrite" label="타이틀쓰기"/>
      <v-checkbox v-model="infoWrite" label="설명쓰기"/>
    </v-row>
    <v-divider/>
    <v-row class="pl-5 pt-5">
      <v-col cols="3">
        <v-btn height="150">이미지 올리기</v-btn>
      </v-col>
      <v-col>
        <v-text-field placeholder="타이틀"/>
        <v-text-field placeholder="설명을 입력하세요"/>
      </v-col>
    </v-row>
    <bar-button name="목록 추가하기"/>
  </v-card>
</template>

<script>
import MenuTitle from "./commons/MenuTitle";
import SoonRadio from "./commons/SoonRadio";
import BarButton from "./commons/BarButton";

export default {
  name: "MultiImageWithTextMenu",
  components: {BarButton, SoonRadio, MenuTitle},
  data: () => ({
    item:[
      {
        label:'이미지 왼쪽',
        value:'left'
      }  ,
      {
        label:'이미지 오른쪽',
        value:'right'
      },
      {
        label:'1단 이미지',
        value:'one-stage'
      },
      {
        label:'2단 이미지',
        value:'two-stage'
      }
    ],
    titleWrite: true,
    infoWrite: true,
  }),
  methods: {
    changeInfo(e) {
      console.log('changeInfo' + e);
      this.$emit('changeInfo', e);
    }
  }
}
</script>

<style scoped>

</style>