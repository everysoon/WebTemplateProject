<template>
  <v-row>
    <v-col class="d-flex justify-center" @click="onClick">
      <icon-with-button :size="750" icon="plus" :button-name="name"/>
    </v-col>
  </v-row>
</template>

<script>
import IconWithButton from "../../../../button/IconWithButton";

export default {
  name: "BarButton",
  components: {IconWithButton},
  methods:{
    onClick(e){
      console.log('onClick?'+e);
      this.$emit('click');
    }
  },
  props:{
    name:String
  }
}
</script>

<style scoped>

</style>