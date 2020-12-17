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
      <section class="container ips">
        <h2 class="title center">{{ translate.main.title }}</h2>
        <div class="row">
          <div
            class="col-12 col-md-6 col-lg-4"
            v-for="(el, i) in translate.main.elements" :key="i"
          >
            <div class="ips-card">
              <img src="/images/key.png" alt="">
              <div>
                <strong>{{ el.title }}</strong>
                <p>{{ el.price }}</p>
              </div>
            </div>
          </div>
        </div>
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
    }
  }
})

const translate = {
  ru: {
    header: {
      title: 'Лицензии ISPsystem ',
      description: 'Продукты компании ISPSystem являются лидерами на рынке решений панелей управления выделенными и виртуальными серверами',
      button: {
        text: 'Просмотреть услуги',
        href: '#'
      }
    },
    main: {
      title: 'Лицензии ISP',
      elements: [
        {
          title: 'Заголовок товара',
          price: '112,00/мес'
        },
        {
          title: 'Заголовок товара',
          price: '112,00/мес'
        },
        {
          title: 'Заголовок товара',
          price: '112,00/мес'
        },
        {
          title: 'Заголовок товара',
          price: '112,00/мес'
        },
        {
          title: 'Заголовок товара',
          price: '112,00/мес'
        },
        {
          title: 'Заголовок товара',
          price: '112,00/мес'
        }
      ]
    }
  },
  ua: {},
  en: {}
}
</script>
