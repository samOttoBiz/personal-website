import { createContext, useContext, useEffect, useState } from 'react'
import { useScroll, useSpring, useTransform, useVelocity } from 'framer-motion'

const ScrollCtx = createContext(null)

export function ScrollProvider({ children, mountainRef }) {
  const { scrollYProgress: pageProgress } = useScroll()

  const { scrollYProgress: mountainProgress } = useScroll({
    target: mountainRef,
    offset: ['start start', 'end end'],
  })

  const smoothProgress = useSpring(mountainProgress, {
    stiffness: 70,
    damping: 22,
    restDelta: 0.001,
  })

  const [mountainRangePx, setMountainRangePx] = useState(
    typeof window !== 'undefined' ? window.innerHeight : 720
  )

  useEffect(() => {
    if (typeof window === 'undefined') return

    const measure = () => {
      const node = mountainRef?.current
      if (!node) return
      const range = Math.max(node.offsetHeight - window.innerHeight, window.innerHeight)
      setMountainRangePx(range)
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [mountainRef])

  const mountainScrollPx = useTransform(smoothProgress, [0, 1], [0, mountainRangePx])

  const scrollYProgress = pageProgress
  const scrollPx = mountainScrollPx
  const scrollVelocity = useVelocity(mountainProgress)

  return (
    <ScrollCtx.Provider
      value={{
        mountainProgress,
        smoothProgress,
        mountainScrollPx,
        mountainRangePx,
        pageProgress,
        scrollYProgress,
        scrollPx,
        scrollVelocity,
      }}
    >
      {children}
    </ScrollCtx.Provider>
  )
}

export function useScrollContext() {
  const ctx = useContext(ScrollCtx)
  if (!ctx) throw new Error('useScrollContext must be used inside ScrollProvider')
  return ctx
}