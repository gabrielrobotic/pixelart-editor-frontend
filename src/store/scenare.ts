import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWorldMeasuresStore = defineStore('worldMeasures', () => {
  const pixelSize = ref(12)
  function setPixelSize(value: number) {
    pixelSize.value = value
  }

  const quadrantSize = ref(4096)
  function setQuadrantSize(value: number) {
    quadrantSize.value = value
  }

  return {
    pixelSize,
    quadrantSize,
    setPixelSize,
    setQuadrantSize,
  }
})

export const useWorldStylesStore = defineStore('worldStyles', () => {
  const xAxisColor = ref('red')
  function setXAxisColor(value: string) {
    xAxisColor.value = value
  }

  const yAxisColor = ref('green')
  function setYAxisColor(value: string) {
    yAxisColor.value = value
  }

  const backgroundColor = ref('gray')
  function setBackgroundColor(value: string) {
    backgroundColor.value = value
  }

  const dotColor = ref('black')
  function setDotColor(value: string) {
    dotColor.value = value
  }

  return {
    xAxisColor,
    yAxisColor,
    backgroundColor,
    dotColor,
    setXAxisColor,
    setYAxisColor,
    setBackgroundColor,
    setDotColor,
  }
})

export const useGridMeasuresStore = defineStore('gridMeasures', () => {
  const x = ref(0)
  function setX(value: number) {
    x.value = value
  }

  const y = ref(0)
  function setY(value: number) {
    y.value = value
  }

  const width = ref(8)
  function setWidth(value: number) {
    width.value = value
  }

  const height = ref(8)
  function setHeight(value: number) {
    height.value = value
  }

  return {
    x,
    y,
    width,
    height,
    setX,
    setY,
    setWidth,
    setHeight,
  }
})

export const useGridStylesStore = defineStore('gridStyles', () => {
  const backgroundColor = ref('transparent')
  function setBackgroundColor(value: string) {
    backgroundColor.value = value
  }

  const edgeColor = ref('black')
  function setEdgeColor(value: string) {
    edgeColor.value = value
  }

  return {
    backgroundColor,
    edgeColor,
    setBackgroundColor,
    setEdgeColor,
  }
})
