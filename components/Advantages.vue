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
  computed: {
    translate() {
      return this.$getTranslate(this.$store.state.lang, translate)
    }
  }
})

const translate = {
  ru: {
    advantages: {
      title: 'Наши преимущества',
      elements: [
        {
          title: 'Оптимальные<br> цены',
          description: 'Доступная стоимость услуг, которая делает наши предложение ещё лучше'
        },
        {
          title: 'Надежное<br> оборудование',
          description: 'Современное серверное оборудование расположено в лучших дата-центров'
        },
        {
          title: 'Круглосуточная <br> тех. поддержка',
          description: 'Быстрая, отзывчивая и качественная поддержка, предоставляемая 24/7/365'
        },
        {
          title: 'Удобство<br> использования',
          description: 'Лёгкое управление услугами с использованием современного и комфортного интерфейса'
        },
        {
          title: 'Применение <br> в различных сферах',
          description: 'Различные услуги подойдут как для запусков скриптов, так и для реализации больших проектов'
        },
        {
          title: 'Игровая защита <br> от DDoS-атак',
          description: 'Anti-DDoS Game обеспечивает полную защиту от любых видов атак на уровнях L3-L7'
        }
      ]
    },
  },
  ua: {},
  en: {}
}
</script>
