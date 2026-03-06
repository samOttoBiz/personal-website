import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/**
 * WaypointMarker — appears at the top-left corner of each section.
 * Activates (pulses, fills) as the section scrolls into view.
 *
 * Props:
 *   number  — "1" through "7"
 *   label   — "Trailhead", "First Climb", etc.
 */
export default function WaypointMarker({ number, label }) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.35'],
  })

  const scale       = useTransform(scrollYProgress, [0, 1], [0.4, 1])
  const opacity     = useTransform(scrollYProgress, [0, 0.4], [0, 1])
  const ringScale   = useTransform(scrollYProgress, [0.7, 1.0], [1, 1.8])
  const ringOpacity = useTransform(scrollYProgress, [0.7, 1.0], [0.7, 0])

  return (
    <div
      ref={ref}
      className="waypoint-marker"
      aria-hidden="true"
      style={{
        position: 'absolute',
        left: '0',
        top: '0',
        width: '22px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        pointerEvents: 'none',
        zIndex: 5,
      }}
    >
      {/* Pulse ring */}
      <motion.div
        style={{
          position: 'absolute',
          width: '22px',
          height: '22px',
          borderRadius: '50%',
          border: '1.5px solid var(--color-green)',
          scale: ringScale,
          opacity: ringOpacity,
        }}
      />

      {/* Filled dot */}
      <motion.div
        style={{
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          background: 'var(--color-green)',
          border: '2px solid var(--color-bg)',
          boxShadow: '0 0 0 1.5px var(--color-green)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          scale,
          opacity,
          flexShrink: 0,
        }}
      >
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '7px',
          fontWeight: 700,
          color: 'var(--color-bg)',
          lineHeight: 1,
          userSelect: 'none',
        }}>
          {number}
        </span>
      </motion.div>

      {/* Vertical label */}
      <motion.span
        className="waypoint-label"
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '9px',
          fontWeight: 500,
          letterSpacing: '0.07em',
          textTransform: 'uppercase',
          color: 'var(--color-green)',
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          whiteSpace: 'nowrap',
          opacity,
          marginTop: '4px',
        }}
      >
        {label}
      </motion.span>
    </div>
  )
}
