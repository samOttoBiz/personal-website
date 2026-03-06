import { motion } from 'framer-motion'

/**
 * A single pine tree made of 3 layered triangle tiers + a thin trunk.
 * Sways gently with a Framer Motion loop animation.
 */
function PineTree({ x, baseY, height, opacity = 1, swayDelay = 0, swayDuration = 4 }) {
  const trunkW = Math.max(2, height * 0.055)
  const trunkH = height * 0.20

  /* Three canopy tiers, progressively wider */
  const tiers = [
    { yOff: 0,            w: height * 0.26 },
    { yOff: height * 0.3, w: height * 0.42 },
    { yOff: height * 0.54, w: height * 0.58 },
  ]

  const treeTop = baseY - height

  return (
    <motion.g
      animate={{ rotate: [-0.7, 0.7, -0.7] }}
      transition={{
        duration: swayDuration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: swayDelay,
      }}
      style={{
        transformBox: 'fill-box',
        transformOrigin: 'bottom center',
        opacity,
      }}
    >
      {/* Trunk */}
      <rect
        x={x - trunkW / 2}
        y={baseY - trunkH}
        width={trunkW}
        height={trunkH}
        rx="1"
        fill="rgba(45, 80, 22, 0.50)"
      />

      {/* Canopy tiers */}
      {tiers.map((tier, i) => (
        <polygon
          key={i}
          points={`
            ${x},${treeTop + tier.yOff}
            ${x - tier.w / 2},${treeTop + tier.yOff + tier.w * 0.78}
            ${x + tier.w / 2},${treeTop + tier.yOff + tier.w * 0.78}
          `}
          fill="rgba(45, 80, 22, 0.55)"
        />
      ))}
    </motion.g>
  )
}

/**
 * A cluster of 5 pine trees of varying height fixed in the left gutter.
 * Hidden on mobile via .tree-silhouette CSS class.
 */
export default function TreeSilhouette() {
  const trees = [
    { x: 10, baseY: 195, height: 55,  opacity: 0.40, swayDelay: 0.0, swayDuration: 5.2 },
    { x: 22, baseY: 200, height: 90,  opacity: 0.65, swayDelay: 0.8, swayDuration: 4.0 },
    { x: 38, baseY: 198, height: 110, opacity: 0.75, swayDelay: 0.4, swayDuration: 4.6 },
    { x: 52, baseY: 196, height: 72,  opacity: 0.50, swayDelay: 1.1, swayDuration: 3.8 },
    { x: 60, baseY: 193, height: 48,  opacity: 0.35, swayDelay: 0.6, swayDuration: 5.0 },
  ]

  return (
    <div
      className="tree-silhouette"
      aria-hidden="true"
      style={{
        position: 'fixed',
        left: 0,
        bottom: '12vh',
        width: '68px',
        height: '210px',
        pointerEvents: 'none',
        zIndex: 8,
        overflow: 'visible',
      }}
    >
      <svg
        viewBox="0 0 68 210"
        width="68"
        height="210"
        overflow="visible"
        style={{ display: 'block' }}
      >
        {trees.map((t, i) => (
          <PineTree key={i} {...t} />
        ))}

        {/* Ground line */}
        <line
          x1="0" y1="200" x2="68" y2="200"
          stroke="rgba(45, 80, 22, 0.15)"
          strokeWidth="1"
        />
      </svg>
    </div>
  )
}
