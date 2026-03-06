import { useRef, useCallback } from 'react'
import { useMotionValueEvent } from 'framer-motion'
import { useScrollContext } from '../context/ScrollContext'
import { interpolateSkyColors, SKY_STOPS } from '../hooks/useColorInterpolate'

export default function SkyCanvas() {
  const { smoothProgress } = useScrollContext()
  const ref = useRef(null)
  const lastProgress = useRef(-1)

  const update = useCallback((v) => {
    if (!ref.current) return
    if (Math.abs(v - lastProgress.current) < 0.003) return
    lastProgress.current = v

    const { top, bottom } = interpolateSkyColors(v, SKY_STOPS)
    ref.current.style.background = `linear-gradient(to bottom, ${top}, ${bottom})`
  }, [])

  useMotionValueEvent(smoothProgress, 'change', update)

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        // Initial sky — pre-dawn
        background: 'linear-gradient(to bottom, #1A1625, #4A2E4A)',
        pointerEvents: 'none',
      }}
    />
  )
}
