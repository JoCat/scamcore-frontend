<template>
  <footer>
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-8 col-md-4">
            <img class="img-fluid" src="/images/logo-footer.png" alt="">
            <p>{{ translate.description }}</p>
          </div>
          <div class="col-12 col-md-8 col-lg-6 footer-nav">
            <strong>{{ translate.nav.title }}</strong>
            <div>
              <ul class="list-unstyled" v-for="(el, i) in translate.nav.elements" :key="i">
                <li v-for="(link, j) in el" :key="j">
                  <NavLink :el="link" />
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-sm-4 col-lg-2 social">
            <a href="#"><img src="/images/twitter.png" alt=""></a>
            <a href="#"><img src="/images/telegram.png" alt=""></a>
            <a href="#"><img src="/images/vk.png" alt=""></a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <p>{{ translate.copyrights }}</p>
        <img src="/images/pay-systems.png" alt="">
      </div>
    </div>
  </footer>
</template>

<style lang="sass" scoped>
.footer-nav>div
  display: flex
  flex-wrap: wrap
</style>

<script lang="ts">
import Vue from 'vue'
import { setTranslate } from './Nav.vue'

export default Vue.extend({
  computed: {
    translate() {
      return setTranslate(this.$store.state.lang, {
        ru: translate_ru,
        ua: translate_ua,
        en: translate_en,
      });
    },
  },
})


const translate_ru = {
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  copyrights: 'Все права защищены© 20!8 - 2020 SpaceCore / June 15, 2020, 12:07 am',
  nav: {
    title: 'Навигация',
    elements: [
      [
        {
          title: "Виртуальные серверы",
          link: "/vds",
        },
        {
          title: "Выделенные серверы",
          link: "/dedicated",
        },
        {
          title: "Серверы без установки",
          link: "/not-install",
        },
        {
          title: "Веб-хостинг",
          link: "/hosting",
        },
        {
          title: "Домены",
          link: "/domains",
        },
        {
          title: "Лицензии ISP",
          link: "/isplicense",
        }
      ],
      [
        {
          title: "Виртуальные серверы",
          link: "/vds",
        },
        {
          title: "Выделенные серверы",
          link: "/dedicated",
        },
        {
          title: "Серверы без установки",
          link: "/not-install",
        },
        {
          title: "Веб-хостинг",
          link: "/hosting",
        },
        {
          title: "Домены",
          link: "/domains",
        },
        {
          title: "Лицензии ISP",
          link: "/isplicense",
        }
      ],
      [
        {
          title: "Виртуальные серверы",
          link: "/vds",
        },
        {
          title: "Выделенные серверы",
          link: "/dedicated",
        },
        {
          title: "Серверы без установки",
          link: "/not-install",
        },
        {
          title: "Веб-хостинг",
          link: "/hosting",
        },
        {
          title: "Домены",
          link: "/domains",
        }
      ],
    ]
  }
}
const translate_ua = {}
const translate_en = {}
</script>
