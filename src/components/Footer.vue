<template>
  <footer class="footer">
    <div class="container">
      <p>© 2026 Matías Morales. Todos los derechos reservados.</p>
      <p>Diseñado y desarrollado por <a href="https://matiasmoralesdev.github.io" target="_blank"
          rel="noopener noreferrer">Matías Morales</a> en <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js</a></p>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer {
  background: var(--bg-secondary);
  padding: 30px;
  text-align: center;
  color: var(--text-secondary);
  border-top: 1px solid var(--border);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

a {
  color: var(--accent);
  text-decoration: none;
  transition: var(--transition);
}
</style>
