<template>
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
    export default {
        // eksportere components
        components: {
            InfoFestivalVue,
            SustainbilityInfo,
            FestivalFaq
        },
    }
</script>

<style lang="scss" scoped>

</style>