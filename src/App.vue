<template>

  <div class="App">
    <Navigation/>

    <div class="pages">
      <router-view>
      </router-view>
    </div>


  </div>


</template>


<script>

  import Navigation from "./components/Navigation";
  export default {
    name: 'App',
    data() {
      return {
      }
    },
    components: {
      Navigation

    },
    watch: {
      $route(to) {
        if(to.path.includes('/about/')){
          this.$store.dispatch('addWindowStack', to.params.id)
        }
      }
    },
    mounted() {
      fetch('https://my-json-server.typicode.com/plushevy/demo/list')
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                this.$store.commit('fillData', {name: 'request',value: data})


                if(localStorage.getItem('window') !== null){
                  localStorage.getItem('window').split(',').forEach(i=>{
                    this.$store.dispatch('addWindowStack',i)
                  })
                }

              });

      fetch('https://my-json-server.typicode.com/plushevy/demo/meetings')
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                this.$store.commit('fillData', {name: 'invoice',value: data})
              });
    },
  }
</script>



<style lang="scss">
  @import './clear.module.css';
  .App{
    display: flex;
  }
  .pages{
    margin-left: 100px;
    width: calc(100vw - 100px);
  }
  @media all and (max-width: 480px) {
    .pages {
      margin-left: 0px;
      margin-bottom: 50px;
      width: calc(100vw);
    }
  }

</style>
