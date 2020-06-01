<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id: </label>
          <input id="username" type="text" v-model="username" />
        </div>
        <div>
          <label for="password">pw: </label>
          <input id="password" type="text" v-model="password" />
        </div>
        <div>
          <label for="nickname">nickname: </label>
          <input id="nickname" type="text" v-model="nickname" />
        </div>
        <button type="submit" class="btn">회원 가입</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from "@/vueWrapper";
import { registerUser } from "@/api/auth";
import { UserData } from "@/types/userType";

export default defineComponent({
  setup() {
    const userData = reactive<UserData>({
      username: "",
      password: "",
      nickname: ""
    });

    // Log
    const logMessage = ref("");

    const initForm = () => {
      userData.username = "";
      userData.password = "";
      userData.nickname = "";
    };

    const submitForm = async () => {
      const { data } = await registerUser({
        username: userData.username,
        password: userData.password,
        nickname: userData.nickname
      });
      console.log(data);
      logMessage.value = `${data.username} 님이 가입되었습니 다`;
      initForm();
    };

    return { ...toRefs(userData), submitForm, logMessage };
  }
});
</script>

<style></style>
