<template>
  <section class="hero-section">
    <video playsinline autoplay muted loop :poster='require("@/assets/images/mockup-background.png")' class="hero-section__video-background" >>
    <h2>hello</h2>
      <source :src='url' type='video/mp4'>
    </video>
    <div class="hero-section__main-logo">
      <img src="@/assets/images/logo-hero.png" alt="Festival's Logo">
      <p class="event-date">{{eventDate}}</p>
    </div>
    <div class="hero-section__social-links">
      <a :href="instagramUrlHref" target="blank">
        <instagram-icon/>
      </a>
      <a :href="facebookUrlHref" target="blank">
        <facebook-icon/>
      </a>
    </div>
    <div class="hero-section__ice-overlay overlay-top">
      <img class="overlay-mobile" src="@/assets/images/ice-overlay-mobile.png" alt="">
      <img class="overlay-desktop" src="@/assets/images/ice-overlay-desktop.png" alt="">
    </div>
    <div class="hero-section__ice-overlay overlay-bottom">
      <img class="overlay-mobile" src="@/assets/images/ice-overlay-mobile.png" alt="">
      <img class="overlay-desktop" src="@/assets/images/ice-overlay-desktop.png" alt="">
    </div>
    <img :src="resolveSrc(this.handsColor)" alt="hands" class="notMobile">
    <img :src="resolveSrcMobile(this.handsColor)" alt="hands" class="mobile">
    <img :src="resolveSrcDesktop('pink')" alt="hands" class="desktop">
  </section>
</template>

<script>
import FacebookIcon from "@/assets/svg/FacebookIcon";
import InstagramIcon from "@/assets/svg/InstagramIcon";

export default {
  name: "HeroSection",
  components: {
    FacebookIcon,
    InstagramIcon
  },
  data() {
    return {
      facebookUrlHref: this.facebookUrl,
      instagramUrlHref: this.instagramUrl,
      eventDate: this.festivalDate,
      handsColor: 'green',
      url: "https://ik.imagekit.io/hra0dn2xj/background-video.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1671094026130"
    }
  },
  methods: {
    resolveSrc(color) {
      return require(`@/assets/images/hands/${color}handsweb.png`)
    },
    resolveSrcMobile(color) {
      return require(`@/assets/images/hands/${color}hands.png`)
    },
    resolveSrcDesktop(color) {
      return require(`@/assets/images/hands/${color}handsweb-desktop.png`)
    }
  },
  inject: ['facebookUrl', 'instagramUrl', 'festivalDate']
}
</script>

<style scoped lang="scss">

  .hero-section {
    height: 100vh;
    width: 100vw;
    margin-bottom: 20px;
    overflow: hidden;
    position: relative;
    &__video-background {
      width: 100vw;
      height: 100vh;
      object-fit: cover;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: -2;
    }
    &__social-links {
      display: none;
    }
    &__main-logo {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      img {
        width: 177px;
        height: auto;
      }
      .event-date {
        text-transform: uppercase;
        text-align: center;
        font-size: 19px;
        color: white;
        margin: 0;
        transform: translateY(-15px);
      }
    }
    &__ice-overlay {
      position: absolute;
      z-index: -1;
      width: 100vw;
      img {
        width: 100%;
        height: 25vh;
      }
      }
    .overlay-desktop {
      display: none;
    }
    .overlay-mobile {
      height: 35vh;
    }
      .overlay-top {
        top: 0;
        img {
        transform: rotate(180deg);
        }
    }
      .overlay-bottom {
        bottom: -10px;
      }
    @media screen and (min-width: $screen-tablet-vertical) {
      &__main-logo {
        img {
          width: initial;
        }
      }
      .overlay-desktop {
        display: block;
      }
      .overlay-mobile {
        display: none;
      }
    }
    @media screen and (min-width: $screen-tablet-horizontal) {
      &__social-links {
        position: fixed;
        bottom: 30px;
        left: 30px;
        gap: 30px;
        @include flex-column;
      }
    }
  }

  .mobile, .notMobile, .desktop {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
  }

  .desktop {
    display: none;
  }
  .mobile {
    display: block;
  }
  .notMobile {
    display: none;
  }

  $screen-mobile: 450px;
  @media screen and (min-width: $screen-mobile) {
    .mobile {
      display: none;
    }
    .notMobile {
      display: block;
    }
    .desktop {
      display: none;
    }
  }

  @media screen and (min-width: $screen-desktop) {
    .mobile {
      display: none;
    }
    .notMobile {
      display: none;
    }
    .desktop {
      display: block;
    }
  }



</style>