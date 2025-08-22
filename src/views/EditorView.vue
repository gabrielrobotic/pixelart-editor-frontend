<script setup lang="ts">
import PanelsUI from '@/features/editor/components/PanelsUI.vue';
import ViewportUI from '@/features/editor/components/ViewportUI.vue'
</script>

<template>
  <div class="container pos-relative">
    <ViewportUI class="pos-relative" />
    <PanelsUI class="pos-absolute"/>
  </div>
</template>

<style scoped>
.container {
  flex-grow: 1;
  display: flex;
}

.pos-relative {
  position: relative;
}

.pos-absolute {
  position: absolute;
}
</style>
