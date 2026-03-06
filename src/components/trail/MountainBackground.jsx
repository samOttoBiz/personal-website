import { motion } from 'framer-motion'

/**
 * MountainBackground — layered mountain silhouette for the WhatsNext section.
 * Positioned absolute at the bottom of the section.
 * Replaces the old inline SummitSilhouette.
 */

function RidgePine({ x, y, h }) {
  return (
    <g>
      {/* Trunk */}
      <rect x={x - 1} y={y} width="2" height={h * 0.2} fill="rgba(45, 80, 22, 0.35)" />
      {/* Tier 3 */}
      <polygon
        points={`${x},${y - h * 0.5} ${x - h * 0.45},${y - h * 0.05} ${x + h * 0.45},${y - h * 0.05}`}
        fill="rgba(45, 80, 22, 0.30)"
      />
      {/* Tier 2 */}
      <polygon
        points={`${x},${y - h * 0.75} ${x - h * 0.38},${y - h * 0.2} ${x + h * 0.38},${y - h * 0.2}`}
        fill="rgba(45, 80, 22, 0.30)"
      />
      {/* Tier 1 */}
      <polygon
        points={`${x},${y - h} ${x - h * 0.28},${y - h * 0.35} ${x + h * 0.28},${y - h * 0.35}`}
        fill="rgba(45, 80, 22, 0.30)"
      />
    </g>
  )
}

export default function MountainBackground() {
  return (
    <motion.div
      className="mountain-background"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 2.0, delay: 0.4 }}
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '240px',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <svg
        viewBox="0 0 1200 240"
        preserveAspectRatio="xMidYMax meet"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        {/* Far peaks — lightest */}
        <polygon
          points="0,240 140,65 300,140 480,42 660,125 850,28 1020,105 1200,55 1200,240"
          fill="rgba(45, 80, 22, 0.08)"
        />

        {/* Mid peaks */}
        <polygon
          points="0,240 70,120 185,160 350,78 530,148 700,68 870,135 1040,82 1200,115 1200,240"
          fill="rgba(45, 80, 22, 0.10)"
        />

        {/* Foreground ridge — darkest */}
        <polygon
          points="0,240 100,185 250,198 390,172 560,190 710,168 880,185 1050,175 1200,182 1200,240"
          fill="rgba(45, 80, 22, 0.14)"
        />

        {/* Summit amber marker at primary peak (480, 42) */}
        <circle cx="480" cy="42" r="5" fill="rgba(196, 134, 42, 0.65)" />
        {/* Static ring */}
        <circle cx="480" cy="42" r="10" fill="none" stroke="rgba(196, 134, 42, 0.25)" strokeWidth="1.5" />
        {/* Pulsing ring */}
        <motion.circle
          cx="480" cy="42" r="10"
          fill="none"
          stroke="rgba(196, 134, 42, 0.30)"
          strokeWidth="1"
          animate={{ r: [10, 18, 10], opacity: [0.30, 0, 0.30] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* 6 small ridge pines on foreground */}
        <RidgePine x={105} y={185} h={22} />
        <RidgePine x={122} y={185} h={28} />
        <RidgePine x={140} y={185} h={20} />
        <RidgePine x={1055} y={175} h={24} />
        <RidgePine x={1072} y={175} h={20} />
        <RidgePine x={1090} y={175} h={26} />
      </svg>
    </motion.div>
  )
}
