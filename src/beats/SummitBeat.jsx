import { useTransform } from 'framer-motion'
import { motion } from 'framer-motion'
import { useScrollContext } from '../context/ScrollContext'
import { useIsInScrollRange, useScrollRangeOpacity } from '../hooks/useIsInScrollRange'

// Summit photo at 860vh — canvas is 1000vh total.
// The closing text (SummitClosing) lives in post-canvas normal flow
// so it has unlimited height and never bleeds past the canvas boundary.
const PHOTO_TOP_VH = 860

export default function SummitBeat() {
  // Photo moved to HeroBeat as the opening cinematic background.
  return null
}

// ─── Full-bleed summit photo ────────────────────────────────────────────────

function SummitPhoto({ sectionOpacity }) {
  const { scrollPx } = useScrollContext()
  const vh = typeof window !== 'undefined' ? window.innerHeight : 720
  const topPx = (PHOTO_TOP_VH * vh) / 100

  // Image reveal: fade + descale into view
  const revealProgress = useTransform(
    scrollPx,
    [topPx - vh * 0.55, topPx - vh * 0.12],
    [0, 1],
    { clamp: true }
  )
  const imageOpacity = useTransform(revealProgress, [0, 1], [0, 1])
  const imageScale   = useTransform(revealProgress, [0, 1], [1.06, 1.0])

  // Parallax: image shifts up slightly slower than page scroll
  const parallaxY = useTransform(
    scrollPx,
    [topPx, topPx + vh * 0.6],
    ['0%', '-7%'],
    { clamp: true }
  )

  return (
    <div
      style={{
        position: 'absolute',
        top: `${PHOTO_TOP_VH}vh`,
        left: 0,
        right: 0,
        height: '60vh',
        minHeight: '480px',
        zIndex: 10,
        overflow: 'hidden',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 6%, black 90%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 6%, black 90%, transparent 100%)',
        opacity: sectionOpacity,
        transition: 'opacity 0.4s ease',
      }}
    >
      {/* Photo with reveal + parallax */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '-8% 0',
          opacity: imageOpacity,
          scale: imageScale,
          y: parallaxY,
          willChange: 'transform, opacity',
        }}
      >
        <img
          src="/images/summit.jpg"
          alt="Sam at the summit — golden hour, mountains and sky behind him"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 62%',
            filter: 'saturate(1.18) brightness(0.94) sepia(0.07)',
            display: 'block',
          }}
        />

        {/* Subtle vignette */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, transparent 55%, rgba(8,6,4,0.20) 100%)',
            pointerEvents: 'none',
          }}
        />
      </motion.div>
    </div>
  )
}
