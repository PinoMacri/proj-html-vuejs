<script >

//*Components Importation
import AppHeader from './components/Principal-Sections/AppHeader.vue';
//*Export Default
export default {
  components: { AppHeader, }
}

</script>





<template>

  <!-- HEADER -->
  <app-header></app-header>

</template>





<style lang="scss" >
//* --- GENERAL --- *//
body {
  font-family: 'Roboto', sans-serif;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

/*Check Operation
p {
  @include center($axis: ""); mixin
  background-color: $brand_orange; variabili
}
*/
</style>
