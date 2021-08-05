<template>
<div>
  <v-spacer/>
  <v-text-field
  v-model="search"
  @input="changeSearchField"
  append-icon="mdi-magnify"
  label="Search"
  single-line
  hide-details
  />
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