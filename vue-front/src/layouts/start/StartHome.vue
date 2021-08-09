<template>
  <v-row>
    <v-col cols="3">
    <left-menu/>
    </v-col>
    <v-col cols="4">
      <mobile-pre-view-frame :align="align"
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
      <image-menu/>
    </v-col>
  </v-row>
</template>

<script>
import MobilePreViewFrame from "../../components/start/making/MobilePreViewFrame";
import LeftMenu           from "../../components/start/making/leftMenu/LeftMenu";
import ImageMenu from "@/components/start/making/rightMenu/ImageMenu";

export default {
  name      : "StartHome",
  components: {ImageMenu, LeftMenu, MobilePreViewFrame},
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