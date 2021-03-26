import Vue from "vue";

declare module "vue/types/vue" {
  interface Vue {
    $toQueryString(object: Record<string, string | number>): string;
  }
}

Vue.prototype.$toQueryString = function (
  object: Record<string, string | number>
): string {
  return Object.keys(object)
    .map((key) => `${key}=${object[key].toString()}`)
    .join("&");
};
