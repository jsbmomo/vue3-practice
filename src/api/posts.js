import { posts } from '.' // index.js를 가져옴.

// axios로 데이터를 호출했다고 가정
const postData = [
  { id: 1, title: '제목', contents: '내용', createdAt: '2026-01-13'},
  { id: 2, title: '제목', contents: '안녕하세요.', createdAt: '2026-01-14'},
  { id: 3, title: '제목', contents: '반가워요.', createdAt: '2026-01-15'},
  { id: 4, title: '제목', contents: '잘있어요.', createdAt: '2026-01-16'},
  { id: 5, title: '제목', contents: '다시만나요', createdAt: '2026-01-17'},
]

export function getPosts(params) {
  return posts.get('/', { params })
}

export function getPostById(id) {
  return posts.get(`/${id}`)
}

export function createPost(data) {
  return posts.post(`/`, data)
}

export function updatePost(id, data) {
  // return posts.put(`/${id}`, data)
  // http put은 전체 데이터 수정 시. patch는 일부만 수정.
  return posts.patch(`/${id}`, data) 
}

export function deletePost(id) {
  return posts.delete(`/${id}`)
}