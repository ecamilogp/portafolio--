<script setup>
import { QBtn } from 'quasar';
import yotas from '../assets/yotas.jpg';
import calendar from '../assets/calendar.png';
import team from '../assets/team.png';
import wizze from '../assets/wizze.png';
</script>

<template>
  <q-page
    class="flex flex-col items-center bg-gradient-to-b from-gray-50 via-white to-gray-100"
  >
    <section
      class="w-full py-16 bg-gradient-to-l from-blue-700 to-black text-white shadow-lg"
    >
      <div class="max-w-screen-lg mx-auto text-center">
        <img
          :src="yotas"
          alt="Foto Principal"
          class="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg transform hover:scale-110 transition duration-300"
        />
        <h2 class="mt-4 text-4xl font-extrabold">¡Hola! Soy Edward Garcia</h2>
        <p class="text-lg mt-2 font-medium opacity-90">
          Desarrollador aprendiz web en lenguajes Vue.js, JavaScript, CSS, HTML.
        </p>
      </div>
    </section>

    <section class="w-full py-16 bg-gray-50 shadow-lg">
      <div class="max-w-screen-lg mx-auto text-center">
        <h3 class="text-4xl font-bold text-gray-800">Habilidades</h3>
        <p class="mt-2 text-gray-600">
          Herramientas que utilizo para construir aplicaciones modernas.
        </p>
        <div class="mt-12 flex justify-center space-x-8 overflow-x-auto">
          <div
            class="skill-card transform hover:scale-105 transition duration-300 bg-gradient-to-t from-teal-500 to-teal-400 shadow-md rounded-lg p-4 flex flex-col items-center"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
              alt="Vue.js Logo"
              class="w-16 h-16"
            />
            <p class="mt-4 text-lg font-semibold text-white">Vue.js</p>
          </div>
          <div
            class="skill-card transform hover:scale-105 transition duration-300 bg-gradient-to-t from-yellow-400 to-yellow-300 shadow-md rounded-lg p-4 flex flex-col items-center"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              alt="JavaScript Logo"
              class="w-16 h-16"
            />
            <p class="mt-4 text-lg font-semibold text-white">JavaScript</p>
          </div>
          <div
            class="skill-card transform hover:scale-105 transition duration-300 bg-gradient-to-t from-orange-400 to-orange-300 shadow-md rounded-lg p-4 flex flex-col items-center"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
              alt="HTML5 Logo"
              class="w-16 h-16"
            />
            <p class="mt-4 text-lg font-semibold text-white">HTML5</p>
          </div>
          <div
            class="skill-card transform hover:scale-105 transition duration-300 bg-gradient-to-t from-blue-400 to-blue-300 shadow-md rounded-lg p-4 flex flex-col items-center"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
              alt="CSS3 Logo"
              class="w-16 h-16"
            />
            <p class="mt-4 text-lg font-semibold text-white">CSS3</p>
          </div>
          <div
            class="skill-card transform hover:scale-105 transition duration-300 bg-gradient-to-t from-gray-500 to-gray-400 shadow-md rounded-lg p-4 flex flex-col items-center"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg"
              alt="Git Logo"
              class="w-16 h-16"
            />
            <p class="mt-4 text-lg font-semibold text-white">Git</p>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full py-16 bg-gray-100">
      <div class="max-w-screen-lg mx-auto text-center">
        <h3 class="text-4xl font-bold text-gray-800">Mis Proyectos</h3>
        <p class="mt-2 text-gray-600">
          Algunos de los trabajos que he realizado.
        </p>
        <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div
            class="project-card bg-gray-800 text-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              :src="calendar"
              alt="Proyecto 1"
              class="w-full h-48 object-contain rounded-lg"
            />
            <div class="p-6">
              <h4 class="text-xl font-semibold">Proyecto 1</h4>
              <p class="mt-2 text-gray-300">
                Es un calendario en el cual se pueden almacenar recordatorios
                que predicen el clima para ese día. Los recordatorios pueden ser
                editados, eliminados y cambiar de color.
              </p>
            </div>
          </div>
          <div
            class="project-card bg-gray-800 text-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              :src="team"
              alt="Proyecto 2"
              class="w-full h-48 object-contain rounded-lg"
            />
            <div class="p-6">
              <h4 class="text-xl font-semibold">Proyecto 2</h4>
              <p class="mt-2 text-gray-300">
                Es una aplicación para gestionar equipos, crearlos, editarlos y
                eliminarlos. También permite asignar un fondo económico y
                gestionar una plantilla de jugadores, así como realizar
                transferencias entre equipos para comprar o vender jugadores.
              </p>
            </div>
          </div>
          <div
            class="project-card bg-gray-800 text-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              :src="wizze"
              alt="Proyecto 3"
              class="w-full h-48 object-contain rounded-lg"
            />
            <div class="p-6">
              <h4 class="text-xl font-semibold">Proyecto 3</h4>
              <p class="mt-2 text-gray-300">
                Es una app dedicada a responder y formular PQRS para cadenas de
                restaurantes, negocios, etc. Tiene un amplio menú donde se
                pueden ver compañías, sucursales, usuarios, administradores,
                etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<style scoped>
.skill-card {
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  border-radius: 0.75rem;
}
.skill-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}
.project-card {
  transition: transform 0.3s, box-shadow 0.3s;
}
.project-card:hover {
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.25);
}
</style>
