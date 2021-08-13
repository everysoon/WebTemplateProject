<template>
  <v-card color="gray" height="650">
    <v-row dense>
      <v-col class="d-flex align-center justify-center mt-3">
        <icon-with-button icon="cellphone" button-name="모바일 미리보기" class="mr-3"/>
        <icon-with-button icon="laptop" button-name="PC 미리보기"/>
      </v-col>
    </v-row>
        <mobile-pre-view-inner
            :align="align"
            :size="size"
            :text="text"
            :kinds="kinds"
            :listKinds="listKinds"
            :list="list"
        />
  </v-card>
</template>

<script>
import IconWithButton     from "../../button/IconWithButton";
import MobilePreViewInner from "./MobilePreViewInner";

export default {
  name      : "MobilePreviewFrame",
  components: {MobilePreViewInner, IconWithButton},
  props:{
    text:String,
    size:String,
    align:String,
    kinds:String,
    listKinds:String,
    list:Array
  }
}
</script>

<style scoped>

</style>