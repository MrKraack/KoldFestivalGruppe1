<template>
    <div>
      <section-header
          :first-heading="firstHeading"
          :second-heading="secondHeading"
          :color="color"
      ></section-header>
      <mobile-artists class="mobile"/>
      <artist-container class="notMobile"></artist-container>
    </div>
</template>

<script>
import artistContainer from "@/components/Artist/ArtistContainer";
import sectionHeader from "@/components/Layout/SectionHeader";
import MobileArtists from "@/components/Artist/mobileArtists";

export default {
      name: 'artistView',
      data (){
            return {
              color: 'green',
              firstHeading: '2022',
              secondHeading: 'artists',
            }
      },
      components: {
        MobileArtists,
        artistContainer,
        sectionHeader
        }
}
</script>

<style lang="scss" scoped>

.mobile {
  display: none;
}
.notMobile {
  display: block;
}

$screen-mobile: 390px;
@media screen and (max-width: $screen-mobile) {
  .mobile {
    display: block;
  }
  .notMobile {
    display: none;
  }
}

</style>