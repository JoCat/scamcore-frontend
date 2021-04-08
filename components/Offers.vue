<template>
  <section class="container other-offers">
    <h2 class="title center">{{ translate.title }}</h2>
    <div class="row">
      <div
        class="col-12 col-md-6 col-lg-4"
        v-for="offer in offers"
        :key="offer.id"
      >
        <strong v-html="offer.title"></strong>
        <ul class="list-unstyled">
          <li v-for="(string, j) in offer.list" :key="j">{{ string }}</li>
        </ul>
        <a :href="offer.url" target="_blank">{{ offer.link }}</a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["page"],
  data() {
    return {
      offers: [],
    };
  },
  watch: {
    async translate() {
      try {
        this.offers = await this.$axios.$get(
          `${this.$store.state.lang}/other-offers/${this.page}`
        );
      } catch (error) {
        console.error(error);
      }
    }
  },
  computed: {
    translate(): any {
      return this.$getTranslate(translate);
    },
  },
  async mounted() {
    try {
      this.offers = await this.$axios.$get(
        `${this.$store.state.lang}/other-offers/${this.page}`
      );
    } catch (error) {
      console.error(error);
    }
  },
});

const translate = {
  ru: {
    title: "Другие предложения",
  },
  ua: {
    title: "Другие предложения",
  },
  en: {
    title: "Другие предложения",
  },
};
</script>
