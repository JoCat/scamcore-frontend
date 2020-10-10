<template>
<nav>
    <nuxt-link to="/" class="d-flex">
      <img class="logo" :src="type == 'alternative' ? '/images/logo-alternative.png' : '/images/logo.png'" alt="">
    </nuxt-link>
    <ul>
        <li v-for="(el, i) in translate.nav" :key="i">
          <NavLink v-if="!isDropdown(el)" :el="el"/>
          <NavDropdown v-if="isDropdown(el)" :el="el"/>
        </li>
        <li class="dropdown dropdown-right dropdown-contacts">
          <a href="#">{{ translate.contacts.title }}</a>
          <div class="dropdown-menu">
              <!-- <a class="tel" href="tel:+79179036183">+7 917 903 61 83</a> -->
              <a class="email" :href="'mailto:' + translate.contacts.email">{{ translate.contacts.email }}</a>
              <a class="tg" :href="translate.contacts.tg" target="_blank">
                  <img src="/images/icons/telegram.png" alt="">
                  Telegram
              </a>
          </div>
      </li>
    </ul>
    <div class="contacts">
        <!-- <a class="tel" href="tel:+79179036183">+7 917 903 61 83</a> -->
        <a class="email" :href="'mailto:' + translate.contacts.email">{{ translate.contacts.email }}</a>
        <a class="tg" :href="translate.contacts.tg" target="_blank">
            <img src="/images/icons/telegram.png" alt="">
        </a>
    </div>
    <div class="buttons">
        <a class="bill" :href="translate.billing.link" target="_blank">{{ translate.billing.title }}</a>
        <div class="dropdown dropdown-right">
            <a class="lang" href="#">RU</a>
            <div class="dropdown-menu">
                <a href="#">
                    <img src="/images/flags/russia.png" alt="">{{ translate.langs.ru }}
                </a>
                <a href="#">
                    <img src="/images/flags/russia.png" alt="">{{ translate.langs.ua }}
                </a>
                <a href="#">
                    <img src="/images/flags/united kingdom.png" alt="">{{ translate.langs.en }}
                </a>
            </div>
        </div>
    </div>
    <button class="offcanvas-btn hamburger hamburger--squeeze" type="button">
        <span class="hamburger-box">
            <span class="hamburger-inner"></span>
        </span>
    </button>
    <div class="offcanvas-menu">
        <ul class="list-unstyled">
            <li>
                <a href="#">
                    Услуги
                </a>
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
                <a href="#">
                    Статус
                </a>
                <ul class="list-unstyled">
                    <li><a href="https://main.spacecore.online/" target="_blank">Статус сервисов</a></li>
                    <li><a href="https://vm.spacecore.online/" target="_blank">Статус нод</a></li>
                </ul>
            </li>
            <li><a href="/documents">Документы</a></li>
            <li><a href="https://wiki.spacecore.pro/" target="_blank">База знаний</a></li>
            <li><a href="https://billing.spacecore.pro/" target="_blank">Биллинг</a></li>
            <li>
                <a href="#">
                    Язык
                </a>
                <ul class="list-unstyled">
                    <li>
                        <img src="/images/flags/russia.png" alt="">Русский
                    </li>
                    <li>
                        <img src="/images/flags/russia.png" alt="">Украинский
                    </li>
                    <li>
                        <img src="/images/flags/united kingdom.png" alt="">Английский
                    </li>
                </ul>
            </li>
        </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    type: {
      default: 'index'
    }
  },
  data() {
    return {
      translate: translate
    }
  },
  methods: {
    isDropdown(el: NavLink) {
      return el.elements !== undefined && el.elements.length > 0
    },
    isExternalLink: isExternalLink
  }
})

export interface NavLink {
  title: string
  link: string
  elements?: NavLink[]
}

export function isExternalLink(el: NavLink) {
  return el.link.startsWith('http')
}

let translate = {
  nav: [
    {
      title: 'Услуги',
      elements: [
        {
          title: 'Виртуальные серверы',
          link: '/vds',
        },
        {
          title: 'Выделенные серверы',
          link: '/dedicated',
        },
        {
          title: 'Серверы без установки',
          link: '/not-install',
        },
        {
          title: 'Веб-хостинг',
          link: '/hosting',
        },
        {
          title: 'Домены',
          link: '/domains',
        },
        {
          title: 'Лицензии ISP',
          link: '/isplicense',
        }
      ]
    },
    {
      title: 'Статус',
      elements: [
        {
          title: 'Статус сервисов',
          link: 'https://main.spacecore.online/',
        },
        {
          title: 'Статус нод',
          link: 'https://vm.spacecore.online/',
        }
      ]
    },
    {
      title: 'Документы',
      link: '/documents',
    },
    {
      title: 'База знаний',
      link: 'https://wiki.spacecore.pro/',
    }
  ],
  contacts: {
    title: 'Контакты',
    email: 'support@spacecore.pro',
    tg: 'https://t.me/spacecore_pro'
  },
  billing: {
    title: 'Биллинг',
    link: 'https://billing.spacecore.pro/'
  },
  langs: {
    ru: 'Русский [₽]',
    ua: 'Английский [€]',
    en: 'Украинский [₴]'
  }
}

</script>
