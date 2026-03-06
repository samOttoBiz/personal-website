import { useScroll, useTransform, useSpring, motion } from 'framer-motion'

/**
 * The trail path string.
 * viewBox is "0 0 60 7000" — the SVG is scaled with preserveAspectRatio="none"
 * to fill 60px wide × 100vh tall, so pathLength 0-1 tracks scroll progress
 * perfectly regardless of actual page height.
 */
const TRAIL_PATH = [
  'M 30 0',
  'C 12 180, 48 360, 30 700',
  'C 12 900, 48 1100, 30 1400',
  'C 12 1600, 48 1800, 30 2100',
  'C 12 2300, 48 2500, 30 2800',
  'C 12 3000, 48 3200, 30 3500',
  'C 12 3700, 48 3900, 30 4200',
  'C 12 4400, 48 4600, 30 4900',
  'C 12 5100, 48 5300, 30 5600',
  'C 12 5800, 48 6000, 30 6300',
  'C 12 6500, 48 6700, 30 7000',
].join(' ')

/* Waypoint ticks at equal SVG-y intervals */
const TICK_Y = [0, 700, 1400, 2100, 2800, 3500, 4200, 4900, 5600, 6300, 7000]

export default function TrailPath() {
  const { scrollYProgress } = useScroll()

  /* Spring makes the draw feel organic — slightly behind your scroll position */
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  })

  const pathLength = useTransform(smoothProgress, [0, 1], [0, 1])
  const trailOpacity = useTransform(smoothProgress, [0, 0.02, 0.97, 1], [0.4, 0.9, 0.9, 0.4])

  return (
    <div
      className="trail-fixed-overlay"
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '60px',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 10,
        overflow: 'hidden',
      }}
    >
      <svg
        viewBox="0 0 60 7000"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '60px', height: '100vh' }}
      >
        {/* Ghost trail — shows the full path ahead, dashed */}
        <path
          d={TRAIL_PATH}
          stroke="rgba(45, 80, 22, 0.13)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="3 10"
          fill="none"
        />

        {/* Live drawn trail — grows as user scrolls */}
        <motion.path
          d={TRAIL_PATH}
          stroke="var(--color-green)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          style={{ pathLength, opacity: trailOpacity }}
        />

        {/* Tick marks at each waypoint location */}
        {TICK_Y.map((y) => (
          <circle
            key={y}
            cx="30"
            cy={y}
            r="2.5"
            fill="none"
            stroke="rgba(45, 80, 22, 0.18)"
            strokeWidth="1"
          />
        ))}

        {/* Trailhead marker at very top */}
        <circle cx="30" cy="0" r="4" fill="rgba(45, 80, 22, 0.35)" />

        {/* Summit marker at very bottom */}
        <circle cx="30" cy="7000" r="4" fill="rgba(196, 134, 42, 0.45)" />
      </svg>
    </div>
  )
}
