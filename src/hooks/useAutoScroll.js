import { useEffect, useRef } from 'react'

export default function useAutoScroll(ref, deps = []) {
  const isScrollingRef = useRef(false)
  const scrollTimeoutRef = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Clear any pending scroll
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }

    // Only auto-scroll if user is near bottom (within 100px)
    const isNearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 100

    if (isNearBottom && !isScrollingRef.current) {
      isScrollingRef.current = true
      
      // Use requestAnimationFrame for smoother scrolling
      requestAnimationFrame(() => {
        el.scrollTo({ 
          top: el.scrollHeight, 
          behavior: 'smooth' 
        })
        
        // Reset scrolling flag after animation completes
        scrollTimeoutRef.current = setTimeout(() => {
          isScrollingRef.current = false
        }, 500)
      })
    }

    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}