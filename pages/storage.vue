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
      <section class="container storage-page">
        <div class="row">
          <div class="col-12 col-lg-6">
            <strong v-html="translate.form.title"></strong>
            <div class="slider-overlay">
              <img src="/images/storage/database.png" alt="" />
              <div>
                <p>{{ translate.form.volume }}</p>
                <InputSlider
                  :config="{
                    range: {
                      min: 50,
                      max: 400,
                    },
                    step: 10,
                    start: [form.volume],
                    connect: 'lower',
                    suffix: ' GB',
                  }"
                  name="volume"
                  v-model="form.volume"
                />
              </div>
            </div>
            <div class="slider-overlay">
              <img src="/images/storage/users.png" alt="" />
              <div>
                <p>{{ translate.form.ftp_users }}</p>
                <InputSlider
                  :config="{
                    range: {
                      min: 50,
                      max: 400,
                    },
                    step: 10,
                    start: [form.users],
                    connect: 'lower',
                    suffix: ' GB',
                  }"
                  name="users"
                  v-model="form.users"
                />
              </div>
            </div>
            <div class="select-overlay">
              <p>{{ translate.form.location }}</p>
              <custom-select v-model="form.location">
                <option value>{{ translate.form.selectLocation }}</option>
                <option value="ger">Germany</option>
                <option value="fra">France</option>
                <option value="fin">Finland</option>
              </custom-select>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="block">
              <strong>{{ translate.form.price }}</strong>
              <div class="price">
                {{ form.volume * translate.form.coefficient }}
                {{ translate.form.currency }}
              </div>
              <div class="characteristics">
                <b>{{ form.volume }} GB</b> {{ translate.form.storage }}<br />
                <b>{{ form.users }} </b> {{ translate.form.users }}
              </div>
              <div class="info">
                {{ 10 * translate.form.coefficient }}
                {{ translate.form.additional_storage }}
              </div>
              <a href="#" @click.prevent="showModal">{{
                translate.form.order
              }}</a>
            </div>
          </div>
        </div>
        <Modal ref="modal" :title="translate.modal.title">
          <div class="row">
            <div class="col-6 server-info">
              <div class="modal-title">{{ translate.modal.info.title }}</div>
              <p>
                <b>{{ form.volume }} GB</b> {{ translate.form.storage }}<br />
                <b>{{ form.users }} </b> {{ translate.form.users }}
              </p>
              <p class="mt-1">{{ translate.modal.info.price }}</p>
              <div class="price">
                {{ form.volume * translate.form.coefficient }}
                {{ translate.form.currency }}
              </div>
            </div>
            <div class="col-12 col-md-6">
              <custom-select v-model="form.location">
                <option value>{{ translate.modal.form.location }}</option>
                <option value="ger">Germany</option>
                <option value="fra">France</option>
                <option value="fin">Finland</option>
              </custom-select>
              <input
                type="text"
                v-model="form.ip"
                :placeholder="translate.modal.form.ip"
              />
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
              <a @click="hideModal" target="_blank" :href="getFTPLink">{{
                translate.modal.form.checkout
              }}</a>
            </div>
          </div>
        </Modal>
      </section>
      <Offers page="storage" />
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
      form: {
        volume: 250,
        users: 250,
        count: 1,
        email: "",
        ip: "",
        location: "",
      },
    };
  },
  computed: {
    translate() {
      return this.$getTranslate(translate);
    },
    getFTPLink(): string {
      const queryParams = {
        startform: "storage.order.param",
        itemtype: 5,
        pricelist: 1818,
        period: 1,
        addon_1819: this.form.volume,
      };

      return `https://billing.spacecore.pro/billmgr?${this.$toQueryString(
        queryParams
      )}`;
    },
  },
  methods: {
    showModal() {
      (this.$refs.modal as any).showModal();
    },
    hideModal() {
      this.$axios.$post("/modal-log", {
        page: "storage",
        email: this.form.email,
      });
      this.form = {
        volume: 250,
        users: 250,
        count: 1,
        email: "",
        ip: "",
        location: "",
      };
      (this.$refs.modal as any).hideModal();
    },
  },
});

const translate = {
  ru: {
    header: {
      title: "Услуги<br> FTP хранилища",
      description:
        "Идеальный сервис для безопасного хранения<br> любого объема Ваших данных",
      button: {
        text: "Просмотреть услуги",
        href: "#",
      },
    },
    form: {
      title: "Конфигурация<br> FTP хранилища",
      volume: "Объем хранилища",
      ftp_users: "Кол-во FTP юзеров",
      location: "Локация",
      selectLocation: "Выберите локацию",
      price: "Стоимость",
      coefficient: 1.2,
      currency: "₽/мес.",
      storage: "диска",
      users: "FTP юзеров",
      additional_storage: "руб. за дополнительный GB",
      order: "Заказать",
    },
    modal: {
      title: "Заказать внешнее FTP хранилище",
      info: {
        title: "Характеристики",
        price: "Цена",
      },
      form: {
        ip: "IP адрес",
        location: "Локация",
        count: "Кол-во",
        email: "Почта",
        checkout: "Оформить заказ",
      },
    },
  },
  ua: {
    header: {
      title: "Услуги<br> FTP хранилища",
      description:
        "Идеальный сервис для безопасного хранения<br> любого объема Ваших данных",
      button: {
        text: "Просмотреть услуги",
        href: "#",
      },
    },
    form: {
      title: "Конфигурация<br> FTP хранилища",
      volume: "Объем хранилища",
      ftp_users: "Кол-во FTP юзеров",
      location: "Локация",
      selectLocation: "Выберите локацию",
      price: "Стоимость",
      coefficient: 1.2,
      currency: "₽/мес.",
      storage: "диска",
      users: "FTP юзеров",
      additional_storage: "руб. за дополнительный GB",
      order: "Заказать",
    },
    modal: {
      title: "Заказать внешнее FTP хранилище",
      info: {
        title: "Характеристики",
        price: "Цена",
      },
      form: {
        ip: "IP адрес",
        location: "Локация",
        count: "Кол-во",
        email: "Почта",
        checkout: "Оформить заказ",
      },
    },
  },
  en: {
    header: {
      title: "Услуги<br> FTP хранилища",
      description:
        "Идеальный сервис для безопасного хранения<br> любого объема Ваших данных",
      button: {
        text: "Просмотреть услуги",
        href: "#",
      },
    },
    form: {
      title: "Конфигурация<br> FTP хранилища",
      volume: "Объем хранилища",
      ftp_users: "Кол-во FTP юзеров",
      location: "Локация",
      selectLocation: "Выберите локацию",
      price: "Стоимость",
      coefficient: 1.2,
      currency: "₽/мес.",
      storage: "диска",
      users: "FTP юзеров",
      additional_storage: "руб. за дополнительный GB",
      order: "Заказать",
    },
    modal: {
      title: "Заказать внешнее FTP хранилище",
      info: {
        title: "Характеристики",
        price: "Цена",
      },
      form: {
        ip: "IP адрес",
        location: "Локация",
        count: "Кол-во",
        email: "Почта",
        checkout: "Оформить заказ",
      },
    },
  },
};
</script>
