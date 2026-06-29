<template>
  <div class="app" :class="{ 'dark-mode': isDarkMode }">
    <Header :isDarkMode="isDarkMode" :profile="curriculumData.profile" @toggle-theme="toggleDarkMode" />
    <Experience :experience="curriculumData.experience" @select-job="selectJob" />
    <ExperienceModal v-if="selectedJob" :job="selectedJob" @close="selectedJob = null" />
    <Skills :skills="curriculumData.skills" />
    <Education :education="curriculumData.education" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Header from './components/Header.vue'
import Experience from './components/Experience.vue'
import ExperienceModal from './components/ExperienceModal.vue'
import Skills from './components/Skills.vue'
import Education from './components/Education.vue'
import Footer from './components/Footer.vue'
import { isDarkModeEnabled, initTheme } from './utils/theme'
import type { JobExperience } from './types'
import type { CurriculumDataFile } from './types/curriculum'
import curriculumData from './data/curriculum.json'

const isDarkMode = ref<boolean>(false)
const selectedJob = ref<JobExperience | null>(null)

const toggleDarkMode = (): void => {
  isDarkMode.value = !isDarkMode.value
  if (isDarkMode.value) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.removeAttribute('data-theme')
  }
  localStorage.setItem('darkMode', isDarkMode.value.toString())
}

const selectJob = (job: JobExperience): void => {
  selectedJob.value = job
}

onMounted((): void => {
  initTheme()
  isDarkMode.value = isDarkModeEnabled()
})
</script>

<style scoped>
.app {
  min-height: 100vh;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: var(--transition);
}
</style>

