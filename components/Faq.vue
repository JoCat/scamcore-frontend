<template>
  <section class="container faq">
    <h2 class="title" v-html="translate.title"></h2>
    <div class="row wrapper">
      <div class="col-md-5 col-xl-4">
        <button
          v-for="el in faq"
          :key="el.id"
          type="button"
          @click="select(el)"
        >
          {{ el.button }}
        </button>
      </div>
      <div class="col-md-7 col-xl-8">
        <strong v-html="selectedFaq.title"></strong>
        <p>{{ selectedFaq.text }}</p>
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
      faq: [],
      selectedFaq: {
        title: "",
        text: "",
      },
    };
  },
  computed: {
    translate(): any {
      return this.$getTranslate(translate);
    },
  },
  methods: {
    select(faq: any) {
      this.selectedFaq = faq;
    },
  },
  async fetch() {
    try {
      this.faq = await this.$axios.$get(
        `${this.$store.state.lang}/faq/${this.page}`
      );
      if (this.faq[0] !== undefined) this.select(this.faq[0]);
    } catch (error) {
      console.error(error);
    }
  },
});

const translate = {
  ru: {
    title: "Ответы на <br />частые вопросы",
  },
  en: {
    title: "Ответы на <br />частые вопросы",
  },
  ua: {
    title: "Ответы на <br />частые вопросы",
  },
};
</script>
