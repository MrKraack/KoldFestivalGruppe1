<template>
  <div>
      <section-header :color="color" :first-heading="firstHeading" :second-heading="secondHeading"/>
    <div>
        <!-- Viser componentet -->
        <InfoFestivalVue></InfoFestivalVue>
        <FestivalFaq></FestivalFaq>
        <SustainbilityInfo></SustainbilityInfo>
    </div>
  </div>
</template>

<script>
// importer fra Views (siden vises ikke) til components (Hvor siden vises)
import InfoFestivalVue from '@/components/Info/InfoFestival.vue';
import SustainbilityInfo from '@/components/Info/SustainbilityInfo.vue';
import FestivalFaq from '@/components/Info/FestivalFaq.vue'
import SectionHeader from "@/components/Layout/SectionHeader";

    export default {
        // eksportere components
        components: {
            InfoFestivalVue,
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

</style>