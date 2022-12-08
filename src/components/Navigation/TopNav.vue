<template>
  <aside class="top-nav">
    <div class="top-nav__wrapper">
  <button class="top-nav__buy-now-button">
    Køb billet
    <logo-small/>
  </button>
  <hamburger-menu class="top-nav__hamburger" :active="navigationActive" @toggle-menu="toggleNavigation"/>
    </div>
  <mobile-navigation @click="toggleNavigation" class="top-nav__mobile-navigation" :active="navigationActive"/>
<!--    <a href="#home"></a>-->
<!--    <router-link to="/artist">Artist</router-link>-->
<!--    <router-link to="/program-oversigt">Program Oversigt</router-link> |-->
<!--    <router-link to="/billet-typer">Billet Typer</router-link>-->
<!--    <router-link to="/festival-info">Festival Info</router-link>-->
<!--  </nav>-->
  </aside>
</template>

<script>
import LogoSmall from "@/assets/svg/LogoSmall";
import HamburgerMenu from "@/components/Navigation/HamburgerMenu";
import MobileNavigation from "@/components/Navigation/MobileNavigation";

export default {
  name: "TopNav",
  components: {
    LogoSmall,
    HamburgerMenu,
    MobileNavigation
  },
  data() {
    return {
      navigationActive: false
    }
  },
  methods: {
    toggleNavigation() {
      this.navigationActive = !this.navigationActive
      console.log(this.navigationActive)
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
      height: 300px;
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
  }


</style>