<template>
<v-row class="ma-0">
  <v-col class="pa-0 pl-3">
    <v-radio-group row @change="changeRadio">
      <v-radio v-for="(i,index) in item" :key="index" :label="i.label" :value="i.value"/>
    </v-radio-group>
  </v-col>
</v-row>
</template>

<script>
export default {
  name: "SoonRadio",
  props:{
    item:Array
  },
  methods:{
    changeRadio(e){
      console.log('changeRadio'+e);
      this.$emit('changeRadio',e);
    }
  }
}
</script>

<style scoped>

</style>