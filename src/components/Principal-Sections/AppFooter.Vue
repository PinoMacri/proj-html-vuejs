<script>
//*Components Importation
import AppLogo from "../Micro-Components/AppLogo.vue";
import Button from "../Micro-Components/Button.vue";
import Navbar from "../Micro-Components/Navbar.vue";
//*External File Importation
import { store } from "../../Store-Management/store"
import { secondMenu } from "../../Menu/menu"
export default {
    components: { AppLogo, Navbar, Button },
    data() {
        return {
            name: "AppFooter",
            store: store,
            menu: secondMenu,
        }
    },
}

</script>

<template>
    <footer>
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
                        personalizationA="text-black black m-3">
                    </Navbar>
                </div>
            </div>
            <hr class="w-100">


            <div class="d-flex justify-content-between align-items-center p-4">
                <p class="m-0 d-flex align-items-center">Copyright 2022 <a href="#"> Softvirus</a>. All rights reserved
                </p>
                <div class="d-flex  align-items-center">
                    <i class='fa-brands fa-facebook'></i>
                    <i class='fa-brands fa-square-twitter'></i>
                    <i class='fa-brands fa-instagram'></i>

                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use "../../assets/Scss/variables" as*;

.black {
    color: black;
}

i {
    color: $brand_light_purples;
    font-size: 40px;
    margin: 10px;
    cursor: pointer;
}
</style>