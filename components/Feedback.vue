<template>
  <section class="container feedback">
    <div class="row">
      <div class="col-12 col-md-6">
        <h2 class="title" v-html="translate.title"></h2>
        <p v-html="translate.text"></p>
      </div>
      <div class="col-12 col-md-6 col-lg-5 offset-lg-1">
        <form @submit.prevent="send">
          <input
            type="text"
            v-model="name"
            :placeholder="translate.form.name"
          />
          <input
            type="email"
            v-model="email"
            :placeholder="translate.form.email"
          />
          <button type="submit">{{ translate.form.button }}</button>
        </form>
      </div>
      <Modal ref="modal" :title="translate.modal.title">
        <p style="text-align: center; font-size: 18px">
          {{ translate.modal.text }}
        </p>
      </Modal>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      name: "",
      email: "",
    };
  },
  computed: {
    translate() {
      return this.$getTranslate(translate);
    },
  },
  methods: {
    async send() {
      try {
        const token = await this.$recaptcha.execute('login');
        await this.$axios.$post("/feedback", {
          name: this.name,
          email: this.email,
          token
        });
        (this.$refs.modal as any).showModal();
        this.name = "";
        this.email = "";
      } catch (error) {
        console.error(error);
      }
    },
  },
  async mounted() {
    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.error(e);
    }
  },
  beforeDestroy() {
    this.$recaptcha.destroy()
  }
});

const translate = {
  ru: {
    title: "У Вас еще остались <br />вопросы?",
    text:
      "Не стоит беспокоиться, один из наших сотрудников в любое время готов \
предоставить Вам бесплатную консультацию и ответить на все возникающие \
вопросы. Всего-навсего необходимо оставить свои контактные данные, \
вскоре Вашим вопросом займется лучший эксперт <b> Галактики SpaceCore!</b>",
    form: {
      name: "Ваше имя",
      email: "Ваш Email",
      button: "Получить консультацию",
    },
    modal: {
      title: "Обратная связь",
      text: "Ваш запрос успешно отправлен!",
    },
  },
  en: {
    title: "У Вас еще остались <br />вопросы?",
    text:
      "Не стоит беспокоиться, один из наших сотрудников в любое время готов \
предоставить Вам бесплатную консультацию и ответить на все возникающие \
вопросы. Всего-навсего необходимо оставить свои контактные данные, \
вскоре Вашим вопросом займется лучший эксперт <b> Галактики SpaceCore!</b>",
    form: {
      name: "Ваше имя",
      email: "Ваш Email",
      button: "Получить консультацию",
    },
    modal: {
      title: "Обратная связь",
      text: "Ваш запрос успешно отправлен!",
    },
  },
  ua: {
    title: "У Вас еще остались <br />вопросы?",
    text:
      "Не стоит беспокоиться, один из наших сотрудников в любое время готов \
предоставить Вам бесплатную консультацию и ответить на все возникающие \
вопросы. Всего-навсего необходимо оставить свои контактные данные, \
вскоре Вашим вопросом займется лучший эксперт <b> Галактики SpaceCore!</b>",
    form: {
      name: "Ваше имя",
      email: "Ваш Email",
      button: "Получить консультацию",
    },
    modal: {
      title: "Обратная связь",
      text: "Ваш запрос успешно отправлен!",
    },
  },
};
</script>
