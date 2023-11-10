<script setup>
import { ref } from 'vue'
import Burger from './icons/burger.vue'

const showMobileMenu = ref(false)
</script>

<template>
  <header class="header">
    <h1 class="header__logo">
      <NuxtLink class="header__logo-link" to="/">
        CarPrice
      </NuxtLink>
    </h1>
    <button class="burger">
      <Burger class="burger-icon" :height="30" :width="30" @click="showMobileMenu = !showMobileMenu" />
    </button>
    <nav class="menu">
      <ul class="menu__list">
        <li class="menu__item">
          <NuxtLink class="menu__item-link" to="/products">
            Товары
          </NuxtLink>
        </li>
        <li class="menu__item">
          <NuxtLink class="menu__item-link" to="/about">
            О нас
          </NuxtLink>
        </li>
        <li class="menu__item">
          <NuxtLink class="menu__item-link" to="/profile">
            Личный кабинет
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <dialog class="show-mobile" :open="showMobileMenu">
      <nav class="mobile-menu">
        <ul class="mobile-menu__list">
          <li class="mobile-menu__item">
            <NuxtLink class="mobile-menu__item-link" to="/products">
              Товары
            </NuxtLink>
          </li>
          <li class="mobile-menu__item">
            <NuxtLink class="mobile-menu__item-link" to="/about">
              О нас
            </NuxtLink>
          </li>
          <li class="mobile-menu__item">
            <NuxtLink class="mobile-menu__item-link" to="/profile">
              Личный кабинет
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </dialog>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: $padding-default;
  box-shadow: 0 0 5px rgb(0 0 0 / 20%);

  &__logo{
    font-weight: 700;
    font-size: 24px;

    &-link{
      padding: $padding-default * 0.5 $padding-default * 2;
      border-radius: $border-radius-default;
    }
  }

  .menu {
    &__list {
      display: flex;
      gap: $gap-default * 2;
      align-items: center;
    }

    &__item {
      display: block;

      &-link {
        display: inline-block;
        padding: $padding-default $padding-default * 2;
        border-radius: $border-radius-default;
      }
    }

    @media screen and (width <= 768px) {
      display: none;

    }
  }

  .show-mobile{
    top: 80px - $padding-default * 2;
    left: 0;
    width: 100%;
    box-shadow: 0 3px 5px rgb(0 0 0 / 10%);

  }

  .mobile-menu {
    &__list {
      display: flex;
      flex-direction: column;
      gap: $gap-default;
      align-items: center;
      padding: $padding-default;
    }

    &__item {
      display: block;
      width: 100%;

      &-link {
        display: inline-block;
        width: 100%;
        padding: $padding-default $padding-default * 2;
        border-radius: $border-radius-default;
      }
    }

    @media screen and (width >= 768px) {
      display: none;

    }

  }

  .burger {
    display: none;
    justify-content: center;
    padding: $padding-default * 0.5;
    background-color: #fff;
    border: none;
    border-radius: $border-radius-default;
    cursor: pointer;

    &-icon{
      stroke: black;
    }

    &:hover {
      background-color: $btn-bg-hover;

      .burger-icon{
      stroke: white;
    }
    }

    @media screen and (width <= 768px) {
      display: flex;

    }
  }

}

  .router-link-exact-active {
    color:$btn-text-active;
    background-color: $btn-bg-active;
}
</style>
