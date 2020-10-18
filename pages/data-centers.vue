<template>
  <div>
    <header class="data-centers">
      <div class="container">
        <Nav/>
        <div class="lead">
            <h1 v-html="translate.header.title"></h1>
            <p v-html="translate.header.description"></p>
            <img src="/images/data-centers.png" alt="">
        </div>
      </div>
    </header>
    <main>
      <section class="container data-centers-page">
        <div class="card" v-for="(el, i) in translate.elements" :key="i">
          <div class="card-title">
            <strong>{{ el.name }}</strong>
            <div>
              <img :src="`/images/flags/${el.location.flag}.png`" alt="">
              {{ el.location.city }} - <span>{{ el.location.country }}</span>
            </div>
          </div>
          <div class="slider">
              <VueSlickCarousel :arrows="true">
                <img v-for="(img, j) in el.images" :key="j" :src="img" alt="">
              </VueSlickCarousel>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="info" v-html="el.description"></div>
            </div>
            <div class="col-lg-8" v-html="el.content"></div>
          </div>
          <nuxt-link class="more" to="/dedicated">{{ translate.servers }}</nuxt-link>
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
const VueSlickCarousel = require('vue-slick-carousel')
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default Vue.extend({
  components: { VueSlickCarousel },
  data() {
    return {
      translate: translate
    }
  }
})

let translate = {
  header: {
    title: 'Больше количество<br> дата центров',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br> tempor incididunt ut labore et dolore',
  },
  elements: [
    {
      name: 'Название цода',
      location: {
        flag: 'canada',
        country: 'Ukraine',
        city: 'Donbas'
      },
      images: [
        '/images/dc-slider.png',
        '/images/dc-slider.png',
        '/images/dc-slider.png'
      ],
      description: `Москва, ул. Берзарина, д. 36, стр. 3<br><br>
Площадь серверных помещений — 1 250 м²<br><br>
Количество серверных стоек — 500<br><br>
Мощность ДЦ, кВТ — 3 300<br><br>
Источники бесперебойного питания, дизель-генераторы N+1, прямой фрикулинг с адиабатическим доохлаждением`,
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit animLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim`
    },
    {
      name: 'Название цода',
      location: {
        flag: 'canada',
        country: 'Ukraine',
        city: 'Donbas'
      },
      images: [
        '/images/dc-slider.png'
      ],
      description: `Москва, ул. Берзарина, д. 36, стр. 3<br><br>
Площадь серверных помещений — 1 250 м²<br><br>
Количество серверных стоек — 500<br><br>
Мощность ДЦ, кВТ — 3 300<br><br>
Источники бесперебойного питания, дизель-генераторы N+1, прямой фрикулинг с адиабатическим доохлаждением`,
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit animLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim`
    },
    {
      name: 'Название цода',
      location: {
        flag: 'canada',
        country: 'Ukraine',
        city: 'Donbas'
      },
      images: [
        '/images/dc-slider.png'
      ],
      description: `Москва, ул. Берзарина, д. 36, стр. 3<br><br>
Площадь серверных помещений — 1 250 м²<br><br>
Количество серверных стоек — 500<br><br>
Мощность ДЦ, кВТ — 3 300<br><br>
Источники бесперебойного питания, дизель-генераторы N+1, прямой фрикулинг с адиабатическим доохлаждением`,
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit animLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim`
    }
  ],
  servers: 'Показать доступные сервера'
}
</script>

<style>
.slick-prev {
  left: 15px;
  z-index: 1;
}
.slick-next {
  right: 15px;
}
</style>
