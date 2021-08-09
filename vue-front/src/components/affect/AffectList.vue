<template>
<affect-item :cards="cards"/>
</template>

<script>
import AffectItem from "./AffectItem";

export default {
  name: "AffectList",
  components: {AffectItem},
  data:()=>({
    // 데이터 가져오기 (임시데이터)
    cards:[
      {
        id:1,
        title:"We married!",
        src:"https://cdn.vuetifyjs.com/images/cards/house.jpg",
        writer:"soon",
        regDate:"2021-08-09"
      },
      {
        id:2,
        title:"We married!",
        src:"https://cdn.vuetifyjs.com/images/cards/road.jpg",
        writer:"park",
        regDate:"2021-08-09"
      },
      {
        id:3,
        title:"We married!",
        src:"https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        writer:"min",
        regDate:"2021-08-09"
      }
    ]
  })
}
</script>

<style scoped>

</style>