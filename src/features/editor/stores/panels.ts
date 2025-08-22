import { defineStore } from 'pinia'
import type { Panel } from '../types/interfaces'
import { ref } from 'vue'

export const usePanelsStore = defineStore('panels', () => {
  const panels = ref<Panel[]>()
  function setPanels(value: Panel[]) {
    panels.value = value
  }

  return {
    panels,
    setPanels,
  }
})
