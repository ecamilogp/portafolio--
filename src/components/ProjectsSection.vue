<script setup lang="ts">
import calendar from '../assets/calendar.png';
import team from '../assets/team.png';
import wizze from '../assets/wizze.png';
import { ref } from 'vue';

const openPicture = ref(false);
const selectedImg = ref<string | undefined>(undefined);

function togglePicture(img: string) {
  selectedImg.value = img;
  openPicture.value = true;
}

function closePicture() {
  openPicture.value = false;
  selectedImg.value = undefined;
}

const projects = [
  {
    title: 'Calendario Interactivo',
    img: calendar,
    description:
      'Calendario que permite almacenar recordatorios con predicciones del clima. Incluye edición, eliminación y personalización de colores.',
  },
  {
    title: 'Gestor de Equipos',
    img: team,
    description:
      'Aplicación para crear, editar y eliminar equipos, gestionar presupuestos y plantillas de jugadores, además de realizar transferencias.',
  },
  {
    title: 'PQRS Restaurants',
    img: wizze,
    description:
      'App para responder y formular PQRS en restaurantes y negocios. Incluye gestión de compañías, sucursales y usuarios.',
  },
];
</script>

<template>
  <section class="w-full py-20 bg-gray-200">
    <div class="max-w-screen-lg mx-auto text-center">
      <h2 class="text-4xl font-bold text-gray-800">Mis Proyectos</h2>
      <p class="mt-2 text-gray-600">Algunos de los trabajos que he realizado.</p>

      <div class="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <article
          v-for="project in projects"
          :key="project.title"
          class="project-card bg-gray-800 text-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300"
        >
          <img
            :src="project.img"
            :alt="`Imagen del proyecto ${project.title}`"
            @click="togglePicture(project.img)"
            class="w-full h-48 object-contain cursor-pointer"
            loading="lazy"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold">{{ project.title }}</h3>
            <p class="mt-2 text-gray-300 text-sm md:text-base">{{ project.description }}</p>
          </div>
        </article>
      </div>
    </div>

    <div
      v-if="openPicture"
      class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      @click.self="closePicture"
    >
      <div class="relative">
        <img
          :src="selectedImg"
          alt="Imagen ampliada"
          class="max-w-full max-h-[80vh] rounded-xl shadow-2xl"
        />
        <button
          @click="closePicture"
          class="absolute top-2 right-2 bg-white border border-black text-gray-800 rounded-full px-3 py-1 font-bold shadow"
        >
          ✕
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-card {
  transition: transform 0.3s, box-shadow 0.3s;
}
.project-card:hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
}
</style>
