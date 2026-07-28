<template>

    <main>
        <div class="videodiv">
            <video v-if="pageData" ref="video" controls loop muted playsinline preload="metadata">
                <source :src="pageData.videoSrc" type="video/webm"/>
            </video>
        </div>

        <div class="videodesc" ref="overlay" v-if="pageData">
            <RouterLink to="/works"><p class="text-2xl flex! text-center! font-bold text-[#00ffff] drop-shadow-[0_0_3px_#00ffff]">BACK</p></RouterLink>
           
            <div ref="containerRef" class="gsap-target text-body" v-html="pageData.renderedHTML" ></div>

        </div>
    </main>
        
</template>

<!-- TODO: HIDE OVERLAY WHEN ACCESSING DIRECTLY WITH HORIZONTAL MODE / ALSO SHOW OVERLAY WHEN PAUSING VIDEO / ADD BEHIND SCENES -->

<script setup>

import { RouterLink, useRoute } from 'vue-router';
import { ref, onMounted, onBeforeUnmount, watch, nextTick, computed } from "vue";
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const bodyParagraphs = computed(() => {
  if (!pageData?.value.text) return [];
  return pageData.value.text.split('\n').filter(p => p.trim() !== '');
});

const route = useRoute();
const pageData = ref(null);
const containerRef = ref(null);
let splitInstance = null;

let fontResolve;
const fontReady = new Promise((resolve, reject) => {
  fontResolve = resolve;
});

watch(() => route.params.name, async (pageName) => {
  
  try {
    const mod = await import(`../content/${pageName}.html?raw`); 
    
    pageData.value = {
        renderedHTML: mod.default
    };

    await nextTick();

    console.log(containerRef.value.innerHTML);

    await initAnimation();

  } catch (e) {
    console.error(e);
    pageData.value = { renderedHTML: "<p>Página não encontrada</p>" };
  }
},
{ immediate: true }
);


document.fonts.ready.then(async () => {
    fontResolve();
})

async function initAnimation(){

    await fontReady;
        
    const ctx = gsap.context(() => {
    
    const targets = gsap.utils.toArray(
        ".gsap-target, p, h1, h2, h3", 
        containerRef.value
    );

    if (targets.length) {
        
        splitInstance = SplitText.create(targets, {
            type: "lines, words",
            linesClass: "line-mask",
            autoSplit: true,
            
            onSplit(self) {
            // O 'self.words' contém as palavras de TODOS os elementos em 'targets'
            gsap.from(self.lines, {
                duration: 2, 
                y: 50, 
                autoAlpha: 0, 
                stagger: 0.1,
                ease: "power4.out",
            });
        }
      });
    }

  }, containerRef.value);

}


const video = ref(null);
const overlay = ref(null);

function updateOrientation() {
  const isLandscape = window.matchMedia("(orientation: landscape)").matches;

  if (video.value && overlay.value) {
    if (isLandscape) {
        overlay.value.style.visibility = "hidden";
        overlay.value.style.opacity = "0";
        video.value.style.filter = "none";
        video.value.style.transform = "none";
        video.value.play().catch(err =>
            console.log("Play bloqueado pelo navegador:", err)
        );
    } else {
        overlay.value.style.visibility = "visible";
        video.value.style.transform = "rotate(90deg)";
        overlay.value.style.opacity = "1";
        video.value.style.filter = "blur(10px)";
        video.value.pause();
    }
  }
}

onMounted(async () => {
   
    updateOrientation();
    window.addEventListener("orientationchange", updateOrientation);
    window.addEventListener("resize", updateOrientation);
    
  
});

onBeforeUnmount(() => {
    splitInstance?.revert();
    window.removeEventListener("orientationchange", updateOrientation);
    window.removeEventListener("resize", updateOrientation);
  
});


</script>

<style scoped>

p{
    white-space: pre-line;
}

.videodesc{
  position: absolute;
  color: white;
  place-items: center;
  padding: 20px;
  z-index: 10;
  font-size: 0.5rem;
  transition: opacity 0.5s ease;
}

.videodiv{
    position: fixed;
    inset: 0;
    align-items: center;
    justify-content: center;
    background: black;
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

.line-mask {
    white-space: pre-line;
}

.text-body{
    font-size: 250%;
    font-weight: 250;
}

</style>