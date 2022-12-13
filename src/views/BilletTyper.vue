<template>
 <!-- imports child component -->
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
</template>

<script>
// imports sanity from client
import sanity from "../client";

// imports child component
import CompBilletType from "@/components/CompBilletType.vue";

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
        
    },
    // holds data from sanity in array
    data() {
        return {
            loading: true,
            billetTypes: [],
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
        
          console.log(billetType);
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
    }

    @media screen and (min-width: 666px) and (max-width: 1200px) {
    .ticket__third {
      grid-column: 1 / span 2;
      justify-self: center;
    }

  }


    

</style>