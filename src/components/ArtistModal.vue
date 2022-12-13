<!--
Inspiration og hjælp fra https://vuejsexamples.com/build-a-custom-modal-component-in-vue-js/
-->
<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <section class="modal-header">
          <img :src="artistImg" alt="artist image" class="artistImg">
          <section class="headers">
            <h3>{{artistName}}</h3>
            <p>{{ artistDay }} kl. {{ artistHour }}:{{ artistMinute }}</p>
            <section class="location">
              <img src="../assets/location.png">
              <p> {{ location }}</p>
            </section>
          </section>

          <div class="close" @click="$emit('close-modal')">
            <img src="../assets/close.png">
          </div>
      </section>
      <section class="modal-body">
        <p>{{ description }}</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArtistModal",
  props: {
    artistImg: String,
    artistName: String,
    artistDay: String,
    artistHour: String,
    artistMinute: String,
    location: String,
    description: String,
    video: String,
  }
}
</script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000da;
  .modal {
    background-color: $bg-color;
    height: fit-content;
    width: 50rem;
    padding: 2rem;
    border-radius: 20px;
    border: $neon-green 1px solid;
    box-shadow: 0 0 .5rem $neon-green;
    .modal-header{
      @include flex-row;
      justify-content: space-between;
      align-items: flex-start;
      text-transform: uppercase;
      .artistImg {
        height: 7rem;
        width: 7rem;
        object-fit: cover;
        border: $neon-green 1px solid;
        box-shadow: 0 0 .5rem $neon-green;
        border-radius: 20px;
      }
      .headers {
        @include flex-column;
        gap: .5rem;
        align-items: center;
        h3 {
          text-align: center;
          font-size: $text-large;
          margin: 0;
          color: $bg-color;
          text-shadow: 0 0 5px #fff,
          0 0 10px #fff,
          0 0 15px $neon-green,
          0 0 20px $neon-green,
        }
        p {
          font-size: $text-xs;
          color: white;
          margin: 0;
        }
        .location {
          @include flex-row;
          gap: .5rem;
          align-items: baseline;
          justify-content: center;
          img {
            height: .7rem;
            width: auto;
          }
        }
      }
    }
    .modal-body {
      color: white;
      margin-top: 2rem;
    }
  }
  .close {
    cursor: pointer;
    img{
      height: 1rem;
      width: auto;
    }
  }
}
$screen-tablet-horizontal: 1194px;
@media screen and (max-width: $screen-tablet-horizontal) {
  .modal {
    width: 50rem !important;
  }
}

$screen-tablet-vertical: 834px;
@media screen and (max-width: $screen-tablet-vertical) {
  .modal {
    width: 40rem !important;
  }
}

$screen-mobile: 390px;
@media screen and (max-width: $screen-mobile) {
  .modal {
    max-width: 76vw !important;
    .artistImg {
      height: 5rem !important;
      width: 5rem !important;
    }
    .headers {
      h3 {
        max-width: 10ch;
      }
    }
  }
}

</style>