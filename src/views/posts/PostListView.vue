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

const fetchPosts = async () => {
  // getPosts()
  //   .then(res => {
  //     console.log(res.data);
  //     posts.value = res.data
  //   })
  //   .catch(error => {
  //     console.log('error : ', error);
  //   })

  // ({ data: posts.value } = await getPosts()) // 이렇게도 가능...

  try {
    const { data } = await getPosts()

    posts.value = data 
  } catch (error) {
    console.error(error);
    
  }
}

// 다양한 화면이동 방법
const goPage = (id) => {
  // router.push(`/posts/${index}`)
  // router.push({ path: `/posts/${index}` }) // 경로가 있는 객체
  // router.push({ name: 'PostDetail', params: { id: index } }) // 이름을 가지는 라우트
  // router.push({ path: '/register', query: { plan: 'private' } }) // 쿼리와 함께 사용(url?key=value)
  // router.push({ path: '/about', hash: '#team' }) // 해시와 함께 사용, /about#team
  router.push({
    name: 'PostDetail',
    params: { id },
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