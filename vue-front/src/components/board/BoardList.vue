<template>
  <v-card>x
    <search-bar @changeSearchField="changeSearchField"/>
    <v-data-table>
      :headers="headers"
      :items="items"
      :search="search"
      :items-per-page="itemsPerPage"
      :page.sync="page"
      :loading="loading"
      loading-text="Loading... Please wait"
      hide-default-footer
      class="elevation-1"
      @page-count="pageCnt=$event"
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
  props     : {
    items: Object
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
        value   : "boardID"
      },
      {
        text    : "제목",
        align   : "center",
        sortable: false,
        value   : "boardTitle"
      },
      {
        text    : "작성자",
        align   : "center",
        sortable: false,
        value   : "boardWriter"
      },
      {
        text    : "날짜",
        align   : "center",
        sortable: false,
        value   : "boardRegDate"
      },
    ],
    // items 임시데이터 => 나중에 axios로 가져오기

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