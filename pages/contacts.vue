<template>
  <div>
    <header class="alternative">
      <div class="container">
        <Nav type="alternative"/>
      </div>
    </header>
    <main>
      <section class="container contacts-page">
        <div class="title-wrapper">
          <h2 class="title" v-html="translate.title"></h2>
          <!-- <a class="bttn" href="#">База знаний</a> -->
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-5 col-xl-4 phone">
            <p>{{ translate.phone.title }}</p>
            <a :href="'tel:' + translate.phone.phone.replace(/ /g, '')">{{ translate.phone.phone }}</a>
          </div>
          <div class="col-md-6 col-lg-4 email">
            <p>{{ translate.email.title }}</p>
            <a :href="'mailto:' + translate.email.email">{{ translate.email.email }}</a>
          </div>
          <div class="col-sm-4 col-md-6 col-lg-3 col-xl-4 social">
            <a :href="social.link" v-for="(social, i) in translate.social" :key="i">
              <img :src="social.image" alt="">
            </a>
          </div>
        </div>
        <div class="row chat">
          <div class="col-sm-1 col-md-3 col-lg-5 col-xl-4">
            <img src="/images/chat.png" alt="">
          </div>
          <div class="col-sm-5 col-md-5 col-lg-4 col-xl-5">
            <p>{{ translate.chat.title }}</p>
          </div>
          <div class="col-sm-5 col-md-4 col-lg-3">
            <a href="#">{{ translate.chat.button }}</a>
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
  title: 'Наши<br> контакты',
  phone: {
    title: 'Телефон для звонков',
    phone: 'В скором времени'
  },
  email: {
    title: 'Наша почта',
    email: 'support@spacecore.pro'
  },
  social: [
    {
      link: 'https://twitter.com/SpaceCoreRU',
      image: '/images/twitter.png'
    },
    {
      link: 'https://t.me/spacecore_pro',
      image: '/images/telegram.png'
    },
    {
      link: 'https://vk.com/spacecore_pro',
      image: '/images/vk.png'
    }
  ],
  chat: {
    title: 'Онлайн чат поддержки сайта',
    button: 'Перейти'
  }
}
</script>
