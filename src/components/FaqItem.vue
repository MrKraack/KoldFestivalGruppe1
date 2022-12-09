<template>
    <section :class="accordianClasses">
        
            <div class="icon-text">
            <i class="fi fi-rs-angle-small-right"></i>
            <p @click="toggleAccordian" class="title">{{title}}</p>
            </div>
            <p class="beskrivelse">{{beskrivelse}}</p>
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
            align-items: center;
        }
        .title {
            cursor: pointer;
        }

        .beskrivelse {
           // padding: 1.5rem 0 1.5rem 0;
        }

        .is-closed .beskrivelse {
            display: none;
        }

        .line {
            height: 1px;
            width: 40rem;
            background-color: aqua;
            margin-left: auto;
            margin-right: auto;
        }
        
    // Virker ikke / bruger ikke lige nu        
    @keyframes slidedown {
        from {
        transform: translateY(50%);
        }

        to {
        transform: translateY(100%);
        }
        }
</style>