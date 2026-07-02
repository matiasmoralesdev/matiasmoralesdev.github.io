<template>
    <section class="section courses-section">
        <div class="container">
            <h2 class="section-title">Cursos y Certificaciones</h2>
            <div class="courses-list">
                <div v-for="course in courses" :key="course.name" class="course-card">
                    <h3>{{ course.name }}</h3>
                    <p class="institution">{{ course.institution }}</p>
                    <p class="year">{{ course.year }}</p>
                    <p class="description">{{ course.description }}</p>
                    
                    <div v-if="course.certifications && course.certifications.length" class="certifications">
                        <div v-for="certification in course.certifications" :key="certification.name" class="certification-item">
                            <a :href="certification.url" target="_blank" rel="noopener noreferrer" class="cert-link">
                                <img v-if="certification.thumbnail" :src="certification.thumbnail" :alt="certification.name" class="cert-thumbnail" />
                                <div v-else class="cert-icon">
                                    <Icon icon="mdi:trophy" />
                                </div>
                                <span class="cert-name">{{ certification.name }}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { Courses } from '../types'
import { Icon } from '@iconify/vue'

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
    margin-bottom: 10px;
}

.description {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 15px;
}

.certifications {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 15px;
}

.certification-item {
    display: flex;
}

.cert-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 10px;
    border-radius: 8px;
    background: var(--bg-primary);
    text-decoration: none;
    transition: var(--transition);
    color: var(--text-secondary);
    font-size: 0.75rem;
    text-align: center;
    max-width: 100px;
}

.cert-link:hover {
    background: var(--accent);
    color: white;
    transform: scale(1.05);
}

.cert-thumbnail {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 4px;
    border: 1px solid var(--border);
}

.cert-icon {
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    border: 1px solid var(--accent);
    color: var(--accent);
    font-size: 2rem;
}

.cert-name {
    font-weight: 500;
}

@media (max-width: 768px) {
    .section-title {
        font-size: 1.5rem;
    }
}
</style>