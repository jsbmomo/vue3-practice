<template>
  <div>
    <h2>게시글 목록</h2>

    <hr class="my-4"/>

    <form @submit.prevent>
      <div class="row g-3">
        <div class="col">
          <input v-model="params.title_like" type="text" class="form-control"/>
        </div>
        <div class="col-3">
          <select v-model="params._limit" class="form-select">
            <option value="3">3개씩 보기</option>
            <option value="6">6개씩 보기</option>
            <option value="9">9개씩 보기</option>
          </select>
        </div>
      </div>
    </form>

    <hr class="my-4"/>

    <div class="row g-3">
      <!-- <div class="col-12"> -->
      <div v-for="post in posts" class="col-4">
        <PostItem 
          :title="post.title" 
          :contents="post.contents" 
          :created-at="post.createdAt"
          @click="goPage(post.id)"
        />
      </div>
    </div>

    <nav class="mt-5" aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: params._page <= 1 }">
          <a class="page-link" href="#" @click.prevent="--params._page" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        <li v-for="page in pageCount" :key="page" class="page-item" :class="{ active: params._page === page}">
          <a class="page-link" href="#" @click.prevent="params._page = page">{{ page }}</a>
        </li>
        <!-- <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li> -->
        <li class="page-item" :class="{ disabled: params._page >= pageCount }">
          <a class="page-link" href="#" @click.prevent="++params._page" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>

    <hr class="my-5"/>

  </div>
</template>

<script setup>
import PostItem from '../../components/posts/PostItem.vue';
import { getPosts } from '../../api/posts';
import { ref, reactive, computed, watchEffect } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const posts = ref([])
const params = ref({ // json-server 공식문서 참고
  _sort: 'createdAt',
  _order: 'desc',
  _page: 1,
  _limit: 3,
  title_like: ''
})
// pagination
const totalCount = ref(0)
const pageCount = computed(() => Math.ceil(totalCount.value / params.value._limit))

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
    const { data, headers } = await getPosts(params.value)

    posts.value = data 

    totalCount.value = headers['x-total-count']
  } catch (error) {
    console.error(error);
  }
}

// fetchPosts 안에 사용하고 있는 반응형 데이터에 변경 발생 시, 콜백 함수 다시 실행
// params는 fetchPosts 안에서 사용하고 있기 때문에, filter에 값을 입력하면 watch가 변경 값을 인지하여
// fetchPosts가 호출된다. 
watchEffect(fetchPosts)

fetchPosts()

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
</script>

<style lang="scss" scoped>

</style>