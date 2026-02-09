<template>
  <!-- Button trigger modal -->
  <Transition>
  <div v-if="modelValue">
    <div class="modal-backdrop fade show"></div>

    <!-- Modal -->
    <div 
      class="modal fade show d-block" 
      tabindex="-1" 
      aria-labelledby="exampleModalLabel" 
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <slot name="header">
              <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
              <button 
                type="button" 
                class="btn-close" 
                data-bs-dismiss="modal" 
                aria-label="Close" 
                @click="closeModal"
              ></button>
            </slot>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
  </Transition>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

const emit = defineEmits([ 'close', 'update:modelValue' ])

const closeModal = () => {
  emit('update:modelValue', false)
}
</script>

<style scoped>
/* Transition에서 기본으로 제공하는 class (공식 문서 참고) */
/* 기본: v-enter-from, 특정 이벤트 명시 시: slide-enter-from */
.v-enter-from, .v-leave-to {
  opacity: 0;
}
.v-enter-active, .v-leave-active {
  /* transition: opacity 0.5s ease; */
  transition: all 0.5s ease;
}
.v-enter-to, .v-leave-from {
  opacity: 1;
}
</style>