<script setup lang="ts">
import PainelUI from '@/features/editor/components/PainelUI.vue';
import ViewportUI from '@/features/editor/components/ViewportUI.vue'
</script>

<template>
  <div class="container pos-relative">
    <ViewportUI class="pos-relative" />
    <div class="pos-absolute layout">
      <aside id="aside-left-ui">
        <PainelUI></PainelUI>
      </aside>
      <aside id="aside-center-down-ui">
        <PainelUI></PainelUI>
      </aside>
      <aside id="aside-right-ui">
        <PainelUI></PainelUI>
      </aside>
    </div>
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
}

#aside-left-ui {
  grid-area: left;
  display: flex;
}

#aside-center-down-ui {
  grid-area: center-down;
  display: flex;
}

#aside-right-ui {
  grid-area: right;
  display: flex;
}
</style>
