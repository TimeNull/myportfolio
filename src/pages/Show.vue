<template>

    <main>
        <div class="videodiv">
            <video ref="video" controls loop muted playsinline preload="metadata">
                <source :src="videoSrc" type="video/webm"/>
            </video>
        </div>

        <div class="videodesc" ref="overlay">
            <RouterLink to="/works">Voltar</RouterLink>
            <h1>{{title}}</h1>
            <p>{{text}}</p>
        </div>
    </main>
        
</template>

<script setup>

import { RouterLink, useRoute } from 'vue-router';
import { ref, onMounted, onBeforeUnmount } from "vue";

const route = useRoute();
const pageId = route.params.name;

const pages = {
  Lipix: { title: 'LIPIX', text: 'Descrição LIPIX', videoSrc: '/src/videos/motion-logo.webm' },
  EiLibras: { title: 'EiLibras', text: 'Descrição EiLibras', videoSrc: '' },
  Asleep1 : { title: 'Asleep', text: 'Descrição Asleep', videoSrc: '' },
  Asleep2 : { title: 'Asleep', text: 'Descrição Asleep', videoSrc: '' },
  Asleep3 : { title: 'Asleep', text: 'Descrição Asleep', videoSrc: '' },
};

const { title, text, videoSrc } = pages[pageId] || {};


const video = ref(null);
const overlay = ref(null);

function updateOrientation() {
  const isLandscape = window.matchMedia("(orientation: landscape)").matches;

  if (video.value && overlay.value) {
    if (isLandscape) {
      overlay.value.style.opacity = "0";
      video.value.style.filter = "none";
      video.value.style.transform = "none";
      video.value.play().catch(err =>
        console.log("Play bloqueado pelo navegador:", err)
      );
    } else {
      video.value.style.transform = "rotate(90deg)";
      overlay.value.style.opacity = "1";
      video.value.style.filter = "blur(10px)";
      video.value.pause();
    }
  }
}

onMounted(() => {
  updateOrientation();
  window.addEventListener("orientationchange", updateOrientation);
  window.addEventListener("resize", updateOrientation);
});

onBeforeUnmount(() => {
  window.removeEventListener("orientationchange", updateOrientation);
  window.removeEventListener("resize", updateOrientation);
});


</script>

<style scoped>

.videodesc{
  position: absolute;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* ajusta exatamente ao centro */
  text-align: center;
  place-items: center;
  padding: 20px;
  z-index: 10;
  font-size: 1.2rem;
  transition: opacity 0.5s ease;
}

.videodiv{
    position: relative;
    inset: 0;
    align-items: center;
    justify-content: center;
    background: black;
    overflow: hidden;
    z-index: 0;
}

.videodiv video{
  transform: rotate(90deg);
  transform-origin: center center;
  flex:1;
  width: 100vw;
  height: 100vh;
  object-fit: contain;
  filter: blur(10px);
  transition: filter 0.5s ease;
}

</style>