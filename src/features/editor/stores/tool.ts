import { ToolType } from '@/types/enums'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSelectedToolStore = defineStore('selectedTool', () => {
  const tool = ref(ToolType.Pencil)
  function setTool(value: ToolType) {
    tool.value = value
  }

  const primaryColor = ref('black')
  function setPrimaryColor(value: string) {
    primaryColor.value = value
  }

  const secondaryColor = ref('transparent')
  function setSecondaryColor(value: string) {
    secondaryColor.value = value
  }

  const size = ref(1)
  function setSize(value: number) {
    size.value = value
  }

  return {
    tool,
    primaryColor,
    secondaryColor,
    size,
    setTool,
    setPrimaryColor,
    setSecondaryColor,
    setSize,
  }
})
