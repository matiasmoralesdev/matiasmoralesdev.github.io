<template>
  <Teleport to="body" v-if="true">
    <div class="modal-overlay" @click="$emit('close')">
      <div class="modal" @click.stop ref="modalContent">
        <button @click="$emit('close')" class="close-btn" aria-label="Close modal">✕</button>
        <div class="modal-content">

          <div class="company-header">
            <img v-if="job.logo" :src="job.logo" :alt="`${job.company} logo`" class="company-logo" />
            <div class="company-info">
              <h2>{{ job.title }}</h2>
              <p class="company-modal">{{ job.company }} • {{ job.date }}</p>

              <a v-if="job.website" :href="job.website" target="_blank" rel="noopener noreferrer" class="company-link">
                <Icon icon="line-md:link" /> Visitar sitio web
              </a>

              <a v-if="job.linkedin" :href="job.linkedin" target="_blank" rel="noopener noreferrer"
                class="company-link">
                <Icon icon="line-md:linkedin" /> LinkedIn
              </a>
            </div>
          </div>

          <div class="details-section full-width description-section">
            <h3>Descripción Detallada</h3>
            <p>{{ job.fullDescription }}</p>
          </div>

          <div class="tech-section">
            <h3>Tecnologías Usadas</h3>
            <div class="tech-tags">
              <span v-for="tech in job.technologies" :key="tech" class="tag">
                {{ tech }}
              </span>
            </div>
          </div>

          <div class="details-grid">
            <div class="details-section full-width">
              <h3>Proyectos</h3>
              <div class="projects-container">
                <div v-for="project in job.projects" :key="project.title" class="project-card">
                  <h4 class="project-title">{{ project.title }}</h4>
                  <p class="project-description">{{ project.description }}</p>

                  <div v-if="project.contributions && project.contributions.length" class="project-contributions">
                    <strong>Mi Aporte:</strong>
                    <ul class="contributions-list">
                      <li v-for="(contribution, idx) in project.contributions" :key="idx">
                        {{ contribution }}
                      </li>
                    </ul>
                  </div>

                  <div class="project-tech">
                    <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue'
import anime from 'animejs'
import type { JobExperience } from '../types'
import { Icon } from '@iconify/vue';

const props = defineProps<{
  job: JobExperience
}>()

defineEmits<{
  close: []
}>()

const modalContent = ref<HTMLElement>()

nextTick(() => {
  if (modalContent.value) {
    anime({
      targets: modalContent.value,
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: 400,
      easing: 'easeOutElastic(1, .6)'
    })
  }
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.modal {
  background: var(--bg-primary);
  border-radius: 15px;
  max-width: 1000px;
  width: 90%;
  max-height: 80vh;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.modal-content {
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-gutter: stable;
  flex: 1;
  padding: 40px;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-secondary);
  transition: var(--transition);
  z-index: 10;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-secondary);
  transition: var(--transition);
}

.close-btn:hover {
  color: var(--accent);
  transform: rotate(90deg);
}

.company-header {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 2px solid var(--border);
  align-items: flex-start;
}

.company-logo {
  width: 100px;
  height: 100px;
  object-fit: contain;
  background: var(--bg-secondary);
  border-radius: 10px;
  padding: 10px;
  flex-shrink: 0;
}

.company-info h2 {
  color: var(--accent);
  margin-bottom: 8px;
}

.company-modal {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 12px;
}

.company-link {
  display: inline-block;
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  transition: var(--transition);
  padding: 8px 12px;
  border-radius: 6px;
  background: rgba(0, 102, 204, 0.1);
  margin-right: 10px;
}

.company-link:hover {
  background: rgba(0, 102, 204, 0.2);
  transform: translateX(3px);
}

.tech-section {
  background: var(--bg-secondary);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 25px;
  border-left: 4px solid var(--accent);
}

.tech-section h3 {
  font-size: 1.1rem;
  margin-bottom: 15px;
  color: var(--text-primary);
}

.details-grid {
  display: grid;
  gap: 25px;
}

.details-section h3 {
  font-size: 1.1rem;
  margin-bottom: 15px;
  color: var(--text-primary);
}

.description-section p {
  color: var(--text-secondary);
  line-height: 1.5;
  font-size: 0.95rem;
  margin-bottom: 15px;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  background: var(--accent);
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  animation: slideIn 0.4s ease;
}

.projects-list {
  list-style: none;
}

.projects-list li {
  padding: 8px 0;
  padding-left: 25px;
  position: relative;
  color: var(--text-secondary);
}

.projects-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: bold;
}

.contributions-list {
  list-style: none;
}

.contributions-list li {
  padding: 12px 0;
  padding-left: 25px;
  position: relative;
  color: var(--text-secondary);
  margin-bottom: 10px;
}

.contributions-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: bold;
  font-size: 1.2rem;
}

.contributions-list strong {
  color: var(--text-primary);
  display: block;
  margin-bottom: 5px;
}

.contributions-list p {
  font-size: 0.9rem;
  margin: 0;
}

.projects-container {
  display: grid;
  gap: 15px;
  margin-top: 15px;
}

.project-card {
  background: var(--bg-secondary);
  padding: 16px;
  border-radius: 8px;
  border-left: 3px solid var(--accent);
  transition: var(--transition);
}

.project-card:hover {
  box-shadow: var(--shadow);
  transform: translateX(3px);
}

.project-title {
  color: var(--accent);
  margin: 0 0 8px 0;
  font-size: 1rem;
}

.project-description {
  color: var(--text-secondary);
  margin: 0 0 12px 0;
  font-size: 0.9rem;
  line-height: 1.4;
}

.project-contributions {
  margin-bottom: 12px;
}

.project-contributions strong {
  display: block;
  color: var(--text-primary);
  margin-bottom: 8px;
  font-size: 0.9rem;
}

.project-contributions .contributions-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.project-contributions .contributions-list li {
  padding: 4px 0 4px 20px;
  margin: 0;
  font-size: 0.85rem;
}

.project-contributions .contributions-list li::before {
  content: '→';
  font-size: 1rem;
  color: var(--accent);
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tech-tag {
  background: rgba(0, 102, 204, 0.15);
  color: var(--accent);
  padding: 4px 10px;
  border-radius: 16px;
  font-size: 0.75rem;
  border: 1px solid rgba(0, 102, 204, 0.3);
  transition: var(--transition);
}

.tech-tag:hover {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
}

.full-width {
  grid-column: 1 / -1;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .modal {
    padding: 5px;
  }

  .close-btn {
    top: 10px;
    right: 25px;
    font-size: 1.2rem;
  }

  .company-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .company-logo {
    width: 80px;
    height: 80px;
  }

  .modal-content {
    padding: 40px 20px 20px;
  }
}
</style>
