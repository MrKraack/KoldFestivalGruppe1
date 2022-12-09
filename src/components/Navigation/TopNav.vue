<template>
  <aside v-click-outside-element="clickedOutside"  class="top-nav">
    <div class="top-nav__wrapper">
  <button class="top-nav__buy-now-button">
    Køb billet
    <logo-small class="small-logo"/>
  </button>
  <hamburger-menu class="top-nav__hamburger" :active="navigationActive && !outsideClickDetected" @toggle-menu="toggleNavigation"/>
    <desktop-navigation class="top-nav__desktop-navigation"/>
    </div>
  <mobile-navigation   class="top-nav__mobile-navigation" :active="navigationActive && !outsideClickDetected"/>
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
      navigationActive: false,
      outsideClickDetected: false
    }
  },
  methods: {
    clickedOutside() {
      if (this.navigationActive === false) return
      this.outsideClickDetected = true
      console.log(`clicked outside: ${this.outsideClickDetected}`)
    },
    toggleNavigation() {
      this.navigationActive = !this.navigationActive
      if (this.navigationActive === false) {
        this.outsideClickDetected = false
      }
      console.log(`navigation toggle: ${this.navigationActive}`)
    }
  }
}
</script>

<style scoped lang="scss">

  .top-nav {
    position: fixed;
    width: 100vw;
    top: 25px;
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
    }
    &__hamburger {
      z-index: 2;
    }
    &__buy-now-button {
      line-height: 0;
      text-transform: uppercase;
      border: 3px solid $neon-pink;
      border-radius: 0px 10px 10px 0px;
      filter: drop-shadow(0px 0px 3px $neon-pink);
      width: 135px;
      height: 30px;
      color: white;
      background-color: $neon-pink;
    }
    &__desktop-navigation {
      display: none;
    }
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