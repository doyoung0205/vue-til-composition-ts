<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <LoadingSpinner v-if="isLoading"></LoadingSpinner>
      <ul v-else>
        <PostListItem
          v-for="postItem in postItems"
          :key="postItem._id"
          :postItem="postItem"
          @refresh="fetchData"
        ></PostListItem>
      </ul>
    </div>
    <router-link to="/add" class="create-button">
      <i class="ion-md-add"></i>
    </router-link>
  </div>
</template>

<script>
import PostListItem from "@/components/posts/PostListItem.vue";
import LoadingSpinner from "@/components/common/LoadingSpinner.vue";
import { fetchPosts } from "@/api/posts";
import { ref } from "@/vueWrapper";

export default {
  components: {
    PostListItem,
    LoadingSpinner
  },
  setup() {
    const postItems = ref([]);
    const isLoading = ref(false);

    const fetchData = async () => {
      isLoading.value = true;
      const { data } = await fetchPosts();
      isLoading.value = false;
      postItems.value = data.posts;
    };

    fetchData();

    return { postItems, isLoading, fetchData };
  }
};
</script>

<style></style>
