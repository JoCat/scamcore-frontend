<template>
  <div>Please wait...</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  async mounted() {
    // location.href = "http://localhost:3000/"
    const urlParams = new URLSearchParams(location.search);
    const code = urlParams.get("code");
    if (code === null || code.length === 0) this.$router.push("/");

    try {
      await this.$axios.$post("/subscribe/verify", { code });
    } catch (error) {
      switch (error.response.data.code) {
        case 203:
          this.$router.push("/notification?invalidCode");
          break;
        default:
          alert(this.translate.unknownError);
          break;
      }
      return;
    }
    this.$router.push("/notification?verifySuccess");
  },
  computed: {
    translate() {
      return this.$getTranslate(translate);
    },
  },
});

const translate = {
  ru: {
    unknownError: "Неизвестная ошибка!",
  },
  ua: {
    unknownError: "Неизвестная ошибка!",
  },
  en: {
    unknownError: "Неизвестная ошибка!",
  },
};
</script>
