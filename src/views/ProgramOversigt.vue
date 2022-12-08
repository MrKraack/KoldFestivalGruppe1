<template>
  <div class="container">
    <div class="containerHeader">
      <h1>Program</h1>
      <h1>Oversigt</h1>
    </div>

    <div class="festivalProgram">
      <div class="loading" v-if="loading">Loading...</div>
      <div v-if="error" class="error">
        {{ error }}
      </div>
      <!-- Container for friday -->
      <div class="fridaySection">
        <div class="programHeader">
          <h2>Fredag</h2>
        </div>
        <div class="ProgramOverview">
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
      <!-- Container for Saturday -->
      <div class="saturdaySection">
        <div class="ProgramHeader">
          <h2>Lørdag</h2>
        </div>
        <div class="programOverviewContent">
          <table>
            <tr class="programTableHeaders">
              <th>Tid</th>
              <th>Artist</th>
              <th>Sted</th>
            </tr>
            <tr v-for="entry in festivalEntry" :key="entry._id">
              <td>Timestamp</td>
              <td>{{ entry.title }}</td>
              <td>{{ entry.location }}</td>
            </tr>
          </table>

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
      festivalFriday: [],
      festivalSaturday: [],
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
  computed: {



  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: $bg-color;

  .containerHeader {
    color: $neon-orange;
  }

  .festivalProgram {
    display: flex;
    color: white;
    justify-content: space-around;

    .fridaySection {
      width: 33%;
      border: 2px solid $neon-orange;
      border-radius: 5px;

      .programHeader {
        background-color: $neon-orange;

        h2 {
          color: #fff;
          margin-top: 0px;          
            

        }

      }

      .ProgramOverview {
        display: table;
        width: 100%;
        text-align: center;

        header {
          display: table-row;

          div {
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
          }
        }
      }


    }
  }

  .saturdaySection {
    border: 2px solid $neon-orange;

    table {
      tr {
        td {
          border-bottom: 2px solid $neon-orange;
          text-align: left;
        }
      }
    }

  }

}
</style>
  