<template>
  <v-card class="pa-5">
    <v-row>
      <v-col cols="4" class="d-flex justify-center align-center">
        <v-card-title class="font-weight-black">이미지 여러장</v-card-title>
        <tool-tip-icon-button tooltip="이미지 올리기" icon="file-upload"/>
      </v-col>
    </v-row>
    <v-divider/>
    <v-row  class="pa-5">
      <v-radio-group  row @change="changeStage">
        <v-radio label="1단 이미지" :value="1"/>
        <v-radio label="2단 이미지" :value="2"/>
        <v-radio label="3단 이미지" :value="3"/>
      </v-radio-group>
    </v-row>
    <v-divider/>
    <v-row  class="pa-5">
    <v-text-field @input="changeTitle" placeholder="타이틀"/>
      <v-card-text class="grey--text pa-0 text-sm-body-2">이미지 상세보기에서 노출됩니다.</v-card-text>
    </v-row>
  </v-card>
</template>

<script>
import ToolTipIconButton from "@/components/button/ToolTipIconButton";
export default {
  name: "MultiImageMenu",
  components: {ToolTipIconButton},
  data:()=>({
  }),
  methods:{
    changeStage(e){
      console.log('changeStage'+e);
      this.$emit('changeStage',e);
    },
    changeTitle(e){
      console.log('changeTitle'+e);
      this.$emit('changeTitle',e);
    }
  }
}
</script>

<style scoped>

</style>