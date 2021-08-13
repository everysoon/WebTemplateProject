<template>
  <div>
    <v-list-item v-for="item in items" :key="item.id" @click="clickLeftMenu(item)">
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-title v-text="item.title"/>
      <v-list-item-action>
        <icon-button icon="plus"/>
      </v-list-item-action>
    </v-list-item>
  </div>
  <!--
  item : { title : String, icon:String id:int}-->

</template>

<script>
import IconButton from "@/components/button/IconButton";

export default {
  name : "LeftMenuItem",
  components: {IconButton},
  props: {
    items: Array
  },
  methods:{
    clickLeftMenu(item){
      console.log('clickLeftMenu'+item.id);
      this.$store.commit('clickLeftMenu',item.id);
    }
  }
}
</script>

<style scoped>

</style>