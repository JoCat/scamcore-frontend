<template>
  <div>
    <header class="index">
      <div class="container">
        <Nav/>
        <div class="row lead">
          <div class="col-12 col-lg-7">
            <h1>{{ translate.header.lead.title }}</h1>
            <p>{{ translate.header.lead.description }}</p>
            <a href="#products">{{ translate.header.lead.link }}</a>
          </div>
          <div class="plans">
            <div class="bg">
              {{ translate.header.plans.text }} <div>{{ translate.header.plans.price }}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main>
      <section class="container products" id="products">
        <h2 class="title center">{{ translate.products.title }}</h2>
        <div class="row">
          <div
            class="col-12 col-md-6 col-lg-4"
            v-for="(product, i) in translate.products.elements" :key="i"
          >
            <div class="products-card">
              <img :src="`/images/products/${i + 1}.png`" alt="">
              <strong v-html="product.title"></strong>
              <p>{{ product.description }}</p>
              <div class="price">
                от <span>{{ product.price }}</span> в год
              </div>
              <nuxt-link
                class="buy"
                :disabled="product.link.disabled" :to=product.link.href
              >
                {{ product.link.text }}
              </nuxt-link>
            </div>
          </div>
        </div>
        <a class="more" href="#" @click.prevent="serviceToggle()">{{ translate.products.more }}</a>
      </section>

      <section class="container services" v-if="serviceShow">
        <div class="row">
          <div class="col-12 col-lg-10 col-xl-9 wrapper">
            <div class="row">
              <div
                class="col-12 col-sm-6 col-md-4 service-card-wrapper"
                v-for="(service, i) in translate.services" :key="i"
              >
                <nuxt-link :to="service.link" class="service-card">
                  <img :src="`/images/services/${i + 1}.png`" alt="">
                  <img class="white" :src="`/images/services/${i + 1}-white.png`" alt="">
                  {{ service.title }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="container advantages">
        <h2 class="title center">{{ translate.advantages.title }}</h2>
        <div class="row">
          <div class="col-12 col-lg-10 col-xl-9 wrapper">
            <div class="row">
              <div
                class="col-12 col-md-6 col-lg-4"
                v-for="(advantage, i) in translate.advantages.elements" :key="i"
              >
                <div class="advantage-card">
                  <img :src="`/images/advantages/${i + 1}.png`" alt="">
                  <strong v-html="advantage.title"></strong>
                  <p v-html="advantage.description"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="container solutions">
        <h2 class="title" v-html="translate.solutions.title"></h2>
        <a class="bttn" href="#products">{{ translate.solutions.link }}</a>
        <div class="row wrapper">
          <div class="col-12 col-lg-5">
            <button
              type="button" @click="selectSolution(i)"
              v-for="(solution, i) in translate.solutions.elements" :key="i"
            >
              <img :src="`/images/solutions/${i + 1}.png`" alt="">
              {{ solution.title }}
            </button>
          </div>
          <div class="col-12 col-lg-7">
            <div class="solution-card">
              <div class="header" v-html="selectedSolution.title"></div>
              <p v-html="selectedSolution.description"></p>
            </div>
          </div>
        </div>
      </section>

      <!-- <section class="articles">
        <div class="container">
          <h2 class="title center">Наши статьи</h2>
        </div>
        <div class="wrapper">
          <div class="article-card">
            <img src="/images/news.png" alt="">
            <div class="text">
              <strong>Заголовок статьи<br> сточка</strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse</p>
              <a href="#">Подробнее</a>
            </div>
          </div>
          <div class="article-card">
            <img src="/images/news.png" alt="">
            <div class="text">
              <strong>Заголовок статьи<br> сточка</strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse</p>
              <a href="#">Подробнее</a>
            </div>
          </div>
          <div class="article-card">
            <img src="/images/news.png" alt="">
            <div class="text">
              <strong>Заголовок статьи<br> сточка</strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse</p>
              <a href="#">Подробнее</a>
            </div>
          </div>
        </div>
        <div class="container controls">
          <div class="arrow-left"></div>
          <div class="dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot active"></div>
            <div class="dot"></div>
          </div>
          <div class="arrow-right"></div>
        </div>
      </section> -->

      <Feedback/>
    </main>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      translate: translate,
      selectedSolution: translate.solutions.elements[0].card,
      serviceShow: false
    }
  },
  methods: {
    selectSolution: function (i: number) {
      this.selectedSolution = this.translate.solutions.elements[i].card
    },
    serviceToggle: function () {
      this.serviceShow = !this.serviceShow
    }
  }
})

