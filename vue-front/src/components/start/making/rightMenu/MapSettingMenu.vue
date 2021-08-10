<template>
  <v-card class="pa-5">
    <v-row>
      <v-col>
        <v-card-title class="font-weight-black">주소 : 오시는길</v-card-title>
      </v-col>
      <v-col cols="1">
        <v-checkbox label="사용" value="addrUse"/>
      </v-col>
    </v-row>
    <v-row>
      <icon-with-button icon="map-marker" button-name="지도에서 위치 선택"/>
    </v-row>

    <v-divider/>

    <v-row class="pa-5">
      <v-col>
        <v-card-title class="font-weight-black">이용안내 : 제공서비스</v-card-title>
      </v-col>
      <v-col>
        <v-checkbox label="사용" value="infoUse"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-radio-group @change="changeInfo" row>
          <v-radio label="일반 업종" value="normal"/>
          <v-radio label="숙박업" value="bed"/>
        </v-radio-group>
      </v-col>
    </v-row>
    <v-divider/>
      <v-row v-for="n in 4" :key="n">
        <v-col v-for="(k) in 3" :key="k">
          n : {{n}}
          k : {{k}}

<!--        <v-checkbox  :label="`${info[k+1+(n*(n-1))].label}`" :value="`${info[k+1+(n*(n-1))].value}`"/>-->

        </v-col>
      </v-row>



  </v-card>
</template>

<script>
import IconWithButton from "@/components/button/IconWithButton";

export default {
  name: "MapSettingMenu",
  components: {IconWithButton},
  data: () => ({
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