<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="profile-info">
          <h1>Matías Alberto Morales</h1>
          <p class="subtitle">Full Stack Developer</p>
        </div>
        <button @click="$emit('toggle-theme')" class="theme-toggle" :title="isDarkMode ? 'Light mode' : 'Dark mode'">
          {{ isDarkMode ? '☀️' : '🌙' }}
        </button>
      </div>

      <!-- Links sociales -->
      <div class="social-links">
        <a href="https://linkedin.com/in/matiasmoralesdev" target="_blank" rel="noopener noreferrer" class="social-link linkedin" title="LinkedIn">
          LinkedIn
        </a>
        <a href="https://github.com/matiasmoralesdev" target="_blank" rel="noopener noreferrer" class="social-link github" title="GitHub">
          GitHub
        </a>
        <a href="mailto:matiasmorales.dev@gmail.com" class="social-link email" title="Email">
          Email
        </a>
        <a href="tel:+5492995270858" class="social-link phone" title="Phone">
          +54 299 5270858
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  isDarkMode: boolean
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
}

.profile-info h1 {
  font-size: 2.5rem;
  margin-bottom: 5px;
  background: linear-gradient(135deg, var(--accent), #00a8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  color: var(--text-secondary);
  font-size: 1.1rem;
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
  cursor: pointer;
}

.social-link:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow);
  opacity: 0.9;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 20px;
  }

  .profile-info h1 {
    font-size: 1.8rem;
  }

  .social-links {
    justify-content: center;
    width: 100%;
  }
}
</style>
