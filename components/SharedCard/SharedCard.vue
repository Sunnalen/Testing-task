<template>
  <div class="card">
    <div class="card__inner">
      <div class="card__time">{{ props.card.time }}</div>
      <h3 class="card__title">{{ props.card.title }}</h3>
      <p class="card__text">{{ props.card.text }}</p>
      <div class="card__benefit">
        <div class="card__benefit-item">
          <nuxt-icon name="check" filled/>
          {{ props.card.benefitFirst }}
        </div>
        <div class="card__benefit-item">
          <nuxt-icon name="check" filled/>
          {{ props.card.benefitSecond }}
        </div>
      </div>
      <div class="card__follower">
        <SharedToggleSwitch size="l" />
        <p>Уже получает {{ props.card.followers }} человек</p>
      </div>
      <img :src="props.card.img" alt="img" class="card__img">
    </div>
  </div>
</template>
<script setup>
 const props = defineProps ({
  card: Object
 })
</script>
<style scoped src="./SharedCard.css"></style>