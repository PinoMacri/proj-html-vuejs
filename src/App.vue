<script >
//*Components Importation
import AppHeader from './components/Principal-Sections/AppHeader.vue';
import AppMain from './components/Principal-Sections/AppMain.vue'
import AppFooter from './components/Principal-Sections/AppFooter.vue'
//*Export Default
export default {
  components: { AppHeader, AppMain, AppFooter }
}
</script>





<template>
  <!-- HEADER -->
  <app-header></app-header>
  <!-- MAIN -->
  <app-main></app-main>
  <!-- FOOTER -->
  <app-footer></app-footer>
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

  &:hover {
    text-shadow: 1px 1px 2px rgb(255, 255, 255), 0 0 1em blue, 0 0 0.2em red;
  }

}

p {
  font-size: 20px;
}

button:hover {
  text-shadow: 1px 1px 2px rgb(255, 255, 255), 0 0 1em blue, 0 0 0.2em red;
  transform: scale(1.2);
}
</style>
