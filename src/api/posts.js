import axios from "axios"

// axios로 데이터를 호출했다고 가정
const posts = [
  { id: 1, title: '제목', contents: '내용', createdAt: '2026-01-13'},
  { id: 2, title: '제목', contents: '안녕하세요.', createdAt: '2026-01-14'},
  { id: 3, title: '제목', contents: '반가워요.', createdAt: '2026-01-15'},
  { id: 4, title: '제목', contents: '잘있어요.', createdAt: '2026-01-16'},
  { id: 5, title: '제목', contents: '다시만나요', createdAt: '2026-01-17'},
]

export function getPosts() {
  return axios.get('http://localhost:5000/posts')
}

export function getPostById(id) {
  return axios.get(`http://localhost:5000/posts/${id}`)
}

export function createPost(data) {
  return axios.post(`http://localhost:5000/posts`, data)
}

export function updatePost(id, data) {
  return axios.put(`http://localhost:5000/posts/${id}`, data)
}

export function deletePost(id) {
  return axios.delete(`http://localhost:5000/posts/${id}`)
}