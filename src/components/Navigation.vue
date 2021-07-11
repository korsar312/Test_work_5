<template>
    <nav>
        <div class="masterNav Nav">
            <div v-on:click="changeView('request')">
                Заявки
            </div>

            <hr class="line"/>

            <div v-on:click="changeView('invoice')">
                Счёт
            </div>
        </div>

        <div class="slaveNav ">
            <SlaveNav v-for="item in $store.state.window" :key="item" :item="item"/>
        </div>

        <button class="addReq" v-on:click="addNewReq()"></button>

    </nav>
</template>


<script>
    import SlaveNav from "./SlaveNav";
    export default {
        name: "Navigation",
        components: {SlaveNav},
        methods:{
            changeView(el){
                this.$router.push('/')
                this.$store.commit('changeView',el)
            },
            addNewReq(){
                this.$store.dispatch('createWindowStack')
            }
        },
    }
</script>


<style scoped lang="scss" >

    nav{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: fixed;
        height: 100vh;
        width: 100px;
        z-index: 1;
        background: #fff;
        box-shadow: 0px 0px 6px 5px rgba(34, 60, 80, 0.2);
        border-right: #cdcdcd solid 2px;
    }
    .addReq{
        margin: 5px;
        border-radius: 50%;
        min-width: 30px;
        min-height: 30px;
        border: none;
        position: relative;
        align-items: center;

        &:hover{
            background: #ff9393;
        }
        &::after, &::before{
            position: absolute;
            content: '';
            background: #ffffff;
            border-radius: 10px;
        }
        &::after{
            width: 70%;
            height: 10%;
            top: 50%;
            left: 15%;
            transform: translate(0,-50%);
        }
        &::before{
            width: 10%;
            height: 70%;
            top: 15%;
            left: 50%;
            transform: translate(-50%,0);
        }
    }
    .masterNav{
        border-bottom: 2px solid #000;
        padding: 7px;
        margin: 5px 0;
        width: 100px;

    }
    .Nav{
        .line{
            margin: 0 10px;
            overflow: auto;
        }
        div{
            padding: 0px 2px;

            height: 50px;
            margin: 3px 10px;
            cursor: pointer;
            transition: $transit;
            border-radius: 10px;
            background: #ececec;


            &:hover{
                background: #d0d0d0;
            }
            @extend %Center_Full;
        }
    }

    @media all and (max-width: 480px) {
        nav {
            flex-direction: initial;
            align-items: center;
            height: 70px;
            width: 100%;
            bottom: 0px;
            overflow-x: auto;
            overflow-y: hidden;

            div {
                height: 20px;
            }
            .line{
                display: none;
            }
        }
        .masterNav, .slaveNav{
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: none;
            border-right: 2px solid #cdc;
            div{
                height: 40px;
            }
        }

    }
</style>