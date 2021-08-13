<template>
  <v-card class="pa-5">
    <menu-title title="이미지 여러장" :image="true"/>
    <v-divider/>
    <soon-radio :item="item"/>
    <v-divider/>
    <v-row class="pa-5">
      <v-col>
        <v-text-field @input="changeTitle" placeholder="타이틀"/>
      </v-col>
    </v-row>
    <menu-info-text :info="info"/>

  </v-card>
</template>

<script>
import MenuTitle    from "./commons/MenuTitle";
import SoonRadio    from "./commons/SoonRadio";
import MenuInfoText from "./commons/MenuInfoText";

export default {
  name      : "MultiImageMenu",
  components: {MenuInfoText, SoonRadio, MenuTitle},
  data      : () => ({
    info: [
      "이미지 상세보기에서 노출됩니다."
    ],
    item: [
      {
        label: '1단 이미지',
        value: 1
      },
      {
        label: '2단 이미지',
        value: 2
      },
      {
        label: '3단 이미지',
        value: 3
      }
    ]
  }),
  methods   : {
    changeStage(e) {
      console.log('changeStage' + e);
      this.$emit('changeStage', e);
    },
    changeTitle(e) {
      console.log('changeTitle' + e);
      this.$emit('changeTitle', e);
    }
  }
}
</script>

<style scoped>

</style>