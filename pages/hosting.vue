<template>
  <div>
    <header class="main">
      <div class="container">
        <Nav/>
        <div class="row lead">
          <div class="col-12 col-lg-7">
            <h1 v-html="translate.header.title"></h1>
            <p>{{ translate.header.description }}</p>
            <a :href="translate.header.button.href">{{ translate.header.button.text }}</a>
          </div>
        </div>
      </div>
    </header>
    <main>
      <section class="container hosting">
        <h2 class="title center">Хостинг сайтов</h2>
        <div class="row">
          <div
            class="col-12 col-md-6 col-lg-4"
            v-for="(el, i) in translate.main.elements" :key="i"
            :class="i == translate.main.elements.length - 1 ? 'm-auto' : ''"
          >
            <div class="hosting-card">
              <div class="head">
                <strong>{{ el.title }}</strong>
                <p class="text">{{ el.description }}</p>
                <p class="storage">{{ el.storage }}</p>
                <p class="sites">{{ el.sites }}</p>
              </div>
              <ul class="list-unstyled">
                <li v-for="(text, j) in el.list" :key="j">{{ text }}</li>
              </ul>
              <p class="price">
                {{ translate.main.price }}
                <strong>{{ el.price }}</strong>
              </p>
              <a class="buy" href="#">{{ translate.main.buy }}</a>
            </div>
          </div>
        </div>
      </section>
      <Advantages/>
      <Faq/>
      <Feedback/>
    </main>
    <Footer/>
  </div>
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

let translate = {
  header: {
    title: 'Уникальное<br> предложение тарифа',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    button: {
      text: 'Просмотреть услуги',
      href: '#'
    }
  },
  main: {
    title: 'Хостинг сайтов',
    elements: [
      {
        title: 'host-0',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        storage: '13 ГБ SSD',
        sites: '7 сайтов',
        list: [
          'Поддержка php / mysql и многое другое для сайта',
          'Поддержка php / mysql и многое другое для сайта',
          'Поддержка php / mysql и многое другое для сайта',
          'Поддержка php / mysql и многое другое для сайта'
        ],
        price: '5364 rub'
      },
      {
        title: 'host-0',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        storage: '13 ГБ SSD',
        sites: '7 сайтов',
        list: [
          'Поддержка php / mysql и многое другое для сайта',
          'Поддержка php / mysql и многое другое для сайта',
          'Поддержка php / mysql и многое другое для сайта',
          'Поддержка php / mysql и многое другое для сайта'
        ],
        price: '5364 rub'
      },
      {
        title: 'host-0',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        storage: '13 ГБ SSD',
        sites: '7 сайтов',
        list: [
          'Поддержка php / mysql и многое другое для сайта',
          'Поддержка php / mysql и многое другое для сайта',
          'Поддержка php / mysql и многое другое для сайта',
          'Поддержка php / mysql и многое другое для сайта'
        ],
        price: '5364 rub'
      }
    ],
    price: 'Цена',
    buy: 'Оформить заказ'
  }
}
</script>
