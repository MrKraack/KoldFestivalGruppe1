<template>
 <!-- imports child component -->
  <div>
      <section-header :color="color" :first-heading="firstHeading" :second-heading="secondHeading"/>
    <div class="ticket__container">
        <comp-billet-type
        v-for="(billetType, index) in billetTypes" 
        :key="index"
        :title="billetType.dayName"
        :discount="billetType.ticketpriceDiscount"
        :normal="billetType.ticketpriceNormal"
        :class="index === 2 ? 'ticket__third' : null"
        />  
    </div>
  </div>
</template>

<script>
// imports sanity from client
import sanity from "../client";

// imports child component
import CompBilletType from "@/components/Billet/CompBilletType.vue";
import SectionHeader from "@/components/Layout/SectionHeader";

// objects from sanity schema
const query = `*[_type == "billetType"]{
    dayName,
    ticketpriceDiscount,
    ticketpriceNormal
}`;

    export default {
    name: 'BilletTyper',
    components: {
        CompBilletType,
        SectionHeader
    },
    // holds data from sanity in array
    data() {
        return {
            loading: true,
            billetTypes: [],
          color: 'pink',
          firstHeading: 'billet',
          secondHeading: 'typer',
        }
    },

    // fetches data from sanity
    methods: {
    fetchData() {
      this.error = this.billetTypes = null;
      this.loading = true;
      sanity.fetch(query).then(
        (billetType) => {
          this.loading = false;
          this.billetTypes = billetType;
        },
        (error) => {
          this.error = error;
        }
      );
    },
  },
  created() {
    this.fetchData();
  }
    
    }
</script>

<style lang="scss" scoped>


    .ticket__container {
        display: grid;
        column-gap: 20px;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        margin: 1% 10%;
    }

    @media screen and (min-width: 666px) and (max-width: 1200px) {
    .ticket__third {
      grid-column: 1 / span 2;
      justify-self: center;
    }

  }


    

</style>