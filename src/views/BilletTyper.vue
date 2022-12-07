<template>
    <div>
        <section>
        <img src="" alt="">
        
        <div>
        <h1></h1>
        <h2></h2>
        </div>

        <p></p>

        <section>

            <h3></h3>

            <div>
                <p></p>
                <p></p>
            </div>

            <div>
                <p></p>
                <p></p>
            </div>

            <div>
                <p></p>
                <p></p>
            </div>

            <button @click="buyTicket">Køb Billet <img src="" alt=""></button>

        </section>
    </section>
    </div>
</template>

<script>
    export default {
    name: 'BilletTyper',
    data(){
        return {
            ticketDays: ["Fredag", "Lørdag", "Partout"],
            ticketTypes: ["Ung/Studerende", "voksen"],
            ticketAge: ["16-25 år eller gyldigt studie ID", "26+"],
            ticketPrice: ["150 KR", "300 KR"]


        }
    },
    methods: {
        buyTicket(){

        }
    }      
    }
</script>

<style lang="scss" scoped>

</style>