<template>
  <nav class="desktop-navigation">
    <a href="">Artister</a>
    <a href="">Program</a>
    <a href="">Billetter</a>
    <a href="">Om kold</a>
  </nav>
</template>

<script>
export default {
  name: "DesktopNavigation"
}
</script>

<style scoped lang="scss">

  .desktop-navigation {
    background-color: $neon-pink;
    width: 780px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 72px;
    padding: 20px;
    border: 3px solid $neon-pink;
    border-radius: 20px;
    filter: drop-shadow(0px 0px 3px $neon-pink);
    a {
      font-size: $text-large;
      text-transform: uppercase;
      color: white;
    }
  }

</style>