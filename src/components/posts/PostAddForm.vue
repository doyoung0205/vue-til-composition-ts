<template>
  <div class="contents">
    <h1 class="page-header">Create Post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title:</label>
          <input id="title" type="text" v-model="title" />
        </div>
        <div>
          <label for="contents">Contents:</label>
          <textarea id="contents" type="text" rows="5" v-model="contents" />
          <p
            v-if="!isContentsValid"
            class="validation-text warning isContentTooLong"
          >
            Contents length must be less than 250
          </p>
        </div>
        <button type="submit" class="btn">Create</button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed, toRefs } from "@/vueWrapper";
import { createPost } from "@/api/posts";
import { PostRequest } from "@/types/postType";

export default defineComponent({
  setup(props, context) {
    const router = context.root.$router;
    const postData = reactive<PostRequest>({
      title: "",
      contents: ""
    });
    const logMessage = ref("");
    const isContentsValid = computed(() => {
      return postData.contents.length <= 200;
    });

    const submitForm = async () => {
      try {
        const response = await createPost<PostResponse>({
          title: postData.title,
          contents: postData.contents
        });
        router.push("/main");
        console.log(response);
      } catch (error) {
        console.log(error.response.data.message);
        logMessage.value = error.response.data.message;
      }
    };

    return { ...toRefs(postData), logMessage, isContentsValid, submitForm };
  }
});
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: white;
}
</style>
