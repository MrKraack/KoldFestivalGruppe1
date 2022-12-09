<template>
    <div>
        <h4>{{sustainTitle}}</h4>
        <p>{{sustainText}}</p>
    </div>
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

</style>