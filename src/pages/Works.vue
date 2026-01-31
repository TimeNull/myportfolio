<template>

    <MenuWorks />
    <main>
        <div class="container">
            <div v-if="contract"><WorkBlock page="/works/lipix" videoSrc="/src/videos/motion-logo.webm"/></div>
            <div v-if="contract"><WorkBlock page="/works/eilibras" videoSrc="/src/videos/motion-logo.webm"/></div>
            <div v-if="contract"><WorkBlock page="/works/asleep1" videoSrc="/src/videos/motion-logo.webm"/></div>
            <div v-if="contract"><WorkBlock page="/works/asleep2" videoSrc="/src/videos/motion-logo.webm"/></div>
            <div v-if="contract"><WorkBlock page="/works/asleep3" videoSrc="/src/videos/motion-logo.webm"/></div>
            <div v-if="personal"><WorkBlock page="/works/cmyk" videoSrc="/src/videos/motion-logo.webm"/></div>
            <div v-if="personal"><WorkBlock page="/works/cmyk3d" videoSrc="/src/videos/motion-logo.webm"/></div>
            <div v-if="personal"><WorkBlock page="/works/myportfolio" videoSrc="/src/videos/motion-logo.webm"/></div>
            <div v-if="university"><WorkBlock page="/works/killemall" videoSrc="/src/videos/motion-logo.webm"/></div>
            <div v-if="university"><WorkBlock page="/works/silverado" videoSrc="/src/videos/motion-logo.webm"/></div>
            <div v-if="university"><WorkBlock page="/works/meetmeoutside" videoSrc="/src/videos/motion-logo.webm"/></div>
            <div v-if="university"><WorkBlock page="/works/betweenus" videoSrc="/src/videos/motion-logo.webm"/></div>
            <div v-if="university"><WorkBlock page="/works/mamore" videoSrc="/src/videos/motion-logo.webm"/></div>
            <div v-if="university"><WorkBlock page="/works/opoji" videoSrc="/src/videos/motion-logo.webm"/></div>
            <div v-if="gamejam"><WorkBlock page="/works/joutsenara" videoSrc="/src/videos/motion-logo.webm"/></div>
            <div v-if="gamejam"><WorkBlock page="/works/crystaljam" videoSrc="/src/videos/motion-logo.webm"/></div>
            <div v-if="gamejam"><WorkBlock page="/works/hypnosis" videoSrc="/src/videos/motion-logo.webm"/></div>
            <div v-if="gamejam"><WorkBlock page="/works/chaostv" videoSrc="/src/videos/motion-logo.webm"/></div>
            <div v-if="gamejam"><WorkBlock page="/works/dontkillanything" videoSrc="/src/videos/motion-logo.webm"/></div>
        </div>
    </main>
    <Footer1 />

</template>

<script setup>

import { computed } from 'vue'
import Footer1 from '../components/Footer.vue';
import MenuWorks from '../components/MenuWorks.vue';
import WorkBlock from '../components/WorkBlock.vue';
import {bus} from '../scripts/eventbus.js'

const contract = computed(() => bus.selectedMode === 'contract');
const personal = computed(() => bus.selectedMode === 'personal');
const university = computed(() => bus.selectedMode === 'university');
const gamejam = computed(() => bus.selectedMode === 'gamejam');


</script>