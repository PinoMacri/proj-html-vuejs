<script>
//*Components Importation
import Logo from "../Micro-Components/Logo.vue"
import AppJumbotron from "../Macro-Components/AppJumbotron.vue";
import Button from "../Micro-Components/Button.vue";
import Navbar from "../Micro-Components/Navbar.vue"
//*External File Importation
import { store } from "../../Store-Management/store"

/*------------*/
export default {
    components: { AppJumbotron, Button, Navbar, Logo },
    data() {
        return {
            name: "AppHeader",
            store: store,
        }
    }
}

</script>





<template>

    <Logo></Logo>
    <Navbar></Navbar>
    <Button></Button>
    <app-jumbotron></app-jumbotron>

</template>





<style lang="scss" scoped>
//* --- SASS --- *//
@use "../../assets/Scss/mixin" as*;
@use "../../assets/Scss/variables" as*;
</style>