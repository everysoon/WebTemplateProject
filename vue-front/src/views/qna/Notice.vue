<template>
  <!-- notice랑 guide QnALayout에 합치기 -> data만 다르게 받아오면 될거같음 -->
<board-list :items="items"/>
</template>

<script>
import BoardList from "../../components/board/BoardList";

export default {
  name: "Notice",
  components: {BoardList},
  data:()=>({
    items: [
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
    ]
  })
}
</script>

<style scoped>

</style>