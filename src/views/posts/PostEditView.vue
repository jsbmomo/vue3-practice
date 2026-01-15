<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4"/>

    <form @submit.prevent>
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input v-model="post.title" type="text" class="form-control" id="title" placeholder="제목">
      </div>
      <div class="mb-3">
        <label for="contents" class="form-label">내용</label>
        <textarea v-model="post.contents" class="form-control" id="contents" rows="3"></textarea>
      </div>

      <div class="pt-4">
        <button type="button" class="btn btn-outline-danger me-2" @click="goDetailPage">취소</button>
        <button class="btn btn-primary" @click="editPost">수정</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getPostById, updatePost } from '../../api/posts'

const route = useRoute()
const router = useRouter()
const id = route.params.id


const post = ref({ title: null, contents: null })

const fetchPost = async () => {
  const { data } = await getPostById(id)
  setPost(data)
}

const setPost = (data) => {
  post.value.title = data.title
  post.value.contents = data.contents
  post.value.createdAt = data.createdAt // 현재 수정 시 모든 데이터를 다 넘기고 있기에 생략 시, null 값.
}

fetchPost()

const goDetailPage = () => router.push({ name: 'PostDetail', params: { id } })

const editPost = async () => {
  try {
    await updatePost(id, { ...post.value })
    goDetailPage()
  } catch(error) {
    console.error(error);
  }
}
</script>

<style lang="scss" scoped>

</style>