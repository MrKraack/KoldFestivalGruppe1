<template>
  <div class="festival-info">
      <section-header :color="color" :first-heading="firstHeading" :second-heading="secondHeading"/>
    <div class="festival-info__content-wrapper">
        <!-- Viser componentet -->
        <InfoFestival></InfoFestival>
        <FestivalFaq></FestivalFaq>
        <SustainbilityInfo></SustainbilityInfo>
    </div>
  </div>
</template>

<script>
// importer fra Views (siden vises ikke) til components (Hvor siden vises)
import InfoFestival from '@/components/Info/InfoFestival.vue';
import SustainbilityInfo from '@/components/Info/SustainbilityInfo.vue';
import FestivalFaq from '@/components/Info/FestivalFaq.vue'
import SectionHeader from "@/components/Layout/SectionHeader";

    export default {
        // eksportere components
        components: {
            InfoFestival,
            SustainbilityInfo,
            FestivalFaq,
            SectionHeader
        },
      data() {
          return {
            color: 'blue',
            firstHeading: 'festival',
            secondHeading: 'info',
          }
      }
    }
</script>

<style lang="scss" scoped>
  .festival-info {
      color: $neon-turquoise;
    h3 {
    }
    &__content-wrapper {
      @include flex-column;
      gap: 40px;
    }
  }
</style>