<template>
<v-container>
    <v-row dense>
    <start-menu-item />
    </v-row>
</v-container>
</template>

<script>
import StartMenuItem from "./StartMenutem";

export default {
  name      : "StartMenu",
  components: {StartMenuItem},

}
</script>

<style scoped>

</style>