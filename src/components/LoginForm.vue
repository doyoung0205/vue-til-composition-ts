<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id:</label>
          <input id="username" type="text" v-model="username" />
          <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid && username">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password">pw:</label>
          <input id="password" type="text" v-model="password" />
        </div>
        <button
          :disabled="!isUsernameValid || !password"
          type="submit"
          class="btn"
          :class="!isUsernameValid || !password ? 'disabled' : null"
        >
          로그인
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  computed,
  onMounted,
  toRefs
} from "@/vueWrapper";
import { validateEmail } from "@/utils/validation";
// import store from "@/store";
import { useStore } from "@/store/useStore";
import { UserData } from "@/types/userType";

export default defineComponent({
  setup(props, context) {
    const store = useStore(context);
    const router = context.root.$router;

    onMounted(() => {
      console.log("onMounted" + props);
      console.log("store", store);
      console.log("context", context);
      console.log("context.root.$router", context.root.$router);
      console.log("ref", ref);
    });

    const userData = reactive<UserData>({
      username: "",
      password: ""
    });

    // log
    const logMessage = ref("");

    const isUsernameValid = computed(() => {
      return validateEmail(userData.username);
    });

    const initForm = () => {
      userData.username = "";
      userData.password = "";
    };

    const submitForm = async () => {
      try {
        // 비즈니스 로직
        const params = {
          username: userData.username,
          password: userData.password
        };
        console.log("userData", params);

        // await this.$store.dispatch("LOGIN", userData);
        await store.dispatch("LOGIN", params);
        router.push("/main");
      } catch (error) {
        // 에러 핸들링할 코드
        console.log("error", error);
        // console.log(error.response.data);
        logMessage.value = error.response.data;
      } finally {
        initForm();
      }
    };

    return {
      ...toRefs(userData),
      logMessage,
      submitForm,
      initForm,
      isUsernameValid
    };
  }
});
</script>

<style>
.btn {
  color: white;
}
</style>
