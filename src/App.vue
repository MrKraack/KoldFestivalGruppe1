<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/artist">Artist</router-link> |
    <router-link to="/program-oversigt">Program Oversigt</router-link> |
    <router-link to="/billet-typer">Billet Typer</router-link>
    <router-link to="/festival-info">Festival Info</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
