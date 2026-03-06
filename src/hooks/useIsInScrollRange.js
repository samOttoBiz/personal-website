/**
 * useIsInScrollRange(startPct, endPct, buffer)
 *
 * Returns a numeric opacity (0–1) based on mountainProgress position.
 * - Fades IN over [startPct - buffer, startPct] (leading edge)
 * - Fully visible over [startPct, endPct - fadeOut]
 * - Fades OUT over [endPct - fadeOut, endPct + fadeOut] (trailing edge)
 *
 * Using opacity-based culling instead of hard null returns means:
 * - No abrupt disappearance mid-read
 * - Content has natural dwell time at both edges
 * - Components stay mounted through the full fade-out
 *
 * mountainProgress goes 0→1 over the 1000vh <main> canvas ONLY,
 * independent of post-canvas content (TrailheadGrid, CloudSunrise, etc).
 *
 * startPct, endPct: 0–1 (fraction of mountain canvas scroll)
 * buffer: leading-edge pre-render padding (default 0.10)
 * fadeOut: trailing-edge fade window (default 0.03)
 *
 * Beat positions (mountain-only):
 *   Hero:    0vh   — 0.00–0.15
 *   Origin:  100vh — 0.08–0.30
 *   Pivot:   260vh — 0.24–0.48
 *   Work:    410vh — 0.38–0.62
 *   People:  660vh — 0.61–0.81
 *   Human:   780vh — 0.73–0.92
 *   Summit:  880vh — 0.86–1.00
 */

import { useState, useEffect } from 'react'
import { useScrollContext } from '../context/ScrollContext'

/**
 * Returns a boolean (true = should render).
 * Component is mounted from (startPct - buffer) to (endPct + fadeOut)
 * giving a wider window to avoid abrupt removal.
 */
export function useIsInScrollRange(startPct, endPct, buffer = 0.10) {
  const { mountainProgress } = useScrollContext()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const lo = Math.max(0, startPct - buffer)
    const hi = endPct + 0.04   // small trailing mount window so fade-out completes

    return mountainProgress.on('change', (v) => {
      setVisible(v >= lo && v <= hi)
    })
  }, [mountainProgress, startPct, endPct, buffer])

  return visible
}

/**
 * Returns a 0–1 opacity value for smooth fade in/out at range edges.
 * Use this to drive the `opacity` style on the beat's root element.
 */
export function useScrollRangeOpacity(startPct, endPct, buffer = 0.10, fadeOut = 0.03) {
  const { mountainProgress } = useScrollContext()
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const fadeInStart  = Math.max(0, startPct - buffer)
    const fadeInEnd    = startPct
    const fadeOutStart = endPct - fadeOut
    const fadeOutEnd   = endPct + fadeOut

    return mountainProgress.on('change', (v) => {
      if (v < fadeInStart || v > fadeOutEnd) {
        setOpacity(0)
      } else if (v <= fadeInEnd) {
        // Fade in
        const t = (v - fadeInStart) / (fadeInEnd - fadeInStart || 0.001)
        setOpacity(Math.max(0, Math.min(1, t)))
      } else if (v >= fadeOutStart) {
        // Fade out
        const t = (v - fadeOutStart) / (fadeOutEnd - fadeOutStart || 0.001)
        setOpacity(Math.max(0, Math.min(1, 1 - t)))
      } else {
        setOpacity(1)
      }
    })
  }, [mountainProgress, startPct, endPct, buffer, fadeOut])

  return opacity
}
