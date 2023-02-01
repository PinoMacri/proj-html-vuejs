<script >
//*Components Importation
import AppHeader from './components/Principal-Sections/AppHeader.vue';
import AppMain from './components/Principal-Sections/AppMain.vue'
//*Export Default
export default {
  components: { AppHeader, AppMain }
}
</script>





<template>
  <!-- HEADER -->
  <app-header></app-header>
  <!-- MAIN -->
  <app-main></app-main>
</template>





<style lang="scss" >
//* --- GENERAL --- *//
body {
  font-family: 'Itim', cursive;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

p {
  font-size: 20px;
}
</style>
