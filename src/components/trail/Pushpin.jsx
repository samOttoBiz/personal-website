/**
 * Pushpin — corkboard-style decorative pin for fact cards.
 * Positioned absolute at the top-center of its parent card.
 * Parent card must have position: relative.
 *
 * Props:
 *   color — 'amber' | 'green'
 */
export default function Pushpin({ color = 'amber' }) {
  const headColor = color === 'amber'
    ? 'rgba(196, 134, 42, 0.88)'
    : 'rgba(45, 80, 22, 0.80)'

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: '-6px',
        left: '50%',
        transform: 'translateX(-50%)',
        pointerEvents: 'none',
        zIndex: 2,
      }}
    >
      <svg
        viewBox="0 0 16 22"
        width="16"
        height="22"
        style={{ display: 'block', overflow: 'visible' }}
      >
        {/* Drop shadow */}
        <ellipse cx="9" cy="21" rx="3.5" ry="1.2" fill="rgba(0, 0, 0, 0.10)" />
        {/* Pin shaft */}
        <line
          x1="8" y1="12"
          x2="8" y2="21"
          stroke="rgba(0, 0, 0, 0.15)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Pin head */}
        <circle cx="8" cy="7" r="6" fill={headColor} />
        {/* Highlight */}
        <circle cx="6" cy="5" r="2" fill="rgba(255, 255, 255, 0.30)" />
        {/* Inner shadow on head */}
        <circle cx="8" cy="8" r="4" fill="rgba(0, 0, 0, 0.08)" />
      </svg>
    </div>
  )
}
