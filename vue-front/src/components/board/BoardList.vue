<template>
  <v-card>x
    <search-bar @changeSearchField="changeSearchField"/>
    <v-data-table
      :headers="headers"
      :items="whatClick==='notice'?noticeItems:guideItems"
      :search="search"
      :items-per-page="itemsPerPage"
      :page.sync="page"
      :loading="loading"
      loading-text="Loading... Please wait"
      hide-default-footer
      class="elevation-1"
      @page-count="pageCnt=$event">
    </v-data-table>
    <v-pagination
        v-model="page"
        :length="pageCnt"
        :total-visible="totalVisible"
        next-icon="mdi-menu-right"
        prev-icon="mdi-menu-left"
    />
  </v-card>
</template>

<script>
import SearchBar from "./SearchBar";

export default {
  name      : "BoardList",
  components: {SearchBar},
  // props     : {
  //   items: Object
  // },
  props:{
    whatClick:String
  },
  data      : () => ({
    itemsPerPage: 10, // 한 페이지에 보여줄 list 개수
    page        : 1,
    pageCnt     : 0,
    totalVisible: 10,
    search      : '',
    loading     : false,
    headers     : [
      {
        text    : "번호",
        align   : "center",
        sortable: false,
        value   : "id"
      },
      {
        text    : "제목",
        align   : "center",
        sortable: false,
        value   : "title"
      },
      {
        text    : "작성자",
        align   : "center",
        sortable: false,
        value   : "writer"
      },
      {
        text    : "날짜",
        align   : "center",
        sortable: false,
        value   : "regDate"
      },
    ],
    // items 임시데이터 => 나중에 axios로 가져오기
    noticeItems: [
      {
        id     : '1',
        title  : 'Notice! testTitle!',
        writer : 'soon',
        regDate: '2021-08-05',
        kind:'notice'
      },
      {
        id     : '2',
        title  : 'Notice! testTitle!',
        writer : 'soon',
        regDate: '2021-08-05',
        kind:'notice'
      },
      {
        id     : '3',
        title  : 'Notice! testTitle!',
        writer : 'soon',
        regDate: '2021-08-05',
        kind:'notice'
      }
    ],
    guideItems: [
      {
        id     : '1',
        title  : 'Guide! testTitle!',
        writer : 'soon',
        regDate: '2021-08-05',
        kind:'notice'
      },
      {
        id     : '2',
        title  : 'Guide! testTitle!',
        writer : 'soon',
        regDate: '2021-08-05',
        kind:'notice'
      },
      {
        id     : '3',
        title  : 'Guide! testTitle!',
        writer : 'soon',
        regDate: '2021-08-05',
        kind:'notice'
      }
    ]
  }),
  methods   : {
    changeSearchField(val) {
      this.search = val;
    }
  }
}
</script>

<style scoped>

</style>