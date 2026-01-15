import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue"
import AboutView from "@/views/AboutView.vue"
import PostCreateView from '../views/posts/PostCreateView.vue'
import PostDetailView from '../views/posts/PostDetailView.vue'
import PostEditView from '../views/posts/PostEditView.vue'
import PostListView from '../views/posts/PostListView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import NestedView from '../views/nested/NestedView.vue'
import NestedOneView from '../views/nested/NestedOneView.vue'
import NestedTwoView from '../views/nested/NestedTwoView.vue'
import NestedHomeView from '../views/nested/NestedHomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/posts',
    name: 'PostList',
    component: PostListView,
  },
  {
    path: '/posts/create',
    component: PostCreateView,
  },
  {
    path: '/posts/:id', // 동적 라우팅
    name: 'PostDetail',
    component: PostDetailView,
    props: true, // get parameter의 값을 props로 받을 경우.
    // props: route => ({ id: parseInt(route.params.id )})
  },
  {
    path: '/posts/:id/edit',
    name: 'PostEdit',
    component: PostEditView,
  },
  { 
    path: '/nested', 
    name: 'Nested', 
    component: NestedView,
    children: [
      {
        path: '', // nested 경로의 home 주소 설정
        name: 'NestedHome', 
        component: NestedHomeView,
      },
      {
        path: 'one', // children에 '/'를 붙이면 절대경로가 되어 /nested/one이 아닌 /one으로 들어가야함.
        name: 'NestedOne', 
        component: NestedOneView,
      },
      {
        path: 'two', 
        name: 'NestedTwo', 
        component: NestedTwoView,
      }
    ]
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: NotFoundView 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router