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
      <NavDropdown class="dropdown-right" :title="current_lang" :is_lang="true">
        <a href="#" @click.prevent="setLang('ru')">
          <img src="/images/flags/russia.png" alt="" />{{ translate.langs.ru }}
        </a>
        <a href="#" @click.prevent="setLang('ua')">
          <img src="/images/flags/russia.png" alt="" />{{ translate.langs.ua }}
        </a>
        <a href="#" @click.prevent="setLang('en')">
          <img src="/images/flags/united kingdom.png" alt="" />{{
            translate.langs.en
          }}
        </a>
      </NavDropdown>
    </div>
    <button
      class="offcanvas-btn hamburger hamburger--squeeze"
      @click.prevent="toggleOffcanvas()"
      :class="showOffcanvas ? 'is-active' : ''"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
    <div class="offcanvas-menu">
      <ul class="list-unstyled">
        <li v-for="(el, i) in translate.nav" :key="i">
          <NavLink v-if="!isDropdown(el)" :el="el" />
          <NavList v-if="isDropdown(el)" :title="el.title">
            <NavLink v-for="(link, j) in el.elements" :key="j" :el="link" />
          </NavList>
        </li>
        <li>
          <a href="#">{{ translate.langs.title }}</a>
          <ul class="list-unstyled">
            <li>
              <a href="#" @click.prevent="setLang('ru')">
                <img src="/images/flags/russia.png" alt="" />
                {{ translate.langs.ru }}
              </a>
            </li>
            <li>
              <a href="#" @click.prevent="setLang('ua')">
                <img src="/images/flags/russia.png" alt="" />
                {{ translate.langs.ua }}
              </a>
            </li>
            <li>
              <a href="#" @click.prevent="setLang('en')">
                <img src="/images/flags/united kingdom.png" alt="" />
                {{ translate.langs.en }}
              </a>
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
  data() {
    return {
      showOffcanvas: false,
    };
  },
  computed: {
    current_lang() {
      return this.$store.state.lang;
    },
    translate() {
      return setTranslate(this.$store.state.lang, {
        ru: translate_ru,
        ua: translate_ua,
        en: translate_en,
      });
    },
  },
  methods: {
    isDropdown(el: NavLink) {
      return el.elements !== undefined && el.elements.length > 0;
    },
    setLang(lang: string) {
      this.$store.commit("setLang", lang);
    },
    toggleOffcanvas() {
      this.showOffcanvas = !this.showOffcanvas;
    },
  },
});

export interface NavLink {
  title: string;
  link: string;
  elements?: NavLink[];
}

export function setTranslate(
  lang: string,
  translate: { ru: Object; ua: Object; en: Object }
) {
  switch (lang) {
    case "en":
      return translate.en;
      break;
    case "ua":
      return translate.ua;
      break;
    case "ru":
    default:
      return translate.ru;
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
    title: "Язык",
    ru: "Русский [₽]",
    ua: "Украинский [₴]",
    en: "Английский [€]",
  },
};
let translate_ua = {};
let translate_en = {};
</script>
