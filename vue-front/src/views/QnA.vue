<template>
  <div>
    <v-card flat tile>
      <div>
        <v-img src="@/assets/qnaBackground.jpg" max-height="350" class="d-flex align-center text-center">
          <v-row>
          <v-spacer/>
          <v-col cols="10">
          <v-card-text class="d-flex">
            <soon-icon iconColor="white"/>
            <h1 class="white--text ml-5 "> 웨딩순에서 알려드립니다!</h1>
          </v-card-text>
          </v-col>
          </v-row>
        </v-img>
      </div>
    </v-card>
        <color-button @whatKindColorButton="whatKindColorButton" :items="items"/>
    <v-row justify="center">
      <v-col cols="10">
        <board-list :whatClick="clickKind" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SoonIcon    from "@/components/SoonIcon";
import ColorButton from "@/components/ColorButton";
import BoardList   from "@/components/board/BoardList";

export default {
  name: "QnA",
  components: {BoardList, ColorButton, SoonIcon},
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