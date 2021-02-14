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
      <section class="container servers-list">
        <h2 class="title center">{{ translate.main.title }}</h2>
        <ServersFilter :hideDiskCount="true" :servers="servers" @filter="filter"/>
        <ServerList :translate="translate.main" :servers="filteredServers" :geekbenchMax="geekbenchMax"/>
      </section>
      <ServerOs/>
      <ImportantAdvantages/>
      <Offers/>
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
      servers: [],
      filteredServers: [] as any[],
    }
  },
  async asyncData({$axios, store}) {
    try {
      return { servers: await $axios.$get(`${store.state.lang}/servers/vds`) }
    } catch (error) {
      console.error(error)
    }
  },
  computed: {
    translate() {
      return this.$getTranslate(this.$store.state.lang, translate);
    },
    geekbenchMax(): number {
      return Math.max(...this.servers.map((e: { geekbench: number }) => e.geekbench))
    },
  },
  methods: {
    filter(filteredServers: any[]) {
      this.filteredServers = filteredServers
    }
  }
})

const translate = {
  ru: {
    header: {
      title: 'Виртуальные<br> серверы VDS',
      description: 'Популярные тарифы VDS-хостинга с привлекательной ценой<br> и лучшей производительностью!',
      button: {
        text: 'Просмотреть услуги',
        href: '#'
      }
    },
    main : {
      title: 'VDS серверы',
      table: {
        geekbench: 'Geekbench',
        cpu: 'Процессор',
        ram: 'ОЗУ',
        storage: 'Накопитель',
        traffic: 'Трафик',
        ddos: 'A-DDoS',
        location: 'Локация'
      }
    }
  },
  ua: {},
  en: {}
}

</script>

<style scoped>
.location {
  width: 125px;
}
.price {
  width: 234px;
}
</style>
