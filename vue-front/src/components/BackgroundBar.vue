<template>
  <v-card flat tile>
    <div>
      <v-img :src="require(`@/assets/${filename}`)" max-height="350"
             gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
             class="d-flex align-center text-center">
        <v-row>
          <v-spacer/>
          <v-col cols="10">
            <v-card-text class="d-flex">
              <soon-icon icon-color="white" v-if="icon"/>
              <div v-else  class="white--text font-weight-black d-inline line ">
                <h1>{{ title }}</h1>
              </div>
              <h1 class="white--text ml-5"> {{subTitle}}</h1>
            </v-card-text>
          </v-col>
        </v-row>

      </v-img>
    </div>
  </v-card>
</template>

<script>
import SoonIcon from "./button/SoonIcon";

export default {
  name: "BackgroundBar",
  components: {SoonIcon},
  props:{
    filename:String,
    title:String,
    subTitle:String,
    icon:Boolean
  },
  methods:{
    // imgBinding(){
    //   let imgs = require.context('@/assets/',false,/\.png$|\.jpg$/)
    //   return imgs('./'+this.src)
    // }
  }
}
</script>

<style scoped>
.line {
  border-top: 3px solid white;
  border-bottom: 3px solid white;
}
</style>