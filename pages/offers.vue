<template>
  <div>
    <header class="stock">
      <div class="container">
        <Nav/>
        <div class="row lead">
          <div class="col-12 col-sm-9 col-lg-7">
            <h1>{{ translate.header.title }}</h1>
            <p>{{ translate.header.description }}</p>
          </div>
        </div>
      </div>
    </header>
    <main>
      <section class="container stock-page">
        <div class="row">
          <div class="col-12">
            <div class="stock-card first">
              <div v-if="translate.elements[0].sale" class="percent">{{ translate.elements[0].sale }}</div>
              <img :src="translate.elements[0].image" alt="">
              <div class="info">
                <div class="date">
                  {{ translate.date_end_first }}:<br> {{ new Date(translate.elements[0].date_end).toLocaleDateString() }}
                </div>
                <strong>{{ translate.elements[0].title }}</strong>
                <a href="#">{{ translate.more }}</a>
              </div>
            </div>
          </div>
          <div class="col-xl-6" v-for="(el, i) in translate.elements.slice(1, 5)" :key="i">
            <div class="stock-card" :class="Date.now() > el.date_end ? 'stock-ended' : ''">
              <img :src="el.image" alt="">
              <div class="info">
                <div class="status-date">
                  <div class="status">{{ Date.now() > el.date_end ? translate.offer_inactive : translate.offer_active }}</div>
                  <div class="date">
                    <span>{{ translate.date_start }}: {{ new Date(el.date_start).toLocaleDateString() }}</span>
                    <span>{{ translate.date_end }}: {{ new Date(el.date_end).toLocaleDateString() }}</span>
                  </div>
                </div>
                <div class="date">
                    <span>{{ translate.date_start }}: {{ new Date(el.date_start).toLocaleDateString() }}</span>
                    <span>{{ translate.date_end }}: {{ new Date(el.date_end).toLocaleDateString() }}</span>
                </div>
                <strong v-html="el.title"></strong>
                <p class="hide-lg">{{ el.description }}</p>
                <div class="status">{{ Date.now() > el.date_end ? translate.offer_inactive : translate.offer_active }}</div>
                <a href="#">{{ translate.more }}</a>
              </div>
            </div>
          </div>
          <div class="col-12" v-for="(el, i) in translate.elements.slice(6)" :key="6+i">
            <div class="stock-card" :class="Date.now() > el.date_end ? 'stock-ended' : ''">
              <img :src="el.image" alt="">
              <div class="info">
                <div class="status-date">
                  <div class="status">{{ Date.now() > el.date_end ? translate.offer_inactive : translate.offer_active }}</div>
                  <div class="date">
                    <span>{{ translate.date_start }}: {{ new Date(el.date_start).toLocaleDateString() }}</span>
                    <span>{{ translate.date_end }}: {{ new Date(el.date_end).toLocaleDateString() }}</span>
                  </div>
                </div>
                <strong v-html="el.title"></strong>
                <p>{{ el.description }}</p>
                <a href="#">{{ translate.more }}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq/>
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
    }
  }
})

const translate = {
  ru: {
    header: {
      title: 'Наши акции',
      description: 'В этом разделе представлены активные и готовящиеся акции'
    },
    elements: [
      {
        date_start: 1601372291060,
        date_end: 1602683339179,
        title: 'Выгодные предложения на все выделенные сервера и что то еще',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/images/stock-card.png',
        link: '#'
      },
      {
        date_start: 1601372291060,
        date_end: 1602683339179,
        title: 'Выгодные предложения<br> на все выделенные сервера и что то еще',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/images/stock-card.png',
        link: '#'
      },
      {
        date_start: 1601372291060,
        date_end: 1602078346859,
        title: 'Выгодные предложения<br> на все выделенные сервера и что то еще',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/images/stock-card.png',
        link: '#'
      },
      {
        date_start: 1601372291060,
        date_end: 1602078346859,
        title: 'Выгодные предложения<br> на все выделенные сервера и что то еще',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/images/stock-card.png',
        link: '#'
      },
      {
        date_start: 1601372291060,
        date_end: 1602078346859,
        title: 'Выгодные предложения<br> на все выделенные сервера и что то еще',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/images/stock-card.png',
        link: '#'
      },
      {
        date_start: 1601372291060,
        date_end: 1602078346859,
        title: 'Выгодные предложения<br> на все выделенные сервера и что то еще',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/images/stock-card.png',
        link: '#'
      },
      {
        date_start: 1601372291060,
        date_end: 1602078346859,
        title: 'Выгодные предложения<br> на все выделенные сервера и что то еще',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/images/stock-card.png',
        link: '#'
      },
      {
        date_start: 1601372291060,
        date_end: 1602078346859,
        title: 'Выгодные предложения<br> на все выделенные сервера и что то еще',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/images/stock-card.png',
        link: '#'
      }
    ],
    date_start: 'Начало',
    date_end: 'Завершение',
    date_end_first: 'Дата завершения',
    offer_active: 'Акция активна',
    offer_inactive: 'Акция окончена',
    more: 'Подробнее'
  },
  ua: {},
  en: {}
}
</script>
