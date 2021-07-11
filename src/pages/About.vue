<template>
    <div class="grid">

        <RenderProportion v-for="param in getObjKeys()" :key="param" :item="{param,item}"/>

    </div>
</template>

<script>
    import RenderProportion from "../components/RenderProportion";
    export default {
        name: "About",
        components: {RenderProportion},
        computed:{
            item(){
                return this.$store.state.request.find(i=>i.id === this.$route.params.id)
            }
        },
        data(){
            return{

                url: "https://my-json-server.typicode.com/plushevy/demo/orders/",
            }
        },
        methods:{
            getObjKeys(){
                try {
                    return Object.keys(this.item)
                }catch (e) {
                    console.log(e)
                }
            }
        },
    }
</script>

<style scoped>

    .wrapper{
        margin: 5px;
    }

    .grid{
        display: grid;
        grid-template-columns: 1fr 1fr 0.1fr 1fr;
        grid-auto-rows: minmax(50px, auto);
    }


</style>