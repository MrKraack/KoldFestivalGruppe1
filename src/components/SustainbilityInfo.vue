<template>
    <div>
        <h3>Bæredygtig tiltag</h3>
        <div class="container">
        <sustainItem v-for="(sustain,index) in sustainData" :key="index" 
        :sustainTitle="sustain.sustainTitle"
        :sustainText="sustain.sustainText"/>
        </div>
    </div>
</template>

<script>
// Til at tilføje sanity.
import sanity from "../client";
import sustainItem from "../components/sustainItem.vue"

// elementer jeg skal bruge fra sanity, derefter kan dataerne fetches nede i export.
const query = `*[_type == "sustain"] {
    sustainTitle,
    sustainText,
}`;
    export default {
        data() {
            return {
                loading: true,
                sustainData: []
            }
        },
        created() {
            this.fetchData();
        },
        methods: {
            fetchData() {
                this.error = this.sustainData = null;
                sanity.fetch(query).then(
                    (sustain) => {
                        this.sustainData = sustain;

                        console.log(sustain)
                    },
                    (error) => {
                        this.error = error;
                    }
                ) 
            }
        },
        components: {
            sustainItem
        }
    }
</script>

<style lang="scss" scoped>
.container {
    border: 1px solid blue;
    border-radius: 20px;
    padding: 2rem 10rem;
    margin: 0 5rem;
}
</style>