<template>
  <v-card flat class="mt-5 ml-3 mr-3 white scroll" max-height="400">
    <p :class="[`${align}`,`${size}`]">{{text}}</p>
<!--      <v-virtual-scroll-->
<!--          :items="items"-->
<!--          height="400"-->
<!--          item-height="64"-->
<!--      >-->
<!--        <template v-slot:default="{ item }">-->
<!--          <v-list-item :key="item">-->
<!--            <v-list-item-action>-->
<!--              <v-btn-->
<!--                  fab-->
<!--                  small-->
<!--                  depressed-->
<!--                  color="primary"-->
<!--              >-->
<!--                {{ item }}-->
<!--              </v-btn>-->
<!--            </v-list-item-action>-->

<!--            <v-list-item-content>-->
<!--              <v-list-item-title>-->
<!--                User Database Record <strong>ID {{ item }}</strong>-->
<!--              </v-list-item-title>-->
<!--            </v-list-item-content>-->

<!--            <v-list-item-action>-->
<!--              <v-icon small>-->
<!--                mdi-open-in-new-->
<!--              </v-icon>-->
<!--            </v-list-item-action>-->
<!--          </v-list-item>-->

<!--          <v-divider/>-->
<!--        </template>-->
<!--    </v-virtual-scroll>-->
  </v-card>


</template>

<script>
export default {
  name: "MobilePreViewInner",
  props:{
    text:String,
    size:String,
    align:String,
    kinds:String,
    listKinds:String,
    list:Array
  },
  data: () => ({
    // benched: 0,
  }),
  computed: {

    // items () {
    //   return Array.from({ length: this.length }, (k, v) => v + 1)
    // },
    // length () {
    //   return 7000
    // },
  },
}
</script>

<style scoped>

</style>