import Vue from "vue";

type Langs = "ru" | "ua" | "en";

declare module "vue/types/vue" {
  interface Vue {
    $getTranslate<Translate>(translate: Record<Langs, Translate>): Translate;
  }
}

Vue.prototype.$getTranslate = function <Translate>(
  translate: Record<Langs, Translate>
): Translate {
  return translate[this.$store.state.lang as Langs];
};
