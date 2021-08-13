<template>
  <v-card class="pa-5">
    <menu-title :title="subtitle`버튼`"/>
    <v-divider/>
    <button-menu-item/>
    <v-divider/>
    <bar-button name="버튼 추가하기"/>
  </v-card>
</template>

<script>
import MenuTitle      from "./commons/MenuTitle";
import ButtonMenuItem from "./commons/ButtonMenuItem";
import BarButton      from "./commons/BarButton";

export default {
  name: "ButtonMenu",
  components: {BarButton, ButtonMenuItem, MenuTitle},
  props: {
    subtitle: String
  },
  data: () => ({

  }),

}
</script>

<style scoped>

</style>