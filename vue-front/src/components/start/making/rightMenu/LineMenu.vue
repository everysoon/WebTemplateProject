<template>
<v-card class="pa-5">
  <v-row>
    <v-col>
      <v-card-title class="font-weight-black">구분선</v-card-title>
    </v-col>
  </v-row>
  <v-divider/>
  <v-row >
    <v-col>
      <v-radio-group row @change="changeLine">
        <v-radio label="공백" value="empty"/>
        <v-radio label="실선" value="line"/>
        <v-radio label="점선" value="dot"/>
      </v-radio-group>
    </v-col>
  </v-row>
</v-card>
</template>

<script>
export default {
  name: "LineMenu",
  methods:{
    changeLine(e){
      console.log('changeLine'+e);
      this.$emit('changeLine',e);
    }
  }
}
</script>

<style scoped>

</style>