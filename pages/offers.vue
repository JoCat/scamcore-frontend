<template>
  <div>
    <header class="stock">
      <div class="container">
        <Nav />
        <div class="row lead">
          <div class="col-12 col-sm-9 col-lg-7">
            <h1>{{ translate.header.title }}</h1>
            <p>{{ translate.header.description }}</p>
          </div>
        </div>
      </div>
    </header>
    <main>
      <section class="container stock-page">
        <div class="row">
          <div class="col-12" v-for="(el, i) in currentOffers" :key="`c${i}`">
            <div class="stock-card current">
              <div v-if="el.percentage" class="percent">
                -{{ el.percentage }}%
              </div>
              <img :src="el.image" alt="" />
              <div class="info">
                <div class="date">
                  {{ translate.date_end_current }}:<br />
                  {{ new Date(el.end).toLocaleDateString() }}
                </div>
                <strong>{{ el.title }}</strong>
                <a href="#">{{ translate.more }}</a>
              </div>
            </div>
          </div>
          <div
            class="col-xl-6"
            v-for="(el, i) in expiredOffers.slice(0, 4)"
            :key="`e${i}`"
          >
            <div class="stock-card stock-ended">
              <img :src="el.image" alt="" />
              <div class="info">
                <div class="status-date">
                  <div class="status">{{ translate.offer_inactive }}</div>
                  <div class="date">
                    <span
                      >{{ translate.date_start }}:
                      {{ new Date(el.start).toLocaleDateString() }}</span
                    >
                    <span
                      >{{ translate.date_end }}:
                      {{ new Date(el.end).toLocaleDateString() }}</span
                    >
                  </div>
                </div>
                <div class="date">
                  <span
                    >{{ translate.date_start }}:
                    {{ new Date(el.start).toLocaleDateString() }}</span
                  >
                  <span
                    >{{ translate.date_end }}:
                    {{ new Date(el.end).toLocaleDateString() }}</span
                  >
                </div>
                <strong v-html="el.title"></strong>
                <!-- <p class="hide-lg">{{ el.description }}</p> -->
                <div class="status">{{ translate.offer_inactive }}</div>
                <a href="#">{{ translate.more }}</a>
              </div>
            </div>
          </div>
          <div
            class="col-12"
            v-for="(el, i) in expiredOffers.slice(4)"
            :key="`e${4 + i}`"
          >
            <div class="stock-card stock-ended">
              <img :src="el.image" alt="" />
              <div class="info">
                <div class="status-date">
                  <div class="status">{{ translate.offer_inactive }}</div>
                  <div class="date">
                    <span
                      >{{ translate.date_start }}:
                      {{ new Date(el.start).toLocaleDateString() }}</span
                    >
                    <span
                      >{{ translate.date_end }}:
                      {{ new Date(el.end).toLocaleDateString() }}</span
                    >
                  </div>
                </div>
                <strong v-html="el.title"></strong>
                <!-- <p>{{ el.description }}</p> -->
                <a href="#">{{ translate.more }}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Faq />
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
      offers: [] as any[],
    };
  },
  async asyncData({ $axios, store }) {
    const offers = await $axios.$get(`${store.state.lang}/offers`);

    return {
      offers,
    };
  },
  computed: {
    translate() {
      return this.$getTranslate(translate);
    },
    currentOffers(): any[] {
      return this.offers.filter((e) => new Date(e.end).getTime() > Date.now());
    },
    expiredOffers(): any[] {
      return this.offers.filter((e) => new Date(e.end).getTime() <= Date.now());
    },
  },
});

const translate = {
  ru: {
    header: {
      title: "Наши акции",
      description: "В этом разделе представлены активные и готовящиеся акции",
    },
    date_start: "Начало",
    date_end: "Завершение",
    date_end_current: "Дата завершения",
    offer_inactive: "Акция окончена",
    more: "Подробнее",
  },
  ua: {
    header: {
      title: "Наши акции",
      description: "В этом разделе представлены активные и готовящиеся акции",
    },
    date_start: "Начало",
    date_end: "Завершение",
    date_end_current: "Дата завершения",
    offer_inactive: "Акция окончена",
    more: "Подробнее",
  },
  en: {
    header: {
      title: "Наши акции",
      description: "В этом разделе представлены активные и готовящиеся акции",
    },
    date_start: "Начало",
    date_end: "Завершение",
    date_end_current: "Дата завершения",
    offer_inactive: "Акция окончена",
    more: "Подробнее",
  },
};
</script>
