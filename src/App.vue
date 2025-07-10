<script setup>
import { ref } from 'vue'

const message = ref('Site em construção!')
const counter = ref(0)

function increment() {
  counter.value++
}
</script>

<template>
  <div class="container">
    <div style="text-align: center;">
      <h1>{{ message }}</h1>
      <button @click="increment">Clicou {{ counter }} vezes</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}
button {
  padding: 10px 20px;
  font-size: 1.2rem;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
