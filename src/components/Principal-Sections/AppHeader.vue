<script>
//*Components Importation
import AppLogo from "../Micro-Components/AppLogo.vue"
import AppJumbotron from "../Macro-Components/AppJumbotron.vue";
import Button from "../Micro-Components/Button.vue";
import Navbar from "../Micro-Components/Navbar.vue"
//*External File Importation
import { store } from "../../Store-Management/store"
import { headerMenu } from "../../Header-Menu/header-menu"
import { buttonNavHeader } from "../../Header-Menu/header-menu"
//*Export Default
export default {
    components: { AppLogo, Navbar, Button, AppJumbotron },
    data() {
        return {
            name: "AppHeader",
            store: store,
            headerMenu: headerMenu,
            buttonNavHeader: buttonNavHeader,

        }
    },
}
</script>





<template>

    <header>
        <div class="container">
            <div class="row logo-navbar py-3">
                <div class="col-3 logo">
                    <app-logo></app-logo>
                </div>
                <div class="col-9 nav-bar d-flex align-items-center justify-content-end ">
                    <Navbar :links="headerMenu" display="flex" color_A="white" margin_A="10px"></Navbar>
                    <Button :nameButton="buttonNavHeader"></Button>
                </div>
            </div>
        </div>


        <app-jumbotron></app-jumbotron>
        <div class="shape-bottom">
            <img src="../../assets/Img/bottom-shape.png" alt="">
        </div>
    </header>

</template>





<style lang="scss" scoped>
//! --- SASS --- *//
@use "../../assets/Scss/mixin" as*;
@use "../../assets/Scss/variables" as*;

//* --- HEADER --- *//
/* General-Header */
header {
    background-image: url("../../assets/Img/preloader.png");
    height: 700px;
    position: relative;
}




/* Shape */
.shape-bottom {
    position: absolute;
    bottom: 0;

    img {
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
}
</style>