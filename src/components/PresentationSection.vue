<script setup lang="ts">
import yotas from '../assets/yotas.jpg';
</script>

<template>
  <header class="w-full py-20 bg-gradient-to-l from-blue-700 to-black text-white shadow-lg">
    <div class="max-w-screen-lg mx-auto text-center">
      <img
        :src="yotas"
        alt="Edward Garcia - Foto de perfil"
        class="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg transform hover:scale-110 transition duration-500"
        loading="lazy"
      />
      <h1 class="mt-6 text-4xl md:text-5xl mb-3 font-extrabold">¡Hola! Soy Edward Garcia</h1>
      <p class="text-lg md:text-xl mt-3 font-medium opacity-90">
        Desarrollador web junior con habilidades en
        <span class="text-teal-300">Vue.js, JavaScript, CSS y HTML</span>.
      </p>
    </div>
  </header>
</template>
