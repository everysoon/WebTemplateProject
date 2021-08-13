<template>
<v-card class="pa-5">
 <menu-title title="구분선"/>
  <v-divider/>
<soon-radio :item="item"/>
</v-card>
</template>

<script>
import MenuTitle from "./commons/MenuTitle";
import SoonRadio from "./commons/SoonRadio";

export default {
  name: "LineMenu",
  components: {SoonRadio, MenuTitle},
  data:()=>({
    item:[
      {
        label:'공백',
        value:'empty'
      },
      {
        label:'실선',
        value:'line'
      },
      {
        label:'점선',
        value:'dot'
      }
    ]
  }),
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