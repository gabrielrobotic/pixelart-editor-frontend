import { usePanelsStore } from '../stores/panels'

export function usePanels() {
  const panelsStore = usePanelsStore()
  panelsStore.setPanels([
    { id: 'aside-left', hidden: false },
    { id: 'aside-center-down', hidden: false },
    { id: 'aside-right', hidden: false },
  ])

  function isPanelsEmpty(): boolean {
    return !!panelsStore.panels?.length
  }

  function isPanelHidden(id: string): boolean {
    return !!panelsStore.panels?.find((panel) => panel.id === id)?.hidden
  }

  return {
    isPanelsEmpty,
    isPanelHidden,
  }
}
