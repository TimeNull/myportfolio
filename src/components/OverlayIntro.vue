<template>
    <div class="overlay active" id="overlay" ref="overlay">
        <video class="w-full max-w-[800px] object-cover" ref="video" id="logo-intro" muted playsinline >
            <source src="/src/videos/logo-motion-name-v2.webm" class="logo" alt="LFM logo" type="video/webm"/>
        </video>
    </div>
</template>


<script setup>

import { ref, onMounted, onUnmounted } from 'vue'

import { hasSeenOverlay } from '../scripts/stores'

const video = ref(null)
const overlay = ref(null)

function startVideo() {
    if (video.value) {
        video.value.currentTime = 0
        video.value.play()
    }
}

function stopVideo() {
    if (video.value) {
        video.value.pause()
        video.value.currentTime = 0
    }
}

function hideOverlay() {

    if (overlay.value) 
        overlay.value.classList.remove('active');

    hasSeenOverlay.value = true

    document.removeEventListener('visibilitychange', onVisibilityChange);
}

function onVisibilityChange() {
    if (document.visibilityState === 'visible')
        startVideo();
    else
        stopVideo();
}

onMounted(() => {

    if (hasSeenOverlay.value) {
        overlay.value?.classList.remove('active');
        return;
    }

    if (video.value)
        video.value.addEventListener('ended', hideOverlay);

    if (document.visibilityState === 'visible')
        startVideo();

    document.addEventListener('visibilitychange', onVisibilityChange);
})

onUnmounted(() => {

    if (video.value) 
        video.value.removeEventListener('ended', hideOverlay);

    document.removeEventListener('visibilitychange', onVisibilityChange);
})
</script>

<style scoped>

.overlay{
    position: fixed;
    display: flex;
    place-content: center;
    place-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: black;
    visibility: hidden;
    overflow: visible;
    opacity: 0;
    transition: opacity 1s ease-out, visibility 1s ease-out;
}   

.overlay.active{
    visibility: visible;
    overflow: hidden;
    opacity: 1;
}

.overlay video{
    object-fit: contain;
}

</style>