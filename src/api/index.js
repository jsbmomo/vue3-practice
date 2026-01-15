import axios from "axios";

// axios 공식문서 참고
// 커스텀 설정이 적용된 axios 인스턴스를 생성 가능
function create(baseURL, options) {
  const instance = axios.create(Object.assign({ baseURL }, options))
  return instance
}

const url = import.meta.env.VITE_APP_API_URL

export const posts = create(`${import.meta.env.VITE_APP_API_URL}/posts`)