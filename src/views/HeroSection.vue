<template>
  <section class="hero-section">
    <video playsinline autoplay muted loop :poster='require("@/assets/images/mockup-backround.png")' class="hero-section__video-background" >>
    <h2>hello</h2>
      <source :src='require("@/assets/video/background-video.mp4")' type='video/mp4'>
    </video>
    <div class="hero-section__main-logo">
      <img src="@/assets/images/logo-hero.png" alt="Festival's Logo">
      <p class="event-date">2. - 3. februar</p>
    </div>
    <div class="hero-section__social-links">
      <a href="https://www.instagram.com/koldfestival/?hl=da" target="blank">
        <instagram-icon/>
      </a>
      <a href="https://www.facebook.com/koldfestival" target="blank">
        <facebook-icon/>
      </a>
    </div>
    <div class="hero-section__ice-overlay overlay-top">
      <img class="overlay-mobile" src="@/assets/images/ice-overlay-mobile.png">
      <img class="overlay-desktop" src="@/assets/images/ice-overlay-desktop.png">
    </div>
    <div class="hero-section__ice-overlay overlay-bottom">
      <img class="overlay-mobile" src="@/assets/images/ice-overlay-mobile.png">
      <img class="overlay-desktop" src="@/assets/images/ice-overlay-desktop.png">
    </div>
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
  }
}
</script>

<style scoped lang="scss">

  .hero-section {
    height: 100vh;
    width: 100vw;
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


</style>