<template>

        <h4>{{sustainTitle}}</h4>
        <div v-if="haveImages" class="affald-ikon">
            <!-- Tilføjelse af affaldsikoner -->
            <!-- Div rund om hvert billede for at lave neon kasser der passer med hver størrelse + tilføjelse af css bliver lettere.
            Ved godt at der er mange div, men kan ikke finde bedre metoder der virker -->
            <div class="img-wrapper1">
                <div class="img-container">
                <img src="../assets/affaldsikoner/glas.png" alt="glas-billede">
                <p>Glas</p>
                </div>
                <div class="img-container">
                <img src="../assets/affaldsikoner/plast.png" alt="plat-billede">
                <p>Plast</p>
                </div>
                <div class="img-container">
                <img src="../assets/affaldsikoner/metal.png" alt="metal-billede">
                <p>Metal</p>
                </div>
            </div>
            <div class="img-wrapper2">
                <div class="img-container">
                <img src="../assets/affaldsikoner/madaffald.png" alt="madaffald-billede">
                <p>Madaffald</p>
                </div>
                <div class="img-container">
                <img src="../assets/affaldsikoner/restaffald.png" alt="restaffald-billede">
                <p>Restaffald</p>
                </div>
            </div>
        </div>
        <p>{{sustainText}}</p>
        
</template>

<script>
    export default {
        props: {
            sustainTitle: String,
            sustainText: String,
            haveImages: Boolean,
            haveLine: Boolean
        },
    }
</script>

<style lang="scss" scoped>
.line { //bruges senere
    background-color: $neon-turquoise;
    height: 1px;
    width: 100%;
}

.img-wrapper1 {
    display: flex;
    gap: 14px;
}

.img-wrapper2 {
    display: flex;
    gap: 14px;
}

.affald-ikon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 34px;
}
.affald-ikon img {
    height: 87px;
    width: auto;
    
}

.img-container {
    height: 87px;
    width: 87px;
    border: 1px solid $neon-turquoise;
    border-radius: 10px;
    text-align: center;
    margin-bottom: 30px;

    
}

h4 {
    text-align: center;
    color: $neon-turquoise;
}

.img-container p {
    margin: 0;
    padding: 0;
}

//ipad pro + mini
@media screen and (min-width: 600px) {
    .line {
        width: 1px;
        height: 100%;
        margin: 58px 0;
        grid-column-start: 2;
    }

    h4 {
        margin-bottom: 51px;
        font-size: $text-large;
        grid-row-start: 1;
    }

    .affald-ikon {
        grid-column-start: 1;
        margin-bottom: 48px;
        gap: 30px;
    
    }

    .img-wrapper1 {
        gap: 32px;
    }

    .img-wrapper2 {
        gap: 32px;
    }

    p {
        padding: 0 10%;
        margin: 0;
    }


    


}


</style>