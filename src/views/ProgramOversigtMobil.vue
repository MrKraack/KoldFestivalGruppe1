<template>
    <div class="container">
        <div class="containerHeader">
            <h1>Program</h1>
            <h2>Oversigt</h2>
        </div>

        <div class="festivalProgram">
            <div class="loading" v-if="loading">Loading...</div>
            <div v-if="error" class="error">
                {{ error }}
            </div>
            <!-- Container for friday -->
            <div class="fridaySection">
                <div class="program_oversigt" @click="toggleAccordion" :class="accordionClasses">
                    <div class="boxHeader" :class="accordionClasses">
                        <h2>FREDAG</h2>
                    </div>
                    <div class="program_oversigt-body row">
                        <div class="program_oversigt-content">
                            <header>
                                <div class="col">Tid</div>
                                <div class="col">Artist</div>
                                <div class="col">Sted</div>
                            </header>
                            <div v-for="entry in festivalEntry" :key="entry._id" class="row">
                                <div class="col">timestamp</div>
                                <div class="col">{{ entry.title }}</div>
                                <div class="col">{{ entry.location }}</div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <!-- Container for Saturday -->


        </div>
    </div>
</template>
    
<script>
import sanity from "../client";

const query = `*[_type == "festivalentry"]{
      _id,
      title,
      concertTime,
      location
    }[0...50]`;

export default {
    name: "ProgramOversigt",
    props: {
        title: String,
        artist: String,
        location: String,
        playTime: String,
    },
    data() {
        return {
            isOpen: true,

            clicked: false,
            loading: true,
            festivalEntry: [],
            festivalFriday: [],
            festivalSaturday: [],
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        toggleAccordion() {
            this.isOpen = !this.isOpen;

        },
        fetchData() {
            this.error = this.post = null;
            this.loading = true;
            sanity.fetch(query).then(
                (festivalEntry) => {
                    this.loading = false;
                    this.festivalEntry = festivalEntry;
                    console.log(this.festivalEntry);
                },
                (error) => {
                    this.error = error;
                }
            );
        },

    },
    computed: {
        accordionClasses: function () {
            return {
                "is-closed": this.isOpen,
                "is-active": !this.isOpen,
            };

        },



    },
};
</script>
  
<style lang="scss" scoped>
.container {
    background-color: $bg-color;

    .containerHeader {
        color: $neon-orange;


        h1 {
            text-shadow: 0px 0px 4px $neon-orange;
            -webkit-text-stroke: 0.5px white;
            -webkit-text-fill-color: $bg-color;
        }
    }

    .fridaySection {
        flex-direction: column;
        margin: 0px 20px;
        border: 2px solid $neon-orange;
        box-shadow: 0px 0px 5px $neon-orange;
        border-radius: 5px;

        .boxHeader {
            margin: 0px;           
            background-color: $bg-color;
            color: $neon-orange;
            h2{
                display: flex;
                align-items: center;
                justify-content: center;
                height: 60px;
                margin: 0px;

            }
            
        }

        .program_oversigt-body {
            padding: 0;
            max-height: 800px;
            overflow: hidden;
            transition: max-height 0.3s ease-in-out;
            .program_oversigt-content {
                display: table;
                width: 100%;
                text-align: center;
                background-color: $bg-color;
                color: white;
                header {
                    display: table-row;
                    div {
                        border-bottom: 2px solid $neon-orange;
                        display: table-cell;
                        font-weight: bold;
                    }
                    
                }
                .row {
                    display: table-row;
                    div {
                        display: table-cell;
                        text-align: left;
                        border-bottom: 2px solid $neon-orange;
                        padding: 10px;
                    }
                }
                .row:last-child {
                    div{
                        border-bottom: 0px;
                    }

                }

            }

        }

        .is-closed .program_oversigt-body {
            max-height: 0px;
            
        }
        .is-active .boxHeader{
            color: white;
            max-height: fit-content;
            background-color: $neon-orange;
            border-end-start-radius: 0px;
        }
    }
}




</style>
    