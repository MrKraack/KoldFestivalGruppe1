<template>
    <div class="line"></div>
        <h4>{{sustainTitle}}</h4>
        <p>{{sustainText}}</p>
</template>

<script>
    export default {
        props: {
            sustainTitle: String,
            sustainText: String
        },
    }
</script>

<style lang="scss" scoped>
.line {
    background-color: red;
    height: 1px;
    width: 50px;
}
</style>