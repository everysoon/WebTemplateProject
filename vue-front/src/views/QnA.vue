<template>
  <div>
    <background-bar filename="qnaBackground.jpg" :icon="true"
                    sub-title="웨딩순에서 알려드립니다!"/>
        <color-button @whatKindColorButton="whatKindColorButton" :items="items"/>
    <v-row justify="center">
      <v-col cols="10">
        <board-list :whatClick="clickKind" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ColorButton   from "@/components/button/ColorButton";
import BoardList     from "@/components/board/BoardList";
import BackgroundBar from "../components/BackgroundBar";

export default {
  name: "QnA",
  components: {BackgroundBar, BoardList, ColorButton},
  data:()=>({
    kind:'notice',
    clickKind:'notice',
    items:[
      {
        title:"공지사항",
        kind:'notice'
      },
      {
        title:"문의사항",
        kind:'guide'
      }
    ],
  }),
  methods:{
    whatKindColorButton(val){
      this.clickKind= val;
      console.log('in QnALayout'+this.clickKind);
    }
  }
}
</script>

<style scoped>

</style>