<template>
  <div class="section-header">
    <img v-if="haveHands" :src="resolveSrc(this.color)" alt="hands" class="notMobile">
    <img v-if="haveHands" :src="resolveSrcMobile(this.color)" alt="hands" class="mobile">
    <img v-if="haveHands" :src="resolveSrcDesktop(this.color)" alt="hands" class="desktop">
    <section class="heading">
      <h3 :style="{textShadow: `0 0 5px #fff,
                  0 0 10px #fff,
                  0 0 15px ${resolveColor},
                  0 0 20px ${resolveColor}`}"
      >{{firstHeading}}</h3>
      <h4 :style="{color: resolveColor}">{{secondHeading}}</h4>
    </section>
  </div>
</template>

<script>
export default {
  name: "sectionHeader",
  props: {
    color: String,
    firstHeading: String,
    secondHeading: String,
    haveHands: {
      type: Boolean,
      default: true
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
  computed: {
    resolveColor() {
      switch (this.color) {
        case 'green':
          return '#00FF01';
        case 'blue':
          return '#06F2DB';
        case 'orange':
          return '#FF9201';
        case 'pink':
          return '#FE2390';
        default:
          return 'hotpink'
      }
    }
  }
}
</script>

<style scoped lang="scss">
img {
  width: 100vw;
  height: auto;
}

.section-header {
  margin: 2rem 0;
}

.heading {
  text-align: center;
  font-size: $neon-undertitle-desktop;
  text-transform: uppercase;
  background: $bg-color;
  margin: 2rem 0;
  h4 {
   margin-top: -1.5rem;
  }
  h3 {
    margin: 0;
    color: $bg-color;
    text-align: center;
    z-index: 2;
  }
}

.mobile {
  display: none;
}
.notMobile {
  display: none;
}
.desktop {
  display: block
}

$screen-mobile: 450px;
@media screen and (max-width: $screen-mobile) {
  .mobile {
    display: block;
  }
  .notMobile {
    display: none;
  }
  .desktop {
    display: none
  }
}

@media screen and (min-width: $screen-mobile) and (max-width: $screen-desktop) {
  .mobile {
    display: none;
  }
  .notMobile {
    display: block;
  }
  .desktop {
    display: none
  }
}
</style>