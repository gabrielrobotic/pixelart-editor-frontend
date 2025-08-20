export function useCanvasContext(viewport: {
  value: HTMLCanvasElement | null
}): CanvasRenderingContext2D | null {
  if (!viewport.value) return null
  const ctx = viewport.value.getContext('2d')
  if (!ctx) throw new Error('Falha ao obter contexto 2D')
  return ctx
}
