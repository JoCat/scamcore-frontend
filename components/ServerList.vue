<template>
  <div class="list">
    <table>
      <thead>
        <tr>
          <th class="geekbench">{{ translate.geekbench }}</th>
          <th class="cpu">{{ translate.cpu }}</th>
          <th class="ram">{{ translate.ram }}</th>
          <th class="storage">{{ translate.storage }}</th>
          <th class="traffic">{{ translate.traffic }}</th>
          <th class="ddos">{{ translate.ddos }}</th>
          <th class="location">{{ translate.location }}</th>
          <th class="price"></th>
        </tr>
      </thead>
      <tbody>
        <template v-for="[groupID, group] in formattedServers">
          <tr :key="groupID">
            <td colspan="8" class="list-title">
              <div>{{ group.title }}</div>
            </td>
          </tr>
          <ServerCard v-for="server in group.servers" :key="groupID+'.'+server.id" :data="server" :geekbenchMax="geekbenchMax"/>
        </template>
      </tbody>
    </table>
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
      const groups: Map<string, any> = new Map(this.servers.map((e: any) => [e.group.id, {title: e.group.title, servers: []}]))

      this.servers.forEach((e: any) => {
        groups.get(e.group.id).servers.push(e)
      })
      return groups
    },
    translate(): {} {
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
  },
  en: {
    geekbench: 'Geekbench',
  }
}
</script>
