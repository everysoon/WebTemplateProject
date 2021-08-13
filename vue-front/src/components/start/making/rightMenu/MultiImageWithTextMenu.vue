<template>
  <v-card class="pa-5">
    <v-row>
      <v-col cols="4" class="d-flex justify-center align-center">
        <v-card-title class="font-weight-black">이미지 여러장</v-card-title>
        <tool-tip-icon-button tooltip="이미지 올리기" icon="file-upload"/>
      </v-col>
      <v-col cols="6" class="d-flex align-center">
        <v-card-text>이미지와 텍스트를 함께 추가합니다.</v-card-text>
      </v-col>
    </v-row>
    <v-divider/>
    <v-row class="pa-5">
      <v-radio-group row @change="changeInfo">
        <v-radio label="이미지 왼쪽" value="left"/>
        <v-radio label="이미지 오른쪽" value="right"/>
        <v-radio label="1단 이미지" value="one-stage"/>
        <v-radio label="2단 이미지" value="two-stage"/>
      </v-radio-group>
    </v-row>
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
    <v-row>
      <v-col class="d-flex justify-center">
        <icon-with-button :size="750" icon="plus" button-name="목록 추가하기"/>
      </v-col>
    </v-row>


  </v-card>
</template>

<script>
import ToolTipIconButton from "@/components/button/ToolTipIconButton";
import IconWithButton from "@/components/button/IconWithButton";

export default {
  name: "MultiImageWithTextMenu",
  components: {IconWithButton, ToolTipIconButton},
  data: () => ({
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