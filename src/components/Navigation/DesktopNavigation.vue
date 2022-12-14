<template>
  <nav class="desktop-navigation">
    <a href="#artister">Artister</a>
    <a href="#program">Program</a>
    <a href="#biletter">Billetter</a>
    <a href="#om-kold">Om kold</a>
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
      position: relative;
      &:after {
        content: "";
        position: absolute;
        display: block;
        height: 70px;
        width: 100%;
        transform: translateY(-67%);
        left: 0;
        background-color: transparent;
      }
      &:before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 2px;
        bottom: -3px;
        left: 0;
        background-color: white;
        transform: scaleX(0);
        transition: transform 0.3s ease;
      }
      &:hover::before {
        transform: scaleX(1);
      }
    }
  }

</style>