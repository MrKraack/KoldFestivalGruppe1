<template>
  <div class="artist-card"
       :style="{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url('+ image +')'}"
  >
    <section class="text-wrapper" :class="borderColor">
        <h3>{{ name }}</h3>
        <p>{{ day }} kl. {{ hour }}:{{ minute }}</p>
      <section class="location">
        <img src="../assets/location.png">
        <p> {{ location }}</p>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "artistCard",
  props: {
    name: String,
    day: String,
    hour: String,
    minute: String,
    location: String,
    image: String ,
  },
  computed: {
    borderColor(){
      return this.day === 'Fredag' ? 'greenBorder' : 'blueBorder'
    }
  }
}
</script>

<style scoped lang="scss">
.artist-card {
  padding: 1rem;
  width: fit-content;
  text-transform: uppercase;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  transition: transform .3s ease-in-out;
  h3 {
    font-size: $text-large;
    margin-bottom: 0;
  }
  p {
    font-size: $text-xs;
    margin: 0;
    color: white;
  }
  &:hover {
    transform: scale(1.15);
  }
  .greenBorder{
    border: $neon-green 1px solid;
    h3 {
      color: $neon-green;
    }
  }
  .blueBorder{
    border: $neon-turquoise 1px solid;
    h3 {
      color: $neon-turquoise;
    }
  }
  .text-wrapper {
    @include flex-column;
    align-items: flex-start;
    justify-content: end;
    gap: .5rem;
    height: 9rem;
    width: 9rem;
    border-radius: 20px;
    padding: 0 1rem 1.5rem 1rem;
    .location {
      @include flex-row;
      gap: .5rem;
      align-items: baseline;
      img {
        height: .5rem;
        width: auto;
      }
  }
  }
}
</style>