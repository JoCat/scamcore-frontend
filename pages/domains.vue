<template>
  <div>
    <header class="domains">
      <div class="container">
        <Nav/>
        <div class="lead">
          <h1 v-html="translate.header.title"></h1>
          <form @submit.prevent="gotoDomainReg()">
            <input type="text" :placeholder="translate.header.placeholder" v-model="domain">
            <button type="submit">{{ translate.header.button }}</button>
          </form>
        </div>
      </div>
    </header>
    <main>
      <section class="container domains-lead">
        <strong v-html="translate.lead.title"></strong>
        <a target="_blank" :href="getDomainTransferLink()">{{ translate.lead.button }}</a>
      </section>

      <section class="container other-offers">
        <h2 class="title center">{{ translate.offers.title }}</h2>
        <div class="row">
          <div
            class="col-12 col-md-6 col-lg-4"
            v-for="(el, i) in translate.offers.elements" :key="i"
          >
            <strong v-html="el.title"></strong>
            <ul class="list-unstyled">
              <li v-for="(string, j) in el.list" :key="j">{{ string }}</li>
            </ul>
            <a :href="el.link.href" target="_blank">{{ el.link.text }}</a>
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
  data() {
    return {
      translate: translate,
      domain: ''
    }
  },
  methods: {
    getDomainTransferLink: () => getISPDomainLink('transfer'),
    gotoDomainReg: function() {
      window.open(this.getDomainRegLink, '_blank')
    }
  },
  computed: {
    getDomainRegLink: function(): string {
      return getISPDomainLink('register', this.domain)
    }
  }
})

let translate = {
  header: {
    title: 'Подбери свое доменное имя<br> в зоне .ru всего за 85 руб',
    placeholder: 'Имя домена',
    button: 'Подобрать домен'
  },
  lead: {
    title: 'Уже есть свой<br> домен?',
    button: 'Перенеси его к нам'
  },
  offers: {
    title: 'Другие предложения',
    elements: [
      {
        title: 'Название услуги <span>в две строки</span>',
        list: [
          'Какое то преимущество услуги',
          'Какое то преимущество услуги',
          'Какое то преимущество услуги',
          'Какое то преимущество услуги'
        ],
        link: {
          text: 'Заказать услугу',
          href: '#'
        }
      },
      {
        title: 'Название услуги <span>в две строки</span>',
        list: [
          'Какое то преимущество услуги',
          'Какое то преимущество услуги',
          'Какое то преимущество услуги',
          'Какое то преимущество услуги'
        ],
        link: {
          text: 'Заказать услугу',
          href: '#'
        }
      },
      {
        title: 'Название услуги <span>в две строки</span>',
        list: [
          'Какое то преимущество услуги',
          'Какое то преимущество услуги',
          'Какое то преимущество услуги',
          'Какое то преимущество услуги'
        ],
        link: {
          text: 'Заказать услугу',
          href: '#'
        }
      }
    ]
  }
}

function getISPDomainLink(action: string, domain?: string) {
  const queryParams = {
    startpage: 'domain',
    startform: 'domain.order.name',
    domain_action: action,
    domain_name: domain
  }
  if (domain == undefined) delete queryParams.domain_name

  return `https://billing.spacecore.pro/billmgr?func=register&redirect=${encodeURIComponent(toQueryString(queryParams))}`
}

function toQueryString(object: any): string {
  return Object.keys(object)
    .map(key => `${key}=${object[key].toString()}`)
    .join('&');
}
</script>
