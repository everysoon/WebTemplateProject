<template>
  <v-container >
    <v-navigation-drawer
        :value="value"
        v-click-outside="{handler:clickDrawer,foo:value}"
        absolute
        temporary>
    <drawer-header/>
      <v-divider/>
    <drawer-list/>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import vClickOutside from 'v-click-outside'
import DrawerHeader  from "./drawer/DrawerHeader";
import DrawerList    from "./drawer/DrawerList";

export default {
  name: "Drawer",
  components: {DrawerList, DrawerHeader},
  props:{
    value:Boolean
  },
  directives:{
    clickOutside:vClickOutside.directive
  },
  methods:{
    clickDrawer() {
      if(this.value) {
        return this.$emit('clickDrawer', this.value);
      }
    }
  }


}
</script>

<style scoped>

</style>