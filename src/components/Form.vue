<template>
    <div class="wrapper" v-on:click="addWindow()">
        <div class="main">
            <div class="grid" v-for="param in renderForm()" :key="param">
                <span>{{param[0]}}</span>
                <span class="spaces"> </span>
                <ValueTable :item="param"/>
            </div>
        </div>
    </div>
</template>

<script>
    // данные на вывод я мог циклом выводить (если это 'рядовые' данные, то достаточно в json файл их дописать)
    // или руками в html прописать что и где выводить

    // *через 10 мин раздумий* в итоге я выбрал 2й вариант, так как он быстрее
    // *через 30 мин раздумий* в итоге я выбрал 1й вариант.
    import ValueTable from "./ValueTable";
    export default {
        name: "Form",
        components: {ValueTable},
        data(){
            return{
                stopWord: [
                    'id',
                    'initiated_at',
                    'lastUpd',
                    'inn',
                    'meeting_date',
                    'meeting_place',
                    'meeting_state',
                    'is_own',
                    'profile_id',
                    'lastUpd',
                    'inn',
                    'ogrn',
                    'is_own',

                ]
            }
        },
        methods:{
            renderForm(){
                let arr = []
                Object.entries(this.item).forEach(i=>{
                    if(this.stopWord.includes(i[0])){
                        return
                    }
                    let key = this.$store.state.rename[i[0]] || i[0]
                    let value = i[1]

                    arr.push([key, value])
                })
                return arr
            },
            addWindow(){
                if (this.$store.state.view === "invoice") {return}
                this.$store.dispatch('addWindowStack',this.item.id)
                this.$router.push(`/about/${this.item.id}`)
            },
        },

        props:{
            item: {
                type: Object,
                default: null,
            }
        },
    }
</script>

<style scoped lang="scss">

    .wrapper{
        font-family: "Times New Roman","Helvetica","Arial",sans-serif;
        border-radius: 15px;
        box-shadow: 0px 0px 3px 1px rgba(34, 60, 80, 0.1);
        background: #fff;
        overflow: hidden;
        position: relative;
        cursor: pointer;
    }
    .main{
        padding: 10px;
        overflow: auto;
        height: calc(100% - 20px);
    }
    .param{
        display: flex;
        margin: 5px 0;
    }
    .spaces{
        flex: 1;
    }



    .grid{
        display: grid;
        border-bottom: 1px dotted #222222;


        grid-template-columns: 1fr 1fr 2fr;
        grid-auto-rows: minmax(50px, auto);

        span{
            align-self: center;
            justify-self: left;
        }
    }

</style>