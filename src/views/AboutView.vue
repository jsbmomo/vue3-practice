<template>
  <div>
    <h2>AboutView</h2>
    <p>{{ $route }}</p>
    <p>{{ $route.name }}</p>
    <button class="btn btn-primary" @click="$router.push('/')">Move to Home</button>
  </div>
</template>


<script setup>

</script>


<style lang="scss" scoped>

</style>