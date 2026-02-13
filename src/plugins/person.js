export default {
  install(app, options) {
    const person = {
      name: '홍길동',
      say(gubun = '') {
        alert(this.name + ', ' + gubun)
      },
      ...options
    }

    // 단, 컴포넌트 인스턴스는 setup 이후에 생성되기에, <script setup>에 사용 불가 
    // 아래처럼 등록된 전역 변수를 호출하려면 vue2 방법 사용 필요.
    app.config.globalProperties.$person = person

    // setup에서도 사용 가능.
    // setup에서 해당 값을 가져올 때, inject 함수로 가져오기 가능
    app.provide('person', person)
  }
}