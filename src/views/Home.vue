<script setup lang="ts">
import PresentationSection from '../components/PresentationSection.vue';
import SkillSection from '../components/SkillSection.vue';
import ProjectsSection from '../components/ProjectsSection.vue';
</script>

<template>
  <q-page class="flex flex-col items-center bg-gradient-to-b from-gray-50 via-white to-gray-100">
    <PresentationSection />
    <SkillSection />
    <ProjectsSection />
  </q-page>
</template>
