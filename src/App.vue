<template>
  <div id="app">

    <Header1 />
    <router-view />
    <Footer1 />
   
  </div>
</template>

<script setup>

import Header1 from './components/Header.vue'
import Footer1 from './components/Footer.vue'

</script>