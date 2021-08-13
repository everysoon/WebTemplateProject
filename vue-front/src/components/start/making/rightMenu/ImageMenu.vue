<template>
  <v-card class="pa-5">
    <menu-title title="이미지" :image="true"/>
    <v-divider/>
    <v-row>
      <v-col>
      <v-checkbox class="mr-5" v-model="titleWrite" label="타이틀쓰기"/>
      <v-checkbox v-model="infoWrite" label="설명쓰기"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field v-if="titleWrite" placeholder="타이틀 입력"/>
        <v-text-field v-if="infoWrite" placeholder="내용을 입력하세요"/>
      </v-col>
    </v-row>
    <v-divider/>

    <menu-title title="추가설정"/>

    <v-divider/>
    <soon-radio :item="item"/>
    <v-row>
      <v-checkbox v-model="boarder" class="pl-3 pr-3" @change="titleBoarder" label="타이틀 테두리 사용" :value=boarderSlider />
        <v-slider :readonly="!boarder" v-model="boarderSlider" track-color="primary-d-3" class="d-flex align-center"
                  :max="10" :min="1" hide-details/>
    </v-row>
    <v-row>
      <v-slider label="밝기" v-model="lightSlider" track-color="primary-d-3"
                class="pl-3 pr-3 font-weight-black align-center" :max="255" :min="0" hide-details/>
    </v-row>
  </v-card>
</template>

<script>
import MenuTitle from "./commons/MenuTitle";
import SoonRadio from "./commons/SoonRadio";

export default {
  name      : "ImageMenu",
  components: {SoonRadio, MenuTitle},
  props     : {
    titleWrite: Boolean,
    infoWrite : Boolean,
  },
  data      : () => ({
    item:[
      {
        label:'타이틀 작게',
        value:'text-subtitle-1'
      },
      {
        label:'타이틀 크게',
        value:'text-h4'
      }
    ],
    boarder      : false,
    boarderSlider: 5,
    lightSlider  : 1
  }),
  methods   : {
    changeSize(e) {
      console.log('ImgMenu ChangeSize' + e);
      this.$emit('changeSize', e);
    },
    titleBoarder(e) {
      console.log('titleBoarder' + e);
      this.$emit('titleBoarder', e);
    }
  }
}
</script>

<style scoped>

</style>