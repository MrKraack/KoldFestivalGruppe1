<template>
  <nav class="mobile-navigation" :class="active ? 'mobile-navigation--visible' : 'mobile-navigation--hidden'">
    <a href="">here</a>
  </nav>
</template>

<script>
export default {
  name: "MobileNavigation",
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">

  .mobile-navigation {
    width: 180px;
    height: 530px;
    background-color: $neon-pink;
    border: 3px solid $neon-pink;
    border-radius: 0px 10px 10px 0px;
    filter: drop-shadow(0px 0px 3px $neon-pink);

  &--visible {
    transform: translateX(0);
    transition: transform 0.1s ease-in;
  }

  &--hidden {
    transform: translateX(100%);
    transition: transform 0.1s ease-out;
  }
  }

</style>