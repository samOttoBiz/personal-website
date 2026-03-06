/**
 * useParallaxY(speed)
 *
 * Returns a MotionValue representing the vertical parallax offset for a fixed layer.
 * speed: multiplier (0 = stationary, 1 = full scroll speed, 0.5 = half speed)
 *
 * Usage:
 *   const y = useParallaxY(0.22)
 *   <motion.div style={{ y }} />
 */

import { useTransform } from 'framer-motion'
import { useScrollContext } from '../context/ScrollContext'

export function useParallaxY(speed) {
  const { scrollPx } = useScrollContext()
  const maxPx = typeof window !== 'undefined' ? window.innerHeight * 7 : 5040
  return useTransform(scrollPx, [0, maxPx], [0, -maxPx * speed])
}
