import Vue from "vue";

type Langs = "ru" | "ua" | "en";
type Rules = "one" | "few" | "many" | "other";
// type Rules = "zero" | "one" | "two" | "few" | "many" | "other"
const langs: Record<Langs, string> = { ru: "ru", en: "en", ua: "ru-UA" };

declare module "vue/types/vue" {
  interface Vue {
    $pluralization(
      number: number,
      words: Record<Langs, Record<Rules, string>>
    ): string;
  }
}

Vue.prototype.$pluralization = function (
  number: number,
  words: Record<Langs, Record<Rules, string>>
): string {
  const rule = new Intl.PluralRules(this.$getTranslate(langs)).select(number);
  return this.$getTranslate(words)[rule];
};
