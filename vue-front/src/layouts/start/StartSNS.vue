<template>
  <v-row>
    <v-col cols="2">
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
   <s-n-s-menu/>
    </v-col>
  </v-row>
</template>

<script>
import SNSMenu from "@/components/start/making/rightMenu/SNSMenu";
import MobilePreviewFrame from "@/components/start/making/MobilePreViewFrame";
export default {
  name: "StartSNS",
  components: {MobilePreviewFrame, SNSMenu}
}
</script>

<style scoped>

</style>