<template>
    <div class="menu-options" ref="menuOptions">
        
        <label for="tab1" >CONTRACT WORK
            <input type="radio" name="menu" id="tab1" value="contract" v-model="bus.selectedMode" checked>
            <span class="checkmark"></span>
        </label>
        
        <label for="tab2" >PERSONAL PROJECTS
            <input type="radio" name="menu" id="tab2" value="personal" v-model="bus.selectedMode">
            <span class="checkmark"></span>
        </label>
        
        <label for="tab3" >ACADEMIC PROJECTS
            <input type="radio" name="menu" id="tab3" value="university" v-model="bus.selectedMode" >
            <span class="checkmark"></span>
        </label>
        
        <label for="tab4" >GAME JAMS
            <input class="left-0!" type="radio" name="menu" id="tab4" value="gamejam" v-model="bus.selectedMode" >  
            <span class="checkmark"></span>
        </label>
    </div>
</template>




<style scoped>

.menu-options {
  display: flex;
  position: fixed;
  justify-content: flex-start;
  align-items: center;

  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 500;
  gap: 5px;
  padding-left: 30px;

  overflow: auto hidden;
  background-color: transparent;
  white-space: nowrap;
  scrollbar-color: var(--main-color);

  font-family: Inter;
  font-variation-settings: "wght" 700, "opsz" 48;
}


.menu-options > label {
  position: relative;
  flex: 0 0 auto;
  cursor: pointer;
  padding: 8px 16px;
  font-weight: bold;
  color: var(--main-color);
  text-shadow: 0 0 3px var(--main-color);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.menu-options input{
  position: relative;
  cursor: pointer;
  left: -60%;
  height: 0;
  width: 0;
  opacity: 0;
  appearance: none;
}

.menu-options input:checked ~ .checkmark {
   background:var(--main-color);
}

.checkmark {
  position: absolute;
  left: -4px;
  top: 11px;
  height: 15px;
  width: 15px;
  border: 1px solid var(--main-color);
  border-radius: 50%;
  background: transparent;
  transition: ease-out 0.5s;
}


::-webkit-scrollbar {
    width: 5px
}

::-webkit-scrollbar:horizontal {
    height: 5px
}

::-webkit-scrollbar-track {
    border-radius: 0;
    -webkit-box-shadow: none;
    box-shadow: none
}

::-webkit-scrollbar-thumb {
    background: var(--main-color);
}

::-webkit-scrollbar-thumb:window-inactive {
    background: transparent
}  


</style>

<script setup>

import { onUnmounted } from 'vue';
import { watch } from 'vue'
import { bus } from '../scripts/eventbus.js';
import { gsap } from 'gsap';

watch(() => bus.selectedMode, (mode) => 
    {
    if (mode === 'contract') {
        gsap.to(':root', { '--main-color': '#0ff' });
    } else if (mode === 'personal') {
        gsap.to(':root', { '--main-color': '#ff6f61' });
    } else if (mode === 'university') {
        gsap.to(':root', { '--main-color': '#6c5ce7'});
    } else if (mode === 'gamejam') {
        gsap.to(':root', { '--main-color': '#ecff43' });
    }
    })

onUnmounted(() => {

    bus.selectedMode = 'contract';
    gsap.to(':root', { '--main-color': '#0ff' });
})

</script>