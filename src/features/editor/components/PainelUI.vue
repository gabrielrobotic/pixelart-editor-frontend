<script setup lang="ts"></script>

<template>
  <section id="painel-container">
    <slot id="painel-content"></slot>
  </section>
</template>

<style scoped>
#painel-container {
  width: 100%;
  height: 100%;
  padding: 0.25rem 0.5rem;
  display: flex;
  background-color: #d8d8d8;
  border-radius: 0.6rem;
}
</style>
