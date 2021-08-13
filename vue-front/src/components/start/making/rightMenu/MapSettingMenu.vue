<template>
  <v-card class="pa-5">
    <v-row>
      <v-col>
        <v-card-title class="font-weight-black">주소 : 오시는길</v-card-title>
      </v-col>
      <v-col>
        <v-checkbox label="사용" value="addrUse"/>
      </v-col>
    </v-row>
    <v-row class="ma-0">
      <icon-with-button icon="map-marker" button-name="지도에서 위치 선택"/>
    </v-row>

    <v-divider class="mt-5"/>

    <v-row>
      <v-col>
        <v-card-title class="font-weight-black">이용안내 : 제공서비스</v-card-title>
      </v-col>
      <v-col>
        <v-checkbox label="사용" value="infoUse"/>
      </v-col>
    </v-row>
    <v-row class="ma-0">
      <v-col>
        <v-radio-group @change="changeInfo" row>
          <v-radio label="일반 업종" value="normal"/>
          <v-radio label="숙박업" value="bed"/>
        </v-radio-group>
      </v-col>
    </v-row>
    <v-row v-for="n in 3" :key="n" class="ma-0">
      <v-col v-for="k in 3" :key="k" class="pa-0">
        <v-checkbox v-if="n===1" :label="info[k-1].label" :value="info[k-1].value" @change="selectInfo(info[k-1])"/>
        <v-checkbox v-else-if="n===2" :label="info[n+k].label" :value="info[n+k].value"
                    @change="selectInfo(info[n+k])"/>
        <v-checkbox v-else :label="info[2*n+k-1].label" :value="info[2*n+k-1].value"
                    @change="selectInfo(info[2*n+k-1])"/>
      </v-col>
    </v-row>

    <v-divider/>

    <v-row>
      <v-col>
        <v-card-title class="font-weight-black">전화번호</v-card-title>
      </v-col>
      <v-col>
        <v-checkbox label="사용" value="phoneUse"/>
      </v-col>
    </v-row>
    <v-row class="ma-0">
      <v-col class="d-flex">
        <v-text-field class=" pa-0 mr-3" placeholder="전화번호 1 "/>
        <v-text-field class=" pa-0 ml-3" placeholder="전화번호 2"/>
      </v-col>
    </v-row>

    <v-divider/>
    <v-row>
      <v-col cols="12" class="d-flex">
        <v-card-title class="font-weight-black">이용시간</v-card-title>
        <v-checkbox class="ml-5" label="사용" value="timeUse"/>
      </v-col>
      <v-col class="pa-0 " cols="12">
        <v-text-field class="pa-0 ma-0 pl-5 pr-5" placeholder="이용시간 타이틀"/>
      </v-col>
      <v-col class="pa-0 d-flex text-center align-center" cols="12">
        <v-select class="ml-5" :items="day" label="요일 선택"/>
        <v-select class="ml-3 mr-3" :items="times" label="시간 선택" v-model="time" @change="changeTime"/>
          <v-text-field class="ml-3 mr-3"/>
          ~
          <v-text-field class="ml-3 mr-3"/>

      </v-col>

    </v-row>
    <v-row>

    </v-row>
  </v-card>
</template>

<script>
import IconWithButton from "@/components/button/IconWithButton";

export default {
  name: "MapSettingMenu",
  components: {IconWithButton},
  data: () => ({
    time:'',
    day: [
      "매일",
      "평일",
      "주말",
      "공휴일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
      "일요일"
    ],
    times:[
        "직접입력",
        "24시간",
        "휴일"
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
    ],
    checkInfo: []
  }),
  methods: {
    changeInfo(e) {
      console.log('changeInfo' + e);
      this.$emit('changeInfo', e);
    },
    selectInfo(item, e) {
      console.log('selectInfo' + e);
      console.log(item);
      this.checkInfo.push(item);
      console.log(this.checkInfo);
    },
    changeTime(e){
      console.log(e);
    }

  }
}
</script>

<style scoped>

</style>