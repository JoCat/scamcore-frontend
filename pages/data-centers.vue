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
        <div class="card" v-for="(el, i) in dataCenters" :key="i">
          <div class="card-title">
            <strong>{{ el.title }}</strong>
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
  async asyncData({$axios, store}) {
    const dataCenters = await $axios.$get(`${store.state.lang}/data-centers`)

    return {
      dataCenters,
    }
  },
  computed: {
    translate() {
      return this.$getTranslate(translate);
    },
  }
})

const translate = {
  ru: {
    header: {
      title: 'Большое количество<br> разнообразных дата-центров',
      description: 'Наша команда сотрудничает с множеством дата-центров в разных странах',
    },
    servers: 'Показать доступные сервера'
  },
  ua: {},
  en: {}
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
