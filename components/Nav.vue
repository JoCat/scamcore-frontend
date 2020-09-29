<template>
<nav>
    <img class="logo" :src="type == 'alternative' ? '/images/logo-alternative.png' : '/images/logo.png'" alt="">
    <ul>
        <li class="dropdown js__nav-dropdown">
            <a class="dropdown-toggle" href="#">
                Услуги
            </a>
            <div class="dropdown-menu">
                <a href="/vds">Виртуальные серверы</a>
                <a href="/dedicated">Выделенные серверы</a>
                <a href="/not-install">Серверы без установки</a>
                <a href="/hosting">Веб-хостинг</a>
                <a href="/domains">Домены</a>
                <a href="/isplicense">Лицензии ISP</a>
            </div>
        </li>
        <li class="dropdown js__nav-dropdown">
            <a class="dropdown-toggle" href="#">
                Статус
            </a>
            <div class="dropdown-menu">
                <a href="https://main.spacecore.online/" target="_blank">Статус сервисов</a>
                <a href="https://vm.spacecore.online/" target="_blank">Статус нод</a>
            </div>
        </li>
        <li><a href="/documents">Документы</a></li>
        <li><a href="https://wiki.spacecore.pro/" target="_blank">База знаний</a></li>
        <li class="dropdown dropdown-right js__nav-dropdown dropdown-contacts">
            <a class="dropdown-toggle" href="#">
                Контакты
            </a>
            <div class="dropdown-menu">
                <!-- <a class="tel" href="tel:+79179036183">+7 917 903 61 83</a> -->
                <a class="email" href="mailto:support@spacecore.pro">support@spacecore.pro</a>
                <a class="tg" href="https://t.me/spacecore_pro" target="_blank">
                    <img src="/images/icons/telegram.png" alt="">
                    Telegram
                </a>
            </div>
        </li>
    </ul>
    <div class="contacts">
        <!-- <a class="tel" href="tel:+79179036183">+7 917 903 61 83</a> -->
        <a class="email" href="mailto:support@spacecore.pro">support@spacecore.pro</a>
        <a class="tg" href="https://t.me/spacecore_pro" target="_blank">
            <img src="/images/icons/telegram.png" alt="">
        </a>
    </div>
    <div class="buttons">
        <a class="bill" href="https://billing.spacecore.pro/" target="_blank">Биллинг</a>
        <div class="dropdown dropdown-right js__nav-dropdown">
            <a class="lang dropdown-toggle" href="#">RU</a>
            <div class="dropdown-menu">
                <a href="#">
                    <img src="/images/flags/russia.png" alt="">Русский [₽]
                </a>
                <a href="#">
                    <img src="/images/flags/russia.png" alt="">Украинский [₴]
                </a>
                <a href="#">
                    <img src="/images/flags/united kingdom.png" alt="">Английский [€]
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
            <li>
                <a href="#">
                    Услуги
                </a>
                <ul class="list-unstyled">
                    <li><a href="/vds">Виртуальные серверы</a></li>
                    <li><a href="/dedicated">Выделенные серверы</a></li>
                    <li><a href="/not-install">Серверы без установки</a></li>
                    <li><a href="/hosting">Веб-хостинг</a></li>
                    <li><a href="/domains">Домены</a></li>
                    <li><a href="/isplicense">Лицензии ISP</a></li>
                </ul>
            </li>
            <li>
                <a href="#">
                    Статус
                </a>
                <ul class="list-unstyled">
                    <li><a href="https://main.spacecore.online/" target="_blank">Статус сервисов</a></li>
                    <li><a href="https://vm.spacecore.online/" target="_blank">Статус нод</a></li>
                </ul>
            </li>
            <li><a href="/documents">Документы</a></li>
            <li><a href="https://wiki.spacecore.pro/" target="_blank">База знаний</a></li>
            <li><a href="https://billing.spacecore.pro/" target="_blank">Биллинг</a></li>
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
