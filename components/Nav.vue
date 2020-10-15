<template>
  <nav>
    <nuxt-link to="/" class="d-flex">
      <img
        class="logo"
        :src="
          type == 'alternative'
            ? '/images/logo-alternative.png'
            : '/images/logo.png'
        "
        alt=""
      />
    </nuxt-link>
    <ul>
      <li v-for="(el, i) in translate.nav" :key="i">
        <NavLink v-if="!isDropdown(el)" :el="el" />
        <NavDropdown v-if="isDropdown(el)" :title="el.title">
          <NavLink v-for="(link, j) in el.elements" :key="j" :el="link" />
        </NavDropdown>
      </li>
      <li>
        <NavDropdown
          class="dropdown-right dropdown-contacts"
          :title="translate.contacts.title"
        >
          <!-- <a class="tel" href="tel:+79179036183">+7 917 903 61 83</a> -->
          <a class="email" :href="'mailto:' + translate.contacts.email">
            <!-- <img src="/images/icons/email.png" alt=""> -->
            {{ translate.contacts.email }}
          </a>
          <a class="tg" :href="translate.contacts.tg" target="_blank">
            <img src="/images/icons/telegram.png" alt="" />
            Telegram
          </a>
        </NavDropdown>
      </li>
    </ul>
    <div class="contacts">
      <!-- <a class="tel" href="tel:+79179036183">+7 917 903 61 83</a> -->
      <a class="email" :href="'mailto:' + translate.contacts.email">{{
        translate.contacts.email
      }}</a>
      <a class="tg" :href="translate.contacts.tg" target="_blank">
        <img src="/images/icons/telegram.png" alt="" />
      </a>
    </div>
    <div class="buttons">
      <a class="bill" :href="translate.billing.link" target="_blank">{{
        translate.billing.title
      }}</a>
      <NavDropdown
        class="dropdown-right"
        :title="current_lang" :is_lang="true"
      >
        <a href="#" @click.prevent="setLang('ru')">
          <img src="/images/flags/russia.png" alt="" />{{
            translate.langs.ru
          }}
        </a>
        <a href="#" @click.prevent="setLang('ua')">
          <img src="/images/flags/russia.png" alt="" />{{
            translate.langs.ua
          }}
        </a>
        <a href="#" @click.prevent="setLang('en')">
          <img src="/images/flags/united kingdom.png" alt="" />{{
            translate.langs.en
          }}
        </a>
      </NavDropdown>
    </div>
    <button class="offcanvas-btn hamburger hamburger--squeeze" type="button">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
    <div class="offcanvas-menu">
      <ul class="list-unstyled">
        <li>
          <a href="#"> Услуги </a>
          <ul class="list-unstyled">
            <li><a href="/vds">Виртуальные серверы</a></li>
            <li><a href="/dedicated">Выделенные серверы</a></li>
            <li><a href="/not-install">Серверы без установки</a></li>
            <li><a href="/hosting">Веб-хостинг</a></li>
            <li><a href="/domains">Домены</a></li>
            <li><a href="/isplicense">Лицензии ISP</a></li>
          </ul>
        </li>
        <li>
          <a href="#"> Статус </a>
          <ul class="list-unstyled">
            <li>
              <a href="https://main.spacecore.online/" target="_blank"
                >Статус сервисов</a
              >
            </li>
            <li>
              <a href="https://vm.spacecore.online/" target="_blank"
                >Статус нод</a
              >
            </li>
          </ul>
        </li>
        <li><a href="/documents">Документы</a></li>
        <li>
          <a href="https://wiki.spacecore.pro/" target="_blank">База знаний</a>
        </li>
        <li>
          <a href="https://billing.spacecore.pro/" target="_blank">Биллинг</a>
        </li>
        <li>
          <a href="#"> Язык </a>
          <ul class="list-unstyled">
            <li><img src="/images/flags/russia.png" alt="" />Русский</li>
            <li><img src="/images/flags/russia.png" alt="" />Украинский</li>
            <li>
              <img src="/images/flags/united kingdom.png" alt="" />Английский
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    type: {
      default: "index",
    },
  },
  computed: {
    current_lang() {
      return this.$store.state.lang
    },
    translate() {
      return setTranslate(this.$store.state.lang, {
        ru: translate_ru,
        ua: translate_ua,
        en: translate_en
      })
    }
  },
  methods: {
    isDropdown(el: NavLink) {
      return el.elements !== undefined && el.elements.length > 0;
    },
    setLang(lang: string) {
      this.$store.commit('setLang', lang)
    },
  },
});

export interface NavLink {
  title: string;
  link: string;
  elements?: NavLink[];
}

export function setTranslate(lang: string, translate: {ru: Object, ua: Object, en: Object}) {
  switch (lang) {
    case 'en':
      return translate.en
      break;
    case 'ua':
      return translate.ua
      break;
    case 'ru':
    default:
      return translate.ru
      break;
  }
}

let translate_ru = {
  nav: [
    {
      title: "Услуги",
      elements: [
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
        },
      ],
    },
    {
      title: "Статус",
      elements: [
        {
          title: "Статус сервисов",
          link: "https://main.spacecore.online/",
        },
        {
          title: "Статус нод",
          link: "https://vm.spacecore.online/",
        },
      ],
    },
    {
      title: "Документы",
      link: "/documents",
    },
    {
      title: "База знаний",
      link: "https://wiki.spacecore.pro/",
    },
  ],
  contacts: {
    title: "Контакты",
    email: "support@spacecore.pro",
    tg: "https://t.me/spacecore_pro",
  },
  billing: {
    title: "Биллинг",
    link: "https://billing.spacecore.pro/",
  },
  langs: {
    ru: "Русский [₽]",
    ua: "Украинский [₴]",
    en: "Английский [€]",
  },
}
let translate_ua = {
  nav: [
    {
      title: "321",
      elements: [
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
        },
      ],
    },
    {
      title: "654",
      elements: [
        {
          title: "Статус сервисов",
          link: "https://main.spacecore.online/",
        },
        {
          title: "Статус нод",
          link: "https://vm.spacecore.online/",
        },
      ],
    },
    {
      title: "987",
      link: "/documents",
    },
    {
      title: "База знаний",
      link: "https://wiki.spacecore.pro/",
    },
  ],
  contacts: {
    title: "Контакты",
    email: "support@spacecore.pro",
    tg: "https://t.me/spacecore_pro",
  },
  billing: {
    title: "Биллинг",
    link: "https://billing.spacecore.pro/",
  },
  langs: {
    ru: "Я не [₽]",
    ua: "знаю [₴]",
    en: "Украинский [€]",
  },
}
let translate_en = {
  nav: [
    {
      title: "Services",
      elements: [
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
        },
      ],
    },
    {
      title: "123",
      elements: [
        {
          title: "Статус сервисов",
          link: "https://main.spacecore.online/",
        },
        {
          title: "Статус нод",
          link: "https://vm.spacecore.online/",
        },
      ],
    },
    {
      title: "456",
      link: "/documents",
    },
    {
      title: "789",
      link: "https://wiki.spacecore.pro/",
    },
  ],
  contacts: {
    title: "Контакты скамера",
    email: "support@spacecore.lol",
    tg: "https://t.me/spacecore_pro",
  },
  billing: {
    title: "Биллинга не будет",
    link: "https://billing.spacecore.pro/",
  },
  langs: {
    ru: "Russian [₽]",
    ua: "Ukrainian [₴]",
    en: "English [€]",
  },
}
</script>
