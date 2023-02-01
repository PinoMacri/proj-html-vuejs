<script>
import { stringifyExpression } from '@vue/compiler-core';

export default {
    data() {
        return {
            name: "List",
        }
    }, props: {
        links: Array,
        personalizationNav: String,
        personalizationUL: String,
        personalizationA: String,
    }
}

</script>




<template>

    <nav :class="personalizationNav">
        <ul :class="personalizationUL">
            <li v-for="link in links" :key="link">
                <a :class="personalizationA" href="#">{{ link }}</a>
            </li>
        </ul>
    </nav>

</template>




<style lang="scss" scoped>
ul {
    margin: 0;
}
</style>