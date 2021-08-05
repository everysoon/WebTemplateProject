<template>

  <v-list-item>
    <v-list-item-avatar>
      <v-img :src="require('@/assets/logo.png')" width="30" height="30"></v-img>
    </v-list-item-avatar>
    <v-list-item-content class="text-h6">
      <v-list-item-title>User-Name</v-list-item-title>
    </v-list-item-content>
  </v-list-item>


</template>

<script>
export default {
  name: "DrawerHeader"
}
</script>

<style scoped>

</style>