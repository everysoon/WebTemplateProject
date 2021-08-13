<template>
  <v-expansion-panels inset>
    <v-expansion-panel v-for="(i,index) in item" :key="index">
      <v-expansion-panel-header>{{i.title}}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-card height="400"  @click="selectTemplate(i)" class="text-center" >
          <div class="d-flex justify-center">
          <v-img max-height="350" max-width="200"  :src="require(`@/assets/${i.filename}`)"/>
          </div>
          <v-btn plain tile @click="selectTemplate(i)" class=" pink--text">템플릿 선택</v-btn>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: "LeftTemplate",
  data:()=>({
    item:[
      {
        id:1,
        title:'계절 꽃',
        filename:'flower.jpg',
      },
      {
        id:2,
        title:'심플',
        filename:'simple.jpg',
      },
      {
        id:3,
        title:'심플 with 텍스트',
        filename:'simpleText.jpg',
      },
      {
        id:4,
        title:'이미지',
        filename:'color.jpg'

      }
    ]
  }),
  methods:{
    selectTemplate(i){
      console.log("selectTemplate"+i.title+i.id);
    }
  }
}
</script>

<style scoped>

</style>