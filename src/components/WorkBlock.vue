<template>
    <RouterLink :to="page">
        <div>
            <video ref="video" width="200" loop muted playsinline preload="metadata">
                <source :src="videoSrc" type="video/webm"/>
            </video>
        </div>
    </RouterLink>
</template>

<script setup>

defineProps({
    page: String,
    videoSrc: String,
});

import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const video = ref(null);
let observer = null;


onMounted(async () => {
    await nextTick();
    
    if (!video.value) return;

    observer = new IntersectionObserver(([entry]) => 
    {
        requestAnimationFrame(() => 
        {
            if (entry.intersectionRatio > 0.5) {
                video.value.play();
            } else {
                video.value.pause();
            }
        })
    }, { threshold: [0, 0.25, 0.5] },
    )   

    observer.observe(video.value)
});

onBeforeUnmount(() => {
  if (observer && video.value) {
    observer.unobserve(video.value);
    observer.disconnect();
  }
});

</script>