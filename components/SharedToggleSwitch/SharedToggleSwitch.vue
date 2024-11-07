<template>
  <div class="container">
    <label :class="toggleSwitchClass">
        <input type="checkbox">
        <span class="slider"></span>
    </label>
    <p class="toggle__switch-text"><slot name="toggle__switch-title" /></p>
  </div>
</template>
<script setup lang="ts">
  import type { TToggleSwitchClass, ISharedToggleSwitchProps } from './SharedToggleSwitch.types';

  const props = defineProps<ISharedToggleSwitchProps>()

  const toggleSwitchSize: TToggleSwitchClass = {
    l: 'toggle__switch--large',
    m: 'toggle__switch--medium'
  }

  const toggleSwitchClass = computed(() => {
    return `toggle__switch ${toggleSwitchSize[props.size || 'm']}`;
  });
</script>
<style scoped src="./SharedToggleSwitch.css"></style>