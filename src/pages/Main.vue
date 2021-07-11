<template>
    <button v-if="true" v-on:click="clearLocalStorage()">очистить local storage</button>
    <main>
        <Form class="Form" v-for="item in data" :key="item.id" :item="item"/>
    </main>
</template>



<script>

  import Form from "../components/Form";
  export default {
    name: "Main",
    data() {
      return {

      }
    },
    methods:{
        clearLocalStorage(){
            alert(localStorage.getItem('window'))
            localStorage.removeItem('window');
        },
    },
    computed:{
        data(){return this.$store.state[this.$store.state.view]}
    },
    components: {
        Form
    },
  }
</script>



<style scoped lang="scss">

    main{
        @extend %Center_Gor;
        flex-wrap: wrap;

    }
    .Form{
        width: 300px;
        height: 400px;
        margin: 10px;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }


</style>
