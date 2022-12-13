<template>
      <section-header :color="color" :first-heading="firstHeading" :second-heading="secondHeading"/>
    <div>
        <!-- Viser componentet -->
        <InfoFestivalVue></InfoFestivalVue>
        <FestivalFaq></FestivalFaq>
        <SustainbilityInfo></SustainbilityInfo>
    </div>
</template>

<script>
// importer fra Views (siden vises ikke) til components (Hvor siden vises)
import InfoFestivalVue from '@/components/InfoFestival.vue';
import SustainbilityInfo from '@/components/SustainbilityInfo.vue';
import FestivalFaq from '@/components/FestivalFaq.vue'
import SectionHeader from "@/components/SectionHeader";

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