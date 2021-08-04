<template>
  <div>
    <v-card flat tile>
      <div>
        <v-img src="@/assets/utilBackground.jpg" max-height="350" class="d-flex align-center text-center">
          <v-row>
            <v-spacer/>
            <v-col cols="10">
              <v-card-text class="d-flex">
                <div outlined class="white--text font-weight-black d-inline line " x-large tile>
                  <h1>활용하기</h1>
                </div>
                <h1 class="white--text ml-5"> 내 모바일 청접장 잘 알리고 잘 쓰는 방법</h1>
              </v-card-text>
            </v-col>
          </v-row>

        </v-img>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Util"
}
</script>

<style scoped>
.line {
  border-top: 3px solid white;
  border-bottom: 3px solid white;
}
</style>