<script setup lang="ts">
import { usePanels } from '../composables/usePanels'
import PanelUI from './PanelUI.vue'

const { isPanelsEmpty, isPanelHidden } = usePanels()
</script>

<template>
  <div v-if="isPanelsEmpty()" class="layout">
    <aside id="aside-left">
      <PanelUI v-if="isPanelHidden('aside-left')"></PanelUI>
    </aside>
    <aside id="aside-center-down">
      <PanelUI v-if="isPanelHidden('aside-center-down')"></PanelUI>
    </aside>
    <aside id="aside-right">
      <PanelUI v-if="isPanelHidden('aside-right')"></PanelUI>
    </aside>
  </div>
</template>

<style scoped>
.layout {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(150px, 200px) minmax(250px, auto) minmax(150px, 200px);
  grid-template-rows: auto minmax(200px, 220px);
  grid-template-areas:
    'left center-up right'
    'left center-down right';
  gap: 0.25rem;
  padding: 0.25rem;
  pointer-events: none;
}

aside {
  pointer-events: all;
}

#aside-left {
  grid-area: left;
  display: flex;
}

#aside-center-down {
  grid-area: center-down;
  display: flex;
}

#aside-right {
  grid-area: right;
  display: flex;
}
</style>
