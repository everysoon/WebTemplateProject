<template>
  <v-row class="justify-center d-flex">
    <v-col cols="3">
      <left-template  v-if="clickMenu===1"/>
      <left-menu v-else-if="clickMenu===2||clickMenu===3"/>
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
    <v-col cols="4">
      <template-menu v-if="clickMenu===1"/>
      <s-n-s-menu v-else-if="clickMenu===4"/>
      <map-setting-menu v-else-if="clickMenu===5"/>
      <congratulation-menu v-else-if="clickMenu===6"/>

      <text-menu v-if="clickMenu===2||clickMenu===3||getClickLeftMenu===1" :getClickLeftMenu="id"/>
      <image-menu v-else-if="getClickLeftMenu===2"/>
      <multi-image-menu v-else-if="getClickLeftMenu===3"/>
      <multi-image-with-text-menu v-else-if="getClickLeftMenu===4"/>
      <map-menu v-else-if="getClickLeftMenu===5"/>
      <button-menu v-else-if="getClickLeftMenu===6"/>
      <video-menu v-else-if="getClickLeftMenu===7"/>
      <line-menu v-else-if="getClickLeftMenu===8"/>
    </v-col>
  </v-row>
</template>

<script>
import TemplateMenu from "@/components/start/making/rightMenu/TemplateMenu";
import LeftMenu from "@/components/start/making/leftMenu/LeftMenu";
import MobilePreviewFrame from "@/components/start/making/MobilePreViewFrame";
import TextMenu from "@/components/start/making/rightMenu/TextMenu";
import ImageMenu from "@/components/start/making/rightMenu/ImageMenu";
import MultiImageMenu from "@/components/start/making/rightMenu/MultiImageMenu";
import MultiImageWithTextMenu from "@/components/start/making/rightMenu/MultiImageWithTextMenu";
import MapMenu from "@/components/start/making/rightMenu/MapMenu";
import ButtonMenu from "@/components/start/making/rightMenu/ButtonMenu";
import VideoMenu from "@/components/start/making/rightMenu/VideoMenu";
import LineMenu from "@/components/start/making/rightMenu/LineMenu";
import LeftTemplate from "@/components/start/making/leftMenu/LeftTemplate";
import SNSMenu from "@/components/start/making/rightMenu/SNSMenu";
import MapSettingMenu from "@/components/start/making/rightMenu/MapSettingMenu";
import CongratulationMenu from "@/components/start/making/rightMenu/CongratulationMenu";

export default {
  name: "StartBottomLayout",
  components: {
    CongratulationMenu,
    MapSettingMenu,
    SNSMenu,
    LeftTemplate,
    LineMenu,
    VideoMenu,
    ButtonMenu,
    MapMenu,
    MultiImageWithTextMenu, MultiImageMenu, ImageMenu, TextMenu, MobilePreviewFrame, LeftMenu, TemplateMenu
  },
  props: {
    clickMenu: Number
  },
  data: () => ({
    clickLeftMenu: '',
    text: '',
    size: '',
    align: '',
    kinds: '',
    listKinds: '',
    list: [],

  }),
  computed: {
    id(){
      return this.$store.getters.getClickLeftMenu;
    },
    getClickLeftMenu() {
      const clickId= this.$store.getters.getClickLeftMenu;
      console.log("clickId  " + clickId);
      if (clickId >= 2 && clickId <= 4) {
        return 1;
      } else if (clickId === 6 || clickId === 7) {
        return 2;
      } else if (clickId >= 9 && clickId <= 12) {
        return 3;
      } else if (clickId >= 13 && clickId <= 15) {
        return 4;
      } else if (clickId === 17) {
        return 5;
      } else if (clickId >= 19 && clickId <= 20) {
        return 6;
      } else if (clickId === 22) {
        return 7;
      } else if(clickId>=24&&clickId<=26){
        return 8;
      }
      return 0;
    },
  },

}
</script>

<style scoped>

</style>