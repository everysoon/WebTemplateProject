<template>
  <v-container fluid class="mt-8">
    <v-row dense justify="center">
      <v-col v-for="card in cards" :key="card.id" cols="3" @click="pageChange(card.id)">
        <v-hover v-slot="{hover}" >
          <v-card :elevation="hover?12:2" :class="{'on-hover':hover}" @mouseover="hoverCard">
            <v-img :src="card.src" class="white--text align-end"
                   gradient="to bottom, rgba(255,255,255,.1), rgba(0,0,0,.5)" height="300px">
              <v-card-title v-text="card.title"/>
              <v-card-subtitle>
                <p v-text="card.writer"/>
                <p v-text="card.regDate"/>
              </v-card-subtitle>
            </v-img>
            <v-card-actions>
              <v-spacer/>
              <icon-button icon="heart"/>
              <icon-button icon="bookmark"/>
              <icon-button icon="share-variant"/>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import IconButton from "../button/IconButton";

export default {
  name      : "AffectItem",
  components: {IconButton},
  props     : {
    cards: Array
  },
  methods   : {
    pageChange(id) {
      this.$router.push('/affect/' + id);
    },
    hoverCard(e){
      e.target.style.cursor = "pointer"
    },
  }

}
</script>

<style scoped>

</style>