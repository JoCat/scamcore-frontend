<template>
  <section class="container advantages">
    <h2 class="title center">{{ translate.advantages.title }}</h2>
    <div class="row">
      <div class="col-12 col-lg-10 col-xl-9 wrapper">
        <div class="row">
          <div
            class="col-12 col-md-6 col-lg-4"
            v-for="(advantage, i) in translate.advantages.elements" :key="i"
          >
            <div class="advantage-card">
              <img :src="`/images/advantages/${i + 1}.png`" alt="">
              <strong v-html="advantage.title"></strong>
              <p v-html="advantage.description"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      translate: translate
    }
  }
})

const translate = {
  advantages: {
    title: 'Наши преимущества',
    elements: [
      {
        title: 'Низкие<br> цены',
        description: 'Lorem ipsum dolor sit amet,<br> consectetur adipiscing elit, sed do'
      },
      {
        title: 'Лучшее<br> оборудование',
        description: 'Lorem ipsum dolor sit amet,<br> consectetur adipiscing elit, sed do'
      },
      {
        title: 'Надежная<br> техподдержка',
        description: 'Lorem ipsum dolor sit amet,<br> consectetur adipiscing elit, sed do'
      },
      {
        title: 'Простота<br> использования',
        description: 'Lorem ipsum dolor sit amet,<br> consectetur adipiscing elit, sed do'
      },
      {
        title: 'Гибкость для<br> разных задач',
        description: 'Lorem ipsum dolor sit amet,<br> consectetur adipiscing elit, sed do'
      },
      {
        title: 'Низкие<br> цены',
        description: 'Lorem ipsum dolor sit amet,<br> consectetur adipiscing elit, sed do'
      }
    ]
  },
}
</script>
