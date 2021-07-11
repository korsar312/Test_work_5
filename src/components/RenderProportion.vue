<template>
    <div class="key cell">{{rename()}}</div>
    <div class="cell"></div>

    <button v-on:click="edit = !edit">{{nameEdit()}}</button>
    <div v-if="!edit" class="cell inp">{{values}}</div>
    <input v-if="edit" class="cell inp" v-model="values">

</template>

<script>
    export default {
        name: "RenderProportion",
        methods:{
            rename(){
                let word = this.$store.state.rename[this.item.param] || this.item.param
                return word
            },
            valueRename(){
                let arr = Object.keys(this.param)

                switch(arr[0]) {
                    case 'dadd':
                        return dadd(arr[1])
                    case 'person_phone':
                        return person_phone(String(arr[1]))

                    default:
                        return arr[1]
                }

                function dadd(el) {
                    let data = new Date(el)
                    let day = String(data.getDate()) + '.' + data.getMonth() + '.' + data.getFullYear() + ' ' + data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds()
                    return day
                }
                function person_phone(el) {
                    let count = 0
                    let number = el.split('').map((i)=>{
                        if (i !== '+' && count === 0 && el.length === 11){count = 2; return '+' + i}

                        if ((i !== '(' || i !== ')') && (count === 2||count === 5)){
                            if (count === 2){count++; return '(' + i}
                            if (count === 5){count++; return ')' + i}
                        }

                        if (i !== '-' && (count === 8||count === 10)){
                            count++; return '-' + i
                        }

                        count++
                        return i

                    }).join('')
                    return number
                }
            },
            nameEdit(){
                return this.edit ? 'Ok': 'Edit'
            },
            value(){
                return this.item.item[this.item.param]
            },
        },
        data(){
            return{
                edit: false,
            }
        },
        computed:{
            values:{
                get() {
                    return this.item.item[this.item.param]
                },
                set(value) {
                    this.$store.state.request.find(i=>i.id === this.item.item.id)[this.item.param] = value
                    if (this.item.param == 'id'){
                        this.$router.push(`/about/${value}`)
                    }
                },
            }
        },
        watch:{
            values(){

            },
        },
        props:{
            item:{
                type: Object,
                default: null,
            }
        }
    }
</script>

<style scoped>
    .cell{
        font-size: 14pt;
        padding: .5em;
        border-bottom: 1px #cdcdcd solid;
    }
    .key{
        text-align: left;
    }
    .value{
        text-align: right;
    }
</style>