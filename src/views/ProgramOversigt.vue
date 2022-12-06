<template>
    <div class="home">
      <h1>Program Oversigt</h1>
      <div class="festivalEntry">
        <div class="loading" v-if="loading">Loading...</div>
        <div v-if="error" class="error">
          {{ error }}
        </div>
        <!-- Container for friday -->
        <!-- <div class="container">
            <div v-for="entry in festivalEntry" :key="entry._id">
                <div v-if="entry.location == 'Godset'">
                    <h1>Hello {{entry.title}}</h1>

                </div>
                <div v-else>
                    <h1>Not Godset {{entry.title}}</h1>

                </div>
                
            </div>

        </div> -->

        <!-- Container for Saturday -->
        <div class="container">
          <div v-for="entry in festivalEntry" class="post-item" :key="entry._id">
              <h2>{{ entry.title }}</h2>
            <p>{{entry.location}}</p>
            <hr />
          </div>
        </div>
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
    data() {
      return {
        loading: true,
        festivalEntry: [],
      };
    },
    created() {
      this.fetchData();
    },
    methods: {
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
  };
  </script>
  
  <style scoped>
  .home h1{
      text-align: center;
  
  }
  .container {
    margin: 0 auto;
    max-width: 42em;
    width: 100%;
  }
  .post-item {
    box-sizing: border-box;
  }
  </style>
  