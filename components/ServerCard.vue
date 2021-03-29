<template>
  <div>
    <div class="list-el">
      <div class="geekbench">
        <div class="geekbench-meter">
          <svg
            class="speedometer__arrow"
            :style="styles.arrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 5.5"
          >
            <path
              d="M18.3,0.8c0.5-0.8,1.5-1,2.2-0.7c0.7,0.4,1.2,1.3,0.9,2c-0.2,0.6-0.8,1-1.5,1l-7.2,2.3L18.3,0.8z"
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="#7D38F2"
            />
          </svg>
          <svg
            class="speedometer__dial"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 49 36"
          >
            <g transform="translate(-442.005 -274.997)">
              <path
                d="M445.9,308c-4.9-11.1,0.1-24.1,11.2-29c11.1-4.9,24.1,0.1,29,11.2c2.5,5.7,2.5,12.2,0,17.9"
                fill="none"
                stroke="#e6e9eb"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
              />
              <path
                class="speedometer__speed"
                :style="styles.speed"
                d="M445.9,308c-4.9-11.1,0.1-24.1,11.2-29c11.1-4.9,24.1,0.1,29,11.2c2.5,5.7,2.5,12.2,0,17.9"
                fill="none"
                stroke="#7D38F2"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
              />
            </g>
          </svg>
        </div>
        <span class="speedometer__score">{{ geekbenchScore }}</span>
      </div>
      <div class="cpu">
        {{ data.cpuCoresCount }} {{ coresPlural }} {{ data.cpu.title }}
        {{ data.cpu.frequency }} GHz
      </div>
      <div class="ram">{{ data.ram }}</div>
      <div class="storage">
        {{
          data.storage
            .map((s) => `${s.capacity} ${s.type.toUpperCase()}`)
            .join(" / ")
        }}
      </div>
      <div class="traffic">{{ data.traffic }}</div>
      <div class="ddos">{{ data.ddos }}</div>
      <div class="location">
        <img src="/images/flags/united kingdom.png" alt="" />
        <img src="/images/flags/england.png" alt="" />
        <img src="/images/flags/canada.png" alt="" />
      </div>
      <div class="price">
        <!-- <div class="sale">
          <div class="percent">-20%</div>
          {{ data.price + translate.currency }}<br>
          <div class="old-price">{{ data.old_price + translate.currency }}</div>
        </div> -->
        <div>{{ data.price + translate.currency }}</div>
        <a href="#" @click.prevent="showModal">{{ translate.buy }}</a>
      </div>
    </div>
    <Modal ref="modal" :title="translate.modal.title">
      <div class="row">
        <div class="col-6 server-info">
          <div class="modal-title">{{ translate.modal.info.title }}</div>
          <ul class="list-unstyled">
            <li>
              Geekbench (Single / Multiple):
              {{ data.geekbench }} / {{ data.geekbenchMultithread }}
            </li>
            <li>
              <img src="/images/icons/chip.png" alt="" />
              {{ data.cpuCoresCount }} {{ coresPlural }} {{ data.cpu.title }}
              {{ data.cpu.frequency }} GHz
            </li>
            <li>
              <img src="/images/icons/memory.png" alt="" />
              {{ data.ram }}
            </li>
            <li>
              <img src="/images/icons/ssd.png" alt="" />
              {{
                data.storage
                  .map((s) => `${s.capacity} ${s.type.toUpperCase()}`)
                  .join(" / ")
              }}
            </li>
            <li>
              <img src="/images/icons/network.png" alt="" />
              {{ data.traffic }}
            </li>
            <li>
              <img src="/images/icons/guard.png" alt="" />
              {{ data.ddos }}
            </li>
          </ul>
          <p>{{ translate.modal.info.price }}</p>
          <div class="price">{{ data.price + translate.currency }}</div>
        </div>
        <div class="col-12 col-md-6">
          <custom-select v-model="form.os">
            <option value>{{ translate.modal.form.selectOS }}</option>
            <option value="debian8">Debian 8</option>
            <option value="debian9">Debian 9</option>
            <option value="debian10">Debian 10</option>
            <option value="ubuntu1604">Ubuntu 16.04</option>
            <option value="ubuntu1804">Ubuntu 18.04</option>
            <option value="ubuntu2004">Ubuntu 20.04</option>
            <option value="centos6">CentOS 6</option>
            <option value="centos7">CentOS 7</option>
            <option value="centos8">CentOS 8</option>
            <option value="windows2012">Windows Server 2012 R2</option>
            <option value="windows2016">Windows Server 2016</option>
            <option value="windows2019">Windows Server 2019</option>
          </custom-select>
          <custom-select v-model="form.recipe" v-if="params.showRecipe">
            <option value>{{ translate.modal.form.recipe }}</option>
            <option value="django">Django</option>
            <option value="ispmanager_lite">ISPmanager Lite</option>
            <option value="lamp">LAMP</option>
            <option value="openvpn">Openvpn</option>
            <option value="redmine">Redmine</option>
            <option value="teamspeak">Teamspeak</option>
            <option value="tomcat">Tomcat</option>
          </custom-select>
          <input type="text" v-model="form.domain" :placeholder="translate.modal.form.domain" />
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
              <input type="email" v-model="form.email" :placeholder="translate.modal.form.email" />
            </div>
          </div>
          <a @click="hideModal" target="_blank" :href="getServerLink">{{ translate.modal.form.checkout }}</a>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["data", "geekbenchMax", "params"],
  data() {
    return {
      geekbenchScore: 0,
      styles: {
        arrow: {
          transform: "rotate(0deg)",
        },
        speed: {
          strokeDashoffset: "87.4986px",
          strokeDasharray: "87.4986px",
        },
      },
      form: {
        os: "",
        domain: "",
        location: "",
        count: 1,
        email: "",
        recipe: "",
      },
    };
  },
  mounted() {
    const percent = this.data.geekbench / this.geekbenchMax;
    setImmediate(() => {
      this.styles.arrow.transform = `rotate(${238 * percent}deg)`;
      this.styles.speed.strokeDashoffset = `${(
        87.4986 -
        87.4986 * percent
      ).toFixed(4)}px`;
    });

    for (let index = 0; index < 100; index++) {
      setTimeout(() => {
        this.geekbenchScore = parseInt(
          ((this.data.geekbench / 100) * index).toFixed(0),
          10
        );
      }, index * 10);
    }
    setTimeout(() => {
      this.geekbenchScore = this.data.geekbench;
    }, 1000);
  },
  methods: {
    showModal() {
      (this.$refs.modal as any).showModal();
    },
    hideModal() {
      this.form = {
        os: "",
        domain: "",
        location: "",
        count: 1,
        email: "",
        recipe: "",
      };
      (this.$refs.modal as any).hideModal();
    },
  },
  computed: {
    coresPlural(): string {
      return this.$pluralization(this.data.cpuCoresCount, coresTranslate);
    },
    translate(): any {
      return this.$getTranslate(translate);
    },
    getServerLink(): string {
      const queryParams = {
        startform: this.params.startform,
        itemtype: this.params.itemtype,
        pricelist: this.data.productId,
        // datacenter: 1 // как-то придумать уже при парсинге (this.data.datacenter)
        period: this.params.period,
        domain: this.form.domain,
        ostempl: this.form.os,
        recipe: this.form.recipe
      };

      // if (this.params.showRecipe == true) {
      //   queryParams.recipe = this.form.recipe
      // }

      return `https://billing.spacecore.pro/billmgr?${this.$toQueryString(
        queryParams
      )}`;
    },
  },
});

