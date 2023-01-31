<script >
import AppHeader from './components/Principal-Sections/AppHeader.vue';
export default {
  components: { AppHeader, }
}
</script>

<template>
  <!-- -->
  <app-header></app-header>
</template>

<style lang="scss" >
//* --- SASS --- *//
@use "./assets/Scss/mixin" as*;
@use "./assets/Scss/variables" as*;

//* --- GENERAL --- *//
body {
  font-family: 'Roboto', sans-serif;
}

/*Check Operation
p {
  @include center($axis: ""); mixin
  background-color: $brand_orange; variabili
}
*/
</style>
