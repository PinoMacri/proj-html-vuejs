<script>
//*Components Importation
import AppLogo from "../Micro-Components/AppLogo.vue"
import Card from "../Macro-Components/Card.vue";
import Button from "../Micro-Components/Button.vue";
import Navbar from "../Micro-Components/Navbar.vue"
//*External File Importation
import { store } from "../../Store-Management/store"
import { menu } from "../../Menu/menu"
//*Export Default
export default {
    components: { AppLogo, Navbar, Button, Card },
    data() {
        return {
            name: "AppHeader",
            store: store,
            menu: menu,
        }
    },
}
</script>





<template>
    <!-- HEADER -->
    <header>
        <!-- CONTAINER LOGO & NAV-BAR -->
        <div class="container">
            <!-- BRAND LOGO -->
            <div class="row logo-navbar py-3">
                <div class="col-3 logo">
                    <app-logo></app-logo>
                </div>
                <!-- NAV-BAR -->
                <div class="col-9 nav-bar d-flex align-items-center justify-content-end ">
                    <Navbar :links="menu" personalizationNav="m-3 d-flex" personalizationUL="d-flex"
                        personalizationA="text-white m-3"></Navbar>
                    <Button nameButton="Get a Quote" personalization="btn-type bck-pink mx-2"></Button>
                </div>
            </div>
            <!-- PLANET IMAGES -->
            <div class="row dots ">
                <div class="col-3 dots-global-start position-absolute mt-3">
                    <img src="../../assets/Img/globe1.png" alt="">
                </div>
                <div class="col-3 dots-global-center-1 position-absolute">
                    <img class="dots-left" src="../../assets/Img/globe3.png" alt="">
                </div>
                <div class="col-3 dots-global-center-2 position-absolute">
                    <img class="dots-left" src="../../assets/Img/globe2.png" alt="">
                </div>
                <div class="col-3 dots-global-end d-flex justify-content-end position-absolute ">
                    <img class="dots-left" src="../../assets/Img/light.png" alt="">
                </div>
            </div>
        </div>
        <!-- CONTAINER LATERAL IMAGE AND CENTER TEXT -->
        <div class="container-fluid">
            <!-- LATERAL IMAGE AND CENTER TEXT -->
            <div class="row">
                <div class="col-6 left">
                    <img src="../../assets/Img/left-man.png" alt="">
                </div>
                <div class="col-6 position-absolute central-absolute text-white text-center ">
                    <div class="text ">
                        <p class="color-orange ">Imagine, Create, Experience</p>
                        <h1 class="text-center display-1">We Animate</h1>
                        <h2 class="h1 display-2">With Ninja-Like Precision</h2>
                        <p>We are a character-driven animation studio striving to make high-quality animations.</p>
                    </div>
                    <div class="buttons d-flex justify-content-center my-3 p-3">
                        <Button nameButton="Start a Project" personalization="btn-type bck-pink mx-2"></Button>
                        <Button nameButton="Portfolio" personalization="btn-type bck-transparent text-white "></Button>
                    </div>
                </div>
                <div class="col-6 right d-flex justify-content-end">
                    <img src="../../assets/Img/right-man.png" alt="">
                </div>
            </div>
        </div>
        <!-- HEADER CARD -->
        <div class="container-fluid headerCard  position-relative ">
            <Card divJumbotron="cardJumbotron position-absolute" image="/src/assets/Img/middle.png"></Card>
            <div class="playCircle position-absolute d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-play"></i>
            </div>
        </div>
        <!-- FINISH DECORATION SHAPE HEADER -->
        <div class="shape-bottom">
            <img src="../../assets/Img/bottom-shape.png" alt="">
        </div>
    </header>
</template>





<style lang="scss" scoped>
//! --- SASS --- *//
@use "../../assets/Scss/mixin" as*;
@use "../../assets/Scss/variables" as*;

//! --- HEADER --- *//
//* General-Header */
header {
    background-image: url("../../assets/Img/preloader.png");
    height: 810px;
    position: relative;
}

//* Utilities */
/* Colors & Backgrounds */
.bck-pink {
    background-color: $brand_pink;
}

.bck-transparent {
    background-color: transparent;
}

.color-orange {
    color: $brand_orange;
}

/* Buttons Style */
.btn-type {
    border: 1px solid white;
    box-shadow: 0px 0px 2px 1px $brand_pink;
    padding: 5px 30px;
}

//* Nav-Bar */
div.nav-bar {
    z-index: 1;
}

//* Planet-Images */
.dots-global-center-1 {
    top: -250px;
    left: 50%;
    transform: translate(-50%);
}

.dots-global-center-2 {
    left: 60%;
    top: 150px;
}

.dots-global-end {
    left: 60%;
    top: 60px;
}

.col-6.left {
    background-image: url("../../assets/img/dots-left.png");
}

.col-6.central-absolute {
    top: 150px;
    left: 50%;
    transform: translate(-50%);
}

.col-6.right {
    background-image: url("../../assets/Img/dots-right.png");
}

//* Header Card */
.headerCard {
    top: -90px;

    height: 511px;
    z-index: 1;

    .cardJumbotron {
        left: 50%;
        top: 0px;
        transform: translate(-50%);
        position: absolute;
        text-align: center;
        z-index: 1;
    }

    .playCircle {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        border: none;
        z-index: 1;
        left: 50%;
        transform: translateX(-50%);
        top: 50%;
        margin-top: -40px;

        background-image: url("../../assets/Img/globe3.png");
        background-size: 100%;

        &:hover {
            cursor: pointer;
        }

        i {
            color: white;
            font-size: 30px;
        }
    }
}

//* Header Decoration Shape */
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