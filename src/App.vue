<template>
  <div id="app">
    
    <router-view />
    <OverlayIntro />

  </div>
</template>

<script setup>

import OverlayIntro from './components/OverlayIntro.vue';
import Footer1 from './components/Footer.vue'

</script>