<template>
  <div>
    <v-card flat tile>
      <div>
        <v-img src="@/assets/qnaBackground.jpg" max-height="350" class="d-flex align-center text-center">
          <v-row>
          <v-spacer/>
          <v-col cols="10">
          <v-card-text class="d-flex">
            <soon-icon/>
            <h1 class="white--text ml-5"> 웨딩순에서 알려드립니다!</h1>

          </v-card-text>
          </v-col>
          </v-row>
        </v-img>
      </div>
    </v-card>
  </div>
</template>

<script>
import SoonIcon from "@/components/SoonIcon";
export default {
  name: "QnA",
  components: {SoonIcon}
}
</script>

<style scoped>

</style>