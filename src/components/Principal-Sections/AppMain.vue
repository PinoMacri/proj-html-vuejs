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
            currentIndex: 0,
            index: 0,
            inputText: "",
        }
    }, methods: {
        buttonClickedPrev() {
            this.currentIndex--
            if (this.currentIndex < 0) {
                this.currentIndex = store.productions.length - 1
            }
        }, buttonClickedNext() {
            this.currentIndex++
            if (this.currentIndex === store.productions.length) {
                this.currentIndex = 0
            }
        }, buttonClickPrevOpacity() {
            this.index--
            if (this.index < 0) {
                this.index = store.members.length - 1
            }
        }, buttonClickNextOpacity() {
            this.index++
            if (this.index === store.members.length) {
                this.index = 0
            }
        },
    }

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
        <!-- Section Cards -->
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center mb-5">
                        <p class="pre-title">Our Works</p>
                        <h2 class="title">Featured Productions</h2>
                        <p class="caption productions">Here's just a small sample of some of those projects that we're
                            quite proud
                            of.
                            If you're
                            lookinh for something specific feel free to get in contact whith us.</p>
                    </div>
                </div>
                <div class="row justify-content-between">

                    <Card v-for="productionImage in store.productionImages"
                        :image="`src/assets/img/${productionImage} `" divCard="col-3 flex-wrap d-flex  divCards">
                    </Card>

                </div>
                <div class="text-center">
                    <Button nameButton="See Our Work" personalization="styleButton"></Button>
                </div>
            </div>
        </section>
        <!-- Section Image & Card -->
        <div class="container-fluid image-card secondMargin">
            <div class="row">
                <div class="col-3">
                    <div class="circle">
                        <img src="../../assets/Img/process-thumb.png" alt="">
                    </div>
                </div>
                <div class="col-9">
                    <div class="principalText w-100  ">
                        <div class="w-50 ">
                            <p class="pre-title">
                                Our Process
                            </p>
                            <h2 class="title ">
                                Our Process for Your Animation Production
                            </h2>
                            <p class="caption">
                                We have an effective process for working on animation
                            </p>
                        </div>
                    </div>
                    <div class="principalCards  d-flex justify-content-center w-100 p-3 ">
                        <Card :divCard="i === currentIndex ? 'd-block divCard text-center p-4' : 'd-none'" classP="p-2"
                            v-for="(production, i) in store.productions" :key="i" :title="production.title"
                            :paragraph="production.text" :image="`/src/assets/Img/${production.image}`"
                            imgCard="imgCard p-4" :number="production.number">
                        </Card>
                        <div class="smart-4">
                            <img class="img-fluid" src="../../assets/Img/smart4.png" alt="">
                        </div>
                    </div>

                </div>
            </div>
            <div class="button-arrows text-center ">
                <Button @button-clicked="buttonClickedPrev" nameButton="<i class='fa-solid fa-circle-left'></i>"
                    personalization="bg-white styleArrows"></Button>
                <Button @button-clicked="buttonClickedNext" nameButton="<i class='fa-solid fa-circle-right'></i>"
                    personalization="bg-white styleArrows"></Button>
            </div>
        </div>
        <!-- Section Members -->
        <section class="section-member">
            <div class="d-flex shapePink">
                <img src="../../assets/Img/shape.png" alt="">
                <img src="../../assets/Img/shape2.png" alt="">
            </div>
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-12 d-flex flex-column align-items-center">
                        <p class="pre-title title-member">Anidio Magic Team Member</p>
                        <h2 class="title title-animate">
                            Let Us Animate Your Project
                        </h2>
                        <p class="caption caption-member">We create new worlds! Let's collaborate and create engaging,
                            effective, award-winning
                            animations</p>
                    </div>
                    <Card v-for="(member, i) in store.members" :key="i" :paragraph="member.role" :options=store.socials
                        :divCard="i === index ? 'col-2 member opacity' : 'noOpacity col-2 member'"
                        :image="`/src/assets/Img/${member.image}`" :title="member.name" classTitle="pt-3"
                        ulClass="d-flex justify-content-center" liClass="m-2 h2 text-primary">
                    </Card>
                </div>
            </div>
            <div class="mt-5 text-center d-flex justify-content-center align-items-center">
                <Button @button-clicked="buttonClickPrevOpacity" nameButton="<i class='fa-solid fa-circle-left'></i>"
                    personalization="bg-white styleArrows me-5"></Button>
                <ul class="d-flex">
                    <li v-for="(circle, i) in store.circles" :key="i" v-html="circle"
                        :class="i === index ? 'p-2 orange' : 'p-2 black'"></li>
                </ul>
                <Button @button-clicked="buttonClickNextOpacity" nameButton="<i class='fa-solid fa-circle-right'></i>"
                    personalization="bg-white styleArrows me-5"></Button>
            </div>
            <!-- Section Clients -->
            <section class="section-clients ">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center information">
                            <p class="pre-title">Why Anidio studio?</p>
                            <h2 class="title p-1">We Love Our Clients</h2>
                            <p class="caption productions p-3">
                                We are trusted throughout adland and have a wealth of recommendations from start-ups to
                                renowned global brands
                            </p>
                            <ul class="d-flex justify-content-between">
                                <li v-for="sponsor in store.sponsors" :key="sponsor">
                                    <img :src="`src/assets/img/${sponsor} `" alt="">
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Section Information -->
            <section class="section-information mt-5">
                <div class="shape">
                    <img class="img-fluid" src="../../assets/Img/shape-top.png" alt="">
                </div>
                <div class="container h-100">
                    <div class="row justify-content-between align-items-center h-100">
                        <div
                            class="containerImg-Text col-12 text-center d-flex flex-column align-items-center justify-content-start text-white pt-5">
                            <p class="pre-title orange">We Create New Worlds!</p>
                            <h2 class="p-5 mb-5">Quant Tips On Your Storytelling?</h2>
                            <p class="caption storytelling">Join our newsletter for tips on how to elevate your brand
                                through
                                storytelling</p>
                            <div>
                                <input class="mt-5" type="text" v-model.trim="inputText" placeholder="Enter your email">
                                <Button personalization="ml" v-text="'Submit'"></Button>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="shape-bottom">
                    <img class="img-fluid" src="../../assets/Img/shape-bottom.png" alt="">
                </div>
            </section>
        </section>
    </main>
