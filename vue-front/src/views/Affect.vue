<template>
  <div>
    <background-bar filename="affectBackground.jpg"
                    title="자랑하기" sub-title="나만의 청접장을 자랑해보세요!"/>
    <affect-list/>
  </div>
</template>

<script>
import AffectList    from "../components/affect/AffectList";
import BackgroundBar from "../components/BackgroundBar";

export default {
  name      : "Affect",
  components: {BackgroundBar, AffectList}
}
</script>

<style scoped>

</style>