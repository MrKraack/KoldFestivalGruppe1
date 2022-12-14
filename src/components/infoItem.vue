<template>
    <div>
        <p data-testid="testInfoText">{{infoText}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            infoTitle: String,
            infoText: String
        }
    }
</script>

<style lang="scss" scoped>

</style>