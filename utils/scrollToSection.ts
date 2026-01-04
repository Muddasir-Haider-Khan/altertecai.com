export type ScrollToSectionOptions = {
  offset?: number
  behavior?: ScrollBehavior
}

/**
 * Smoothly scroll to an element by id, accounting for a fixed header offset.
 * Usage: scrollToSection("cta") or scrollToSection("#cta", { offset: 80 })
 */
export function scrollToSection(id: string, options: ScrollToSectionOptions = {}): void {
  if (typeof window === "undefined" || typeof document === "undefined") return

  const { offset = 80, behavior = "smooth" } = options
  const cleanId = id.startsWith("#") ? id.slice(1) : id
  const el = document.getElementById(cleanId)

  if (!el) {
    // Fallback: update hash if element is not found
    try {
      window.location.hash = `#${cleanId}`
    } catch {
      // no-op
    }
    return
  }

  const targetTop = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top: targetTop, behavior })
}
