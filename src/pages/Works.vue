<template>

    <MenuWorks />
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

import Footer1 from '../components/Footer.vue';
import MenuWorks from '../components/MenuWorks.vue';
import WorkBlock from '../components/WorkBlock.vue';

</script>