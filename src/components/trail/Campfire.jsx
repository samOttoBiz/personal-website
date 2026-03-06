import { motion } from 'framer-motion'

/**
 * Campfire — animated flickering campfire decoration for the Work section.
 * Positioned bottom-right of its parent section.
 * Very low opacity so it feels like atmosphere, not distraction.
 */
export default function Campfire() {
  return (
    <motion.div
      className="campfire-decoration"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.22 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      style={{
        position: 'absolute',
        bottom: '32px',
        right: '48px',
        width: '64px',
        height: '64px',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      <svg
        viewBox="0 0 64 64"
        style={{ width: '100%', height: '100%', overflow: 'visible' }}
      >
        {/* Log 1 */}
        <rect
          x="15" y="44" width="34" height="6" rx="3"
          fill="rgba(45, 80, 22, 0.65)"
          transform="rotate(-20, 32, 47)"
        />
        {/* Log 2 */}
        <rect
          x="15" y="44" width="34" height="6" rx="3"
          fill="rgba(45, 80, 22, 0.65)"
          transform="rotate(20, 32, 47)"
        />

        {/* Ember ellipses at base */}
        <ellipse cx="32" cy="48" rx="10" ry="4" fill="rgba(196, 134, 42, 0.50)" />
        <ellipse cx="26" cy="49" rx="5"  ry="3" fill="rgba(196, 134, 42, 0.35)" />
        <ellipse cx="38" cy="49" rx="5"  ry="3" fill="rgba(196, 134, 42, 0.35)" />

        {/* Flame 1 (center, tallest) */}
        <motion.polygon
          points="32,16 27,40 37,40"
          fill="rgba(196, 134, 42, 0.55)"
          animate={{ scaleY: [1, 1.15, 0.92, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
          style={{ transformBox: 'fill-box', transformOrigin: 'bottom center' }}
        />
        {/* Flame 2 (left) */}
        <motion.polygon
          points="28,22 24,40 32,40"
          fill="rgba(196, 134, 42, 0.40)"
          animate={{ scaleY: [1, 0.90, 1.10, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          style={{ transformBox: 'fill-box', transformOrigin: 'bottom center' }}
        />
        {/* Flame 3 (right) */}
        <motion.polygon
          points="36,22 32,40 40,40"
          fill="rgba(196, 134, 42, 0.40)"
          animate={{ scaleY: [1, 1.12, 0.88, 1] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          style={{ transformBox: 'fill-box', transformOrigin: 'bottom center' }}
        />

        {/* Spark 1 */}
        <motion.circle
          cx="30" cy="18" r="1.5"
          fill="rgba(196, 134, 42, 0.60)"
          animate={{ cy: [18, 6, 18], opacity: [0, 0.8, 0] }}
          transition={{ duration: 2.0, repeat: Infinity, ease: 'easeOut', delay: 0 }}
        />
        {/* Spark 2 */}
        <motion.circle
          cx="33" cy="20" r="1.2"
          fill="rgba(196, 134, 42, 0.50)"
          animate={{ cy: [20, 8, 20], opacity: [0, 0.7, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut', delay: 0.7 }}
        />
        {/* Spark 3 */}
        <motion.circle
          cx="29" cy="22" r="1.0"
          fill="rgba(196, 134, 42, 0.40)"
          animate={{ cy: [22, 12, 22], opacity: [0, 0.6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut', delay: 1.2 }}
        />
      </svg>
    </motion.div>
  )
}
