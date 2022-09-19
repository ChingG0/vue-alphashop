<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/reset.scss';

body {
  background-color: var(--body-color);
  transition: 0.4s;
}
#app{
  height: 100%;
}
</style>