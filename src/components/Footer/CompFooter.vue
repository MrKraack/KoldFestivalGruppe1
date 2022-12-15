<template>
    <div class="footer">
        <div class="footer__background">
        <div class="footer__sponsLogo">
        <div class="footer__sponsor">{{sponsors}}</div>
        <img class="footer__logo" src="../../assets/images/logo-hero.png" alt="">
        <div class="footer__sponsor">{{sponsors}}</div>
        </div>
        
        <div class="footer__social">
          <a :href="facebookUrlHref" target="blank"><facebook-icon class="footer__socialicon"></facebook-icon></a>
          <a :href="instagramUrlHref" target="blank"><instagram-icon class="footer__socialicon" ></instagram-icon></a>
        </div>

        <section class="footer__info">
            
            <div class="footer__left">
                <h4 class="footer__h4">MUSIKKOLDING</h4>
            
            <div class="footer__infocontainer">
            <div class="footer__location">
                <p class="footer__street">Jens Holms Vej 5</p>
                <p class="footer__city">6000 Kolding</p>
                <p class="footer__ticket">Billetter: Se under <br> billet typer</p>
            </div>
                
            <div class="footer__event">
                <h5 class="footer__coordinator">Eventkoordinator</h5>
                <p class="footer__name">{{coordinator}}</p>
                <p class="footer__phone">{{phone}}</p>
                <p class="footer__email">{{email}}</p>
            </div>
            </div>
            </div>


            <section class="footer__box">
                <ul class="footer__webtext">
                <h4 class="footer__webavail">Webtilgængelighed</h4>
                <li class="footer__signs footer-wrapper"> <img class="footer__icons" src="../../assets/images/handssign.png" alt=""> Adgang med tegn</li>
                <li class="footer__read footer-wrapper"> <a class="footer-wrapper" href="https://www.adgangforalle.dk/"> <img class="footer__icons" src="../../assets/images/speaker.png" alt=""> Få teksten læst op</a></li>
                <li class="footer__declare footer-wrapper"> <a class="footer-wrapper" href="https://www.was.digst.dk/musik-kolding-dk"> <img class="footer__icons" src="../../assets/images/contract.png" alt=""> Tilgængelighedserklæring</a></li>
                <li class="footer__feedback footer-wrapper"> <a class="footer-wrapper" href="https://musik.kolding.dk/was-feedback/"> <img class="footer__icons" src="../../assets/images/comment.png" alt=""> Giv os feedback</a></li>
                </ul>
            </section>

        </section>
    </div>
    </div>
</template>

<script>
    import FacebookIcon from "@/assets/svg/FacebookIcon";
    import InstagramIcon from "@/assets/svg/InstagramIcon";

    // props from sanity
     export default {
    name: 'CompFooter',
    components: {
      FacebookIcon,
      InstagramIcon
    },
    data() {
      return {
        facebookUrlHref: this.facebookUrl,
        instagramUrlHref: this.instagramUrl
      }
    },
    props: {
        sponsors: Image,
        coordinator: String,
        phone: Number,
        email: String,
    },
    inject: ['facebookUrl', 'instagramUrl']
  }
</script>


<style lang="scss" scoped>

.footer {
    

    &__background {
        background-image: linear-gradient(#0A1E23 ,#000000 45%);
    }

    &__sponsLogo {
        padding: 2em;
        display: grid;
        justify-items: center;  
        grid-template-columns: repeat(auto-fit);
}

    &__logo {
        height: 282px;
      width: auto;
    }
    &__social {
      @include flex-center
    }
    &__socialicon {
        // display: none;
        padding: 10px 0;
        margin: 0 10px;
        width: 26.67px;
        height: 26.67px;
    }



    &__info {
        margin: 0px 20px;
        color: white;   
        display: flex;
        justify-content: space-around;
    }
    
    &__left {
        display: flex;
        flex-direction: column;

        
    }

    &__h4 {
        margin: 0;
        margin-right: 60px;
    }
    
    &__infocontainer {
        display: flex;
        flex-direction: row;
        gap: 100px;
        
    }

    &__location {
        text-align: left;
    }

    &__coordinator {
        margin-top: 15px;
        margin-bottom: 5px;
        font-size: $text-medium;
      text-align: left;
    }

    &__event {
        text-align: left;
    }

    
    
    &__box {
        text-align: center;
        width: 368px;
        height: 226px;
        margin-left: 200px;
        margin-bottom: 20px;
        border: 2px solid #06F2DB;
        border-radius: 20px;
        box-shadow: 0 0px 0px 0 rgb(6, 242, 219), 0 0px 10px 0 rgba(6, 242, 219, );
        
    }

    &__webtext {
        display: inline-block;
    }

    
    &__webavail {
        font-size: $text-large;
      margin-bottom: 16px;
    }

    &__speaker {
        width: 26px;
        height: 22px;
    }

    &__signs {
        margin-bottom: 3px;
        text-align: left;
    }

    &__read {
        text-align: left;
    }

    
    &__webavail {
        text-align: left;
    }

    
    &__feedback {
        text-align: left;
    }

    &__icons {
        width: 20px;
        height: 20px;
    }


    .footer-wrapper {
         display: flex;
         align-items: center;
         gap: 10px;
    }

    a {
        text-decoration: none;
        color: white;
        list-style: none;
        margin: 5px 0;
        align-items: center;
        gap: 10px;
    }
    
    
}

// media screen 1000px
@media screen and (max-width: 1000px) {
    .footer__info {
        margin: 0 20px;
    }

    .footer__infocontainer {
        gap: 30px;
    }
}


// media screen 900px
@media screen and (max-width: 900px) {

    .footer__info {
        margin: 0 20px;
    }
    .footer__box {
        margin-left: 100px;
    }

    
}

// media screen 800px
@media screen and (max-width: 800px) {
    .footer__info {
        margin-top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .footer__infocontainer {
        margin-bottom: 20px;
        gap: 100px;
    }

    .footer__logo {
        height: 206px;
    }

    .footer__left {
        margin-top: 20px;
    }

    .footer__box {
        margin-bottom: 20px;
        margin-left: 0;
    }

    .footer__h4 {
        margin-right: 0;
    }

    .footer__street {
        margin-bottom: 5px;
    }

}

// media screen 480px
@media screen and (max-width: 480px) {
    .footer__info {
        margin-top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .footer__infocontainer {
        margin-bottom: 20px;
        gap: 10px;
    }

    .footer__logo {
        height: 101px;
    }

    .footer__left {
        margin-top: 20px;
    }

    .footer__box {
        margin-bottom: 20px;
        margin-left: 0;
    }

    .footer__h4 {
        margin-right: 0;
    }

    .footer__street {
        margin-bottom: 5px;
    }
    .footer__city {
        margin: 0;
    }

    .footer__ticket {
        margin: 0;
    }

    .footer__name {
        margin: 0;
    }

    .footer__phone {
        margin: 0;
    }

    .footer__email {
        margin: 0;
    }
}

// media screen 400px
@media screen and (max-width: 400px) {
    .footer__box {
        width: 330px;
    }
}



</style>

