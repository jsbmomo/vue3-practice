<template>
  <div>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <RouterLink class="nav-link" active-class="active" to="/nested/one">
          Nested One
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" active-class="active" to="/nested/two">
          Nested Two
        </RouterLink>
      </li>
    </ul>

    <hr class="my-4">

    <!-- 특정 URL에 따라 RouterView에 렌더링-->
    <RouterView></RouterView>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>