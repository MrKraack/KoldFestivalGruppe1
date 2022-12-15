<template>
    <div class="ticketWrapper">
    <section class="ticketBox">

        <!-- prop from sanity -->
        <h3 class="ticketBox__h3">{{title}}</h3>
        
        <div class="ticketBox__info">

            <div class="ticketBox__young">
                <p class="ticketbox_p_person">UNG/STUDERENDE</p>
                <p class="ticketbox_p_age">16-25 år eller gyldigt studie ID</p>
                <p class="ticketbox_p_price">{{discount}}</p>
                <a href="https://tix.dk/da/musikkolding/buyingflow/tickets/15815/23040/"><button class="ticketBox__btn">KØB BILLET <img class="ticketBox__fnug" src="../../assets/images/KoldFnug.png" alt=""></button></a>
            </div>

            <div class="ticketBox__adult">
                <p class="ticketbox_p_person">VOKSEN</p>
                <p class="ticketbox_p_age">26+</p>
                <p class="ticketbox_p_price">{{normal}}</p>    
            </div>
        </div>
          
    </section>
    </div>
</template>

<script>

    // props from sanity
     export default {
    name: 'CompBilletType',
    props: {
        title: String,
        discount: String,
        normal: String,

    }
  
  }
</script>


<style lang="scss" scoped>

    .ticketWrapper {
        @include flex-center;
    }


    .ticketBox {
        background: $bg-color;
        box-sizing: border-box;
        margin: 10px 0;
        border: solid 1.5px $neon-pink;
        width: 407px;
        height: 247px;
        border-radius: 23.58px;
        box-shadow: 0 0px 0px 0 rgb(254, 35, 144), 0 0px 10px 0 rgba(254, 35, 144, );
        
        
        &__h3{
            margin: 25px 0;
            font-size: $text-large;
            letter-spacing: 0.1em;
            color: $neon-pink;
            text-shadow: 0px 0px 2px $neon-pink;
            
        }

        &__info {
            @include flex-row;
            text-align: left;
            justify-content: space-evenly;
            margin: 25px 0;
            margin-right: 5px;

            

        }

        &__btn {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: 25px;
        width: 168px;
        height: 37px;
        left: 35px;
        top: 2607px;
        border-style: none;
        border-radius: 7.86164px;
        background: $neon-pink;
        box-shadow: 0px 1.57233px 3.14465px rgba(0, 0, 0, 0.61);
        color: white;
        font-size: $text-medium;
        letter-spacing: 0.15em;
           
    }

    &__fnug {
        width: 11.35px;
        height: 9.57px;
        

    }
        
    }

    .ticketbox_p_person {
        color: white;
        margin: 5px 0;
        font-size: $text-medium; 
    }

    .ticketbox_p_age {
        color: white;
        font-size: $text-xs;
    }

    .ticketbox_p_price {
        font-size: $text-medium;
        color: $neon-pink;
    }

    a {
        text-decoration: none;
    }




</style>

