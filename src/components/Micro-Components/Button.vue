<script>

export default {
    data() {
        return {
            name: "Button"
        }
    }, props: {
        nameButton: String,
        personalization: String,
    }
}

</script>




<template>

    <button :class="personalization">{{ nameButton }}</button>

</template>




<style scoped>
button {
    border-radius: 30px;
    border: none;
}
</style>