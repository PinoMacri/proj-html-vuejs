<script>

export default {
    data() {
        return {
            name: "Button"
        }
    }, props: {
        nameButton: String,
    }
}

</script>




<template>

    <button class="px-4">{{ nameButton }}</button>

</template>




<style scoped>
button {
    border-radius: 30px;
    border: none;
}
</style>