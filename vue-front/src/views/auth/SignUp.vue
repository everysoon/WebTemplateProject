<template>
  <v-container>
    <v-row justify="center" class="mb-5">
      <v-col cols="auto">
        <v-card width="460">
          <v-card-text class="text-center px-12 py-10">
            <div class="text-h4 font-weight-black mb-10">
              회원가입
            </div>
            <v-text-field prepend-icon="mdi-email" label="email" clearable />
            <v-text-field
                prepend-icon="mdi-lock-outline"
                label="password"
                clearable
            />
            <v-text-field
                prepend-icon="mdi-lock-outline"
                label="password-confirm"
                clearable
            />
            <v-btn to="/auth/sign-in" block x-large color="primary mt-6" rounded>가입하기</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-divider/>
    <v-row justify="center" class="mt-8">
    <v-btn class="yellow font-weight-bold pa-6">
      <v-img class="mr-3" :src="require('@/assets/kakao-icon.png')" width="35" height="35"></v-img>
      카카오톡 회원가입하기</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SingUp"
}
</script>

<style scoped>

</style>