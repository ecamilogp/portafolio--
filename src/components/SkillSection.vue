<script setup lang="ts">
import astro from '../assets/astro.png';

const skills = [
  {
    name: 'Vue.js',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
    colors: 'from-teal-500 to-teal-400',
  },
  {
    name: 'JavaScript',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    colors: 'from-yellow-400 to-yellow-300',
  },
  {
    name: 'HTML5',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg',
    colors: 'from-orange-400 to-orange-300',
  },
  {
    name: 'CSS3',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
    colors: 'from-blue-400 to-blue-300',
  },
  {
    name: 'Git',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg',
    colors: 'from-gray-500 to-gray-400',
  },
  {
    name: 'TailwindCSS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
    colors: 'from-cyan-500 to-cyan-200',
  },
  {
    name: 'Astro',
    logo: astro,
    colors: 'from-purple-600 to-indigo-500',
  },
  {
    name: 'TypeScript',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    colors: 'from-blue-600 to-blue-400',
  },
  {
    name: 'Quasar',
    logo: 'https://cdn.quasar.dev/logo/svg/quasar-logo.svg',
    colors: 'from-purple-500 to-purple-300',
  },
];
</script>

<template>
  <section class="w-full py-20 bg-gray-50 shadow-lg">
    <div class="max-w-screen-lg mx-auto text-center">
      <h2 class="text-4xl font-bold text-gray-800">Habilidades</h2>
      <p class="mt-2 text-gray-600">
        Herramientas que utilizo para construir aplicaciones modernas.
      </p>

      <div class="mt-12 flex flex-wrap justify-center gap-6">
        <article
          v-for="skill in skills"
          :key="skill.name"
          class="skill-card w-40 transform hover:scale-110 transition duration-300 bg-gradient-to-t rounded-2xl p-5 flex flex-col items-center shadow-lg"
          :class="skill.colors"
        >
          <img
            :src="skill.logo"
            :alt="`Logo de ${skill.name}`"
            class="w-16 h-16 mb-1"
            loading="lazy"
          />
          <p class="mt-4 text-lg font-semibold text-white">
            {{ skill.name }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skill-card {
  transition: transform 0.3s, box-shadow 0.3s;
}
.skill-card:hover {
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
}
</style>
