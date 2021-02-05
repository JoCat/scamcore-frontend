<template>
  <div class="list">
    <table>
      <thead>
        <tr>
          <th>{{ translate.table.geekbench }}</th>
          <th>{{ translate.table.cpu }}</th>
          <th>{{ translate.table.ram }}</th>
          <th>{{ translate.table.storage }}</th>
          <th>{{ translate.table.traffic }}</th>
          <th>{{ translate.table.ddos }}</th>
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
