import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useViewportStore = defineStore('viewport', () => {
  const width = ref(600)
  function setWidth(value: number) {
    width.value = value
  }

  const height = ref(400)
  function setHeight(value: number) {
    height.value = value
  }

  const zoom = ref(1)
  function setZoom(value: number) {
    zoom.value = value
  }

  const offsetX = ref(0)
  function setOffsetX(value: number) {
    offsetX.value = value
  }

  const offsetY = ref(0)
  function setOffsetY(value: number) {
    offsetY.value = value
  }

  return {
    width,
    height,
    zoom,
    offsetX,
    offsetY,
    setWidth,
    setHeight,
    setZoom,
    setOffsetX,
    setOffsetY,
  }
})
