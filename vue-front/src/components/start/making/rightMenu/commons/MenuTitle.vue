<template>
<v-row class="d-flex align-center pl-3 pt-3 ">
  <v-col cols="6">
    <v-card-title class="pa-0 font-weight-black">{{title}}</v-card-title>
  </v-col>
  <v-col v-if="image">
    <tool-tip-icon-button tooltip="이미지 올리기" icon="file-upload" />
  </v-col>
  <v-col v-if="map">
    <icon-with-button icon="map-marker" button-name="지도에서 위치 선택"/>
  </v-col>
  <v-col v-if="use" cols="3">
    <v-checkbox label="사용" @change="changeTitleUse"/>
  </v-col>
  <v-col v-if="subTitleUse" cols="12" class="pa-0 pb-3 d-flex align-center">
    <v-card-subtitle>{{subTitle}}</v-card-subtitle>
    <v-btn id="subBtn" v-if="subBtn" @click="$emit('subBtnClick')">{{ subBtnName }}</v-btn>
  </v-col>
</v-row>

</template>

<script>
import ToolTipIconButton from "../../../../button/ToolTipIconButton";
import IconWithButton    from "../../../../button/IconWithButton";

export default {
  name: "MenuTitle",
  components: {IconWithButton, ToolTipIconButton},
  props:{
    title:String,
    subTitle:String,
    subTitleUse:Boolean,
    image:Boolean,
    map:Boolean,
    use:Boolean,
    subBtnName:String,
    subBtn:Boolean
  },
  methods:{
    changeTitleUse(e){
      console.log('changeTitleUse'+e);
      this.$emit('changeTitleUse',e);
    }
  }
}
</script>

<style scoped>
#subBtn{
  color:#EC407A;
}
</style>