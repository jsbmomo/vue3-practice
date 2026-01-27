<template>
  <form @submit.prevent>
    <div class="mb-3">
      <label for="title" class="form-label">제목</label>
      <input 
        :value="title"
        @input="$emit('update:title', $event.target.value)"
        id="title"
        type="text" 
        class="form-control" 
        placeholder="제목"
      />
    </div>
    <div class="mb-3">
      <label for="contents" class="form-label">내용</label>
      <!-- @input에서 이벤트 객체를 $event를 통해 받을 수 있음 -->
      <textarea 
        :value="content"
        @input="$emit('update:content', $event.target.value)"
        id="contents"
        class="form-control" 
        rows="3"
      ></textarea>
    </div>

    <div class="d-flex gap-2 mt-4">
      <slot name="actions">
      </slot>
    </div>
  </form>
</template>

<script setup>
defineProps({
  title: String,
  content: String
})

// 다중 v-model 구현
defineEmits([ 'update:title ', 'update:content' ])
</script>

<style lang="scss" scoped>

</style>