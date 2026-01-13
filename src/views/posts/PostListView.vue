<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4"/>

    <div class="row g-3">
      <!-- <div class="col-12"> -->
      <div v-for="post in posts" class="col-3">
        <PostItem 
          :title="post.title" 
          :contents="post.contents" 
          :created-at="post.createdAt"
          @click="goPage(post.id)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import PostItem from '../../components/posts/PostItem.vue';
import { getPosts } from '../../api/posts';
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const posts = ref([])

const fetchPosts = () => {
  posts.value = getPosts()
}

// 다양한 화면이동 방법
const goPage = (index) => {
  // router.push(`/posts/${index}`)
  // router.push({ path: `/posts/${index}` }) // 경로가 있는 객체
  // router.push({ name: 'PostDetail', params: { id: index } }) // 이름을 가지는 라우트
  // router.push({ path: '/register', query: { plan: 'private' } }) // 쿼리와 함께 사용(url?key=value)
  // router.push({ path: '/about', hash: '#team' }) // 해시와 함께 사용, /about#team
  router.push({
    name: 'PostDetail',
    params: {
      id: index
    },
    query: {
      searchText: 'hello'
    },
    hash: '#world'
  })
}

fetchPosts()
</script>

<style lang="scss" scoped>

</style>