<script>
//*Components Importation
import AppJumbotron from "../Macro-Components/AppJumbotron.vue";
import Button from "../Micro-Components/Button.vue";
import Navbar from "../Micro-Components/Navbar.vue"

/*------------*/
export default {
    components: { AppJumbotron, Button, Navbar },
    data() {
        return {
            name: "AppHeader"
        }
    }
}

</script>





<template>

    <Navbar></Navbar>
    <Button></Button>
    <app-jumbotron></app-jumbotron>

</template>





<style lang="scss" scoped>
//* --- SASS --- *//
@use "../../assets/Scss/mixin" as*;
@use "../../assets/Scss/variables" as*;
</style>