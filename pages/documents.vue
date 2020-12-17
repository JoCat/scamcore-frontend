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
        title: 'Соглашение о предоставлениие услуги',
        description: 'договор между компанией SpaceCore.pro и их пользователями.',
        link: '/agreement',
        image: '/images/documentation-deal.png'
      },
      {
        title: 'Политика конфиденциальности',
        description: 'определяет политику в отношении обработки персональных данных.',
        link: '/privacy',
        image: '/images/documentation-lock.png'
      },
      {
        title: 'Публичная оферта',
        description: 'публичное предложение Хостера с Пользователем договор аренды услуг.',
        link: '/publicoffer',
        image: '/images/documentation-deal.png'
      }
    ]
  },
  ua: {},
  en: {}
}
</script>
