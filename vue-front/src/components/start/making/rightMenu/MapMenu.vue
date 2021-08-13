<template>
<v-card class="pa-5">
  <v-row>
    <v-col class="d-flex align-center">
      <v-card-title class="font-weight-black">지도</v-card-title>
      <icon-with-button icon="map-marker" button-name="지도에서 위치 선택"/>
    </v-col>
  </v-row>
  <v-divider class="mt-3 mb-3"/>
  <v-row>
    <v-col>
      <v-text-field placeholder="업체명을 입력해주세요" @input="changeWeddingHall"/>
      <v-text-field class="pa-0" placeholder="주소를 입력해주세요" @input="changeAddr"/>
    </v-col>
  </v-row>
</v-card>
</template>

<script>
import IconWithButton from "@/components/button/IconWithButton";
export default {
  name: "MapMenu",
  components: {IconWithButton},
  methods:{
    changeWeddingHall(e){
      console.log('changeWeddingHall'+e);
      this.$emit('changeWeddingHall',e);
    },
    changeAddr(e){
      console.log('changeAddr'+e);
      this.$emit('changeAddr',e);
    }
  }
}
</script>

<style scoped>

</style>