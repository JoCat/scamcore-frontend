<template>
  <div>
    <header class="main">
      <div class="container">
        <Nav />
        <div class="row lead">
          <div class="col-12 col-lg-7">
            <h1 v-html="translate.header.title"></h1>
            <p v-html="translate.header.description"></p>
            <a :href="translate.header.button.href">{{
              translate.header.button.text
            }}</a>
          </div>
        </div>
      </div>
    </header>
    <main>
      <section class="container servers-list">
        <h2 class="title center">{{ translate.main.title }}</h2>
        <ServersFilter
          :servers="servers"
          @filter="filter"
          @changePeriod="changePeriod"
        />
        <ServerList
          :servers="filteredServers"
          :geekbenchMax="geekbenchMax"
          :params="params"
        />
      </section>
      <ServerOs />
      <ImportantAdvantages page="dedicated" />
      <Offers page="dedicated" />
      <Faq page="dedicated" />
      <Feedback />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      servers: [],
      filteredServers: [] as any[],
      params: {
        page: "dedicated",
        period: 1,
        itemtype: 57,
        startform: "dedic.order.param",
      },
    };
  },
  async mounted() {
    try {
      this.servers = await this.$axios.$get(`${this.$store.state.lang}/servers/dedicated`);
    } catch (error) {
      console.error(error);
    }
  },
  watch: {
    async translate() {
      try {
        this.servers = await this.$axios.$get(`${this.$store.state.lang}/servers/dedicated`);
      } catch (error) {
        console.error(error);
      }
    }
  },
  computed: {
    translate() {
      return this.$getTranslate(translate);
    },
    geekbenchMax(): number {
      return Math.max(
        ...this.servers.map((e: { geekbench: number }) => e.geekbench)
      );
    },
  },
  methods: {
    filter(filteredServers: any[]) {
      this.filteredServers = filteredServers;
    },
    changePeriod(period: number) {
      this.params.period = period;
    },
  },
});

const translate = {
  ru: {
    header: {
      title: "Физические <br> выделенные серверы",
      description:
        "Мощные серверы для размещения Вашего проекта по любым требованиям производительности",
      button: {
        text: "Просмотреть услуги",
        href: "#",
      },
    },
    main: {
      title: "Выделенные серверы",
    },
  },
  ua: {},
  en: {},
};
</script>
