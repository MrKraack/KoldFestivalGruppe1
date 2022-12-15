<!--
Inspiration og hjælp til modal fra https://vuejsexamples.com/build-a-custom-modal-component-in-vue-js/
-->
<template>
  <div class="container">
      <div class="days">
        <section>
          <div class="friday"/>
          <p>Fredag</p>
        </section>
        <section>
          <div class="saturday"/>
          <p>Lørdag</p>
        </section>
      </div>
      <div class="artist-container">
        <artist-card v-for="artist in artists"
                     :key="artist._id"
                     :name="artist.name"
                     :day="artist.playTime.day"
                     :hour="artist.playTime.time.hour"
                     :minute="artist.playTime.time.minute"
                     :location="artist.location"
                     :image="artist.imageUrl"
                     @click="openModal(artist)"
        />
        <artist-modal v-show="showModal" v-if="!modalLoad" @close-modal="closeModal"
                      :artist-name="showArtistObject.name"
                      :artist-img="showArtistObject.imageUrl"
                      :artist-day="showArtistObject.playTime.day"
                      :artist-hour="showArtistObject.playTime.time.hour"
                      :artist-minute="showArtistObject.playTime.time.hour"
                      :location="showArtistObject.location"
                      :description="showArtistObject.description"
        />
        <p v-show="loading">Loading .... </p>
      </div>
  </div>
</template>

<script>
import sanity from "../../client";
import artistCard from "@/components/Artist/ArtistCard";
import artistModal from "@/components/Artist/ArtistModal";
import {toRaw} from "vue";

const query = `*[_type == "artist"]{
  _id,
  name,
  slug,
  playTime,
  location,
  description,
  'imageUrl': image.asset->url
}`;

export default {
  name: "artistContainer",
  components: {
    artistCard,
    artistModal
  },

  data() {
    return {
      loading: true,
      artists: [],
      showModal: false,
      showArtistObject: '',
      modalLoad: true,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.error = this.artists = null;
      await sanity.fetch(query).then(
          (artists) => {
            this.artists = artists;
            this.loading = false
          },
          (error) => {
            this.error = error;
          }
      );
    },
    openModal (artist) {
        this.showArtistObject = toRaw(artist)
      console.log(this.showArtistObject)
        this.modalLoad = false
        this.showModal = true
    },
    closeModal () {
      this.showModal = false
      this.modalLoad = true
    }
  },
}
</script>

<style scoped lang="scss">

.container {
  margin: 0 10%;
  color: white;
}

.days {
  @include flex-row;
  justify-content: flex-start;
  gap: 2rem;
  section {
    @include flex-row;
    align-items: center;
    gap: .5rem;
    p {
      text-transform: uppercase;
      font-size: $text-xs;
    }
    .friday {
      border: 1px solid $neon-green;
      width: 1rem;
      height: 0;
    }
    .saturday {
      border: 1px solid $neon-turquoise;
      width: 1rem;
      height: 0;
    }
  }
}
.artist-container {
  @include flex-row;
  padding: 2rem;
  gap: 2rem;
  justify-content: center;
  border: $neon-green solid 2px;
  border-radius: 20px;
}
</style>