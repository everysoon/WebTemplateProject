<template>
  <v-row>
    <v-col cols="12">
      <v-card-subtitle>버튼{{cnt}}</v-card-subtitle>
    </v-col>
    <v-col cols="1" >
      <v-icon  size="34px" class="pb-3 pl-2 " color="pink">mdi-cellphone</v-icon>
      <!--아이콘셀렉 어떻게할지 생각하기 : 전화,위,아래,메세지,페이스북,인스타,이메일,차(오시는길),홈,초대합니다(폭죽),포토갤러리(사진),축하해주세요(게시판)-->
    </v-col>
    <v-col>
      <v-text-field class="pa-0" placeholder="버튼명 입력" @change="changeButtonName"/>
    </v-col>
    <v-col>
      <v-select :items="selectItem" label="버튼 기능 선택" dense solo @change="changeSelect" v-model="selected"/>
    </v-col>
    <v-col>
      <v-select v-if="selected==='link'" :items="linkItems" label="이동할 곳 선택" dense solo/>
      <v-text-field class="pa-0" v-else-if="selected==='email'" placeholder="이메일 입력" @input="changeEmail"/>
      <v-text-field class="pa-0" v-else-if="selected==='_blank'" placeholder="외부링크 입력" @input="changeBlank"/>
      <v-text-field class="pa-0" v-else placeholder="전화번호 입력" @input="changePhoneNumber"/>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ButtonMenuItem",
  methods: {
    changeButtonName(e) {
      console.log('changeButtonName' + e);
      this.$emit('changeButtonName', e);
    },
    changeSelect(e) {
      console.log('changeSelect' + e);
      this.$emit('changeSelect', e);
    },
    changeEmail(e) {
      console.log('changeEmail' + e);
      this.$emit('changeEmail', e);
    },
    changeBlank(e) {
      console.log('changeBlank' + e);
      this.$emit('changeBlank', e);
    },
    changePhoneNumber(e) {
      console.log('changePhoneNumber', e);
      this.$emit('changePhoneNumber', e);
    }
  },
  data:()=>({
    cnt: 0,
    selected: '',
    selectItem: [
      {
        text: '페이지이동',
        value: 'link'
      },
      {
        text: '전화',
        value: 'call'
      },
      {
        text: '문자',
        value: 'message'
      },
      {
        text: '이메일',
        value: 'email'
      }, {
        text: '외부링크',
        value: '_blank'
      },
      {
        text: '맨 위로',
        value: 'top'
      },
    ],
    linkItems: [
      {
        text: '홈',
        value: 1
      },
      {
        text: '초대합니다',
        value: 2
      },
      {
        text: '포토갤러리',
        value: 3
      },
      {
        text: 'SNS',
        value: 4
      },
      {
        text: '오시는길',
        value: 5
      },
      {
        text: '축하해주세요',
        value: 6
      }
    ],
  })
}
</script>

<style scoped>

</style>