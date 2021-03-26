<template>
  <div class="row subscribe">
    <div class="col-12 col-md-4" v-html="translate.form.title"></div>
    <div class="col-12 col-md-8">
      <form action="">
        <input type="text" placeholder="Введите ваш Email" />
        <button>Подписаться</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  computed: {
    translate() {
      return this.$getTranslate(translate);
    },
  },
});

const translate = {
  ru: {
    form: {
      title: "Подпишитесь на Email рассылку ",
      description:
        "Выделенные серверы в популярных дата-центрах без платы за установку, которая уже оплачена прошлым владельцем",
      button: {
        text: "Просмотреть услуги",
        href: "#",
      },
    },
  },
  ua: {},
  en: {},
};
</script>
