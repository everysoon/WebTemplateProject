<template>
  <v-row>
    <v-col v-for="item in items" :key="item.id" @click="changeStartBottom(item.id)">
      <v-hover v-slot="{hover}">
        <v-card :elevation="hover?12:5"
                align="center"
                rounded
                @click="clickStartMenu(item.id)"
                height="230px"
                width="159px"
                :class="{'on-hover':hover}"
                @mouseover="hoverCard">
          <v-card-subtitle class="font-weight-black" v-text="item.title"/>
          <v-divider/>
          <v-img :src="require(`@/assets/${item.src}`)"
                 height="150px" width="76px"/>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>

</template>

<script>
export default {
  name   : "StartMenuItem",
  props  : {
    item: Object
  },
  methods: {
    hoverCard(e) {
      e.target.style.cursor = "pointer"
    },
    changeStartBottom(id) {
      this.$emit('changePageId', id);
    },
    clickStartMenu(id){
      this.$emit('clickStartMenu',id);
    }
  },
  data   : () => ({
    items: [
      {
        id   : 1,
        title: '홈',
        src  : 'page_home.jpg'
      },
      {
        id   : 2,
        title: '초대합니다',
        src  : 'page_invite.jpg'
      },
      {
        id   : 3,
        title: '포토갤러리',
        src  : 'page_photo.jpg'
      },
      {
        id   : 4,
        title: 'SNS',
        src  : 'page_sns.jpg'
      }, {
        id   : 5,
        title: '오시는길',
        src  : 'page_convenienceinfo.jpg'
      }, {
        id   : 6,
        title: '축하해 주세요',
        src  : 'page_board.jpg'
      },


    ]
  })
}
</script>

<style scoped>

</style>