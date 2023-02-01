<script>
export default {
    data() {
        return {
            name: "Card"
        }
    }, props: {
        divJumbotron: String,
        imgJumbotron: String,
        image: String,
    }
}
</script>




<template>

    <div :class="divJumbotron">
        <img :class="imgJumbotron" :src="image" alt="">
    </div>

</template>




<style>

</style>