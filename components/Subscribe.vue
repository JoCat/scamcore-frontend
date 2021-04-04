<template>
  <div class="row subscribe">
    <div class="col-12 col-md-4" v-html="translate.form.title"></div>
    <div class="col-12 col-md-8">
      <form action="">
        <input
          v-model="email"
          ref="input"
          type="email"
          placeholder="Введите ваш Email"
        />
        <button @click.prevent="subscribe">Подписаться</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      email: "",
    };
  },
  computed: {
    translate() {
      return this.$getTranslate(translate);
    },
  },
  methods: {
    async subscribe() {
      if (this.email.length === 0) return this.empty();

      try {
        await this.$axios.$post("/subscribe", {
          email: this.email,
        });
      } catch (error) {
        switch (error.response.data.code) {
          case 201:
            this.$router.push("/notification?invalidEmail");
            break;
          case 202:
            this.$router.push("/notification?alreadySub");
            break;
          default:
            alert(this.translate.unknownError);
            break;
        }
        return;
      }
      this.$router.push("/notification?verify");
    },
    // Animate placeholder
    empty() {
      const el = this.$refs.input as Element;
      for (let i = 0; i < 6; i++) {
        setTimeout(() => {
          el.classList.toggle("empty");
        }, i * 100);
      }
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
    unknownError: "Неизвестная ошибка!",
  },
  ua: {
    form: {
      title: "Подпишитесь на Email рассылку ",
      description:
        "Выделенные серверы в популярных дата-центрах без платы за установку, которая уже оплачена прошлым владельцем",
      button: {
        text: "Просмотреть услуги",
        href: "#",
      },
    },
    unknownError: "Неизвестная ошибка!",
  },
  en: {
    form: {
      title: "Подпишитесь на Email рассылку ",
      description:
        "Выделенные серверы в популярных дата-центрах без платы за установку, которая уже оплачена прошлым владельцем",
      button: {
        text: "Просмотреть услуги",
        href: "#",
      },
    },
    unknownError: "Неизвестная ошибка!",
  },
};
</script>

<style lang="sass" scoped>
.empty::placeholder
  color: red !important
</style>
