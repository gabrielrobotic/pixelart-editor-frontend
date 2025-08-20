import { onMounted, onUnmounted, type Ref } from 'vue'
import { useViewportStore } from '../stores/viewport'

export function useCanvasResize(
  viewportContainer: Ref<HTMLDivElement | null>,
  viewport: Ref<HTMLCanvasElement | null>,
  ctx: Ref<CanvasRenderingContext2D | null>,
) {
  const viewportStore = useViewportStore()
  let resizeObserver: ResizeObserver | null = null

  function resizeCanvas() {
    if (!viewport.value || !ctx.value) return
    viewport.value.width = viewportStore.width
    viewport.value.height = viewportStore.height
    ctx.value.imageSmoothingEnabled = false
  }

  onMounted(() => {
    resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect
        viewportStore.setWidth(width)
        viewportStore.setHeight(height)
      }
      resizeCanvas()
    })
    resizeObserver.observe(viewportContainer.value!)
  })

  onUnmounted(() => {
    resizeObserver?.disconnect()
  })
}
