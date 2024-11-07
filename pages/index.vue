<template>
  <div class="container">
    <SharedRubrics />
    <nuxt-link class="link" to="/main">Перейти на страницу с версткой</nuxt-link>
  </div>
</template>
<script setup>
import SharedRubrics from '~/components/SharedRubrics/SharedRubrics.vue';
</script>
<style>
  .container {
    padding: 20px;
  }
  .link {
    font-size: 24px;
  }
</style>