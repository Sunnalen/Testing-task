<template>
  <button class="btn">
    <template v-if="isSmallScreen">
      <nuxt-icon class="btn__icon" name="arrow" filled />
    </template>
    <template v-else>
      <slot />
    </template>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'


const isSmallScreen = ref(false)

function updateScreenSize() {
  isSmallScreen.value = window.innerWidth <= 560
}


onMounted(() => {
  window.addEventListener('resize', updateScreenSize)
})


onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize)
})

</script>
<style scoped src="./SharedButton.css"></style>