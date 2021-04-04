<template>
  <div>
    <header class="page-notification">
      <div class="container">
        <Nav />
        <div class="lead">
          <h1>{{ message }}</h1>
          <a @click="button.goto" href="#">{{ button.text }}</a>
          <img src="/images/notification-header-people.png" alt="" />
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      message: "",
      button: {
        text: "",
        goto: {},
      },
    };
  },
  computed: {
    translate() {
      return this.$getTranslate(translate);
    },
  },
  methods: {
    setData(data: { message: string; goto: string }) {
      this.message = data.message;
      this.goto(data.goto);
    },
    goto(location: string) {
      switch (location) {
        case "back":
          this.button.text = this.translate.location.back;
          this.button.goto = () => {
            this.$router.back();
          };
          break;

        case "main":
        default:
          this.button.text = this.translate.location.main;
          this.button.goto = () => {
            this.$router.push("/");
          };
          break;
      }
    },
  },
  mounted() {
    const notifications = <const>[
      "invalidEmail",
      "alreadySub",
      "verify",
      "invalidCode",
      "verifySuccess",
    ];

    const urlParams = new URLSearchParams(location.search);
    const notification: typeof notifications[number] = urlParams.keys().next()
      .value;
    if (notification === undefined) this.$router.push("/");

    if (notifications.includes(notification)) {
      this.setData(this.translate[notification]);
    } else {
      this.setData(this.translate.unknownError);
    }
  },
});

const translate = {
  ru: {
    location: {
      main: "На главную",
      back: "Вернуться назад",
    },
    invalidEmail: {
      message: "Некорректный адрес электронной почты!",
      goto: "back",
    },
    alreadySub: {
      message: "Вы уже подписаны на рассылку!",
      goto: "back",
    },
    verify: {
      message: "Пожалуйста перейдите на почту и подтвердите Ваш Email",
      goto: "main",
    },
    invalidCode: {
      message: "Код подтверждения истёк либо не существует!",
      goto: "main",
    },
    verifySuccess: {
      message: "Вы успешно подписались. Спасибо за Ваш выбор!",
      goto: "main",
    },
    unknownError: {
      message: "Неизвестная ошибка!",
      goto: "main",
    },
  },
  en: {
    location: {
      main: "Вернуться на главную",
      back: "Вернуться назад",
    },
    invalidEmail: {
      message: "Некорректный адрес электронной почты!",
      goto: "back",
    },
    alreadySub: {
      message: "Вы уже подписаны на рассылку!",
      goto: "back",
    },
    verify: {
      message: "Пожалуйста перейдите на почту и подтвердите Ваш Email",
      goto: "main",
    },
    invalidCode: {
      message: "Код подтверждения истёк либо не существует!",
      goto: "main",
    },
    verifySuccess: {
      message: "Вы успешно подписались. Спасибо за Ваш выбор!",
      goto: "main",
    },
    unknownError: {
      message: "Неизвестная ошибка!",
      goto: "main",
    },
  },
  ua: {
    location: {
      main: "Вернуться на главную",
      back: "Вернуться назад",
    },
    invalidEmail: {
      message: "Некорректный адрес электронной почты!",
      goto: "back",
    },
    alreadySub: {
      message: "Вы уже подписаны на рассылку!",
      goto: "back",
    },
    verify: {
      message: "Пожалуйста перейдите на почту и подтвердите Ваш Email",
      goto: "main",
    },
    invalidCode: {
      message: "Код подтверждения истёк либо не существует!",
      goto: "main",
    },
    verifySuccess: {
      message: "Вы успешно подписались. Спасибо за Ваш выбор!",
      goto: "main",
    },
    unknownError: {
      message: "Неизвестная ошибка!",
      goto: "main",
    },
  },
};
</script>
