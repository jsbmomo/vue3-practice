<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4"/>

    <PostForm 
      v-model:title="post.title"
      v-model:content="post.contents"
      @submit.prevent="editPost"
    >
      <template #actions>
        <button 
          type="button" 
          class="btn btn-outline-danger me-2" 
          @click="goDetailPage"
        >
          취소
        </button>
        <button class="btn btn-primary">수정</button>
      </template>
    </PostForm>

    <AppAlert
      :show="showAlert"
      :message="alertMessage"
      :type="alertType"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getPostById, updatePost } from '../../api/posts'
import PostForm from '../../components/posts/PostForm.vue'
import AppAlert from '../../components/AppAlert.vue'

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
    //goDetailPage()

    vAlert('수정이 완료되었습니다.', 'success')
  } catch(error) {
    console.error(error);

    vAlert('네트워크 오류')
  }
}

// alert
const showAlert = ref(false)
const alertMessage = ref('')
const alertType = ref('error')

const vAlert = (message, type = 'error') => {
  showAlert.value = true
  alertMessage.value = message
  alertType.value = type

  setTimeout(() => showAlert.value = false, 3000)
}
</script>

<style lang="scss" scoped>

</style>