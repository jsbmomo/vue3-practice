import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.js'
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router';
import objPlugins from './plugins/obj';
import funcPlugin from './plugins/func';
import person from './plugins/person'

const app = createApp(App)
app.use(funcPlugin)
app.use(objPlugins, { name: 'Test Plugin'})
app.use(person, { name: 'Beom'} )
app.use(router)
app.mount('#app')



// vite 공식 문서 참고 https://ko.vite.dev/guide/env-and-mode.html
// console.log('MODE: ', import.meta.env.MODE); // development
// console.log('BASE_URL: ', import.meta.env.BASE_URL); //
// console.log('PROD: ', import.meta.env.PROD); // false
// console.log('DEV: ', import.meta.env.DEV); // true
// console.log('VITE_APP_API_URL: ', import.meta.env.VITE_APP_API_URL)

