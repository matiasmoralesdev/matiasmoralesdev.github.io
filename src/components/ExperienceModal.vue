<template>
  <Teleport to="body" v-if="true">
    <div class="modal-overlay" @click="$emit('close')">
      <div class="modal" @click.stop ref="modalContent">
        <button @click="$emit('close')" class="close-btn" aria-label="Close modal">✕</button>

        <h2>{{ job.title }}</h2>
        <p class="company-modal">{{ job.company }} • {{ job.date }}</p>

        <div class="details-grid">
          <!-- Tecnologías -->
          <div class="details-section">
            <h3>Tecnologías Usadas</h3>
            <div class="tech-tags">
              <span v-for="tech in job.technologies" :key="tech" class="tag">
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Proyectos -->
          <div class="details-section">
            <h3>Proyectos</h3>
            <ul class="projects-list">
              <li v-for="project in job.projects" :key="project">
                {{ project }}
              </li>
            </ul>
          </div>

          <!-- Descripción completa -->
          <div class="details-section full-width">
            <h3>Descripción Detallada</h3>
            <p>{{ job.fullDescription }}</p>
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
  padding: 40px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  position: relative;
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

.modal h2 {
  color: var(--accent);
  margin-bottom: 10px;
}

.company-modal {
  color: var(--text-secondary);
  margin-bottom: 30px;
  font-size: 0.95rem;
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
    padding: 20px;
  }
}
</style>
