<template>
  <div>
    <artist-card v-for="artist in artists"
                 :key="artist._id"
                 :name="artist.name"
                 :date="artist.playTime"
                 :location="artist.location"
    ></artist-card>
  </div>
</template>

<script>
import sanity from "../client";
import artistCard from "@/components/ArtistCard";

const query = `*[_type == "artist"]{
  _id,
  name,
  slug,
  playTime,
  location,
  description,
  image
}`;

export default {
  name: "artistContainer",
  components: {
    artistCard
  },

  data() {
    return {
      loading: true,
      artists: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.error = this.artists = null;
      sanity.fetch(query).then(
          (artists) => {
            this.artists = artists;

            console.log(artists)
          },
          (error) => {
            this.error = error;
          }
      );
    },
  },
}
</script>

<style scoped lang="scss">

</style>