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
      <text-menu v-else-if="leftMenuId >= 2 && leftMenuId <= 4" :getClickLeftMenu="leftMenuId"/>
      <image-menu v-else-if="leftMenuId>= 6 && leftMenuId <= 7"/>
      <multi-image-menu v-else-if="leftMenuId >= 9 && leftMenuId <= 12"/>
      <multi-image-with-text-menu v-else-if="leftMenuId >= 13 && leftMenuId <= 15"/>
      <map-menu v-else-if="leftMenuId === 17"/>
      <button-menu v-else-if="leftMenuId >= 19 && leftMenuId <= 20"/>
      <video-menu v-else-if="leftMenuId === 22"/>
      <line-menu v-else-if="leftMenuId>=24&&leftMenuId<=26"/>
    </v-col>
  </v-row>
</template>

<script>
import TemplateMenu           from "@/components/start/making/rightMenu/TemplateMenu";
import LeftMenu               from "@/components/start/making/leftMenu/LeftMenu";
import MobilePreviewFrame     from "@/components/start/making/MobilePreViewFrame";
import TextMenu               from "@/components/start/making/rightMenu/TextMenu";
import ImageMenu              from "@/components/start/making/rightMenu/ImageMenu";
import MultiImageMenu         from "@/components/start/making/rightMenu/MultiImageMenu";
import MultiImageWithTextMenu from "@/components/start/making/rightMenu/MultiImageWithTextMenu";
import MapMenu                from "@/components/start/making/rightMenu/MapMenu";
import ButtonMenu             from "@/components/start/making/rightMenu/ButtonMenu";
import VideoMenu              from "@/components/start/making/rightMenu/VideoMenu";
import LineMenu               from "@/components/start/making/rightMenu/LineMenu";
import LeftTemplate           from "@/components/start/making/leftMenu/LeftTemplate";
import SNSMenu                from "@/components/start/making/rightMenu/SNSMenu";
import MapSettingMenu         from "@/components/start/making/rightMenu/MapSettingMenu";
import CongratulationMenu     from "@/components/start/making/rightMenu/CongratulationMenu";
import {mapState}             from 'vuex'

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
    text: '',
    size: '',
    align: '',
    kinds: '',
    listKinds: '',
    list: [],
  }),
  computed: {
    ...mapState(['leftMenuId']),
  },
}
</script>

<style scoped>

</style>