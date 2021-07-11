<template>
    <div class="Nav">
        <div class="close" v-on:click="closeWindow()"></div>
        <div :class="{active: isActive}" v-on:click="openWindow()">{{item.num}}</div>
        <hr class="line"/>
    </div>
</template>

<script>
    export default {
        name: "SlaveNav",
        computed:{
            isActive(){
                try {
                    if(this.$route.params.id === this.item.id){
                        return true
                    }
                }catch (e) {
                    return false
                }
                return false
            },

        },
        methods:{
            openWindow(){
                this.$router.push(`/about/${this.item.id}`)
            },
            closeWindow(){
                this.$store.dispatch('removeWindowStack',this.item.id)
            }
        },
        props:{
            item: {
                type: Object,
                default(){
                    return {}
                }
            }
        },
    }
</script>

<style scoped lang="scss">


    .Nav{
        position: relative;
        display: flex;
        flex-direction: column;
        margin: 5px;
        .close{
            position: absolute;
            left: -5px;
            top: -5px;
            width: 15px;
            height: 15px;
            background: red;
        }
        div{
            height: 30px;
            width: 80px;
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

    .line{
        margin: 0 10px;
    }
    .active{
        background: #ffcdcd !important;
    }
    @media all and (max-width: 480px) {
        .line{
            display: none;
        }
    }

</style>