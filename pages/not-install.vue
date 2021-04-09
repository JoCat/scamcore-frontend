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
        <div class="row">
          <div class="col-12 col-lg-10 col-xl-9 m-auto">
            <Subscribe />
          </div>
        </div>
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
      <ImportantAdvantages page="not-install" />
      <Offers page="not-install" />
      <Faq page="not-install" />
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
        page: "not-install",
        period: 1,
        itemtype: 57,
        startform: "dedic.order.param",
      },
    };
  },
  async mounted() {
    try {
      this.servers = await this.$axios.$get(`${this.$store.state.lang}/servers/not-install`);
    } catch (error) {
      console.error(error);
    }
  },
  watch: {
    async translate() {
      try {
        this.servers = await this.$axios.$get(`${this.$store.state.lang}/servers/not-install`);
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
      title: "Выделенные серверы <br> без установки",
      description:
        "Выделенные серверы в популярных дата-центрах без платы за установку, которая уже оплачена прошлым владельцем",
      button: {
        text: "Просмотреть услуги",
        href: "#",
      },
    },
    main: {
      title: "Серверы без установки",
    },
  },
  ua: {},
  en: {},
};
</script>
