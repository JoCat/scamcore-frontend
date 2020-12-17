<template>
  <div>
    <header class="reviews">
      <div class="container">
        <Nav/>
        <div class="row lead">
          <div class="col-10 col-sm-6 col-lg-7">
            <h1 v-html="translate.header.title"></h1>
            <p v-html="translate.header.description"></p>
          </div>
          <div class="clients">
            {{ translate.header.clients }} клиентов<br> довольны нами
            <img src="/images/star-gray.png" alt="">
          </div>
        </div>
      </div>
    </header>
    <main>
      <section class="container reviews-page">
        <div class="row">
          <div class="col-12 col-md-4 col-lg-3">
            <div class="card">
              <a target="_blank" href="https://vk.com/topic-171073991_39268980"><img src="/images/vk-logo.png" alt=""></a>
              <a target="_blank" href="https://ru.hostings.info/spacecore-pro.html"><img src="/images/hostings-info-logo.png" alt=""></a>
            </div>
            <div class="banner">
              <img class="img-fluid" src="/images/banner.png" alt="">
            </div>
          </div>
          <div class="col-12 col-md-8 col-lg-9">
            <div class="review" v-for="(el, i) in translate.elements" :key="i">
              <div class="head">
                <div>
                  <div class="time-site">{{ new Date(el.date).toLocaleDateString() }} • vk.com</div>
                  <div class="name">{{ el.first_name }} {{ el.last_name }}</div>
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
              <a target="_blank" :href="el.url">{{ translate.more }}</a>
            </div>
          </div>
        </div>
      </section>

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
      translate: translate
    }
  }
})

let translate = {
  header: {
    title: 'Отзывы<br> клиентов',
    description: 'Все еще сомневаетесь?<br> Самое время ознакомиться с впечатлениями наших клиентов!',
    clients: 209 // TODO плюрализация
  },
  elements: [
    {
      date: 1601372291060,
      first_name: 'Данил',
      last_name: 'Голощапов',
      text: 'Приобрёл ВДСку, всё гуд, поддержка отличная, работает без перебоев.',
      url: '#'
    },
    {
      date: 1601372291060,
      first_name: 'Данил',
      last_name: 'Голощапов',
      text: 'Приобрёл ВДСку, всё гуд, поддержка отличная, работает без перебоев.',
      url: '#'
    },
    {
      date: 1601372291060,
      first_name: 'Данил',
      last_name: 'Голощапов',
      text: 'Приобрёл ВДСку, всё гуд, поддержка отличная, работает без перебоев.',
      url: '#'
    }
  ],
  more: 'Подробнее'
}
</script>
