<template>
  <v-tooltip bottom >
    <template v-slot:activator="{on,attrs}">
      <v-btn  icon v-on="on" v-bind="attrs">
        <v-icon >mdi-{{ icon }}</v-icon>
      </v-btn>
    </template>
    <span>{{ tooltip }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name : "ToolTipIconButton",
  props: {
    icon   : String,
    tooltip: String
  },

}
</script>

<style scoped>

</style>