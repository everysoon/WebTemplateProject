<template>
  <v-container >
    <v-row justify="center">
      <v-col cols="auto" class="mb-6">
        <v-card width="460">
          <v-card-text class="text-center px-12 py-10">
            <div class="text-h4 font-weight-black mb-10 pink--text text--darken-4">
              로그인
            </div>
            <v-text-field prepend-icon="mdi-email" label="email or ID" clearable />
            <v-text-field
                prepend-icon="mdi-lock-outline"
                label="password"
                clearable
            />
            <v-btn to="/" block x-large color="primary mt-6 mb-6"  rounded>로그인</v-btn>
            <router-link to="/auth/sign-up" class="pink--text text--darken-4 ">회원가입하기</router-link>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SignIn"
}
</script>

<style scoped>

</style>