<template>
  <div class="list">
    <table>
      <thead>
        <tr>
          <th class="geekbench">{{ translate.table.geekbench }}</th>
          <th class="cpu">{{ translate.table.cpu }}</th>
          <th class="ram">{{ translate.table.ram }}</th>
          <th class="storage">{{ translate.table.storage }}</th>
          <th class="traffic">{{ translate.table.traffic }}</th>
          <th class="ddos">{{ translate.table.ddos }}</th>
          <th class="location">{{ translate.table.location }}</th>
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
  props: ['translate', 'servers', 'geekbenchMax'],
  computed: {
    formattedServers() {
      const groups: Map<string, any> = new Map(this.servers.map((e: any) => [e.group.id, {title: e.group.title, servers: []}]))

      this.servers.forEach((e: any) => {
        groups.get(e.group.id).servers.push(e)
      })
      return groups
    }
  }
})
</script>