let translate = {
  header: {
    lead: {
      title: 'Быстрый и соверменный хостинг для вашего сайта',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo',
      link: 'Просмотреть услуги'
    },
    plans: {
      text: 'Планы от',
      price: '250 руб'
    }
  },
  products: {
    title: 'Выбери свой продукт',
    more: 'Все наши услуги',
    elements: [
      {
        title: 'Виртуальные сервера VPS/VDS',
        description: 'На базе технологий OpenVZ, KVM и Hyper-V. Оптимальные по цене тарифы на скоростных SSD дисках',
        price: '4451 руб',
        link: {
          text: 'Заказать',
          href: '/vds'
        }
      },
      {
        title: 'Физические выделенные сервера',
        description: 'На базе технологий OpenVZ, KVM и Hyper-V. Оптимальные по цене тарифы на скоростных SSD дисках',
        price: '4451 руб',
        link: {
          text: 'Заказать',
          href: '/dedicated'
        }
      },
      {
        title: 'Игровые<br> хостинги',
        description: 'На базе технологий OpenVZ, KVM и Hyper-V. Оптимальные по цене тарифы на скоростных SSD дисках',
        price: '4451 руб',
        link: {
          text: 'Скоро',
          href: '#',
          disabled: true
        }
      }
    ]
  },
  services : [
    {
      title: 'SSL сертификаты',
      link: '#'
    },
    {
      title: 'Бэкап хранилище',
      link: '#'
    },
    {
      title: 'Виртуальный хостинг для сайтов',
      link: '#'
    },
    {
      title: 'Домены',
      link: '#'
    },
    {
      title: 'Лицензии ISP',
      link: '#'
    },
    {
      title: 'Доп услуги',
      link: '#'
    }
  ],
  advantages: {
    title: 'Наши преимущества',
    elements: [
      {
        title: 'Низкие<br> цены',
        description: 'Lorem ipsum dolor sit amet,<br> consectetur adipiscing elit, sed do'
      },
      {
        title: 'Лучшее<br> оборудование',
        description: 'Lorem ipsum dolor sit amet,<br> consectetur adipiscing elit, sed do'
      },
      {
        title: 'Надежная<br> техподдержка',
        description: 'Lorem ipsum dolor sit amet,<br> consectetur adipiscing elit, sed do'
      },
      {
        title: 'Простота<br> использования',
        description: 'Lorem ipsum dolor sit amet,<br> consectetur adipiscing elit, sed do'
      },
      {
        title: 'Гибкость для<br> разных задач',
        description: 'Lorem ipsum dolor sit amet,<br> consectetur adipiscing elit, sed do'
      },
      {
        title: 'Низкие<br> цены',
        description: 'Lorem ipsum dolor sit amet,<br> consectetur adipiscing elit, sed do'
      }
    ]
  },
  solutions: {
    title: 'Еще не <br>решился?',
    link: 'Заказать услугу',
    elements: [
      {
        title: 'Премиальное оборудование',
        card: {
          title: '<strong>Премиальное</strong><br> оборудование',
          description: 'Мы используем лучшее оборудование и комплектующие, чтобы гарантировать стабильную работу и uptime не менее 99,92%.'
        }
      },
      {
        title: 'Выгодные тарифные планы',
        card: {
          title: '<strong>Выгодные</strong><br> тарифные планы',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        }
      },
      {
        title: 'Круглосуточная поддержка',
        card: {
          title: '<strong>Круглосуточная</strong><br> поддержка',
          description: 'Мы используем лучшее оборудование и комплектующие, чтобы гарантировать стабильную работу и uptime не менее 99,92%.'
        }
      },
      {
        title: 'Тысячи счастливых клиентов',
        card: {
          title: '<strong>Тысячи</strong><br> счастливых клиентов',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        }
      }
    ]
  }
}
</script>
