<script>

export default {
    data() {
        return {
            name: "Button",
        }
    }, props: {
        nameButton: String,
        personalization: String,
    }, emit: ["button-clicked"]
}

</script>




<template>

    <button @click="$emit('button-clicked')" :class="personalization" v-html="nameButton"></button>

</template>




<style scoped>
button {
    border-radius: 30px;
    border: none;
}
</style>