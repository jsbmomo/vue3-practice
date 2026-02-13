<template>
  <div>
    <h2>HomeView</h2>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button class="btn btn-primary" @click="goAboutPage">Move to about</button>

    <hr class="my-4"/>

    <AppGrid 
      :items="items" 
      :col-class="6"
      v-slot="{ item }"
    >
      <AppCard>{{ item }}</AppCard>
    </AppGrid>

    <h4>export default : {{ $person.name }}</h4>
    <h4>Inject : {{ person.name }}</h4>
  </div>
</template>


<script>
// 컴포넌트 인스턴스 확인
export default {
  created() {
    console.log(this.$person.name)
    this.$person.say('export default {}')
  }
}
</script>

<script setup>
import { inject, ref } from 'vue'
import { useRouter } from 'vue-router'
import AppCard from '../components/AppCard.vue';
import AppGrid from '../components/AppGrid.vue';

const router = useRouter()
const goAboutPage = () => {
  router.push('/about')
};

const items = ref(['사과','바나나','딸기','포도'])

// inject 사용 
const person = inject('person')

person.say('setup + inject')
</script>

<style lang="scss" scoped>
</style>