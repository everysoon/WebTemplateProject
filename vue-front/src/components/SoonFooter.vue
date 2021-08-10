<template>
  <v-footer padless>
    <v-container fluid flat tile class="pink darken-3 white--text text-center">
      <v-card-text class="white--text text-sm-center" @click="hidden= !hidden">
        <icon-button :icon="icon.icon" :go-to-link="icon.goToLink" :link="true" v-for="(icon,i) in icons" size="30px"
                     :key="i"/>
        <v-divider vertical class="mr-5 ml-5"/>
        {{ soonInfo.name }} ({{ soonInfo.name_en }})
        {{ soonInfo.school }}
      </v-card-text>
      <v-divider/>
      <v-card-text :hidden="hidden" class="white--text ">
        Frontend : {{ soonInfo.frontend }}
        Backend : {{ soonInfo.backend }}
        개발 기간 : {{ soonInfo.regDate }}
      </v-card-text>
    </v-container>
  </v-footer>
</template>

<script>
import IconButton from "@/components/button/IconButton";

export default {
  name: "SoonFooter",
  components: {IconButton},
  data: () => ({
    hidden: true,
    icons: [
      {
        icon: 'facebook',
        goToLink: 'https://www.facebook.com/profile.php?id=100005687762332'
      },
      {
        icon: 'instagram',
        goToLink: 'https://www.instagram.com/soonevery/'
      },
      {
        icon: 'github',
        goToLink: 'https://github.com/everysoon'
      }
    ],
    soonInfo: {
      name_en: 'PARK MIN SUN',
      name: '박민선',
      school: '21년 순천향대학교 의료IT공학과 졸업',
      regDate: '2021년07월~2021년08월',
      frontend: 'Vue 2.x with Vuetify',
      backend: 'SpringBoot'
    }
  }),

}
</script>

<style scoped>

</style>