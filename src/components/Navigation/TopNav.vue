<template>
  <aside  class="top-nav">
    <div :class="navigationActive ? 'navigation-overlay--active' : 'navigation-overlay--hidden'" @click="clickedOutside"></div>
    <div class="top-nav__wrapper">
  <button class="top-nav__buy-now-button top-nav__buy-now-button--desktop-button">
    <a href="https://tix.dk/da/musikkolding/buyingflow/tickets/15815/23040/" target="blank">
    Køb billet
    </a>
    <logo-small class="small-logo"/>
  </button>
  <hamburger-menu class="top-nav__hamburger" :active="navigationActive" @toggle-menu="toggleNavigation"/>
    <desktop-navigation class="top-nav__desktop-navigation"/>
    </div>
  <mobile-navigation   class="top-nav__mobile-navigation" @close-navigation="toggleNavigation" :active="navigationActive"/>
  </aside>
</template>

<script>
import LogoSmall from "@/assets/svg/LogoSmall";
import HamburgerMenu from "@/components/Navigation/HamburgerMenu";
import MobileNavigation from "@/components/Navigation/MobileNavigation";
import DesktopNavigation from "@/components/Navigation/DesktopNavigation";

export default {
  name: "TopNav",
  components: {
    LogoSmall,
    HamburgerMenu,
    MobileNavigation,
    DesktopNavigation
  },
  data() {
    return {
      navigationActive: false
    }
  },
  methods: {
    clickedOutside() {
      if (!this.navigationActive) return
      this.navigationActive = !this.navigationActive
    },
    toggleNavigation() {
      this.navigationActive = !this.navigationActive
    }
  }
}
</script>

<style scoped lang="scss">

  .top-nav {
    position: fixed;
    width: 100vw;
    top: 25px;
    z-index: 2;
    &__wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
    }
    &__mobile-navigation {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 11;
    }
    &__hamburger {
      z-index: 12;
    }
    &__buy-now-button {
      line-height: 0;
      text-transform: uppercase;
      border: 3px solid $neon-pink;
      border-radius: 0px 10px 10px 0px;
      filter: drop-shadow(0px 0px 3px $neon-pink);
      width: 145px;
      height: 30px;
      background-color: $neon-pink;
      a {
      color: white;
      }
    }
    &__desktop-navigation {
      display: none;
    }
  }

  .navigation-overlay--active {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 0.4;
    z-index: -1;
  }
  .navigation-overlay--hidden {
    display: none;
  }
    @media screen and (min-width: $screen-tablet-vertical) {
      .top-nav {
      .small-logo {
        transform: scale(2) translateY(-10%);
      }
      &__buy-now-button {
        font-size: $text-large;
        width: 220px;
        padding: 32px 0;
        border-radius: 20px;
        margin-left: 50px;
      }
        &__buy-now-button--desktop-button {
          color: black;

          &:hover {
          box-shadow: none;
          color: white;
          }
          &::before {
            content: "";
            z-index: -1;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: opacity 0.3s, border 0.3s;
          }
          &:hover::before {
            opacity: 0
          }
          &::after {
          content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 3px solid white;
            border-radius: 20px;
            opacity: 0;
            z-index: -1;
            transform: scaleX(1.1) scaleY(1.3) translate(-3px,-3px);
            transition: transform 0.3s, opacity 0.3s;
          }
          &:hover::after {
            opacity: 1;
            transform: scaleX(1) scaleY(1) translate(-3px,-3px);
          }
        }
      }
    }
    @media screen and (min-width: $screen-tablet-horizontal) {
      .top-nav {
        top: 50px;
      &__mobille-navigation, &__hamburger {
        display: none;
      }
      &__desktop-navigation {
        display: flex;
      }
      &__buy-now-button {
        width: 240px;
        margin-left: 0;
      }
      &__wrapper {
        justify-content: space-evenly;
      }
      }
    }


</style>