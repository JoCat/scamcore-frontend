<template>
  <div class="list">
    <div class="list-head">
      <div class="geekbench">{{ translate.geekbench }}</div>
      <div class="cpu">{{ translate.cpu }}</div>
      <div class="ram">{{ translate.ram }}</div>
      <div class="storage">{{ translate.storage }}</div>
      <div class="traffic">{{ translate.traffic }}</div>
      <div class="ddos">{{ translate.ddos }}</div>
      <div class="location">{{ translate.location }}</div>
      <div class="price"></div>
    </div>
    <div class="list-body">
      <template v-for="[groupID, group] in formattedServers">
        <div class="w-100 list-title" :key="groupID">
          <div>{{ group.title }}</div>
        </div>
        <ServerCard v-for="server in group.servers" :key="groupID+'.'+server.id" :data="server" :geekbenchMax="geekbenchMax"/>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    servers: Array,
    geekbenchMax: Number
  },
  computed: {
    formattedServers() {
      const groups: Map<number, any> = new Map(this.servers.map((e: any) => [e.group.id, {title: e.group.title, servers: []}]))

      this.servers.forEach((e: any) => {
        groups.get(e.group.id).servers.push(e)
      })
      return groups
    },
    translate(): (typeof translate["ru"]) { // Костыль с typeof, но да похуй, спасибо кривой работе типизации
      return this.$getTranslate(this.$store.state.lang, translate)
    }
  }
})

const translate = {
  ru: {
    geekbench: 'Geekbench',
    cpu: 'Процессор',
    ram: 'ОЗУ',
    storage: 'Накопитель',
    traffic: 'Трафик',
    ddos: 'A-DDoS',
    location: 'Локация'
  },
  ua: {
    geekbench: 'Geekbench',
    cpu: '',
    ram: '',
    storage: '',
    traffic: '',
    ddos: '',
    location: ''
  },
  en: {
    geekbench: 'Geekbench',
    cpu: '',
    ram: '',
    storage: '',
    traffic: '',
    ddos: '',
    location: ''
  }
}
</script>
