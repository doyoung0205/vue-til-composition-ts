<template>
  <div class="contents">
    <h1 class="page-header">Edit Post</h1>
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
        <button type="submit" class="btn">Edit</button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed, toRefs } from "@/vueWrapper";
import { fetchPost, editPost } from "@/api/posts";
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
      const id = router.currentRoute.params.id;
      try {
        await editPost(id, {
          title: postData.title,
          contents: postData.contents
        });
        router.push("/main");
      } catch (error) {
        console.log(error);
        logMessage.value = error;
      }
    };

    const createHook = async () => {
      const id = router.currentRoute.params.id;
      const { data } = await fetchPost<PostResponse>(id);
      postData.title = data.title;
      postData.contents = data.contents;
    };

    createHook();

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
