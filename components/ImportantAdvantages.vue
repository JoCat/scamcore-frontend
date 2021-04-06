<template>
  <section class="container important-advantages">
    <h2 class="title center">{{ translate.title }}</h2>
    <div class="row">
      <div
        v-for="advantage in advantages"
        :key="advantage.id"
        class="col-12 col-md-6 col-xl-4 el"
      >
        <img :src="advantage.image" alt="" />
        <div>
          <strong>{{ advantage.title }}</strong>
          <p v-html="advantage.text"></p>
        </div>
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
      advantages: [],
    };
  },
  computed: {
    translate(): any {
      return this.$getTranslate(translate);
    },
  },
  async fetch() {
    try {
      this.advantages = await this.$axios.$get(
        `${this.$store.state.lang}/advantages/${this.page}`
      );
    } catch (error) {
      console.error(error);
    }
  },
});

const translate = {
  ru: {
    title: "6 важных преимуществ",
  },
  en: {
    title: "6 важных преимуществ",
  },
  ua: {
    title: "6 важных преимуществ",
  },
};
</script>
