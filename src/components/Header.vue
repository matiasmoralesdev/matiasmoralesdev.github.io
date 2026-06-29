<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <!-- Profile Image -->
        <div class="profile-section">
          <img v-if="profile.image" :src="profile.image" :alt="profile.name" class="profile-image" />
          <div class="profile-info">
            <h1>{{ profile.name }}</h1>
            <p class="subtitle">{{ profile.title }}</p>
          </div>
        </div>

        <!-- Theme Toggle & CV Download -->
        <div class="actions">
          <a v-if="profile.cvPdf" :href="profile.cvPdf" download class="download-cv-btn" title="Descargar CV">
            📄 Descargar CV
          </a>
          <button @click="$emit('toggle-theme')" class="theme-toggle" :title="isDarkMode ? 'Light mode' : 'Dark mode'">
            {{ isDarkMode ? '☀️' : '🌙' }}
          </button>
        </div>
      </div>

      <!-- Social Links -->
      <div class="social-links">
        <a v-for="link in profile.socialLinks" :key="link.platform" :href="link.url" target="_blank"
          rel="noopener noreferrer" class="social-link" :title="link.platform">
          <Icon :icon="link.icon" class="social-icon" />
          {{ link.platform }}
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import type { ProfileData } from '../types/curriculum'

defineProps<{
  isDarkMode: boolean
  profile: ProfileData
}>()

defineEmits<{
  'toggle-theme': []
}>()
</script>

<style scoped>
.header {
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border);
  padding: 40px 0;
  box-shadow: var(--shadow);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 20px;
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 20px;
}

.profile-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--accent);
  flex-shrink: 0;
  box-shadow: var(--shadow);
}

.profile-info h1 {
  font-size: 2rem;
  margin-bottom: 5px;
  background: linear-gradient(135deg, var(--accent), #00a8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  color: var(--text-secondary);
  font-size: 1rem;
}

.actions {
  display: flex;
  gap: 15px;
  align-items: center;
}

.download-cv-btn {
  background: var(--accent);
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 2px solid var(--accent);
}

.download-cv-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
  opacity: 0.9;
}

.theme-toggle {
  background: var(--accent);
  border: none;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
}

.theme-toggle:hover {
  transform: scale(1.1);
  box-shadow: var(--shadow);
}

.social-links {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 25px;
  background: var(--accent);
  color: white;
  text-decoration: none;
  transition: var(--transition);
  font-size: 0.9rem;
  font-weight: 500;
}

.social-link:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow);
  opacity: 0.9;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .profile-image {
    width: 60px;
    height: 60px;
  }

  .profile-info h1 {
    font-size: 1.5rem;
  }

  .actions {
    width: 100%;
    justify-content: space-between;
  }

  .download-cv-btn {
    font-size: 0.85rem;
    padding: 8px 16px;
  }

  .social-links {
    width: 100%;
  }
}
</style>
