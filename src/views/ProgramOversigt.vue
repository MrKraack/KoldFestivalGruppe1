<template>
    <div class="container">
      <section-header :color="color" :first-heading="firstHeading" :second-heading="secondHeading" />
        <div class="festivalProgram">
            <div class="loading" v-if="loading">Loading...</div>
            <div v-if="error" class="error">
                {{ error }}
            </div>
            <!-- Container for friday -->
            <div class="sectionContainer">
                <div class="program_oversigt" @click="toggleAccordionFriday" :class="accordionClassFriday">
                    <!-- Header for  -->
                    <div class="boxHeader" :class="accordionClassFriday">
                        <h2>FREDAG</h2>
                    </div>
                    <div class="program_oversigt-body row">
                        <div class="program_oversigt-content">
                            <!-- Header for each row in the table -->
                            <header>
                                <div class="col">
                                    <!-- Time align class is used to align time in middle of div -->
                                    <p class="timeAlign">Tid</p>
                                </div>
                                <div class="col">
                                   <p>Artist </p>
                                </div>
                                <div class="col">
                                   <p>Sted </p>
                                </div>
                            </header>
                            <div v-for="artists in festivalFriday" :key="artists._id" class="row">
                                <!-- Column for Artist playtime -->
                                <div class="col"><p class="concertPlayTime">{{ convertDateToTime(artists.concertTime)}}</p></div>
                                <!-- Column for Artist tile -->
                                <div class="col"><p> {{ artists.title }}</p></div>
                                <!-- Column for Artist concert location -->
                                <div class="col"><p>{{ artists.location }}</p></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Container for Saturday -->
            <div class="sectionContainer">
                <div class="program_oversigt" @click="toggleAccordionSaturday" :class="accordionClassSaturday">
                    <!-- Header for entire section -->
                    <div class="boxHeader" :class="accordionClassSaturday">
                        <h2>LØRDAG</h2>
                    </div>
                    <div class="program_oversigt-body row">
                        <div class="program_oversigt-content">
                            <header>
                                <div class="col">
                                    <!-- Time align class is used to align time in middle of div -->
                                    <p class="timeAlign">Tid</p>
                                </div>
                                <div class="col">
                                   <p>Artist </p>
                                </div>
                                <div class="col">
                                   <p>Sted </p>
                                </div>
                            </header>
                            <div v-for="artists in festivalSaturday" :key="artists._id" class="row">
                                <!-- Column for Artist playtime -->
                                <div class="col"><p class="concertPlayTime">{{ convertDateToTime(artists.concertTime)}}</p></div>
                                <!-- Column for Artist tile -->
                                <div class="col"><p> {{ artists.title }}</p></div>
                                <!-- Column for Artist concert location -->
                                <div class="col"><p>{{ artists.location }}</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
    
<script>
import sanity from "../client";
import SectionHeader from "@/components/Layout/SectionHeader";

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
            isFridayOpen: true,
            isSaturdayOpen: true,

            clicked: false,
            loading: true,
            festivalEntry: [],
            festivalFriday: [],
            festivalSaturday: [],

            color: 'orange',
            firstHeading: 'program',
            secondHeading: 'oversigt',
        };
    },
    components: {
      SectionHeader
    },
    created() {
        this.fetchData();
    },
    methods: {
        // Used to open and close Friday section on Mobile display
        toggleAccordionFriday() {
            this.isFridayOpen = !this.isFridayOpen;

        },
         // Used to open and close Saturday section on Mobile display
        toggleAccordionSaturday() {
            this.isSaturdayOpen = !this.isSaturdayOpen;

        },
        fetchData() {
            this.error = this.post = null;
            this.loading = true;
            sanity.fetch(query).then(
                (festivalEntry) => {
                    this.loading = false;
                    this.festivalEntry = festivalEntry;
                    console.log(festivalEntry)

                    // loop through the array, convert time and push to friday or saturday
                    for (let i = 0; i < festivalEntry.length; i++) {
                        //Get the time from current artists
                        let dateTime = festivalEntry[i].concertTime;
                        //Convert date from ISO to JS format
                        let newConvertedDate = new Date(dateTime).toString();
                        //Assign new date to Entry
                        festivalEntry[i].concertTime = newConvertedDate;
                        //Regex to find the first word and copies all of it - In this case, it's the day
                        let dayRegex = /^(\w*)/;
                        //Variable to hold what regex finds/matches
                        let dayFromDate = newConvertedDate.match(dayRegex)[0];

                        // If the playtime is = to friday, than add to friday array
                        if (dayFromDate == "Fri") {
                            this.festivalFriday.push(festivalEntry[i]);
                         // If the playtime is = to Saturday, than add to Saturday array
                        } else if (dayFromDate == "Sat" | dayFromDate == "Sun") {
                            this.festivalSaturday.push(festivalEntry[i]);
                        }
                        //Sort the array by concert time
                        this.festivalFriday.sort(this.compare);
                        this.festivalSaturday.sort(this.compare);
                    }
                    (error) => {
                        this.error = error;
                    }
                }
            )
        },
        //Used to convert the ISO format to Coordinated Universal Time (UTC)
        convertDateToTime(date) {
            let timeRegex = /^.{16}(.{5})/;
            let newTime = date.match(timeRegex)[1];
            return newTime;

        },
        //Used to sort through the Artist array, and sort by concert play time - Function is called at the end of "FetchData"
        compare(a, b) {
            if (a.concertTime < b.concertTime) {
                return -1;
            }
            if (a.concertTime > b.concertTime) {
                return 1;
            }
            return 0;
        }

    },
    computed: {
        //Used to toggle between is-closed and is-active on section
        accordionClassFriday: function () {
            return {
                "is-closed": this.isFridayOpen,
                "is-active": !this.isFridayOpen,
            };
        },
        //Used to toggle between is-closed and is-active on section
        accordionClassSaturday: function () {
            return {
                "is-closed": this.isSaturdayOpen,
                "is-active": !this.isSaturdayOpen,
            };
        },

    },
};
</script>
  
