import Vue from 'vue'

type Langs = "ru" | "ua" | "en"

declare module 'vue/types/vue' {
  interface Vue {
    $getTranslate<Translate>(
      lang: Langs,
      translate: Record<Langs, Translate>
    ): Translate
  }
}

Vue.prototype.$getTranslate = <Translate>(
  lang: Langs,
  translate: Record<Langs, Translate>
) => {
  return translate[lang]
}
