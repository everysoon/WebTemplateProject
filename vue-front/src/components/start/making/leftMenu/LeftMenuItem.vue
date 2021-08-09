<template>
  <div>
    <v-list-item v-for="item in items" :key="item.id">
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-title v-text="item.title"/>
      <v-list-item-action>
        <icon-button icon="plus"/>
      </v-list-item-action>
    </v-list-item>
  </div>
</template>

<script>
import IconButton from "@/components/button/IconButton";

export default {
  name : "LeftMenuItem",
  components: {IconButton},
  props: {
    items: Array
  }
}
</script>

<style scoped>

</style>