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
                <th>{{ translate.main.table.geekbench }}</th>
                <th>{{ translate.main.table.cpu }}</th>
                <th>{{ translate.main.table.ram }}</th>
                <th>{{ translate.main.table.storage }}</th>
                <th>{{ translate.main.table.traffic }}</th>
                <th>{{ translate.main.table.ddos }}</th>
                <th class="location">{{ translate.main.table.location }}</th>
                <th class="price"></th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(data, i) in formattedElements">
                <tr :key="i">
                  <td colspan="8" class="list-title">
                    <div>{{ data.name }}</div>
                  </td>
                </tr>
                <ServerCard v-for="(d, j) in data.elements" :key="i+'.'+j" :data="d" :geekbenchMax="geekbenchMax"/>
              </template>
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
      elements: [],
      geekbenchMax: 0
    }
  },
  async asyncData({$axios}) {
    const elements: any[] = await $axios.$get('translate/vds')
    const geekbenchMax = Math.max(...elements.map((e: { geekbench: number }) => e.geekbench))

    return { elements, geekbenchMax }
  },
  computed: {
    translate() {
      return this.$getTranslate(this.$store.state.lang, translate);
    },
    filteredElements() {
      const filt: any[] = this.elements
        // .filter((e: {price: number}) => e.price > 400)
      return filt
    },
    formattedElements() {
      const groups: Map<string, []> = new Map(this.filteredElements.map((e: any) => [e.group_name, []]))
      this.filteredElements.forEach((e : {group_name: string}) => {
        (groups.get(e.group_name) as []).push(e as never)
      })
      let result: any[] = []
      groups.forEach((v, k) => {
        result.push({
          name: k,
          elements: v
        })
      })
      return result
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

// {
//   cpu: '1 vCore Intel Core i7-6700 4.2 GHz',
//   ram: '4 GB RAM',
//   storage: '50 GB NVMe',
//   traffic: '1000 Mbps порт',
//   ddos: 'Standard-AntiDDoS',
//   location: [
//     'Germany',
//     'Finland'
//   ],
//   price: 450,
//   // sale_price: '',
//   // percent: '',
//   geekbench: 150,
//   geekbench_multithread: 24548,
//   available_os: [1, 3, 123],
//   available_soft: [6, 66, 666]
// }
</script>

<style scoped>
.location {
  width: 125px;
}
.price {
  width: 234px;
}
</style>
