<template>
  <footer>
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-8 col-md-4">
            <img class="img-fluid" src="/images/logo-footer.png" alt="">
            <p v-html="translate.description"></p>
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
export default Vue.extend({
  computed: {
    translate() {
      return this.$getTranslate(this.$store.state.lang, translate);
    },
  },
})

const translate = {
  ru: {
    description: 'SpaceCore — надежный и стабильный хостинг-провайдер нашего времени. <br> Мы стремимся к лучшему результату, делая стоимость услуг ниже, а предложения выгоднее. <br> Сотни счастливых клиентов уже доверяют нам, самое время начать экономить на использовании хостинга!<br> Ждем Вас в уютном круге наших пользователей!',
    copyrights: 'Все права защищены© 20!8 - 2020 SpaceCore / June 15, 2020, 12:07 am',
    nav: {
      title: 'Навигация',
      elements: [
        [
          {
            title: "Выделенные серверы",
            link: "/dedicated",
          },
          {
            title: "Серверы без установки",
            link: "/not-install",
          },
          {
            title: "Виртуальные серверы VDS",
            link: "/vds",
          },
          {
            title: "Виртуальный хостинг",
            link: "/hosting",
          },
          {
            title: "Игровой хостинг",
            link: "/game-hosting",
          }
        ],
        [
          {
            title: "Доменные имена",
            link: "/domains",
          },
          {
            title: "SSL-сертификаты",
            link: "/ssl",
          },
          {
            title: "FTP хранилище",
            link: "/storage",
          },
          {
            title: "Лицензии ISP",
            link: "/isplicense",
          },
          {
            title: "Доп. услуги",
            link: "#",
          }
        ],
        [
          {
            title: "Контакты",
            link: "/contacts",
          },
          {
            title: "Дата-центры",
            link: "/data-centers",
          },
          {
            title: "Отзывы",
            link: "/reviews",
          },
          {
            title: "Акции",
            link: "/offers",
          },
          {
            title: "Блог",
            link: "/articles",
          }
        ],
      ]
    }
  },
  ua: {},
  en: {}
}
</script>
