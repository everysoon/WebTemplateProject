<template>
<v-card class="pa-5">
  <v-row>
    <v-col>
      <v-card-title class="font-weight-black">동영상 주소</v-card-title>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-text-field class="pa-0 pl-5" placeholder="동영상 url(인터넷주소)<br> 예)https://www.youtube.com" @input="chenageViedoLink"/>
    </v-col>
    <v-col cols="2" class="d-flex justify-center align-center pb-8">
      <v-btn>확인</v-btn>
    </v-col>
  </v-row>
  <v-divider/>
  <v-row class="pt-5">
    <v-col>
    <p>동영상 바로 올리는 기능은 아직 지원되지 않습니다.</p>
    <p>네이버 TV/유튜브/네이버 블로그 동영상을 업로드 할 수 있습니다.</p>
    <p>네이버,TV,유튜브는 동영상 URL을 입력해주세요</p>
    <p>네이버 블로그는 동영상의 소스코드>플레이어 URL을 복사해주세요</p>
    </v-col>
  </v-row>
</v-card>
</template>

<script>
export default {
  name: "VideoMenu",
  methods:{
    chenageViedoLink(e){
      console.log('chenageViedoLink'+e);
      this.$emit('chenageViedoLink',e);
    }
  }
}
</script>

<style scoped>

</style>