<template>
    <div class="sustainability-info">
        <h3>Bæredygtige tiltag</h3>
        <div class="container">
        <sustainItem v-for="(sustain,index) in sustainData" :key="index" 
        :sustainTitle="sustain.sustainTitle"
        :sustainText="sustain.sustainText"
        :haveImages="index === 0 ? true : false"
        :haveLine="index === 1 ? true : false"/>
        </div>
    </div>
</template>

<script>
// Til at tilføje sanity.
import sanity from "../../client";
import sustainItem from "./sustainItem.vue"

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

.sustainability-info {
  h3 {
    font-size: $neon-undertitle-desktop;
    color: $neon-turquoise;
    text-shadow: 0 0 6px $neon-turquoise;
    margin: 3%;
  }
}

.container {
    border: 1px solid $neon-turquoise;
    background-color: $bg-color;
    color: white;
    font-size: $text-small;
    text-align: left;
    border-radius: 20px;
    padding: 5%;
    position: relative;
    margin: 1% 10%;
    
        
        
}

//ipad
@media screen and (min-width: 890px) {
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-content: space-evenly;
        &:before {
        content: "";
        display: block;
        position: absolute;
        height: 70%;
        width: 2px;
        background-color: $neon-turquoise;
        left: 50%;
        top: 17%;
        transform: translateX(-50%);
    }


    }
}
</style>