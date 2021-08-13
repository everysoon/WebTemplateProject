<template>
<v-card class="pa-5">
 <menu-title title="지도" :map="true"/>
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
import MenuTitle from "./commons/MenuTitle";

export default {
  name: "MapMenu",
  components: {MenuTitle},
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