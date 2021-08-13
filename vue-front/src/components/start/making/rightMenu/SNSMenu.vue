<template>
<v-card class="pa-5">
  <v-row>
    <v-col>
      <p>SNS별로 1개 계정만 연결할 수 있습니다.</p>
      <p>페이스북,인스타그램 최초연결 시, 인증이 필요합니다.</p>
    </v-col>
  </v-row>
  <v-row class="d-flex justify-center">
    <v-col cols="auto">
      <icon-with-button icon="facebook" button-name="Facebook 연결하기"/>
    </v-col>
    <v-col cols="auto">
      <icon-with-button icon="instagram" button-name="Instagram 연결하기"/>
    </v-col>
  </v-row>
</v-card>
</template>

<script>
import IconWithButton from "@/components/button/IconWithButton";
export default {
  name: "SNSMenu",
  components: {IconWithButton}
}
</script>

<style scoped>

</style>