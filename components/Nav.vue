<template>
  <nav>
    <img v-if="type == 'index'" class="logo" src="/images/logo.png" alt="">
    <img v-if="type == 'alternative'" class="logo" src="/images/logo-alternative.png" alt="">
    <ul>
        <li><a href="#">Услуги</a></li>
        <li class="dropdown js__nav-dropdown">
            <a class="dropdown-toggle" href="#">
                Статьи
            </a>
            <div class="dropdown-menu">
                <a href="#">Обучающие</a>
                <a href="#">Развивающие</a>
                <a href="#">Новости IT</a>
                <a href="#">Авторские статьи</a>
            </div>
        </li>
        <li><a href="#">Статус</a></li>
        <li><a href="#">О нас</a></li>
        <li class="dropdown dropdown-right js__nav-dropdown dropdown-contacts">
            <a class="dropdown-toggle" href="#">
                Контакты
            </a>
            <div class="dropdown-menu">
                <a class="tel" href="tel:+79179036183">+7 917 903 61 83</a>
                <a class="email" href="mailto:hi@site.com">hi@site.com</a>
                <a class="tg" href="#">
                    <img src="/images/icons/telegram.png" alt="">
                    Telegram
                </a>
            </div>
        </li>
    </ul>
    <div class="contacts">
        <a class="tel" href="tel:+79179036183">+7 917 903 61 83</a>
        <a class="email" href="mailto:hi@site.com">hi@site.com</a>
        <a class="tg" href="#">
            <img src="/images/icons/telegram.png" alt="">
        </a>
    </div>
    <div class="buttons">
        <a class="bill" href="">Биллинг</a>
        <div class="dropdown dropdown-right js__nav-dropdown">
            <a class="lang dropdown-toggle" href="#">RU</a>
            <div class="dropdown-menu">
                <a href="#">
                    <img src="/images/flags/russia.png" alt="">Русский
                </a>
                <a href="#">
                    <img src="/images/flags/russia.png" alt="">Украинский
                </a>
                <a href="#">
                    <img src="/images/flags/united kingdom.png" alt="">Английский
                </a>
            </div>
        </div>
    </div>
    <button class="offcanvas-btn hamburger hamburger--squeeze" type="button">
        <span class="hamburger-box">
            <span class="hamburger-inner"></span>
        </span>
    </button>
    <div class="offcanvas-menu">
        <ul class="list-unstyled">
            <li><a href="#">Услуги</a></li>
            <li>
                <a href="#">
                    Статьи
                </a>
                <ul class="list-unstyled">
                    <li><a href="#">Обучающие</a></li>
                    <li><a href="#">Развивающие</a></li>
                    <li><a href="#">Новости IT</a></li>
                    <li><a href="#">Авторские статьи</a></li>
                </ul>
            </li>
            <li><a href="#">Статус</a></li>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Биллинг</a></li>
            <li>
                <a href="#">
                    Язык
                </a>
                <ul class="list-unstyled">
                    <li>
                        <img src="/images/flags/russia.png" alt="">Русский
                    </li>
                    <li>
                        <img src="/images/flags/russia.png" alt="">Украинский
                    </li>
                    <li>
                        <img src="/images/flags/united kingdom.png" alt="">Английский
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    type: {
      default: 'index'
    }
  }
})
</script>
