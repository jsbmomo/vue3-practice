// Global 컴포넌트에 인터페이스를 정의.
// RouterView, RouterLink 태그가 등록 및 자동 완성되도록 설정
// Refer: https://marketplace.visualstudio.com/items?itemName=Vue.volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    RouterLink: typeof import('vue-router') ['RouterLink']
    RouterView: typeof import('vue-router') ['RouterView']
  }
}