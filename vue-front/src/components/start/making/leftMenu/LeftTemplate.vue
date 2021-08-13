<template>
  <v-expansion-panels popout>
    <v-expansion-panel v-for="(i,index) in item" :key="index">
      <v-expansion-panel-header>{{i.title}}</v-expansion-panel-header>
      <v-expansion-panel-content class="">
        <v-tooltip right>
          <template v-slot:activator="{on,attrs}">
        <v-card height="400"  @click="selectTemplate(i)" class="text-center" v-bind="attrs" v-on="on">
          <v-img height="350" :src="require(`@/assets/background.jpg`)"></v-img>
          <v-btn plain tile @click="selectTemplate(i)" class="pink--text">템플릿 선택</v-btn>
        </v-card>
          </template>
          <!--ToolTip말고 hover하면 설명볼수있는 UI생각해보기 -->
          <span id="templateInfo" v-for="(c,cindex) in i.content" :key="cindex">{{c}}</span>
        </v-tooltip>
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
        title:'정보형',
        content:[
            "일반적인 모든홈페이지에 적합합니더",
            "배경이미지를 최대4개까지 노출할 수 있고 동영상 연결도 가능",
            "첫페이지에서 주요정보가 한눈에 보임"
        ],
      },
      {
        id:2,
        title:'이미지형',
        content:[
          "페이지 배경 이미지가 구성되는 홈페이지",
          "다양한이미지로 홈페이지를 바꾸고 싶을때 추천",
          "첫페이지에서 주요정보가 한눈에 보임"
        ],
      },
      {
        id:3,
        title:'포스터형',
        content:[
          "꼭 필요한 정보를 중심으로 홈페이지를 만들 수 있음",
          "연극,영화,전시 홈페이지나 초대장,청첩장에 적합",
          "첫페이지에서 주요정보가 한눈에 보임"
        ],
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
#templateInfo{
  color: #959595;
  font-size: 15px;
}
</style>