<template>
  <header class="p-header ua-bg-white">
    <div class="p-header__wrapper">
      <RouterLink to="/" class="p-header__logo">
        <img src="/src/preview/assets/images/favicon.svg" alt="Ua Elements Vue Logo">

        <span>Ua Elements Vue</span>
      </RouterLink>

      <div class="p-header__links">
        <RouterLink
          v-for="({ name, route }, i) in routes"
          :key="i"
          :to="route"
          class="p-header__item"
        >
          {{ name }}
        </RouterLink>
      </div>

      <div class="p-header__right"></div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

const routes = [
  {
    route: '/',
    name: 'Home'
  },
  {
    route: '/style-classes',
    name: 'Style Classes'
  },
  {
    route: '/components',
    name: 'Components'
  },
]
</script>

<style lang="scss">
@import "@/assets/default-theme/default-theme";

.p-header {
  position: fixed;
  top: 0;
  width: 100vw;
  padding: 1rem 2rem;
  box-shadow: 0 0 5px 1px rgba(0,0,0,0.25);

  &__logo {
    display: flex;
    align-items: center;
    text-decoration: none;

    img {
      height: 2rem;
      width: 2rem;
      object-fit: contain;
      margin-right: .5rem;
    }

    span {
      color: #000;
    }
  }

  &__logo,
  &__right {
    flex: 0 0 200px;
  }

  &__wrapper {
    margin: 0 auto;
    max-width: 1440px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__item {
    cursor: pointer;
    padding: .5rem 1rem;
    text-decoration: none;
    text-transform: uppercase;
    color: #000;
    position: relative;
    
    &::after {
      content: '';
      width: 1px;
      height: 100%;
      background-color: #00000040;
      position: absolute;
      left: 100%;
      top: 0;
    }

    &:last-of-type::after {
      display: none;
    }
  }
}
</style>