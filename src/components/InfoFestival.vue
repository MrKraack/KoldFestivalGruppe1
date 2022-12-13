<template>
    <div>
        <h3>Info om festival</h3>
        <div class="container">
        <infoItem v-for="(info,index) in infoData" :key="index" 
        :infoTitle="info.infoTitle"
        :infoText="info.infoText"/>
        </div>
    </div>
</template>

<script>
// Til at tilføje sanity.
import sanity from "../client";
import infoItem from "../components/infoItem.vue"

// elementer jeg skal bruge fra sanity
const query = `*[_type == "info"] {
    infoTitle,
    infoText,
}`;

    export default {
        // Fortæller pc, hvad den skal gøre ved dataen til.
        data() {
            return {
                loading: true,
                infoData: [],
                
            }
        },
        // Når den har kørt, hentes dataen
        created() {
            this.fetchData();
        },
        // Metode til at hente data.
        methods: {
            fetchData() {
                this.error = this.infoData = null;
                sanity.fetch(query).then(
                    (info) => {
                        this.infoData = info;

                        console.log(info)
                    },
                    (error) => {
                        this.error = error;
                    }
                )
            }
        },
        components: {
            infoItem
        }
        
    }
</script>

<style lang="scss" scoped>
.container {
    border: 1px solid $neon-turquoise;
    background-color: $bg-color;
    font-size: $text-small;
    text-align: left;
    color:white;
    border-radius: 20px;
    padding: 10%;
}

</style>