<template>
<div>
  <v-spacer/>
  <v-text-field
  v-model="search"
  @input="changeSearchField"
  append-icon="mdi-magnify"
  single-line
  hide-details
  label="Search"
  ></v-text-field>
</div>
</template>

<script>
export default {
  name: "SearchBar",
  data:()=>({
    search:''
  }),
  methods:{
    changeSearchField(){
      this.$emit('changeSearchField',this.search);
    }
  }
}
</script>

<style scoped>

</style>