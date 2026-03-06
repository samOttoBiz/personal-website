/**
 * useReveal(topVh, options)
 *
 * Returns { y, opacity } motion values for an element positioned at `topVh`
 * viewport-heights down the absolute scroll canvas.
 *
 * The element starts hidden (shifted down) and reveals as the user scrolls into it.
 *
 * Usage:
 *   const { opacity, y } = useReveal(145)
 *   <motion.div style={{ opacity, y }}>...</motion.div>
 */

import { useTransform } from 'framer-motion'
import { useScrollContext } from '../context/ScrollContext'

export function useReveal(topVh, options = {}) {
  const { windowEnter = 0.72, windowExit = 0.42, yOffset = 28 } = options
  const { scrollPx } = useScrollContext()

  const vh = typeof window !== 'undefined' ? window.innerHeight : 720
  const topPx = (topVh * vh) / 100

  const revealProgress = useTransform(
    scrollPx,
    [topPx - vh * windowEnter, topPx - vh * windowExit],
    [0, 1],
    { clamp: true }
  )

  const y       = useTransform(revealProgress, [0, 1], [yOffset, 0])
  const opacity = useTransform(revealProgress, [0, 1], [0, 1])

  return { y, opacity, revealProgress }
}
