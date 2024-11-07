<template>
  <div class="rubrics__title">
    <h1>Рубрики</h1>
    <span v-if="!showRubrics" class="rubrics__title-plus" @click="toggleShowRubrics">+</span>
    <span v-if="showRubrics" class="rubrics__title-minus" @click="toggleShowRubrics">-</span>
  </div>
  <input type="checkbox" v-model="allowEmpty" @change="fetchRubrics" /> Показать пустые рубрики
  <div class="rubrics__total">Сумма выбранных элементов: {{ totalSelectedCount }}</div>
  <div v-if="showRubrics" class="rubrics__list">
    <div class="rubrics__items" v-for="rubric in rubrics" :key="rubric.id">
      <input type="checkbox" v-model="rubric.selected" @change="updateSelectedCount" />
      <a :href="'https://www.klerk.ru' + rubric.url">{{ rubric.title }}</a> 
      <span class="rubrics__items-btn" @click="toggleRubricsChild(rubric)">({{ rubric.count }} | {{ getTotalCount(rubric) }})</span>
      <div v-if="rubric.isOpen && rubric.children">
        <div class="rubrics__item" v-for="child in rubric.children" :key="child.id">
          <input type="checkbox" v-model="child.selected" @change="updateSelectedCount"/>
          - <a :href="'https://www.klerk.ru' + child.url">{{ child.title }}</a>({{ child.count }})
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const rubrics = ref([]);
const showRubrics = ref(false);
const allowEmpty = ref(true);

const fetchRubrics = async () => {
  try {
    const response = await fetch(`https://www.klerk.ru/yindex.php/v3/event/rubrics?allowEmpty=${allowEmpty.value ? 1 : 0}`);
    const data = await response.json();
    rubrics.value = data.map(rubric => ({ ...rubric, isOpen: false }));
  } catch (error) {
    console.error("Произошла ошибка при получении данных", error);
  }
};

function getTotalCount(rubric) {
  if (!rubric.children) return rubric.count;
  return rubric.children.reduce((total, child) => total + child.count, rubric.count);
}

const totalSelectedCount = computed(() => {
  const selectedRubricIds = new Set();

  const visitRubric = (rubric) => {
    if (rubric.selected && !selectedRubricIds.has(rubric.id)) {
      selectedRubricIds.add(rubric.id);
      return rubric.count;
    }

    if (rubric.children) {
      return rubric.children.reduce((total, child) => {
        if (child.selected && !selectedRubricIds.has(child.id)) {
          selectedRubricIds.add(child.id);
          return total + child.count;
        }
        return total;
      }, 0);
    }

    return 0;
  };

  return rubrics.value.reduce((total, rubric) => total + visitRubric(rubric), 0);
});

const toggleShowRubrics = () => {
  showRubrics.value = !showRubrics.value;
};

const toggleRubricsChild = (rubric) => {
  rubric.isOpen = !rubric.isOpen;
};

onMounted(() => {
  fetchRubrics();
});
</script>
<style src="./SharedRubrics.css"></style>