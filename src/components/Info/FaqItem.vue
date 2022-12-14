<template>
    <section class="infoSection" :class="accordianClasses">
        
            <div class="icon-text">
            <i @click="toggleAccordian" class="fi fi-rs-angle-small-right"></i>
            <p @click="toggleAccordian" class="title" data-testid="faqItemTitle">{{title}}</p>
            </div>
            <p class="beskrivelse" data-testid="faqItemBeskrivelse">{{beskrivelse}}</p>
            <div class="line"></div>
      
    </section>
    
</template>



<script>

    export default {
        props: {
            title: String,
            beskrivelse: String
        },
        data() {
            return {
            isOpen: true,
            
            }
        },
        methods: {
            toggleAccordian: function() {
                this.isOpen = !this.isOpen;
            },
        },
        computed: {
            accordianClasses: function() {
               return { 'is-closed': this.isOpen
            };
        }
    }

        
    }
</script>

<style lang="scss" scoped>
    @import url('https://cdn-uicons.flaticon.com/uicons-regular-straight/css/uicons-regular-straight.css');
        
        .icon-text {
            display: inline-flex;
            cursor: pointer;
           
        }
        .title {
            margin: 0;
            cursor: pointer;
            text-align: top;
        }

        .beskrivelse {
           font-size: $text-small;
           
        }

        .fi {
            font-size: 30px;
            margin: -5px 0;
            color: $neon-turquoise;
        }

        .is-closed .beskrivelse {
            display: none;
        }

        .line {
            height: 1px;
            width: 100%;
            background-color: aqua;
            margin-left: auto;
            margin-right: auto;
            margin-top: 20px;
            margin-bottom: 20px;
        }

        @media screen and (min-width: 620px) {
            // ændring af linje og teksten så det står i midten.
            .infoSection {
                margin-left: auto;
                margin-right: auto;
                width: 487px;
                
            }
        }    
</style>