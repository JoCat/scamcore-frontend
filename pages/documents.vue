<template>
  <div>
    <header class="alternative">
      <div class="container">
        <Nav type="alternative"/>
      </div>
    </header>
    <main>
      <section class="container documentation">
        <h2 class="title" v-html="translate.title"></h2>
        <nuxt-link
          class="documentation-link" :to="el.link"
          v-for="(el, i) in translate.elements" :key="i"
        >
          <img :src="el.image" alt="">
          <div>
            <strong>{{ el.title }}</strong>
            <p>{{ el.description }}</p>
          </div>
        </nuxt-link>
      </section>
      <Feedback/>
    </main>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    translate() {
      return this.$getTranslate(this.$store.state.lang, translate);
    },
  }
})

const translate = {
  ru: {
    title: 'Наша<br> документация',
    elements: [
      {
        title: 'Политика конфиденциальности',
        description: 'Определение политики в отношении обработки персональных данных.',
        link: '/privacy',
        image: '/images/documentation-lock.png'
      },
      {
        title: 'Условия использования услуг Хостинг-провайдера',
        description: 'Публичный документ о соглашении между Пользователем и компанией.',
        link: '/publicoffer',
        image: '/images/documentation-deal.png'
      }
    ]
  },
  ua: {},
  en: {}
}
</script>
