<template>
    <section class="section courses-section">
        <div class="container">
            <h2 class="section-title">Cursos y Certificaciones</h2>
            <div class="courses-grid">
                <div v-for="course in courses" :key="course.name" class="course-card">
                    <h3>{{ course.name }}</h3>
                    <p>{{ course.institution }} - {{ course.year }}</p>
                    <p>{{ course.description }}</p>
                    <div v-if="course.certifications && course.certifications.length">
                        <a v-for="certification in course.certifications" :key="certification.name"
                            :href="certification.url" target="_blank" rel="noopener noreferrer"
                            class="certificate-link">
                            Ver Certificado: {{ certification.name }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script setup lang="ts">
import type { Courses } from '../types'

defineProps<{
    courses: Courses[]
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

.courses-grid {
    display: grid;
    gap: 20px;
}

.course-card {
    background: var(--bg-secondary);
    padding: 20px;
    border-radius: 10px;
    border-left: 4px solid var(--accent);
    transition: var(--transition);
}

.course-card:hover {
    box-shadow: var(--shadow);
    transform: translateX(5px);
}

.course-card h3 {
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