<template>
  <div>
    <header class="main">
      <div class="container">
        <Nav/>
        <div class="row lead">
          <div class="col-12 col-lg-7">
            <h1 v-html="translate.header.title"></h1>
            <p v-html="translate.header.description"></p>
            <a :href="translate.header.button.href">{{ translate.header.button.text }}</a>
          </div>
        </div>
      </div>
    </header>
    <main>
      <section class="container game-hosting">
        <h2 class="title center">Игровой хостинг</h2>
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="game-hosting-card">
              <div class="head minecraft">
                <img src="/images/game-hosting/minecraft.png" alt="">
                <p>Игровой сервер <span>minecraft</span></p>
              </div>
              <ul class="list-unstyled">
                <li>Преимущество этого тарифа за данную цену</li>
                <li>Преимущество этого тарифа за данную цену</li>
                <li>Преимущество этого тарифа за данную цену</li>
                <li>Преимущество этого тарифа за данную цену</li>
              </ul>
              <p class="info">
                1 слот - <span>6 рублей</span>
              </p>
              <a class="buy" href="#">Оформить заказ</a>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="game-hosting-card">
              <div class="head samp">
                <img src="/images/game-hosting/samp.png" alt="">
                <p>Игровой сервер <span>GTA SAMP</span></p>
              </div>
              <ul class="list-unstyled">
                <li>Преимущество этого тарифа за данную цену</li>
                <li>Преимущество этого тарифа за данную цену</li>
                <li>Преимущество этого тарифа за данную цену</li>
                <li>Преимущество этого тарифа за данную цену</li>
              </ul>
              <p class="info">
                1 слот - <span>6 рублей</span>
              </p>
              <a class="buy" href="#">Оформить заказ</a>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="game-hosting-card">
              <div class="head cs">
                <img src="/images/game-hosting/cs.png" alt="">
                <p>Игровой сервер <span>CS 1.6</span></p>
              </div>
              <ul class="list-unstyled">
                <li>Преимущество этого тарифа за данную цену</li>
                <li>Преимущество этого тарифа за данную цену</li>
                <li>Преимущество этого тарифа за данную цену</li>
                <li>Преимущество этого тарифа за данную цену</li>
              </ul>
              <p class="info">
                1 слот - <span>6 рублей</span>
              </p>
              <a class="buy" href="#">Оформить заказ</a>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="game-hosting-card">
              <div class="head minecraft">
                <img src="/images/game-hosting/minecraft.png" alt="">
                <p>Игровой сервер <span>minecraft</span></p>
              </div>
              <ul class="list-unstyled">
                <li>Преимущество этого тарифа за данную цену</li>
                <li>Преимущество этого тарифа за данную цену</li>
                <li>Преимущество этого тарифа за данную цену</li>
                <li>Преимущество этого тарифа за данную цену</li>
              </ul>
              <p class="info">
                1 слот - <span>6 рублей</span>
              </p>
              <a class="buy" href="#">Оформить заказ</a>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="game-hosting-card">
              <div class="head samp">
                <img src="/images/game-hosting/samp.png" alt="">
                <p>Игровой сервер <span>GTA SAMP</span></p>
              </div>
              <ul class="list-unstyled">
                <li>Преимущество этого тарифа за данную цену</li>
                <li>Преимущество этого тарифа за данную цену</li>
                <li>Преимущество этого тарифа за данную цену</li>
                <li>Преимущество этого тарифа за данную цену</li>
              </ul>
              <p class="info">
                1 слот - <span>6 рублей</span>
              </p>
              <a class="buy" href="#">Оформить заказ</a>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="game-hosting-card">
              <div class="head cs">
                <img src="/images/game-hosting/cs.png" alt="">
                <p>Игровой сервер <span>CS 1.6</span></p>
              </div>
              <ul class="list-unstyled">
                <li>Преимущество этого тарифа за данную цену</li>
                <li>Преимущество этого тарифа за данную цену</li>
                <li>Преимущество этого тарифа за данную цену</li>
                <li>Преимущество этого тарифа за данную цену</li>
              </ul>
              <p class="info">
                1 слот - <span>6 рублей</span>
              </p>
              <a class="buy" href="#">Оформить заказ</a>
            </div>
          </div>
        </div>
      </section>

      <section class="container main-advantages">
        <h2 class="title center"> {{ translate.advantages.title }}</h2>
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4" v-for="(elements, i) in translate.advantages.elements" :key="i">
            <div class="main-advantages-card">
              <strong v-html="elements.title"></strong>
              <img :src="`/images/main-advantages/${i + 1}.png`" alt="">
            </div>
          </div>
        </div>
      </section>

      <section class="container faq">
        <h2 class="title">Ответы на <br>частые вопросы</h2>
        <div class="row wrapper">
          <div class="col-md-5 col-xl-4">
            <button type="button">Как сделать что то и что бы это получилось в две строки</button>
            <button type="button">Как сделать что то и что бы это получилось в две строки</button>
            <button type="button">Как сделать что то и что бы это получилось в две строки</button>
            <button type="button">Как сделать что то и что бы это получилось в две строки</button>
            <button type="button">Как сделать что то и что бы это получилось в две строки</button>
            <button type="button">Как сделать что то и что бы это получилось в две строки</button>
          </div>
          <div class="col-md-7 col-xl-8">
            <strong><span>Как заказать</span><br> выделенный сервер в России?</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptate</p>
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
  computed: {
    translate() {
      return this.$getTranslate(translate);
    }
  }
})

const translate = {
  ru: {
    header: {
      title: 'Игровой хостинг',
      description: 'Готовый недорогой хостинг для размещения проекта<br> по Вашей игре уже через несколько секунд после оформления заказа',
      button: {
        text: 'Просмотреть услуги',
        href: '#'
      }
    },
    advantages: {
        title: 'Основные преимущества',
        elements: [
        {
          title:'Низкая цена'
        },
        {
          title:'Защита AntiDDoS Game (L3-L7)'
        },
        {
          title:'Быстрая установка'
        },
      ]
      },
  },
  ua: {},
  en: {}
}
</script>
