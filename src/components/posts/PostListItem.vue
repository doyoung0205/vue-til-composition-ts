<template>
  <li>
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-contents">
      {{ postItem.contents }}
    </div>
    <div class="post-time">
      {{ postItem.createdAt | formatDate }}
      <i class="icon ion-md-create" @click="routeEditPage"></i>
      <i class="icon ion-md-trash" @click="deleteItem"></i>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "@/vueWrapper";
import { deletePost } from "@/api/posts";

export default defineComponent({
  props: {
    postItem: {
      type: Object,
      required: true
    }
  },
  setup(props, context) {
    const router = context.root.$router;
    const deleteItem = async () => {
      if (confirm("You want to delete it?")) {
        await deletePost(props.postItem._id);
        context.emit("refresh");
      }
    };
    const routeEditPage = () => {
      const id: stirng = props.postItem._id;
      router.push(`/post/${id}`);
    };

    return { deleteItem, routeEditPage };
  }
});
</script>

<style></style>
