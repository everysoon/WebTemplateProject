<template>

  <v-card flat height="700" tile>
    <v-img src="@/assets/background.jpg" max-height="700" class="d-flex align-center"
           gradient="to top right, rgba(0,0,0,.33), rgba(200,200,200,.7)">
      <v-row>
        <v-spacer/>
        <v-col cols="11">
          <v-card-text>
            <v-card-title class="white--text text-lg-h3 ">
              누구나 쉽게 무료로<br>만드는 온라인 청접장
            </v-card-title>
            <div class=" white--text font-weight-thin text-lg-h6 pl-5 mt-5 mb-5">
              내 맘에 쏙 드는 `나만의 청접장`을 만들어<br>
              주변 사람들에게 손쉽게 공유하세요.<br>
              Wedding Soon! 지금 바로 시작하세요.
            </div>
          </v-card-text>
        </v-col>
      </v-row>
      <v-row>
        <v-spacer/>
        <v-col cols="11">
          <v-card-actions class="pl-9 ">
            <v-btn tile x-large class=" pink lighten-3 white--text mr-4 pl-10 pr-10">시작하기</v-btn>
            <v-btn outlined tile x-large class=" white--text pl-8 pr-8">가이드 보기</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-img>
  </v-card>

</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>