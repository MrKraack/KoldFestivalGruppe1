<template>
  <nav class="mobile-navigation" :class="active ? 'mobile-navigation--visible' : 'mobile-navigation--hidden'">
    <div class="mobile-navigation__links-wrapper">
    <a href="">Køb billet</a>
    <a href="">Artister</a>
    <a href="">Billeter</a>
    <a href="">Om kold</a>
    </div>
    <div class="mobile-navigation__social-links">
      <a href="">
        <facebook-icon/>
      </a>
      <a href="">
        <instagram-icon/>
      </a>
    </div>
  </nav>
</template>

<script>
import FacebookIcon from "@/assets/svg/FacebookIcon";
import InstagramIcon from "@/assets/svg/InstagramIcon";

export default {
  name: "MobileNavigation",
  components: {
    FacebookIcon,
    InstagramIcon
  },
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">

  .mobile-navigation {
    width: 180px;
    height: 460px;
    background-color: $neon-pink;
    border: 3px solid $neon-pink;
    border-radius: 10px 0 0 10px;
    filter: drop-shadow(0px 0px 3px $neon-pink);
    padding-top: 70px;
    position: relative;

    &__links-wrapper {
        padding-left: 20px;
        width: 100%;
        @include flex-column;
        gap: 40px;
        align-items: flex-start;
        text-transform: uppercase;
        font-size: $text-xs;
        a {
          color: white;
        }
      }
    &__social-links {
      position: absolute;
      bottom: 16px;
      left: 20px;
      display: flex;
      gap: 13px;
    }
    &--visible {
      transform: translateX(0);
      transition: transform 0.2s ease-in-out;
    }

    &--hidden {
      transform: translateX(100%);
      transition: transform 0.2s ease-in-out;
    }
  }
  @media screen and (min-width: $screen-tablet-vertical) and (max-width: $screen-tablet-horizontal) {
    .mobile-navigation {
      width: 270px;
      height: 540px;
      padding-top: 100px;
      &__links-wrapper {
        padding-left: 30px;
        a {
          font-size: $text-large;
        }
      }
    }
  }

</style>