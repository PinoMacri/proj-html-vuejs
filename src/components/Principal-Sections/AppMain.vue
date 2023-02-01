<script >
//*Components Importation
import Card from "../Macro-Components/Card.vue";
import Button from "../Micro-Components/Button.vue";
//*External File Importation
import { store } from "../../Store-Management/store"
//*Export Default
export default {
    components: { Card, Button },
    data() {
        return {
            name: "Main",
            store: store,
            color: "red",
        }
    },
}
</script>





<template>
    <main>
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
                            <h2 class="title">
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
                        <Card divCard="divCard m-3 p-3 text-center " :classP="'p-2 '"
                            :style="`background-image: linear-gradient(white, ${card.color}); color: #311852 `"
                            v-for="card in store.animationCards" :key="card" :title="card.title"
                            :paragraph="card.paragraph" :image="`/src/assets/Img/${card.image}`" imgCard="p-4">
                        </Card>

                    </div>

                </div>
            </div>
        </div>
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

//* Principal-Text */
.principalText {
    height: 30%;
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

//* Section Image & Cards */
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
</style>
