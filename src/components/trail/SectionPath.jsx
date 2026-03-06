import { useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

/**
 * SectionPath — a winding trail path connector at the bottom of sections.
 * Draws into view as it enters the viewport, creating a "trail continues" feel.
 *
 * Props:
 *   variant — 'left' | 'center' | 'right'  (where the path winds toward)
 */

const pathData = {
  left:   "M -20 70 C 200 30, 400 60, 600 40 C 800 20, 1000 55, 1460 35",
  center: "M -20 55 C 300 20, 600 65, 720 40 C 840 15, 1100 60, 1460 45",
  right:  "M -20 35 C 400 55, 800 20, 1000 50 C 1200 70, 1300 30, 1460 60",
}

export default function SectionPath({ variant = 'center' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start({ pathLength: 1 })
    }
  }, [isInView, controls])

  const d = pathData[variant] || pathData.center

  return (
    <div
      ref={ref}
      className="section-path"
      aria-hidden="true"
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '80px',
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        {/* Ghost dashed path */}
        <path
          d={d}
          fill="none"
          stroke="rgba(45, 80, 22, 0.12)"
          strokeWidth="1.5"
          strokeDasharray="8 5"
        />

        {/* Animated draw path */}
        <motion.path
          d={d}
          fill="none"
          stroke="rgba(45, 80, 22, 0.28)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={controls}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  )
}
