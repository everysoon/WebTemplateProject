<template>
    <v-btn v-if="item.tab" :to="item.link"
           class=" mr-2 ml-2 font-weight-bold text--darken-3 gray--text" tile text x-large>
      {{item.title}}
    </v-btn>
      <v-btn v-else class="pink--text text--darken-4 pink lighten-3
        mt-5 mb-5 ml-1 mr-1" :to="item.link" @click="isLogout(item.link)" depressed tile >
      {{item.title}}
      </v-btn>


</template>

<script>
export default {
  name: "MenuButton",
  props:{
    item : Object
  },
  methods:{
    isLogout(link){
      if(link==='/logout'){
        console.log('logout?'+link);
        this.$store.dispatch('logout');
      }
    }
  }
}
</script>
