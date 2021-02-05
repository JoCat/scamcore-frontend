<template>
  <form class="filter row">
    <div class="col-12 col-md-6">
      <label>Стоимость</label>
      <InputSlider
        :config="{
          range: price,
          snap: true,
          start: [price.min, price.max],
          suffix: ' руб'
        }"
        name="price"
        v-model="priceFilter"
      />
    </div>
    <div class="col-12 col-md-6">
      <label>При оплате за:</label>
      <div class="checkbox-button">
        <input type="radio" id="period1" value="1" v-model="pricePeriodFilter">
        <label for="period1">1 месяц</label>
      </div>
      <div class="checkbox-button">
        <input type="radio" id="period2" value="3" v-model="pricePeriodFilter">
        <label for="period2">3 месяца</label>
      </div>
      <div class="checkbox-button">
        <input type="radio" id="period3" value="6" v-model="pricePeriodFilter">
        <label for="period3">6 месяцев</label>
      </div>
      <div class="checkbox-button">
        <input type="radio" id="period4" value="12" v-model="pricePeriodFilter">
        <label for="period4">1 год</label>
      </div>
    </div>
    <div class="gray-overlay">
      <div class="row">
        <div class="col-12 col-md-8">
          <label>Процессор</label>
          <div class="checkbox" v-for="cpu in cpus" :key="cpu.title">
            <input type="checkbox" :id="'cpu-'+cpu.id" :value="cpu.id" v-model="cpuFilter">
            <label :for="'cpu-'+cpu.id">{{ cpu.title }} {{ cpu.frequency }} GHz</label>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <label>Кол-во ядер</label>
          <InputSlider
            :config="{
              range: cores,
              step: 1,
              start: [cores.min, cores.max]
            }"
            name="core"
            v-model="coresFilter"
          />
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-md-4">
      <label>Тип диска</label>
      <div class="checkbox">
        <input type="radio" id="drive1" name="drive" value="1">
        <label for="drive1">HDD</label>
      </div>
      <div class="checkbox">
        <input type="radio" id="drive2" name="drive" value="2">
        <label for="drive2">SSD</label>
      </div>
      <div class="checkbox">
        <input type="radio" id="drive3" name="drive" value="3">
        <label for="drive3">NVMe</label>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-2" v-if="hideDiskCount">
      <label>Кол-во дисков</label>
      <div class="checkbox">
        <input type="checkbox" id="drive_count1" name="drive_count" value="1">
        <label for="drive_count1">1</label>
      </div>
      <div class="checkbox">
        <input type="checkbox" id="drive_count2" name="drive_count" value="2">
        <label for="drive_count2">2</label>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-md-4">
      <label>Объём дисков</label>
      <div id="storage-slider"></div>
      <InputSlider
        :config="{
          range: storages,
          snap: true,
          start: [storages.min, storages.max],
          suffix: ' Гб'
        }"
        name="storage"
        v-model="storageFilter"
      />
    </div>
    <div class="col-12 col-sm-6 col-md-2">
      <input type="reset" value="Сбросить">
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    hideDiskCount: Boolean,
    servers: Array
  },
  data() {
    return {
      price: {} as any,
      priceFilter: {
        min: 0,
        max: 0
      },
      pricePeriodFilter: 1,
      cpus: [] as any[],
      cpuFilter: [],
      cores: {
        min: 0,
        max: 0
      },
      coresFilter: {
        min: 0,
        max: 0
      },
      storages: {} as any,
      storageFilter: {
        min: 0,
        max: 0
      },
    }
  },
  watch: {
    priceFilter: 'filter',
    pricePeriodFilter: 'filter',
    cpuFilter: 'filter',
    coresFilter: 'filter',
    storageFilter: 'filter',
  },
  methods: {
    filter() {
      let filteredServers = this.servers
        .filter((s: any) => s.price >= this.priceFilter.min)
        .filter((s: any) => s.price <= this.priceFilter.max)
        .filter((s: any) => s.cpuCoresCount >= this.coresFilter.min)
        .filter((s: any) => s.cpuCoresCount <= this.coresFilter.max)
        // .filter((s: any) => s.storage ??? >= this.storageFilter.min)
        // .filter((s: any) => s.storage ??? <= this.storageFilter.max)

        if (this.cpuFilter.length > 0) {
          filteredServers = filteredServers.filter((s: any) => this.cpuFilter.includes(s.cpu.id as never))
        }

      this.$emit('filter', filteredServers)
    }
  },
  created() {
    // Фильтр процессоров
    new Map(this.servers.map((e: any) => [e.cpu.id, e.cpu])).forEach(cpu => { this.cpus.push(cpu) })

    // Фильтр цены
    const prices: number[] = []
    new Set(this.servers.map((e: any) => e.price)).forEach(price => { prices.push(price) })
    const pPercents = getPercents(prices.length)
    prices.sort((a, b) => a - b).forEach((v, i) => {
      this.price[pPercents[i]] = v
    })

    // Фильтр количества ядер
    const cores: number[] = []
    new Set(this.servers.map((e: any) => e.cpuCoresCount)).forEach(core => { cores.push(core) })
    this.cores.min = Math.min(...cores)
    this.cores.max = Math.max(...cores)
    if (this.cores.min == this.cores.max) this.cores.min = 0

    // Фильтр объёма дисков
    const storages: Set<number> = new Set
    this.servers.forEach((e: any) => {
      e.storage.forEach((s: any) => storages.add(s.capacity))
    })
    const sPercents = getPercents(storages.size)
    Array.from(storages).sort().forEach((v, i) => {
      this.storages[sPercents[i]] = v
    })

    this.$emit('filter', this.servers)
  }
})

function getPercents(count: number) {
    const arr = []
    for (let i = 0; i < count; i++) {
        arr.push(`${(i*(100 / (count - 1))).toFixed(0)}%`)
    }
    arr[0] = 'min'
    arr[count-1] = 'max'
    return arr
}
</script>
