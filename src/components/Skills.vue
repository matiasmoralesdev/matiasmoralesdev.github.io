<template>
  <section class="section skills-section">
    <div class="container">
      <h2 class="section-title">Skills</h2>
      <div class="skills-grid">
        <div 
          v-for="skill in skills" 
          :key="skill.category"
          class="skill-card"
        >
          <h3>{{ skill.category }}</h3>
          <div class="skill-items">
            <span v-for="item in skill.items" :key="item" class="skill-item">
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { SkillCategory } from '../types'

const skills: SkillCategory[] = [
  {
    category: 'Lenguajes de Programación',
    items: ['C#', 'JavaScript', 'TypeScript', 'Java', 'PHP', 'Python']
  },
  {
    category: 'Frontend',
    items: ['React', 'Vue.js', 'Angular', 'HTML5', 'CSS3', 'Tailwind']
  },
  {
    category: 'Backend',
    items: ['ASP.NET Core', '.NET Framework', 'Node.js', 'Express', 'NestJS']
  },
  {
    category: 'Bases de Datos',
    items: ['SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB']
  },
  {
    category: 'DevOps & Tools',
    items: ['Docker', 'Git', 'CI/CD', 'Azure', 'Linux']
  }
]
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.skill-card {
  background: var(--bg-secondary);
  padding: 25px;
  border-radius: 10px;
  border-top: 3px solid var(--accent);
  transition: var(--transition);
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow);
}

.skill-card h3 {
  margin-bottom: 15px;
  font-size: 1.1rem;
}

.skill-items {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-item {
  background: var(--bg-primary);
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  border: 1px solid var(--border);
  transition: var(--transition);
}

.skill-item:hover {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.5rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
