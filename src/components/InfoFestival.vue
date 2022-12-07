<template>
    <div>
        <h3>Info om festival</h3>
    </div>
</template>

<script>
// Til at tilføje sanity.
import sanity from "../client";

// elementer jeg skal bruge fra sanity
const query = `*[_type == "info"] {
    title,
    body,
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
        }
        
    }
</script>

<style scoped>

</style>