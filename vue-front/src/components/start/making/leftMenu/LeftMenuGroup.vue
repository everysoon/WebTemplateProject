<template>
  <v-list>
    <h4 class="text-center rounded-tr-xl pa-3  grey lighten-2">구성요소추가</h4>
    <v-list-group
        v-for="item in items"
        :key="item.id"
        :prepend-icon="returnIconName">
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </template>
      <left-menu-item :items="item.child"/>
    </v-list-group>
  </v-list>
</template>
<script>
import LeftMenuItem from "./LeftMenuItem";

export default {
  name      : "LeftMenuGroup",
  components: {LeftMenuItem},
  data      : () => ({
    items: [
      {
        id   : 1,
        title: '텍스트',
        child: [
          {
            id   : 2,
            title: '타이틀 텍스트',
            icon : 'mdi-format-text',
          },
          {
            id   : 3,
            title: '본문형 텍스트',
            icon : 'mdi-format-text-variant'
          },
          {
            id   : 4,
            title: '목록형 텍스트',
            icon : 'mdi-format-list-bulleted'
          }
        ]
      },
      {
        id   : 5,
        title: '이미지 한장',
        child: [
          {
            id   : 6,
            title: '이미지',
            icon : 'mdi-image'
          },
          {
            id   : 7,
            title: '이미지 + 텍스트',
            icon : 'mdi-image-text'
          }
        ]
      },
      {
        id   : 8,
        title: '이미지 여러장',
        child: [
          {
            id   : 9,
            title: '좌측이미지 + 텍스트',
            icon : 'mdi-page-next-outline'
          },
          {
            id   : 10,
            title: '우측이미지 + 텍스트',
            icon : 'mdi-page-previous-outline'
          },
          {
            id   : 11,
            title: '1단이미지 + 텍스트',
            icon : 'mdi-image-edit-outline'
          },
          {
            id   : 12,
            title: '2단이미지 + 텍스트',
            icon : 'mdi-clipboard-text-multiple-outline'
          },
          {
            id   : 13,
            title: '1단이미지',
            icon : 'mdi-image',
          },
          {
            id   : 14,
            title: '2단이미지',
            icon : 'mdi-image-multiple'
          },
          {
            id   : 15,
            title: '3단이미지',
            icon : 'mdi-view-comfy-outline'
          }
        ]
      },
      {
        id   : 16,
        title: '지도',
        child: [
          {
            id   : 17,
            title: '지도',
            icon : 'mdi-map-search-outline'
          }
        ]
      },
      {
        id   : 18,
        title: '버튼',
        child: [
          {
            id   : 19,
            title: '네모버튼',
            icon : 'mdi-gesture-tap-button'
          },
          {
            id   : 20,
            title: '막대버튼',
            icon : 'mdi-gamepad-square'
          }
        ]
      },
      {
        id   : 21,
        title: '동영상',
        child: [
          {
            id   : 22,
            title: '동영상 주소',
            icon : 'mdi-video-box'
          }
        ]
      },
      {
        id   : 23,
        title: '구분선',
        child: [
          {
            id   : 24,
            title: '공백',
            icon : 'mdi-border-none-variant'
          },
          {
            id   : 25,
            title: '실선',
            icon : 'mdi-drag-horizontal-variant'
          }, {
            id   : 26,
            title: '점선',
            icon : 'mdi-drag-horizontal'
          }
        ]
      }
    ]
  }),
  computed  : {
    returnIconName: function () {
      return 'mdi-' + this.icon;
    }
  }
}
</script>

<style scoped>

</style>