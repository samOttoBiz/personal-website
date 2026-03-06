import { useRef } from 'react'
import { motion, useMotionValueEvent } from 'framer-motion'
import { useScrollContext } from '../context/ScrollContext'

export default function SummitPanorama() {
  const { smoothProgress } = useScrollContext()
  const wrapRef = useRef(null)

  useMotionValueEvent(smoothProgress, 'change', (v) => {
    if (!wrapRef.current) return
    // Fade in at 84%+ scroll, fully visible at 93%, fade out at 99%+
    // (prevents bleeding into post-canvas TrailheadGrid)
    let opacity = 0
    if (v >= 0.84 && v < 0.93) {
      opacity = (v - 0.84) / 0.09
    } else if (v >= 0.93 && v < 0.99) {
      opacity = 1
    } else if (v >= 0.99) {
      opacity = Math.max(0, 1 - (v - 0.99) / 0.01)
    }
    wrapRef.current.style.opacity = opacity
  })

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '45vh',
        zIndex: 1,
        pointerEvents: 'none',
        opacity: 0,
      }}
    >
      <svg
        viewBox="0 0 1440 400"
        preserveAspectRatio="xMidYMax meet"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        {/* Far peaks — cobalt tint */}
        <polygon
          points="0,400 100,240 220,290 360,195 520,265 680,160 850,230 1020,185 1200,250 1380,200 1440,220 1440,400"
          fill="rgba(74,127,168,0.12)"
        />
        {/* Mid peaks */}
        <polygon
          points="0,400 60,295 180,320 310,268 460,310 620,252 780,290 940,265 1100,290 1280,272 1440,280 1440,400"
          fill="rgba(74,127,168,0.16)"
        />
        {/* Near ridge */}
        <polygon
          points="0,400 80,360 200,370 340,348 500,362 660,342 820,358 980,344 1140,358 1300,348 1440,354 1440,400"
          fill="rgba(45,80,22,0.14)"
        />

        {/* Summit peak marker */}
        <motion.circle
          cx={700}
          cy={160}
          r={6}
          fill="rgba(196,134,42,0.80)"
          animate={{ r: [6, 14, 6], opacity: [0.80, 0, 0.80] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <circle
          cx={700}
          cy={160}
          r={10}
          fill="none"
          stroke="rgba(196,134,42,0.30)"
          strokeWidth="1.5"
        />

        {/* Granite texture dots near peak */}
        {[680, 695, 715, 725].map((px, i) => (
          <circle key={i} cx={px} cy={175 + i * 4} r={1.5} fill="rgba(160,140,120,0.25)" />
        ))}

        {/* Summit pine silhouettes far left/right */}
        {[
          { x: 95,   y: 305, h: 28 },
          { x: 112,  y: 305, h: 22 },
          { x: 1330, y: 300, h: 25 },
          { x: 1348, y: 300, h: 30 },
        ].map((t, i) => (
          <g key={i}>
            <polygon
              points={`${t.x},${t.y - t.h} ${t.x - t.h * 0.30},${t.y - t.h * 0.28} ${t.x + t.h * 0.30},${t.y - t.h * 0.28}`}
              fill="rgba(45,80,22,0.35)"
            />
            <polygon
              points={`${t.x},${t.y - t.h * 0.65} ${t.x - t.h * 0.38},${t.y - t.h * 0.18} ${t.x + t.h * 0.38},${t.y - t.h * 0.18}`}
              fill="rgba(45,80,22,0.35)"
            />
            <polygon
              points={`${t.x},${t.y - t.h * 0.40} ${t.x - t.h * 0.44},${t.y - t.h * 0.05} ${t.x + t.h * 0.44},${t.y - t.h * 0.05}`}
              fill="rgba(45,80,22,0.35)"
            />
          </g>
        ))}
      </svg>
    </div>
  )
}
