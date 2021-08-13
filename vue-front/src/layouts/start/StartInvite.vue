<template>
<v-row>
  <v-col cols="2">
    <left-menu/>
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
    <text-menu title="타이틀"/>
  </v-col>
</v-row>
</template>

<script>
import LeftMenu from "@/components/start/making/leftMenu/LeftMenu";
import MobilePreviewFrame from "@/components/start/making/MobilePreViewFrame";
import TextMenu from "@/components/start/making/rightMenu/TextMenu";
export default {
  name: "StartInvite",
  components: {TextMenu, MobilePreviewFrame, LeftMenu},
  data:()=>({
    text:'',
    size:'',
    align:'',
    kinds:'',
    listKinds:'',
    list:[],

  }),
}
</script>

<style scoped>

</style>