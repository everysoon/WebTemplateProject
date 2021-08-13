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
    <congratulation-menu/>
    </v-col>
  </v-row>
</template>

<script>
import MobilePreviewFrame from "@/components/start/making/MobilePreViewFrame";
import CongratulationMenu from "@/components/start/making/rightMenu/CongratulationMenu";
export default {
  name: "StartBoard",
  components: {CongratulationMenu, MobilePreviewFrame}
}
</script>

<style scoped>

</style>