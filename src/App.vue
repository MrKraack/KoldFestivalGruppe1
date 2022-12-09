<template>
  <TopNav />
  <main>
    <hero-section id="home"/>
  </main>
</template>

<script>
import TopNav from "@/components/Navigation/TopNav";
import HeroSection from "@/views/HeroSection";

export default {
  name: "App",
  components: {
    TopNav,
    HeroSection
  }
}
</script>

<style lang="scss">
@import url('https://fonts.cdnfonts.com/css/helvetica-neue-lt-std-6');

  body {
    margin: 0;
    box-sizing: border-box;
  }

  #app {
    font-family: 'Helvetica Neue LT Std', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
}

button {
  cursor: pointer;
  font-family: 'Helvetica Neue LT Std', sans-serif;
  font-size: $text-xs;
  letter-spacing: 0.15em;
}

  a {
    text-decoration: none;
  }

  h2 {
    margin: 0;
  }
nav {
  a {
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
