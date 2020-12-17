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
        <ServersFilter/>
        <div class="list">
          <table>
            <thead>
              <tr>
                <th>Geekbench</th>
                <th>Процессор</th>
                <th>ОЗУ</th>
                <th>Накопитель</th>
                <th>Трафик</th>
                <th>A-DDoS</th>
                <th class="location">Локация</th>
                <th class="price"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="8" class="list-title">
                  <div>SAS VPS/VDS в ЕС (OpenVZ)</div>
                </td>
              </tr>
              <ServerCard v-for="(data, i) in translate.elements" :key="i" :data="data" :geekbenchMax="geekbenchMax"/>
            </tbody>
          </table>
        </div>
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
      translate: translate
    }
  },
  computed: {
    geekbenchMax () {
      const scores: number[] = this.translate.elements.map((e: { geekbench: number }) => e.geekbench)
      return Math.max(...scores)
    }
  }
})

let translate = {
  header: {
    title: 'Виртуальные<br> серверы VDS',
    description: 'Популярные тарифы VDS-хостинга с привлекательной ценой<br> и лучшей производительностью!',
    button: {
      text: 'Просмотреть услуги',
      href: '#'
    }
  },
  main : {
    title: 'VDS серверы'
  },
  elements: [
    {
      cpu: '1 vCore Intel Core i7-6700 4.2 GHz',
      ram: '4 GB RAM',
      storage: '50 GB NVMe',
      traffic: '1000 Mbps порт',
      ddos: 'Standard-AntiDDoS',
      location: [
        'Germany',
        'Finland'
      ],
      price: 450,
      // sale_price: '',
      // percent: '',
      geekbench: 150,
      geekbench_multithread: 24548,
      available_os: [1, 3, 123],
      available_soft: [6, 66, 666]
    },
    {
      cpu: '2 vCore Intel Core i7-6700 4.2 GHz',
      ram: '4 GB RAM',
      storage: '50 GB NVMe',
      traffic: '1000 Mbps порт',
      ddos: 'Standard-AntiDDoS',
      location: [
        'Germany',
        'Finland'
      ],
      price: 450,
      // sale_price: '',
      // percent: '',
      geekbench: 24547,
      geekbench_multithread: 24548,
      available_os: [1, 3, 123],
      available_soft: [6, 66, 666]
    },
    {
      cpu: '3 vCore Intel Core i7-6700 4.2 GHz',
      ram: '4 GB RAM',
      storage: '50 GB NVMe',
      traffic: '1000 Mbps порт',
      ddos: 'Standard-AntiDDoS',
      location: [
        'Germany',
        'Finland'
      ],
      price: 450,
      // sale_price: '',
      // percent: '',
      geekbench: 34547,
      geekbench_multithread: 24548,
      available_os: [1, 3, 123],
      available_soft: [6, 66, 666]
    }
  ]
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
