<template>
<v-card class="pa-5">
  <menu-title title="홈 배경 이미지" :image="true"
              :sub-title-use="true"
              sub-title="추천 컬러"
              :sub-btn="true"
              sub-btn-name="컬러 선택"
              @subBtnClick="showPicker = !showPicker"
  />
  <v-color-picker v-model="changeColor"
                  hide-inputs
                  :show-swatches="showPicker"
                  hide-canvas
                  hide-sliders
                  mode="hexa" dot-size="15" swatches-max-height="200"/>
  <menu-info-text :info="info"/>
  <menu-title title="소개"/>
  <v-text-field class="pl-3 pr-3" placeholder="소개"/>
  <v-divider/>
  <menu-title title="소개/공지 한마디" :use="true"/>
  <v-textarea class="pl-3 pr-3" placeholder="상세소개 또는 알리고 싶은 내용을 입력하세요"/>
</v-card>
</template>

<script>
import MenuTitle    from "./commons/MenuTitle";
import MenuInfoText from "./commons/MenuInfoText";

export default {
  name: "TemplateMenu",
  components: {MenuInfoText, MenuTitle},
  data:()=>({
    info:[
        "홈배경이미지는 최대4개까지 노출할 수 있습니다.",
        "두번째 이미지는 소개배경으로 사용됩니다."
    ],
    showPicker:false,
    changeColor:''
  }),
  methods:{
    // changeColor(e){
    //   console.log('changeColor'+e);
    //
    // }
  }
}
</script>

<style scoped>

</style>