<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import { useCanvasContext } from '../composables/useCanvasContext'
import { useCanvasResize } from '../composables/useCanvasResize'

const viewportContainer = useTemplateRef('viewport-container')
const viewport = useTemplateRef('viewport')
const ctx = ref(useCanvasContext(viewport))

useCanvasResize(viewportContainer, viewport, ctx)
</script>

<template>
  <div id="viewport-container" ref="viewport-container">
    <canvas id="viewport" ref="viewport"></canvas>
  </div>
</template>

<style scoped>
#viewport-container {
  flex-grow: 1;
  width: 100%;
  display: flex;
  overflow: hidden;
}

#viewport {
  width: 100%;
  border: 1px solid red;
}
</style>