</template>


.


<style lang="scss"  >
//! --- SASS --- *//
@use "../../assets/Scss/mixin" as*;
@use "../../assets/Scss/variables" as*;

.information {
    margin-top: 100px;
}

.ml {
    margin-left: 830px;
    position: absolute;
    left: 420px;
    bottom: 94px;
    padding: 6px 20px;
    background-color: $brand_pink;

}

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

.black {
    color: black;
}

.orange {
    color: orangered;
}

/* Styles Buttons */
.styleButtons {
    padding: 10px 30px;

}

.styleArrows {
    font-size: 40px;
    margin-left: 90px;
    margin-top: -50px;
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
    margin-left: 100px;
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

.pre-title.orange {
    color: orangered;
}

.caption.storytelling {
    margin-top: 165px;
}

input.mt-5 {
    border-radius: 20px;
    padding: 10px 0px;
    width: 800px;
}

input::placeholder {
    padding-left: 20px;
}

//* Section Cards */

.divCards {
    height: 200px;
    width: 650px;
    border-radius: 15%;
    margin-bottom: 210px;

}

.caption.productions {
    margin-top: 100px;
}

.styleButton {
    padding: 20px;
    color: $brand_purple;
}

//* Section Image & Cards */
.secondMargin {
    margin-top: 80px;
}

.circle {
    height: 800px;
    width: 800px;
    margin-left: -300px;

    img {
        height: 100%;
        width: 100%;
    }
}

.button-arrows {
    margin-left: -1px;
}

.section-member {
    margin-top: 100px;
}

.opacity {
    opacity: 1;
}

.caption-member {
    margin-bottom: 300px;
    margin-top: -300px;
    padding: 20px;
}

.title-animate {
    margin-bottom: 300px;
    margin-top: -320px;
    padding: 20px;
}

.title-member {
    margin-bottom: 300px;
    margin-top: -120px;
    padding: 20px;
}

.shapePink {
    width: 100%;
    position: absolute;
    margin-top: -350px;

    z-index: -1;

    img {
        width: 100%;
    }
}

.noOpacity {
    opacity: 0.3;
}

li.text-primary {
    cursor: pointer;
}

.member {
    background-color: $brand_light_yellow;
    text-align: center;
    height: 300px;
    width: 300px;
    border-radius: 20px;


    img {
        margin-top: -100px;
    }
}

//* Section Members */
</style>
