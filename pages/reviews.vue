<template>
  <div>
    <header class="reviews">
      <div class="container">
        <Nav />
        <div class="row lead">
          <div class="col-10 col-sm-6 col-lg-7">
            <h1 v-html="translate.header.title"></h1>
            <p v-html="translate.header.description"></p>
          </div>
          <div class="clients">
            <span v-html="`${reviewsCount} ${clientsPlural}`"></span>
            <img src="/images/star-gray.png" alt="" />
          </div>
        </div>
      </div>
    </header>
    <main>
      <section class="container reviews-page">
        <div class="row">
          <div class="col-12 col-md-4 col-lg-3">
            <div class="card">
              <a target="_blank" href="https://vk.com/topic-171073991_39268980"
                ><img src="/images/vk-logo.png" alt=""
              /></a>
              <a
                target="_blank"
                href="https://ru.hostings.info/spacecore-pro.html"
                ><img src="/images/hostings-info-logo.png" alt=""
              /></a>
            </div>
            <div class="banner">
              <img class="img-fluid" src="/images/banner.png" alt="" />
            </div>
          </div>
          <div class="col-12 col-md-8 col-lg-9">
            <div class="review" v-for="(el, i) in reviewsList" :key="i">
              <div class="head">
                <div>
                  <div class="time-site">
                    {{ new Date(el.date * 1000).toLocaleDateString() }} • vk.com
                  </div>
                  <a
                    class="name"
                    :href="'https://vk.com/' + (el.screen_name || '')"
                    target="_blank"
                    >{{ el.name }}</a
                  >
                </div>
                <!-- <div class="stars">
                  <div class="star active"></div>
                  <div class="star active"></div>
                  <div class="star active"></div>
                  <div class="star active"></div>
                  <div class="star"></div>
                </div> -->
              </div>
              <p>{{ el.text }}</p>
              <a
                class="more"
                target="_blank"
                :href="
                  'https://vk.com/topic-171073991_39268980?offset=' + el.offset
                "
                >{{ translate.more }}</a
              >
            </div>
            <button class="btn" @click="getReviews" v-if="showBtn">
              Показать ещё
            </button>
          </div>
        </div>
      </section>

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
      reviewsCount: 0,
      reviewsList: [],
      reviewsOffset: 0,
      showBtn: true,
    };
  },
  async asyncData({ $axios, store }) {
    try {
      const reviews = await $axios.$get(`${store.state.lang}/reviews`);

      return {
        reviewsCount: reviews.count,
        reviewsList: reviews.items,
      };
    } catch (error) {
      console.error(error);
    }
  },
  computed: {
    translate() {
      return this.$getTranslate(translate);
    },
    clientsPlural(): string {
      return this.$pluralization(this.reviewsCount, clientsTranslate);
    },
  },
  methods: {
    async getReviews() {
      const reviews = await this.$axios.$get(
        `${this.$store.state.lang}/reviews?offset=${(this.reviewsOffset += 20)}`
      );
      this.reviewsList.push(...(reviews.items as never[]));
      if (reviews.last) this.showBtn = false;
    },
  },
});

const clientsTranslate = {
  ru: {
    one: "клиент<br> доволен нами",
    few: "клиента<br> довольны нами",
    many: "клиенов<br> довольны нами",
    other: "",
  },
  en: {
    one: "client<br> happy with us",
    few: "",
    many: "",
    other: "clients<br> happy with us",
  },
  ua: {
    one: "клієнт<br> задоволений нами",
    few: "клієнта<br> задоволені нами",
    many: "клієнтів<br> задоволені нами",
    other: "",
  },
};

const translate = {
  ru: {
    header: {
      title: "Отзывы<br> клиентов",
      description:
        "Все еще сомневаетесь?<br> Самое время ознакомиться с впечатлениями наших клиентов!",
    },
    more: "Подробнее",
  },
  ua: {
    header: {
      title: "Отзывы<br> клиентов",
      description:
        "Все еще сомневаетесь?<br> Самое время ознакомиться с впечатлениями наших клиентов!",
    },
    more: "Подробнее",
  },
  en: {
    header: {
      title: "Отзывы<br> клиентов",
      description:
        "Все еще сомневаетесь?<br> Самое время ознакомиться с впечатлениями наших клиентов!",
    },
    more: "Подробнее",
  },
};
</script>
