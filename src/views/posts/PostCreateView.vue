<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4"/>

    <form @submit.prevent>
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input 
          v-model="form.title" 
          id="title"
          type="text" 
          class="form-control" 
          placeholder="제목"
        />
      </div>
      <div class="mb-3">
        <label for="contents" class="form-label">내용</label>
        <textarea 
          v-model="form.contents" 
          id="contents"
          class="form-control" 
          rows="3"
        ></textarea>
      </div>

      <div class="pt-4">
        <button 
          type="button" 
          class="btn btn-outline-dark me-2" 
          @click="goListPage"
        >
          목록
        </button>
        <button 
          class="btn btn-primary"
          @click="save"
        >
          저장
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createPost } from '../../api/posts';

const router = useRouter()

const form = ref({
  title: null,
  contents: null
})

const save = () => {
  try {
    createPost({
      ...form.value,
      createdAt: Date.now().toString('yyyy-MM-dd')
    })
    router.push({ name: 'PostList' })
  } catch (error) {
    console.error(error);
  }
}

const goListPage = () => router.push({ name: 'PostList' })
</script>

<style lang="scss" scoped>

</style>