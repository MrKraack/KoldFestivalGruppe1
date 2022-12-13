<template>
  <button @click="toggleActive" :class="{ 'hamburger--active': active }" class="hamburger">
        <span class="hamburger__box">
          <span class="hamburger__inner"></span>
        </span>
  </button>
</template>

<script>
export default {
  name: "HamburgerMenu",
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  methods: {
    toggleActive () {
      this.$emit('toggle-menu')
    }
  }
 }
</script>

<style lang="scss" scoped>
.hamburger {
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;
}

.hamburger,
.navigation {
  transition: transform 0.2s ease-in-out;
}

.hamburger--active {
  transform: translateX(-120px) translateY(5px);
}

.hamburger__box {
  width: 50px;
  height: 30px;
  display: inline-block;
  position: relative;
  background-color: $neon-pink;
  border: 3px solid $neon-pink;
  border-radius: 10px 0 0 10px;
  filter: drop-shadow(0px 0px 3px $neon-pink);
}



.hamburger__inner {
  width: 23px;
  height: 2px;
  background-color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  transition: background-color 0.1s 0.2s ease-in-out;

}

.hamburger__inner::before,
.hamburger__inner::after {
  content: "";
  left: 0;
  width: 23px;
  height: 2px;
  background-color: white;
  position: absolute;
  transition: transform 0.2s 0.2s ease-in-out;
}

.hamburger__inner::before {
  top: -10px;
}

.hamburger__inner::after {
  top: 10px;
}

.hamburger--active .hamburger__inner {
  background-color: transparent;
}

.hamburger--active .hamburger__inner::before {
  transform: translateY(10px) rotate(45deg);
}

.hamburger--active .hamburger__inner::after {
  transform: translateY(-10px) rotate(-45deg);
}

@media screen and (min-width: $screen-tablet-vertical) and (max-width: $screen-tablet-horizontal) {
  .hamburger__box {
    margin-right: 50px;
    width: 90px;
    height: 60px;
    border-radius: 20px;
  }
  .hamburger__inner, .hamburger__inner::before,
  .hamburger__inner::after {
    width: 39px;
  }
  .hamburger__inner::before,
   {
    top: -16px
  }
  .hamburger__inner::after {
    top: 16px
  }
  .hamburger--active .hamburger__inner::before {
    transform: translateY(16px) rotate(45deg)
  }
  .hamburger--active .hamburger__inner::after {
    transform: translateY(-16px) rotate(-45deg)
  }
}
</style>