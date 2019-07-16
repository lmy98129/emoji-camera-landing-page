<template>
  <div class="wrapper" id="app">
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: {
    "nav-bar": NavBar
  }  
}
</script>


<style>
@import './main.css';

</style>
