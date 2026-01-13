<template>
  <div class="text-center py-5">
    <h1>Oops!</h1>
    <h2>404 Not Found</h2>
    <div class="text-muted">요청한 페이지를 찾을 수 없습니다!</div>

    <!-- {{ $route.params.pathMatch }} -->

    <div class="mt-4">
      <RouterLink to="/">
        <button class="btn btn-primary">홈으로 돌아가기</button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>

console.warn('page not found...')
</script>

<style lang="scss" scoped>

</style>