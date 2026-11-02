import { useCallback } from 'react'
import { BOOKING_SECTION_ID } from '../data/site'

export function useScrollTo() {
  return useCallback((targetId: string) => {
    const el = document.getElementById(targetId)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])
}

export function scrollToBooking() {
  document.getElementById(BOOKING_SECTION_ID)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
