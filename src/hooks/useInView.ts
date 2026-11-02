import { useEffect, useRef, useState, type RefObject } from 'react'

type Options = {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useInView<T extends HTMLElement>(
  options: Options = {},
): [RefObject<T | null>, boolean] {
  const { threshold = 0.12, rootMargin = '0px 0px -8% 0px', once = true } = options
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, visible]
}
