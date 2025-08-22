<script setup lang="ts"></script>

<template>
  <section id="panel-container">
    <slot id="panel-content"></slot>
  </section>
</template>

<style scoped>
#panel-container {
  width: 100%;
  height: 100%;
  padding: 0.25rem 0.5rem;
  display: flex;
  background-color: #d8d8d8;
  border-radius: 0.6rem;
}
</style>
