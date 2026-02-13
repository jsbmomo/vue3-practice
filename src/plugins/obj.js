/**
 * Plugin는 2가지 인수를 가져옴.
 * - app - 다양한 기능 제공
 *    app.component() 로 전역 컴포넌트 추가 가능
 *    app.config.globalProperties 전역 애플리케이션 인스턴스에 속성 추가
 *    app.directive 커스텀 디렉티브 추가 가능
 *    app.provide() 다양한 리소스를 
 * - options
 */
const objPlugins = {
  install(app, options) {
    console.log('objPlugins app: ', app)
    console.log('objPlugins options: ', options)
  }
}

export default objPlugins;