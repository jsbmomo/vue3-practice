<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4"/>

    <PostForm 
      v-model:title="form.title"
      v-model:content="form.contents"
      @submit.prevent="save"
    >
      <template #actions>
        <button
          type="button"
          class="btn btn-outline-dark me-2"
          @click="goListPage"
        >
          목록
        </button>
        <button class="btn btn-primary">저장</button>
      </template>
    </PostForm>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createPost } from '../../api/posts';
import PostForm from '../../components/posts/PostForm.vue';

const router = useRouter()

const form = ref({
  title: null,
  contents: null
})

const save = () => {
  try {
    createPost({
      ...form.value,
      createdAt: getCurrentDate()
    })
    router.push({ name: 'PostList' })
  } catch (error) {
    console.error(error);
  }
}

const goListPage = () => router.push({ name: 'PostList' })

const getCurrentDate = () => {
  const today = new Date()

  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2,'0')
  const date = String(today.getDate()).padStart(2,'0')

  return `${year}-${month}-${date}`
}
</script>

<style lang="scss" scoped>

</style>