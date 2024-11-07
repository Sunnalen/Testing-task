<template>
  <div :class="['title', titleSize[size]]">
    <slot />
  </div>
</template>
<script setup lang="ts">
  import type { IsharedTitleProps, TSizeTitle, TTitleSizeClass } from './SharedTitle.types';

  const props = defineProps<IsharedTitleProps>();

  const titleSize: TTitleSizeClass = {
    l: 'title__large',
    m: 'title__medium'
  }
</script>
<style scoped src="./SharedTitle.css"></style>