<template>
    <div class="overlay active" id="overlay" ref="overlay">
        <video class="w-full max-w-[800px] object-cover" ref="video" id="logo-intro" muted playsinline >
            <source src="/src/videos/motion-logo.webm" class="logo" alt="LFM logo" type="video/webm"/>
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