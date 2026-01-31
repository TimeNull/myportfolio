<template>
     <footer class="menu">
        <RouterLink class="justify-self-start text-left" to="/works">
            <span class="text-(--main-color) text-xl drop-shadow-[0_0_3px_var(--main-color)]">WORKS</span>
        </RouterLink>
        <RouterLink class="justify-self-center left-[10px]" to="/">
            <!-- <span class="text-2xl font-bold text-[#00ffff] drop-shadow-[0_0_3px_#00ffff]">HOME</span> -->
            <img src="../images/logo4x.png" width="60px"></img>
        </RouterLink>
        <RouterLink class="justify-self-end text-right" to="/about">
            <span class="text-(--main-color) text-xl drop-shadow-[0_0_3px_var(--main-color)]">ABOUT</span>
        </RouterLink>
    </footer>
</template>
    
<style scoped>

.menu{
    font-family: Inter;
    font-variation-settings: "wght" 700, "opsz" 48;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    gap: 20px;
    padding-left: 40px;
    padding-right: 40px;
    place-items: center;
}

</style>