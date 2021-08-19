<template>
  <v-container >
    <v-row justify="center">
      <v-col cols="auto" class="mb-6">
        <v-card width="460">
          <v-alert
              class="mb-3"
              :value="isLoginError"
              type="error"
          >아이디와 비밀번호를 확인해주세요</v-alert>
          <v-card-text class="text-center px-12 py-10">
            <div class="text-h4 font-weight-black mb-10 pink--text text--darken-4">
              로그인
            </div>
            <v-text-field v-model="email" prepend-icon="mdi-email" label="email를 입력하세요" clearable />
            <v-text-field
                prepend-icon="mdi-lock-outline"
                label="패스워드를 입력하세요"
                v-model="password"
                type="password"
                clearable
            />
            <v-btn @click="login({email,password})" depressed  block x-large color="primary mt-6 mb-6"  rounded>로그인</v-btn>
            <router-link to="/auth/sign-up" class="pink--text text--darken-4 ">회원가입하기</router-link>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: "SignIn",
  data:()=>({
    email:null,
    password:null,
  }),
  computed:{
    ...mapState(['isLogin','isLoginError'])
  },
  methods:{
    ...mapActions(['login'])
    // login(){
      /**
       * let selectedUser = null
       * this.allUsers.forEach(user=>{
       *   if(user.email === this.email) selectedUser = null;
       * })
       * selectedUser === null ? (this.isError=true) :
       *   user.password!==this.password ?
       *      (this.isError=true) : this.$router.push("/"); this.$
       *
       */
      // console.log(this.email,this.password);
    // }
  }
}
</script>

<style scoped>

</style>