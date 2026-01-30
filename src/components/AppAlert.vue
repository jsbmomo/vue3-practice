<template>
  <!-- <Transition> = Vue JS에서 기본 제공하는 객체 -->
  <!-- <Transition name="slide">
    <div v-if="show" class="alert app-alert" :class="typeStyle" role="alert">
      {{ message }}
    </div>
  </Transition> -->
  <div class="app-alert">
    <TransitionGroup name="slide">
      <div 
        v-for="({ message, type }, index) in items" 
        :key="index"
        class="alert" 
        :class="typeStyle(type)" 
        role="alert"
      >
        {{ message }}
      </div>
    </TransitionGroup>
  </div>

</template>

<script setup>
import { computed, reactive, ref, watchEffect } from 'vue';

const props = defineProps({
  items: Array,
})

const typeStyle = (type) => {
  return type === 'error' ? 'alert-danger' : 'alert-success'
}
// const props = defineProps({
//   show: {
//     type: Boolean,
//     default: false
//   },
//   message: {
//     type: String,
//     required: true
//   },
//   type: {
//     type: String,
//     required: true,
//     default: 'error',
//     validator: (value) => ['success', 'error'].includes(value)
//   }
// })
// const typeStyle = computed(() => props.type === 'error' ? 'alert-danger' : 'alert-success')
</script>

<style scoped>
.app-alert {
  position: fixed;
  right: 10px;
  top: 10px;
}

/* Transition에서 기본으로 제공하는 class (공식 문서 참고) */
/* 기본: v-enter-from, 특정 이벤트 명시 시: slide-enter-from */
.slide-enter-from, .slide-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.slide-enter-active, .slide-leave-active {
  /* transition: opacity 0.5s ease; */
  transition: all 0.5s ease;
}
.slide-enter-to, .slide-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
</style>