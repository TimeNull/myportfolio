<template>
    <div class="menu-options" ref="menuOptions">
        
        <label for="tab1" class="font-bold text-[#00ffff] drop-shadow-[0_0_3px_#00ffff]">CONTRACT WORK
            <input type="radio" name="menu" id="tab1" checked>
            <span class="checkmark"></span>
        </label>
        
        <label for="tab2" class="font-bold text-[#00ffff] drop-shadow-[0_0_3px_#00ffff]">PERSONAL PROJECTS
            <input type="radio" name="menu" id="tab2">
            <span class="checkmark"></span>
        </label>
        
        <label for="tab3" class="font-bold text-[#00ffff] drop-shadow-[0_0_3px_#00ffff]">UNIVERSITY PROJECTS
            <input type="radio" name="menu" id="tab3">
            <span class="checkmark"></span>
        </label>
        
        <label for="tab4" class="font-bold text-[#00ffff] drop-shadow-[0_0_3px_#00ffff]">GAME JAMS
            <input class="left-0!" type="radio" name="menu" id="tab4">  
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
  scrollbar-color: #0ff;
}


.menu-options > label {
  position: relative;
  flex: 0 0 auto;
  cursor: pointer;
  padding: 8px 16px;
  font-weight: bold;
  color: #0ff;
  text-shadow: 0 0 3px #0ff;
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
   background: #0ff;
}

.checkmark {
  position: absolute;
  left: -4px;
  top: 11px;
  height: 15px;
  width: 15px;
  border: 1px solid #0ff;
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
    background: #0ff;
}

::-webkit-scrollbar-thumb:window-inactive {
    background: transparent
}  


</style>