<style lang="scss" scoped>
//Mobil
@media screen and (max-width: 834px){
   
    .container {
        background-color: $bg-color;
    
    .sectionContainer {
        display: flex;
        flex-direction: column;
      margin: 1% 10%;
      border: 2px solid $neon-orange;
        box-shadow: 0px 0px 10px $neon-orange;
        border-radius: 5px;
        
        .boxHeader {
            margin: 0px;
            background-color: $bg-color;
            color: $neon-orange;
            
            h2 {
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
                    
                    
                    .col {
                        display: table-cell;
                        text-align: left;
                        border-bottom: 2px solid $neon-orange;
                        padding: 10px;
                        width: 33%;
                        vertical-align: middle;
                        initial-letter: left;
                        font-size: 12px;
                        p {
                            margin: 0px;
                            }
                            .concertPlayTime{
                                text-align: center;
                            }
                            
                        }
                    }
                    
                .row:last-child {
                    div {
                        border-bottom: 0px;
                    }
                }
            }
        }
        
        .is-closed .program_oversigt-body {
            max-height: 0px;
            
        }
        
        .is-active .boxHeader {
            color: white;
            max-height: fit-content;
            background-color: $neon-orange;
            border-end-start-radius: 0px;
        }
    }
}
}
//Ipad vertical
@media screen and (min-width: 834px ){
    .festivalProgram{
        background-color: $bg-color;
        display: flex;
        flex-direction: column;

        .sectionContainer {
        display: flex;
        flex-direction: row;
          margin: 1% 10%;
          border: 2px solid $neon-orange;
        box-shadow: 0px 0px 10px $neon-orange;
        border-radius: 5px;
        .boxHeader {
            margin: 0px;
            background-color: $neon-orange;
            color: white;
            
            h2 {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 60px;
                margin: 0px;
                
            }
            
        }
        .program_oversigt{
            width: 100%;

            .program_oversigt-content {
                display: table;
                width: 100%;
                text-align: center;
                background-color: $bg-color;
                color: white;
                
                header {
                    display: table-row;
                    
                    div {
                        border-bottom: 4px solid $neon-orange;
                        padding-top: 10px;
                        padding-bottom: 10px;
                        display: table-cell;
                        font-weight: bold;
                        text-align: left;
                        p{
                            transform: translateX(45%);
                        }
                        .timeAlign{
                            transform: translateX(0%);
                            text-align: center;
                        }
                    }
                    
                }
                .row {
                    display: table-row;
                    text-align: left;
                    
                    .col {
                        display: table-cell;
                        border-bottom: 2px solid $neon-orange;
                        
                        width: 33%;
                        padding-top: 10px;
                        padding-bottom: 10px;
                        vertical-align: middle;
                        
                        
                        p {
                            width: 50%;
                            margin: 0px;
                            transform: translateX(70%);
                        }
                        .concertPlayTime{
                            width: 100%;
                            transform: translateX(0%);
                            text-align: center;

                        }
                        
                        
                    }
                }
                .row:last-child {
                    div {
                        border-bottom: 0px;
                    }
                }
                }
            }
            
        }
    }
}
//Ipad Horizontal, But content stays the same as Ipad Vertical
@media screen and (min-width: 1194px ){
    
}

//Desktop
@media screen and (min-width: 1512px ){
    .festivalProgram{
        flex-direction: row;

        .sectionContainer {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-right: 5%;
        margin-left: 5%;
        
        
        .program_oversigt{
            width: 100%;

            .program_oversigt-content {
                
                header {
                    
                    div {
                        
                        p{
                            transform: translateX(40%);
                        }
                        
                    }
                    
                }
                .row {
                    display: table-row;
                    text-align: left;
                    
                }
                .row:last-child {
                    div {
                        border-bottom: 0px;
                    }
                }
                }
            }
            
        }
    }


}

</style>
