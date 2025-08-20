import { ToolType } from '@/types/enums'

export function useToolLogic(tool: ToolType) {
  switch (tool) {
    case ToolType.Pencil:
      return pencil
    case ToolType.Brush:
      return brush
  }
}

function pencil() {}

function brush() {}
