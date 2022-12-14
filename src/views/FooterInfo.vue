<template>
    <div>
      <!-- prop from sanity -->
        <comp-footer 
        v-for="(footerInfo, index) in footerInfos" 
        :key="index"
        :sponsors="footerInfo.sponsors"
        :coordinator="footerInfo.eventcoordinator"
        :phone="footerInfo.phonenumber"
        :email="footerInfo.email"
        /> 
    </div>
</template>

<script>
// imports sanity from client
import sanity from "../client";

// imports child component
import CompFooter from "@/components/Footer/CompFooter.vue";

// objects from sanity schema
const query = `*[_type == "footer"]{
    sponsors,
    eventcoordinator,
    phonenumber,
    email
}`;

    export default {
    name: 'FooterInfo',
    components: {
        CompFooter,
        
    },
    // holds data from sanity in array
    data() {
        return {
            loading: true,
            footerInfos: [],
        }
    },

    // fetches data from sanity
    methods: {
    fetchData() {
      console.log("is running");
      this.error = this.footerInfos = null;
      this.loading = true;
      sanity.fetch(query).then(
        (footer) => {
          this.loading = false;
          this.footerInfos = footer;
        
          console.log(footer);
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


</style>