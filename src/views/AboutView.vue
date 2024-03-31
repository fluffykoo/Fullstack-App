<template>
  <div class="app">
    <div class="about container">
      <!-- Le reste de votre code -->
    </div>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.about.container {
  max-width: 400px;
  padding: 2rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  margin: auto;
}

@media (min-width: 1024px) {
  .about.container {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>