<template>
   
    <Header1 />
    <main>
        <div class="container">
            <div><WorkBlock page="/works/lipix" videoSrc="/src/videos/motion-logo.webm"/></div>
            <div><WorkBlock page="/works/eilibras" videoSrc="/src/videos/motion-logo.webm"/></div>
            <div><WorkBlock page="/works/asleep1" videoSrc="/src/videos/motion-logo.webm"/></div>
            <div><WorkBlock page="/works/asleep2" videoSrc="/src/videos/motion-logo.webm"/></div>
            <div><WorkBlock page="/works/asleep3" videoSrc="/src/videos/motion-logo.webm"/></div>
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

