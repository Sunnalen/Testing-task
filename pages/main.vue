<template>
  <SharedContainer>
    <img src="../assets/images/logo.png"  alt="logo"/>
    <SharedBreadcrumbs />
    <SharedTitle size="l">Подписки «Клерка»</SharedTitle>
    <div class="tabs">
      <SharedTab 
      v-for="tab in tabs"
      :key="tab"
      :class="['tab', {active: activeTab === tab}]"
      :tab="tab"
      @click="activeTab = tab" 
      />
    </div>
    <div class="content">
      <SharedTitle size="m">Выберите рассылки, которые подходят именно вам</SharedTitle>
      <div class="content__input">
        <SharedInput>
          <template #append >
            <SharedButton>Подписаться</SharedButton>
          </template>
        </SharedInput>
        <SharedToggleSwitch size="m">
          <template #toggle__switch-title>
            Подписаться на все рассылки
          </template>
        </SharedToggleSwitch>
      </div>
      <div class="content__cards">
        <SharedCard 
          v-for="card in cards"
          :key="card"
          :card="card"
        />
      </div>
    </div>
    <img src="../assets/images/Footer.png" alt="footer" />
  </SharedContainer>
</template>
<script setup>
  import SharedBreadcrumbs from '~/components/SharedBreadcrumbs/SharedBreadcrumbs.vue';
  import Card_img1 from '../assets/images/Card_img1.png'
  import Card_img2 from '../assets/images/Card_img2.png'
  import Card_img3 from '../assets/images/Card_img3.png'
  import Card_img4 from '../assets/images/Card_img4.png'

  const tabs = ['Рассылки', 'Соцсети', 'Мессенджеры']
  const activeTab = ref('Рассылки')


  const cards = [
    {
      time: 'Перед рассветом', 
      title:'Утренний бухгалтер', 
      text:'Самые важные новости и события за день. Кратко, по делу, структурировано.',
      benefitFirst:'Новости для бухгалтеров, ИП и директора',
      benefitSecond:'Подборка статей за день',
      followers:'59 342',
      img: Card_img1
    },
    {
      time: 'После заката', 
      title:'Ночной бухгалтер', 
      text:'Самая краткая газета о налогах и бухучете в мире — современная рассылка для чтения.',
      benefitFirst:'Анализ, оценка и только самое главное',
      benefitSecond:'Лучшие комменты юзеров в обзоре',
      followers:'37 480',
      img: Card_img2
    },
    {
      time: 'Раз в две недели', 
      title:'Ножницы скидок', 
      text:'Подборка самых выгодных и полезных спецпредложений от надежных компаний.',
      benefitFirst:'Акции и скидки от лидеров рынка',
      benefitSecond:'Те, кто подписался – экономят много денег ',
      followers:'92 118',
      img: Card_img3
    },
    {
      time: 'По мере появления анонсов', 
      title:'Чемодан вебинаров', 
      text:'Подборка с анонсами бесплатных вебинаров на самые топовые темы при участии экспертов.',
      benefitFirst:'Никогда не пришлем платные вебинары',
      benefitSecond:'Подборка топовых тем для вебинаров',
      followers:'92 082',
      img: Card_img4
    }
  ]
</script>
<style scoped>
  .tabs {
    padding-top: var(--gap-xl);
    margin-bottom: 18px;
    display: flex;
    gap: var(--gap-xl);
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--light-gray);
    border-radius: 16px;
  }

  .content__input {
    max-width: 928px;
    width: 100%;
  }
  
  .content__cards {
    padding: var(--gap-xl);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--gap-xl);
  }

  @media (max-width: 1037px) {
    .content__cards {
      grid-template-columns: repeat(1, 1fr);
    }

    .content__input {
      padding: 0 var(--gap-xl);
    }
  }

  @media (max-width: 560px) {
    .content__input {
      padding: 0 var(--gap-l);
    }

    .content__cards {
      padding: 32px var(--gap-l);
    }
  }
</style>