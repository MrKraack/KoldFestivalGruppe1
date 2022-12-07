<template>
    <div class="faq-item">
        <p class="title">{{title}}</p>
        <p>{{beskrivelse}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            beskrivelse: String
        }
    }
</script>

<style lang="scss" scoped>
    .faq-item {
        .title {
            color:red;
        }
    }
</style>