<script>
export default {
    data() {
        return {
            name: "Card"
        }
    }, props: {
        divCard: String,
        divCards: String,
        imgCard: String,
        imgCards: String,
        image: String,
        title: String,
        paragraph: String,
        classP: String,
        classTitle: String,
        number: String,
        options: Array,
        ulClass: String,
        liClass: String,
    }
}
</script>




<template>


    <div :class="divCard">
        <img :class="imgCard" :src="image" class="img-fluid" alt="">
        <h3 v-if="title" :class="classTitle">{{ title }}</h3>
        <p v-if="paragraph" :class="classP"> {{ paragraph }}</p>
        <p v-if="number">{{ number }}</p>
        <ul v-if="options" :class="ulClass">
            <li v-for="option in options" :class="liClass" :key="option" v-html="option"></li>
        </ul>
    </div>


</template>




<style lang="scss">

</style>