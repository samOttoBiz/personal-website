import { useRef } from 'react'
import { useTransform, useMotionValueEvent } from 'framer-motion'
import { useScrollContext } from '../context/ScrollContext'

export default function TerrainCanvas() {
  const { scrollPx, smoothProgress } = useScrollContext()
  const distRef = useRef(null)
  const midRef = useRef(null)
  const rocksRef = useRef(null)

  const maxPx = typeof window !== 'undefined' ? window.innerHeight * 9 : 6480

  // Distant mountains: 0.05x parallax
  const distY = useTransform(scrollPx, [0, maxPx], [0, -maxPx * 0.05])
  // Mid mountains: 0.12x parallax
  const midY = useTransform(scrollPx, [0, maxPx], [0, -maxPx * 0.12])

  useMotionValueEvent(distY, 'change', (v) => {
    if (distRef.current) distRef.current.setAttribute('transform', `translate(0,${v})`)
  })
  useMotionValueEvent(midY, 'change', (v) => {
    if (midRef.current) midRef.current.setAttribute('transform', `translate(0,${v})`)
  })

  // Rocky outcrops appear at scroll 30%+
  useMotionValueEvent(smoothProgress, 'change', (v) => {
    if (rocksRef.current) {
      const opacity = v < 0.28 ? 0 : v > 0.40 ? 0.85 : ((v - 0.28) / 0.12) * 0.85
      rocksRef.current.style.opacity = opacity
    }
  })

  return (
    <svg
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        pointerEvents: 'none',
        willChange: 'transform',
        overflow: 'visible',
      }}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Distant ridge 1 — slowest */}
      <g ref={distRef}>
        <polygon
          points="0,900 80,580 200,650 360,490 520,600 700,440 880,560 1060,480 1240,540 1440,510 1440,900"
          fill="rgba(45,80,22,0.06)"
        />
        {/* Second distant layer */}
        <polygon
          points="0,900 140,620 300,680 480,520 660,630 840,470 1020,590 1200,510 1380,570 1440,540 1440,900"
          fill="rgba(196,134,42,0.04)"
        />
      </g>

      {/* Mid range mountains — amber tint for morning glow */}
      <g ref={midRef}>
        <polygon
          points="0,900 60,700 180,730 320,660 480,710 640,640 800,690 960,650 1100,680 1280,655 1440,670 1440,900"
          fill="rgba(45,80,22,0.08)"
        />
        <polygon
          points="0,900 100,740 240,760 400,700 560,745 720,680 880,720 1040,700 1200,720 1380,705 1440,710 1440,900"
          fill="rgba(196,134,42,0.05)"
        />
      </g>

      {/* Rocky outcrops — appear as we go above treeline */}
      <g ref={rocksRef} style={{ opacity: 0, transition: 'opacity 0.4s ease' }}>
        {/* Large boulder left */}
        <polygon
          points="180,820 240,760 310,820"
          fill="rgba(160,140,120,0.25)"
          stroke="rgba(160,140,120,0.12)"
          strokeWidth="1"
        />
        {/* Rock cluster center-left */}
        <polygon
          points="480,840 520,795 565,840"
          fill="rgba(160,140,120,0.20)"
        />
        <polygon
          points="510,840 545,810 575,840"
          fill="rgba(140,120,100,0.18)"
        />
        {/* Boulders right */}
        <polygon
          points="1050,830 1110,775 1175,830"
          fill="rgba(160,140,120,0.22)"
          stroke="rgba(160,140,120,0.10)"
          strokeWidth="1"
        />
        <polygon
          points="1200,845 1250,800 1295,845"
          fill="rgba(140,120,100,0.19)"
        />
        {/* Scattered small rocks */}
        {[320, 650, 800, 920, 1350].map((rx, i) => (
          <ellipse key={i} cx={rx} cy={860} rx={18 + i * 3} ry={8} fill="rgba(140,120,100,0.14)" />
        ))}
      </g>
    </svg>
  )
}
