<script>
export default {
    data() {
        return {
            name: "Card"
        }
    }, props: {
        divCard: String,
        imgCard: String,
        image: String,
        title: String,
        paragraph: String,
        classP: String,
        classTitle: String,
    }
}
</script>




<template>


    <div :class="divCard">
        <img :class="imgCard" :src="image" alt="">
        <h3 v-if="title" :class="classTitle">{{ title }}</h3>
        <p v-if="paragraph" :class="classP"> {{ paragraph }}</p>
    </div>


</template>




<style lang="scss">

</style>