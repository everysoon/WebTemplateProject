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
            <h1 class="white--text ml-5"> 웨딩순에서 알려드립니다!</h1>
          </v-card-text>
          </v-col>
          </v-row>
        </v-img>
      </div>
    </v-card>
        <color-button :items="items"/>
    <router-view/>
  </div>
</template>

<script>
import SoonIcon    from "@/components/SoonIcon";
import ColorButton from "@/components/ColorButton";

export default {
  name: "QnA",
  components: {ColorButton, SoonIcon},
  data:()=>({
    items:[
      {
        title:"공지사항",
        link:"/qna/notice",
        color:"teal-l-5"
      },
      {
        title:"문의사항",
        link:"/qna/guide",
        color:"teal-l-5"
      }
    ]
  })
}
</script>

<style scoped>

</style>