<template>
  <div>
    <header class="main">
      <div class="container">
        <Nav/>
        <div class="row lead">
          <div class="col-12 col-lg-7">
            <h1 v-html="translate.header.title"></h1>
            <p v-html="translate.header.description"></p>
            <a :href="translate.header.button.href">{{ translate.header.button.text }}</a>
          </div>
        </div>
      </div>
    </header>
    <main>
      <section class="container hosting">
        <h2 class="title center">{{ translate.main.title }}</h2>
        <div class="row">
          <div
            class="col-12 col-md-6 col-lg-4"
            v-for="(el, i) in tariffs" :key="i"
          >
            <div class="hosting-card">
              <div class="head">
                <strong>{{ el.title }}</strong>
                <p class="text">{{ el.description }}</p>
                <p class="storage">{{ el.storage }}</p>
                <p class="sites">{{ el.sites }} {{ sitesPlural(el.sites) }}</p>
              </div>
              <ul class="list-unstyled">
                <li v-for="(text, j) in el.features" :key="j">{{ text }}</li>
              </ul>
              <p class="price">
                {{ translate.main.price }}
                <strong>{{ el.price }} {{ translate.main.currency }}</strong>
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
      tariffs: {}
    }
  },
  async asyncData({$axios, store}) {
    const tariffs = await $axios.$get(`${store.state.lang}/hosting`)

    return {
      tariffs,
    }
  },
  watch: {
    translate: 'getTariffs'
  },
  computed: {
    translate() {
      return this.$getTranslate(translate);
    }
  },
  methods: {
    sitesPlural(count: number): string {
      return this.$pluralization(count, sitesTranslate)
    },
    async getTariffs() {
      this.tariffs = await this.$axios.$get(`${this.$store.state.lang}/hosting`)
    }
  }
})

const sitesTranslate = {
  ru: {
    one: "сайт",
    few: "сайта",
    many: "сайтов",
    other: ""
  },
  en: {
    one: "site",
    few: "",
    many: "",
    other: "sites"
  },
  ua: {
    one: "сайт",
    few: "сайта",
    many: "сайтов",
    other: ""
  }
}



const translate = {
  ru: {
    header: {
      title: 'Виртуальный хостинг',
      description: 'Виртуальный SSD хостинг для сайтов любой сложности.<br> Вы можете разместить от личной визитки до высоконагруженных проектов',
      button: {
        text: 'Просмотреть услуги',
        href: '#'
      }
    },
    main: {
      title: 'Хостинг сайтов',
      price: 'Цена',
      currency: '₽',
      buy: 'Оформить заказ',
    }
  },
  ua: {
    header: {
      title: 'Виртуальный хостинг',
      description: 'Виртуальный SSD хостинг для сайтов любой сложности.<br> Вы можете разместить от личной визитки до высоконагруженных проектов',
      button: {
        text: 'Просмотреть услуги',
        href: '#'
      }
    },
    main: {
      title: 'Хостинг сайтов',
      price: 'Цена',
      currency: '₴',
      buy: 'Оформить заказ'
    }
  },
  en: {
    header: {
      title: 'Виртуальный хостинг',
      description: 'Виртуальный SSD хостинг для сайтов любой сложности.<br> Вы можете разместить от личной визитки до высоконагруженных проектов',
      button: {
        text: 'Просмотреть услуги',
        href: '#'
      }
    },
    main: {
      title: 'Хостинг сайтов',
      price: 'Цена',
      currency: '€',
      buy: 'Оформить заказ'
    }
  }
}
</script>
