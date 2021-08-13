<template>
  <v-card class="pa-5">
    <menu-title title="주소 : 오시는길" :use="true" :map="true"/>
    <v-divider/>
  <menu-title title="이용안내 : 제공서비스" :use="true"/>
  <soon-radio :item="item"/>
    <v-divider/>
    <v-row v-for="n in 3" :key="n">
      <v-col v-for="(k) in 3" :key="k">
        <v-checkbox v-if="n===1" :label="info[k-1].label" :value="info[k-1].value"/>
        <v-checkbox v-else-if="n===2" :label="info[n+k].label" :value="info[n+k].value"/>
        <v-checkbox v-else :label="info[2*n+k-1].label" :value="info[2*n+k-1].value"/>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import MenuTitle from "@/components/start/making/rightMenu/commons/MenuTitle";
import SoonRadio from "@/components/start/making/rightMenu/commons/SoonRadio";

export default {
  name: "MapSettingMenu",
  components: {SoonRadio, MenuTitle},
  data: () => ({
    item:[
      {
        label:'일반업종',
        value:'normal'
      }  ,
      {
        label:'숙박업',
        value:'bed'
      }
    ],
    info: [
      {
        label: '예약',
        value: 'reservation'
      },
      {
        label: '단체석',
        value: 'group'
      },
      {
        label: '주차',
        value: 'parking'
      },
      {
        label: '발렛파킹',
        value: 'valet-parking'
      },
      {
        label: '포장',
        value: 'packing'
      },
      {
        label: '무선인터넷',
        value: 'wi-fi'
      },
      {
        label: '애완동물 동반',
        value: 'pets'
      },
      {
        label: '유아시설(놀이방)',
        value: 'infant'
      },
      {
        label: '장애인 편의시설',
        value: 'disabled'
      }
    ]
  }),
  methods: {
    changeInfo(e) {
      console.log('changeInfo' + e);
      this.$emit('changeInfo', e);
    }
  }
}
</script>

<style scoped>

</style>