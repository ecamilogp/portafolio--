<template>
  <q-layout view="hHh lpR fFf" class="flex flex-col h-full">
    <!-- Header -->
    <q-header
      elevated
      class="bg-gradient-to-l from-black to-gray-700 text-white"
    >
      <q-toolbar class="flex justify-between items-center">
        <q-toolbar-title class="flex-grow text-center text-3xl font-semibold">
          Mi Portafolio
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="right">
        <q-route-tab to="/" label="Inicio" />
        <q-route-tab to="/page2" label="Sobre mi" />
        <q-route-tab to="/page3" label="Contactame" />
      </q-tabs>
    </q-header>

    <!-- Contenido principal -->
    <q-page-container class="flex-grow">
      <router-view></router-view>
    </q-page-container>

    <!-- Footer -->
    <Footer />
  </q-layout>
</template>

<script setup lang="ts">
import Footer from './components/Footer.vue';
</script>

<style scoped>
html,
body,
#q-app {
  height: 100%;
  margin: 0;
}
</style>
