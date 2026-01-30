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
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { deletePost, getPostById } from '../../api/posts';

const route = useRoute()
const router = useRouter()
// const id = route.params.id

const props = defineProps({
  id: [String, Number]
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

const fetchPost = async (postId) => {
  const { data } = await getPostById(postId)

  setPost(data)
}

const setPost = ({ title, contents, createdAt }) => {
  post.value.title = title
  post.value.contents = contents
  post.value.createdAt = createdAt
}

//fetchPost(id)

const remove = async () => {
  try {
    if (confirm('삭제 하시겠습니까?')) {
      await deletePost(props.id)
      router.push({ name: 'PostList' })
    }
  } catch (error) {
    console.error(error);
  }
}

const goListPage = () => router.push({ name: 'PostList' }) 
const goEditPage = () => router.push({ name: 'PostEdit', params: { id: props.id } })

/**
 * 1) watchEffect는 의존성을 자동 추적하고, props가 여러 개일 때 간단하게 사용 가능하나,
 *    언제 실행되는지 명확하지 않기 때문에 API 호출 시에는 권장하지 않음.
 * 2) watch는 뒤에 사용하는게 나을 지도?
 *    immediate 옵션 사용 시, fetchPost가 없다는 에러 발생. 이는 javascript 문제로,
 *    안에서 사용하는 함수 및 변수를 먼저 호출해야 함.
 */
watch(
  () => props.id, 
  (newVal) => fetchPost(newVal), 
  { immediate: true } // 컴포넌트 생성 직후 1회 실행
)
</script>

<style lang="scss" scoped>
</style>