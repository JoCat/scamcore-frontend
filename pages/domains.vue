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
      <Offers page="domains"/>
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
    },
    translate() {
      return this.$getTranslate(translate);
    }
  }
})

const translate = {
  ru: {
    header: {
      title: 'Подбери свое доменное имя<br> в зоне .ru всего за 175 руб.',
      placeholder: 'Имя домена',
      button: 'Подобрать домен'
    },
    lead: {
      title: 'Уже есть свой<br> домен?',
      button: 'Перенеси его к нам'
    }
  },
  ua: {},
  en: {}
}

function getISPDomainLink(action: string, domain?: string) {
  const queryParams = {
    startform: 'domain.order.name',
    domain_action: action,
    domain_name: domain
  }
  if (domain == undefined) delete queryParams.domain_name

  return `https://billing.spacecore.pro/billmgr?${toQueryString(queryParams)}`
}

function toQueryString(object: any): string {
  return Object.keys(object)
    .map(key => `${key}=${object[key].toString()}`)
    .join('&');
}
</script>
