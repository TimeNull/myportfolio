<template>
   
    <Header1 />
    <main>
        <div class="container">
            <div><WorkBlock page="/works/Lipix" videoSrc="/src/videos/motion-logo.webm"/></div>
            <div><WorkBlock page="/works/EiLibras" videoSrc="/src/videos/motion-logo.webm"/></div>
            <div><WorkBlock page="/works/Asleep" videoSrc="/src/videos/motion-logo.webm"/></div>
            <div><WorkBlock page="/about" videoSrc="/src/videos/motion-logo.webm"/></div>
            <div><WorkBlock page="/about" videoSrc="/src/videos/motion-logo.webm"/></div>
        </div>
    </main>
    <Footer1 />

</template>

<script setup>

import Footer1 from '../components/Footer.vue'
import Header1 from '../components/Header.vue'
import { gsap } from "gsap";
import WorkBlock from '../components/WorkBlock.vue';

</script>

