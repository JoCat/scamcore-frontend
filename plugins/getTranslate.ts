import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $getTranslate(
      lang: string,
      translate: { ru: Object; ua: Object; en: Object }
    ): any
  }
}

Vue.prototype.$getTranslate = (
  lang: string,
  translate: { ru: Object; ua: Object; en: Object }
) => {
  switch (lang) {
    case "en":
      return translate.en;
      break;
    case "ua":
      return translate.ua;
      break;
    case "ru":
    default:
      return translate.ru;
      break;
  }
}
