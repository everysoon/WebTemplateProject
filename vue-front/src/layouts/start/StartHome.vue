<template>
  <v-row>
    <v-col cols="2">
<!--    <left-menu/>-->
      <left-template/>
    </v-col>
    <v-col cols="5">
      <mobile-preview-frame :align="align"
                             :size="size"
                             :text="text"
                             :kinds="kinds"
                             :listKinds="listKinds"
                             :list="list"
      />
    </v-col>
    <v-col cols="5">
<!--      <text-menu title="본문형"-->
<!--          @changeSize="changeSize"-->
<!--                  @changeAlign="changeAlign"-->
<!--                  @changeText="changeText"-->
<!--                 @changeListkinds="changeListkinds"-->
<!--                 @changeKinds="changeKinds"-->
<!--      />-->
<!--      <image-menu/>-->
<!--      <multi-image-with-text-menu/>-->
<!--      <multi-image-menu/>-->
<!--      <map-menu/>-->
<!--      <button-menu subtitle="막대"/>-->
<!--      <video-menu/>-->
<!--      <line-menu/>-->
<!--      <s-n-s-menu/>-->
<!--      <map-setting-menu/>-->
<!--      <congratulation-menu/>-->
      <template-menu/>
    </v-col>
  </v-row>
</template>

<script>

import TemplateMenu       from "../../components/start/making/rightMenu/TemplateMenu";
import LeftTemplate       from "../../components/start/making/leftMenu/LeftTemplate";
import MobilePreviewFrame from "@/components/start/making/MobilePreViewFrame";

export default {
  name      : "StartHome",
  components: {MobilePreviewFrame, LeftTemplate, TemplateMenu, },
  data:()=>({
    text:'',
    size:'',
    align:'',
    kinds:'',
    listKinds:'',
    list:[],

  }),
  methods:{
    changeText(e){
      console.log("changeText"+e);
      this.text=e;
    },
    changeAlign(e){
      console.log("changeAlign"+e);
      this.align=e;
    },
    changeKinds(e){
      console.log("changeKinds"+e);
      this.kinds=e;
    },
    changeSize(e){
      console.log("changeSize"+e);
      this.size=e;
    },
    changeListkinds(e,val){
      this.listKinds=e;
      this.list = val;
      console.log("changeListkinds"+e+this.list);
    }
  }
}
</script>

<style scoped>

</style>