<template>
  <div>
    <header class="main">
      <div class="container">
        <Nav />
        <div class="row lead">
          <div class="col-12 col-lg-7">
            <h1 v-html="translate.header.title"></h1>
            <p>{{ translate.header.description }}</p>
            <a :href="translate.header.button.href">{{
              translate.header.button.text
            }}</a>
          </div>
        </div>
      </div>
    </header>
    <main>
      <section class="container isp">
        <h2 class="title center">{{ translate.main.title }}</h2>
        <div class="row">
          <div
            class="col-12 col-md-6 col-lg-4"
            v-for="(el, i) in licenses"
            :key="i"
          >
            <div class="isp-card" @click="showModal(el)">
              <img src="/images/key.png" alt="" />
              <div>
                <strong>{{ el.title }}</strong>
                <p>{{ el.price }} {{ translate.main.currency }}</p>
              </div>
            </div>
          </div>
        </div>
        <Modal ref="modal" :title="translate.modal.title">
          <div class="row">
            <div class="col-6 server-info">
              <div class="modal-title">{{ currentLicense.title }}</div>
              <p class="mb-1">{{ currentLicense.description }}</p>
              <p>{{ translate.modal.price }}</p>
              <div class="price">
                {{ currentLicense.price }} {{ translate.modal.currency }}
              </div>
            </div>
            <div class="col-12 col-md-6">
              <input
                type="text"
                v-model="form.license"
                :placeholder="translate.modal.form.license"
              />
              <input
                type="ip"
                v-model="form.ip"
                :placeholder="translate.modal.form.ip"
              />
              <input
                type="email"
                v-model="form.email"
                :placeholder="translate.modal.form.email"
              />
              <a @click="hideModal" target="_blank" :href="getISPLink">{{
                translate.modal.form.checkout
              }}</a>
            </div>
          </div>
        </Modal>
      </section>
      <Offers page="isplicense" />
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
      licenses: [] as any[],
      currentLicense: {
        productID: 0,
      },
      form: {
        license: "",
        ip: "",
        email: "",
      },
    };
  },
  async asyncData({ $axios, store }) {
    const licenses = await $axios.$get(`${store.state.lang}/isp`);

    return {
      licenses,
    };
  },
  computed: {
    translate() {
      return this.$getTranslate(translate);
    },
    getISPLink(): string {
      const queryParams = {
        startform: "soft.order.param",
        itemtype: 43,
        pricelist: this.currentLicense.productID,
        period: 1,
        licname: this.form.license,
        ip: this.form.ip,
        "showroom.redirect": "on",
      };

      return `https://billing.spacecore.pro/billmgr?${this.$toQueryString(
        queryParams
      )}`;
    },
  },
  methods: {
    showModal(el: any) {
      this.currentLicense = el;
      (this.$refs.modal as any).showModal();
    },
    hideModal() {
      this.$axios.$post('/modal-log', {
        page: "isplicense",
        email: this.form.email
      });
      this.form = {
        license: "",
        ip: "",
        email: "",
      };
      (this.$refs.modal as any).hideModal();
    },
  },
});

const translate = {
  ru: {
    header: {
      title: "Лицензии ISPsystem",
      description:
        "Продукты компании ISPSystem являются лидерами на рынке решений панелей управления выделенными и виртуальными серверами",
      button: {
        text: "Просмотреть услуги",
        href: "#",
      },
    },
    main: {
      title: "Лицензии ISP",
      currency: "₽/мес",
    },
    modal: {
      title: "Заказать лицензию ISP",
      price: "Цена",
      currency: "₽",
      form: {
        license: "Название лицензии",
        ip: "IP-адрес",
        email: "Почта",
        checkout: "Оформить заказ",
      },
    },
  },
  ua: {},
  en: {},
};
</script>