const coresTranslate = {
  ru: {
    one: "ядро",
    few: "ядра",
    many: "ядер",
    other: "",
  },
  en: {
    one: "core",
    few: "",
    many: "",
    other: "cores",
  },
  ua: {
    one: "ядро",
    few: "ядра",
    many: "ядер",
    other: "",
  },
};

const translate = {
  ru: {
    buy: "Купить",
    currency: "₽",
    modal: {
      title: "Заказать сервер",
      info: {
        title: "Характеристики",
        price: "Цена",
      },
      form: {
        selectOS: "Выбор ОС",
        recipe: "Выбор ПО",
        domain: "Домен",
        location: "Локация",
        count: "Кол-во",
        email: "Почта",
        checkout: "Оформить заказ",
      },
    },
  },
  en: {
    buy: "Купить",
    currency: "₽",
    modal: {
      title: "Заказать сервер",
      info: {
        title: "Характеристики",
        price: "Цена",
      },
      form: {
        selectOS: "Выбор ОС",
        recipe: "Выбор ПО",
        domain: "Домен",
        location: "Локация",
        count: "Кол-во",
        email: "Почта",
        checkout: "Оформить заказ",
      },
    },
  },
  ua: {
    buy: "Купить",
    currency: "₽",
    modal: {
      title: "Заказать сервер",
      info: {
        title: "Характеристики",
        price: "Цена",
      },
      form: {
        selectOS: "Выбор ОС",
        recipe: "Выбор ПО",
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
