<template>
  <section class="section education-section">
    <div class="container">
      <h2 class="section-title">Educación</h2>
      <div class="education-list">
        <div v-for="edu in education" :key="edu.id" class="education-card">
          <h3>{{ edu.degree }}</h3>
          <p class="institution">{{ edu.institution }}</p>
          <p class="year">{{ edu.year }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Education } from '../types'

defineProps<{
  education: Education[]
}>()
</script>

<style scoped>
.section {
  padding: 60px 0;
  border-bottom: 1px solid var(--border);
}

.section-title {
  font-size: 2rem;
  margin-bottom: 40px;
  position: relative;
  padding-bottom: 15px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, var(--accent), #00a8ff);
  border-radius: 2px;
}

.education-list {
  display: grid;
  gap: 20px;
}

.education-card {
  background: var(--bg-secondary);
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid var(--accent);
  transition: var(--transition);
}

.education-card:hover {
  box-shadow: var(--shadow);
  transform: translateX(5px);
}

.education-card h3 {
  color: var(--accent);
  margin-bottom: 8px;
}

.institution {
  color: var(--text-secondary);
  font-weight: 500;
}

.year {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-top: 5px;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.5rem;
  }
}
</style>
