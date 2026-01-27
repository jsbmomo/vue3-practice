<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.contents }}</p>
    <p class="text-muted">{{ post.createdAt }}</p>

    <hr class="my-4"/>

    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>

      <div class="col-auto me-auto"></div>

      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">수정</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger" @click="remove">삭제</button>
      </div>
    </div>
    <!-- 
    <p>params : {{  $route.params }}</p>
    <p>query : {{ $route.query.searchText }}</p>
    <p>hash : {{ $route.hash }}</p> 
    -->
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { deletePost, getPostById } from '../../api/posts';

const route = useRoute()
const router = useRouter()
const id = route.params.id

const props = defineProps({
  id: {
    type: String
  }
})

/**
 * ref
 * - 객체 할당 가능 
 * - form.value.title
 * - 일관성
 * 
 * reactive
 * - 객체 할당 불가능
 * - form.title
 */
const post = ref({})

const fetchPost = async () => {
  const { data } = await getPostById(id)

  setPost(data)
}

const setPost = ({ title, contents, createdAt }) => {
  post.value.title = title
  post.value.contents = contents
  post.value.createdAt = createdAt
}

fetchPost()

const remove = async () => {
  try {
    if (confirm('삭제 하시겠습니까?')) {
      await deletePost(id)
      router.push({ name: 'PostList' })
    }
  } catch (error) {
    console.error(error);
  }
}

const goListPage = () => router.push({ name: 'PostList' }) 
const goEditPage = () => router.push({ name: 'PostEdit', params: { id } })
</script>

<style lang="scss" scoped>

</style>