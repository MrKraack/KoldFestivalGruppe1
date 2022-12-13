<template>
    <div>
        <h3>FAQ</h3>
        <div class="container">
        <faq-item v-for="(faq,index) in faqData" :key="index" 
        :title="faq.faqTitle"
        :beskrivelse="faq.faqBeskrivelse"/>
        </div>
    </div>
</template>

<script>
// Til at tilføje sanity.
import sanity from "../client";
import faqItem from "../components/FaqItem.vue"

// elementer jeg skal bruge fra sanity - Kig på faq.js
const query = `*[_type == "faq"] {
    faqTitle,
    faqBeskrivelse
}`;
    export default {
        data() {
            return {
                loading: true,
                faqData: []
            }
        },
        created() {
            this.fetchData();
        },
        methods: {
            fetchData() {
                this.error = this.fagData = null;
                sanity.fetch(query).then(
                    (faq) => {
                        this.faqData = faq;

                        console.log(faq)
                    },
                    (error) => {
                        this.error = error;
                    }
                ) 
            }
        },
        components: {
            faqItem
        }
    }
</script>

<style lang="scss" scoped>
.container {
    border: 1px solid $neon-turquoise;
    background-color: $bg-color;
    color: white;
    font-size: $text-small;
    text-align: left;
    border-radius: 20px;
    padding: 10%;
    margin: 1% 10%;
}

@media screen and (min-width: 620px) {
    .container {
        
    }

    
}

</style>