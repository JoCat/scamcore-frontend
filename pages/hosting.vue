<template>
  <div>
    <header class="main">
      <div class="container">
        <Nav />
        <div class="row lead">
          <div class="col-12 col-lg-7">
            <h1 v-html="translate.header.title"></h1>
            <p v-html="translate.header.description"></p>
            <a :href="translate.header.button.href">{{
              translate.header.button.text
            }}</a>
          </div>
        </div>
      </div>
    </header>
    <main>
      <section class="container hosting">
        <h2 class="title center">{{ translate.main.title }}</h2>
        <div class="row">
          <div
            class="col-12 col-md-6 col-lg-4"
            v-for="(el, i) in tariffs"
            :key="i"
          >
            <div class="hosting-card">
              <div class="head">
                <strong>{{ el.title }}</strong>
                <p class="text">{{ el.description }}</p>
                <p class="storage">{{ el.storage }}</p>
                <p class="sites">{{ el.sites }} {{ sitesPlural(el.sites) }}</p>
              </div>
              <ul class="list-unstyled">
                <li v-for="(text, j) in el.features" :key="j">{{ text }}</li>
              </ul>
              <p class="price">
                {{ translate.main.price }}
                <strong>{{ el.price }} {{ translate.main.currency }}</strong>
              </p>
              <a class="buy" @click.prevent="showModal(el)" href="#">{{
                translate.main.buy
              }}</a>
            </div>
          </div>
        </div>
        <Modal ref="modal" :title="translate.modal.title">
          <div class="row">
            <div class="col-6 server-info">
              <div class="modal-title">{{ currentHost.title }}</div>
              <p v-for="(text, j) in currentHost.features" :key="j">
                {{ text }}
              </p>
              <p class="mt-1">{{ translate.main.price }}</p>
              <div class="price">
                {{ currentHost.price }} {{ translate.main.currency }}
              </div>
            </div>
            <div class="col-12 col-md-6">
              <input
                type="text"
                v-model="form.domain"
                :placeholder="translate.modal.form.domain"
              />
              <custom-select v-model="form.location">
                <option value>{{ translate.modal.form.location }}</option>
                <option value="ger">Germany</option>
                <option value="fra">France</option>
                <option value="fin">Finland</option>
              </custom-select>
              <div class="row">
                <div class="col-12 col-md-6">
                  <input
                    type="number"
                    min="1"
                    v-model="form.count"
                    :placeholder="translate.modal.form.count"
                  />
                </div>
                <div class="col-12 col-md-6">
                  <input
                    type="email"
                    v-model="form.email"
                    :placeholder="translate.modal.form.email"
                  />
                </div>
              </div>
              <a @click="hideModal" target="_blank" :href="getHostLink">{{
                translate.modal.form.checkout
              }}</a>
            </div>
          </div>
        </Modal>
      </section>
      <Advantages />
      <Faq page="hosting" />
      <Feedback />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      tariffs: {},
      currentHost: {
        productID: 0,
        features: [""],
      },
      form: {
        count: 1,
        email: "",
        domain: "",
        location: "",
      },
    };
  },
  async asyncData({ $axios, store }) {
    const tariffs = await $axios.$get(`${store.state.lang}/hosting`);

    return {
      tariffs,
    };
  },
  watch: {
    translate: "getTariffs",
  },
  computed: {
    translate() {
      return this.$getTranslate(translate);
    },
    getHostLink(): string {
      const queryParams = {
        startform: "vhost.order.param",
        itemtype: 44,
        pricelist: this.currentHost.productID,
        period: 1,
        domain: this.form.domain,
      };

      return `https://billing.spacecore.pro/billmgr?${this.$toQueryString(
        queryParams
      )}`;
    },
  },
  methods: {
    sitesPlural(count: number): string {
      return this.$pluralization(count, sitesTranslate);
    },
    async getTariffs() {
      this.tariffs = await this.$axios.$get(
        `${this.$store.state.lang}/hosting`
      );
    },
    showModal(el: any) {
      this.currentHost = el;
      (this.$refs.modal as any).showModal();
    },
    hideModal() {
      this.form = {
        count: 1,
        email: "",
        domain: "",
        location: "",
      };
      (this.$refs.modal as any).hideModal();
    },
  },
});

const sitesTranslate = {
  ru: {
    one: "сайт",
    few: "сайта",
    many: "сайтов",
    other: "",
  },
  en: {
    one: "site",
    few: "",
    many: "",
    other: "sites",
  },
  ua: {
    one: "сайт",
    few: "сайта",
    many: "сайтов",
    other: "",
  },
};

const translate = {
  ru: {
    header: {
      title: "Виртуальный хостинг",
      description:
        "Виртуальный SSD хостинг для сайтов любой сложности.<br> Вы можете разместить от личной визитки до высоконагруженных проектов",
      button: {
        text: "Просмотреть услуги",
        href: "#",
      },
    },
    main: {
      title: "Хостинг сайтов",
      price: "Цена",
      currency: "₽",
      buy: "Оформить заказ",
    },
    modal: {
      title: "Заказать виртуальный хостинг",
      form: {
        domain: "Домен",
        location: "Локация",
        count: "Кол-во",
        email: "Почта",
        checkout: "Оформить заказ",
      },
    },
  },
  ua: {
    header: {
      title: "Виртуальный хостинг",
      description:
        "Виртуальный SSD хостинг для сайтов любой сложности.<br> Вы можете разместить от личной визитки до высоконагруженных проектов",
      button: {
        text: "Просмотреть услуги",
        href: "#",
      },
    },
    main: {
      title: "Хостинг сайтов",
      price: "Цена",
      currency: "₴",
      buy: "Оформить заказ",
    },
    modal: {
      title: "Заказать виртуальный хостинг",
      form: {
        domain: "Домен",
        location: "Локация",
        count: "Кол-во",
        email: "Почта",
        checkout: "Оформить заказ",
      },
    },
  },
  en: {
    header: {
      title: "Виртуальный хостинг",
      description:
        "Виртуальный SSD хостинг для сайтов любой сложности.<br> Вы можете разместить от личной визитки до высоконагруженных проектов",
      button: {
        text: "Просмотреть услуги",
        href: "#",
      },
    },
    main: {
      title: "Хостинг сайтов",
      price: "Цена",
      currency: "€",
      buy: "Оформить заказ",
    },
    modal: {
      title: "Заказать виртуальный хостинг",
      form: {
        domain: "Домен",
        location: "Локация",
        count: "Кол-во",
        email: "Почта",
        checkout: "Оформить заказ",
      },
    },
  },
};
</script>
