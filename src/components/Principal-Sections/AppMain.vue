<script >
//*Components Importation
import Card from "../Macro-Components/Card.vue";
//*External File Importation
import { store } from "../../Store-Management/store"
//*Export Default
export default {
    components: { Card, },
    data() {
        return {
            name: "Main",
            store: store,
        }
    },
}
</script>





<template>
    <main>
        <!-- Section Image & Card -->
        <div class="container-fluid image-card">
            <div class="row">
                <div class="col-3">
                    <div class="oval">
                        <img src="../../assets/Img/smarttwo.png" alt="">
                    </div>
                </div>
                <div class="col-9">
                    <div class="principalText w-100  ">
                        <div class="w-50 text-center">
                            <p class="pre-title">
                                Our Love For Animation
                            </p>
                            <h2 class="title ">
                                We're StoryTelling
                                Experts Whith Creative Smarts
                            </h2>
                            <p class="caption">
                                Our culture inspires the creative and innovative spirit found throughout our Studio. We
                                breathe life into new ideas !
                            </p>
                        </div>
                    </div>
                    <div class="principalCards  d-flex w-100 p-5 ">
                        <Card divCard="divCard m-3 p-3 text-center " classP="p-2"
                            :style="`background-image: linear-gradient(white, ${card.color}); color: #311852 `"
                            v-for="card in store.animationCards" :key="card" :title="card.title"
                            :paragraph="card.paragraph" :image="`/src/assets/Img/${card.image}`" imgCard="imgCard p-4">
                        </Card>
                        <div class="smart-4">
                            <img class="img-fluid" src="../../assets/Img/smart4.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Section Information -->

        <section class="section-information ">
            <div class="shape">
                <img class="img-fluid" src="../../assets/Img/shape-top.png" alt="">
            </div>
            <div class="container h-100">
                <div class="row justify-content-between align-items-center h-100">
                    <div class="containerImg-Text col-12 text-center text-white pt-5">
                        <h2 class="p-4">Anidio Quick Facts</h2>
                        <img class="globe-1" src="../../assets/Img/globe1.png" alt="">
                    </div>
                    <div v-for="fact in store.facts" :key="fact"
                        class="col-2 singleCard d-flex flex-column justify-content-center align-items-center">
                        <p class="number">{{ fact.number }}</p>
                        <p class="work">{{ fact.work }}</p>
                    </div>
                </div>
            </div>
            <div class="shape-bottom">
                <img class="img-fluid" src="../../assets/Img/shape-bottom.png" alt="">
            </div>
        </section>
    </main>
</template>





<style lang="scss" scoped>
//! --- SASS --- *//
@use "../../assets/Scss/mixin" as*;
@use "../../assets/Scss/variables" as*;

//! --- MAIN --- *//
//* General-Main */
main {
    margin-top: 300px;

}

h2 {
    font-size: 63px;
}

//* Utilities */
/* Colors & Background */
.bck-yellow {
    background-color: $brand_light_yellow;
}

.bck-purple {
    background-color: $brand_light_purples;
}

.bck-pink {
    background-color: $brand_pink;
}

//* Section Image & Cards */
.image-card {
    height: 990px;
}

.oval {
    height: 1200px;
    width: 900px;
    margin-left: -200px;
    margin-top: -100px;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
}

.principalCards {
    height: 50%;
}

.caption {
    font-size: 17px;
}

.divCard {
    height: 450px;
    width: 300px;
    border-radius: 15%;
    border: 1px solid rgb(187, 187, 187);
}

//* Principal-Text */
.principalText {
    height: 30%;

    div.w-50 {
        margin-left: 105px;
    }
}

.pre-title {
    font-weight: bold;
    color: $brand_light_purples;
    font-size: 30px;
}

.title {
    color: $brand_purple;
    font-weight: 900;
}

.smart-4 {
    width: 300px;
    height: 200px;
    margin-top: 350px;
}

//* Section Information */
.shape {
    width: 100%;
    position: absolute;
}

.shape-bottom {
    position: absolute;
    bottom: 0;
}

.col-12.text-center h2 {
    z-index: 1;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.singleCard {
    color: white;
    margin-top: -450px;
    z-index: 1;
    border: 1px solid rgb(179, 179, 179);
    border-radius: 30px;

    .number {
        font-size: 60px;
    }

    .work {
        color: $brand_orange;
    }
}

.containerImg-Text {
    display: flex;
    justify-content: center;
    height: 100%;
}

.globe-1 {
    width: 40%;
    margin-top: -30px;
    height: auto;
    filter: opacity(0.4);
}

.section-information {
    height: 500px;
    background-image: url("../../assets/Img/counter-bg.png");
    position: relative;
    margin-top: 30px;
    margin-bottom: 30px;
}
</style>
