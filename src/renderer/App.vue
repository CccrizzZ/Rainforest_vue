<template>
  <div id="app">
    <div>
    <navbars/>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import navbars from './components/reusable/Navbar';
  export default {
    name: 'App',
    components:{
     navbars
    }
  }
</script>

<style>
  /* CSS */
</style>
