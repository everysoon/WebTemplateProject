<template>
  <v-app-bar app color="primary">
    <v-app-bar-nav-icon @click="clickDrawer"/>
    <v-spacer/>
    <v-app-bar-title v-text="title" v-if="icon==='pencil'"/>
    <v-text-field v-else v-model="title" @keyup.enter="toggleTitle"/>
    <icon-button :icon="icon" @changeIcon="toggleTitle"/>
    <v-spacer/>
    <tool-tip-icon-button icon="account" tooltip="마이페이지"/>
    <tool-tip-icon-button icon="content-save" tooltip="저장하기"/>
    <tool-tip-icon-button icon="eye" tooltip="미리보기"/>
    <tool-tip-icon-button icon="alert-circle" tooltip="도움말"/>
  </v-app-bar>
</template>

<script>
import IconButton        from "../button/IconButton";
import ToolTipIconButton from "../button/ToolTipIconButton";

export default {
  name      : "StartBar",
  components: {ToolTipIconButton, IconButton},
  props     : {
    title: String
  },
  data      : () => ({
    drawer: null,
    icon  : 'pencil',
  }),
  methods   : {
    toggleTitle(val) {
      console.log(this.icon);
      if (val === 'pencil') {
        this.icon = 'check';
      } else {
        console.log(this.title);
        this.icon = 'pencil';
      }
    },
    clickDrawer() {
      // this.drawer = !this.drawer;
      this.$emit("clickDrawer", this.drawer);
    },

  },

}
</script>

<style scoped>

</style>