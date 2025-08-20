import { ToolType } from '@/types/enums'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSelectedToolStore = defineStore('selectedTool', () => {
  const tool = ref(ToolType.Pencil)
  function setTool(value: ToolType) {
    tool.value = value
  }

  return {
    tool,
    setTool,
  }
})
