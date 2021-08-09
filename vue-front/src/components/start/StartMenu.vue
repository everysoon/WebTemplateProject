<template>
<v-container>
    <v-row dense>
    <start-menu-item @clickStartMenu="clickStartMenu" />
    </v-row>
</v-container>
</template>

<script>
import StartMenuItem from "./StartMenutem";

export default {
  name      : "StartMenu",
  components: {StartMenuItem},
  methods:{
    clickStartMenu(id){
      this.$emit('clickStartMenu',id);
    }
  }
}
</script>

<style scoped>

</style>