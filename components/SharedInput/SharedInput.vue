<template>
  <div class="input">
    <input class="input__item" type="email" placeholder="Электронная почта" >
    <div class="input__append">
      <slot name="append" />
    </div>
  </div>
</template>
<style scoped src="./SharedInput.css"></style>