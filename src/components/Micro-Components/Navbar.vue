<script>
import { stringifyExpression } from '@vue/compiler-core';

export default {
    data() {
        return {
            name: "List",
        }
    }, props: {
        links: Array,
        display: String,
        color_A: String,
        padding_A: String,
        padding_NAV: String,
        margin_NAV: String,
        margin_A: String,
    }
}

</script>




<template>

    <nav :style="` padding: ${padding_NAV}; margin: ${margin_NAV}; display:${display} `">
        <ul :style="` display: ${display}; `">
            <li v-for="link in links" :key="link">
                <a :style="`color:${color_A}; padding: ${padding_A}; margin: ${margin_A} `" href="#">{{ link }}</a>
            </li>
        </ul>
    </nav>

</template>




<style lang="scss" scoped>
ul {
    margin: 0;
}
</style>