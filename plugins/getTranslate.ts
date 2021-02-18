import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $getTranslate(
      lang: "ru" | "ua" | "en",
      translate: { ru: {}; ua: {}; en: {} }
    ): any
  }
}

Vue.prototype.$getTranslate = (
  lang: "ru" | "ua" | "en",
  translate: { ru: {}; ua: {}; en: {} }
) => {
  return translate[lang]
}
