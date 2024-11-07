<template>
  <div class="tabs">
    <div>
      {{ props.tab }}
    </div>
  </div>
</template>
<script setup>
  const props = defineProps({
    tab: 'string'
  })
</script>
<style scoped src="./SharedTab.css"></style>