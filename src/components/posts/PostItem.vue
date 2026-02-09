<template>
  <AppCard>
    <h5 class="card-title" style="cursor: pointer;">{{ title }}</h5>
    
    <p class="card-text">
      {{ contents }}
    </p>

    <p class="text-muted">
      {{ createdAt }}
    </p>

    <template #footer>
      <div class="d-flex" @click.stop>
        <button class="btn p-0 ms-auto" @click="$emit('modal')">
          <i class="bi bi-emoji-sunglasses"></i>
        </button>
      </div>
    </template>
  </AppCard>
</template>

<script setup>
import AppCard from '../AppCard.vue';

defineProps({
  title: {
    type: String,
    required: true
  },
  contents: {
    type: String,
    required: true
  },
  createdAt: {
    type: [String, Date, Number],
  }
})
</script>

<style lang="scss" scoped>

</style>