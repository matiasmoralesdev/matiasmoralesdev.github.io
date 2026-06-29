<template>
  <section class="section experience-section">
    <div class="container">
      <h2 class="section-title">Experiencia Laboral</h2>
      <div class="experience-list">
        <div v-for="job in experience" :key="job.id" class="job-card" @click="$emit('select-job', job)" role="button"
          tabindex="0" @keypress.enter="$emit('select-job', job)">
          <div class="job-bg" v-if="job.image" :style="{ backgroundImage: `url(${job.image})` }"></div>

          <div class="job-content">
            <div class="job-header">
              <h3>{{ job.title }}</h3>
              <span class="company">{{ job.company }}</span>
            </div>
            <p class="date">{{ job.date }}</p>
            <p class="description">{{ job.description }}</p>
            <div class="tech-preview">
              <span v-for="(tech, index) in job.technologies.slice(0, 3)" :key="index" class="tech-tag">
                {{ tech }}
              </span>
              <span v-if="job.technologies.length > 3" class="tech-more">
                +{{ job.technologies.length - 3 }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { JobExperience } from '../types'

defineProps<{
  experience: JobExperience[]
}>()

defineEmits<{
  'select-job': [job: JobExperience]
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

.experience-list {
  display: grid;
  gap: 25px;
}

.job-card {
  background: var(--bg-secondary);
  padding: 25px;
  border-radius: 10px;
  border-left: 4px solid var(--accent);
  cursor: pointer;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  width: 100%;
}

.job-bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  filter: blur(8px) brightness(0.5);
  z-index: 0;
  opacity: 0.1;
  width: 60%;
  padding:100px;
}

.job-content {
  position: relative;
  z-index: 1;
}

.job-card:hover {
  transform: translateX(5px);
  box-shadow: var(--shadow);
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
  gap: 15px;
}

.job-card h3 {
  font-size: 1.3rem;
}

.company {
  color: var(--accent);
  font-weight: 600;
  font-size: 0.9rem;
  white-space: nowrap;
}

.date {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.description {
  color: var(--text-secondary);
  margin-bottom: 15px;
}

.tech-preview {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.tech-tag {
  background: rgba(0, 102, 204, 0.2);
  color: var(--accent);
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.tech-more {
  color: var(--text-secondary);
  font-size: 0.75rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.5rem;
  }

  .job-header {
    flex-direction: column;
  }

  .company {
    white-space: normal;
  }
}
</style>
