import { useEffect, useRef, useState } from 'react'

type UseInViewOptions = {
  once?: boolean
  rootMargin?: string
  threshold?: number
}

export const useInView = (options: UseInViewOptions = {}) => {
  const { once = true, rootMargin = '0px', threshold = 0.15 } = options
  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return

        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        }
      },
      { rootMargin, threshold }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [once, rootMargin, threshold])

  return { ref, inView }
}

