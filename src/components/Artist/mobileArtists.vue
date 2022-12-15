<!--
Dette komponent er lavet med npm package 'Swiper', hvor dokumentationen dertil og demos er brugt som inspiration.
Se mere på: https://swiperjs.com/vue
-->
<!--
Inspiration og hjælp til modal fra https://vuejsexamples.com/build-a-custom-modal-component-in-vue-js/
-->
<template>
  <div class="container">
    <swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :coverflowEffect="{
          rotate: 30,
          scale: .8,
          stretch: 0,
          depth: 90,
          modifier: 1.2,
          slideShadows: true,
        }"
        :modules="modules"
        :navigation="true"
        class="mySwiper"
    >
      <swiper-slide v-for="artist in artists" :key="artist._id">
        <artist-card class="card"
                     :key="artist._id"
                     :item="artist"
                     :name="artist.name"
                     :day="artist.playTime.day"
                     :hour="artist.playTime.time.hour"
                     :minute="artist.playTime.time.minute"
                     :location="artist.location"
                     :image="artist.imageUrl"
                     @click="openModal(artist)"
        ></artist-card>
      </swiper-slide>
    </swiper>
    <artist-modal v-show="showModal" v-if="!modalLoad" @close-modal="closeModal"
                  :artist-name="showArtistObject.name"
                  :artist-img="showArtistObject.imageUrl"
                  :artist-day="showArtistObject.playTime.day"
                  :artist-hour="showArtistObject.playTime.time.hour"
                  :artist-minute="showArtistObject.playTime.time.hour"
                  :location="showArtistObject.location"
                  :description="showArtistObject.description"
    />
  </div>
</template>

<script>
import sanity from "@/client";
import artistCard from "@/components/Artist/ArtistCard";
import artistModal from "@/components/Artist/ArtistModal";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
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
  name: "mobileArtists",
  components: { artistCard, artistModal, Swiper, SwiperSlide },
  data() {
    return {
      artists: [],
      showModal: false,
      showArtistObject: '',
      modalLoad: true,
    };
  },
  created() {
    this.fetchData();
  },
  setup() {
    return {
      modules: [EffectCoverflow, Navigation],
    };
  },
  methods: {
    async fetchData() {
      this.error = this.artists = null;
      await sanity.fetch(query).then(
          (artists) => {
            this.artists = artists;
          },
          (error) => {
            this.error = error;
          }
      );
    },
    openModal (artist) {
      this.showArtistObject = toRaw(artist)
      this.modalLoad = false
      this.showModal = true
    },
    closeModal () {
      this.showModal = false
      this.modalLoad = true
    }
  }

}
</script>

<style scoped lang="scss">
.container{
  height: 20rem;
  border: $neon-green solid 2px;
  border-radius: 20px;
}
.swiper {
  width: 100vw;
  height: 18rem;
  position: relative;
  left: -.55rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  .swiper-slide {
    width: fit-content;
    height: fit-content;
  }

  ::v-deep .swiper-button-next, ::v-deep .swiper-button-prev {
    color: $neon-green;
    top: 66%;
    margin: 1rem;
    overflow: visible;
  }
}
</style>