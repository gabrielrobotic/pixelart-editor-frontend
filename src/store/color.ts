import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSelectedColor = defineStore('selectedColor', () => {
  const primaryColor = ref('black')
  function setPrimaryColor(value: string) {
    primaryColor.value = value
  }

  const secondaryColor = ref('transparent')
  function setSecondaryColor(value: string) {
    secondaryColor.value = value
  }

  return {
    primaryColor,
    secondaryColor,
    setPrimaryColor,
    setSecondaryColor,
  }
})
