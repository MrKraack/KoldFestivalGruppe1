<template>
  <TopNav/>
  <main>
    <hero-section id="home"/>
    <artist-view/>
    <program-oversigt/>
    <billet-typer/>
    <festival-info/>
    <footer-info/>
  </main>
</template>


<script>
import TopNav from "@/components/Navigation/TopNav";
import HeroSection from "@/views/HeroSection";
import ArtistView from "@/views/ArtistView";
import ProgramOversigt from "@/views/ProgramOversigt";
import BilletTyper from "@/views/BilletTyper";
import FestivalInfo from "@/views/FestivalInfo";
import FooterInfo from "@/views/FooterInfo";
import sanity from "./client";
import {computed} from 'vue'

const query = `*[_type == "metaData"]{
  festivalDate,
  instagramUrl,
  facebookUrl
}[0]`;

export default {
  name: "App",
  components: {
    TopNav,
    HeroSection,
    ArtistView,
    ProgramOversigt,
    BilletTyper,
    FestivalInfo,
    FooterInfo
  },
  data() {
    return {
      loading: true,
      facebookUrl: null,
      instagramUrl: null,
      festivalDate: null
    }
  },
  provide() {
    return {
      facebookUrl: computed(() => this.facebookUrl),
      instagramUrl: computed(() => this.instagramUrl),
      festivalDate: computed(() => this.festivalDate)
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.error = this.metaData = null;
      this.loading = true;
      sanity.fetch(query).then(
          (metaData) => {
            this.loading = false;
            this.facebookUrl = metaData.facebookUrl
            this.instagramUrl = metaData.instagramUrl
            this.festivalDate = metaData.festivalDate
          },
          (error) => {
            this.error = error;
          }
      )
    },
  }
}
</script>

<style lang="scss">
@import url('https://fonts.cdnfonts.com/css/helvetica-neue-lt-std-6');

body {
  margin: 0;
  box-sizing: border-box;
  background-color: $bg-color;
}

.placeholder {
  height: 100vh;
}


#app {
  font-family: 'Helvetica Neue LT Std', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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

h1,h2,h3,h4,h5 {
  text-align: center;
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
