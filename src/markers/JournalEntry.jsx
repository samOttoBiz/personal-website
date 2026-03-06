/**
 * JournalEntry — torn journal page for Human section facts.
 * Scattered like found objects on the trail.
 * No whileInView — parent section opacity controls reveal.
 */
export default function JournalEntry({ children, rotation = 0, pinColor = 'amber' }) {
  const PIN_COLORS = {
    amber: 'rgba(196,134,42,0.88)',
    green:  'rgba(45,80,22,0.80)',
  }

  return (
    <div
      style={{
        position: 'relative',
        background: 'rgba(245,240,228,0.92)',
        borderRadius: '3px',
        padding: '32px 26px 28px',
        boxShadow: '0 3px 20px rgba(0,0,0,0.09)',
        overflow: 'visible',
        transform: `rotate(${rotation}deg)`,
      }}
    >
      {/* Pushpin */}
      <svg
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-8px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
        }}
        width="16" height="22" viewBox="0 0 16 22"
      >
        {/* Shaft */}
        <line x1="8" y1="12" x2="8" y2="22" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
        {/* Head */}
        <circle cx="8" cy="7" r="6" fill={PIN_COLORS[pinColor]} />
        {/* Highlight */}
        <circle cx="6" cy="5" r="2" fill="rgba(255,255,255,0.30)" />
        {/* Shadow */}
        <ellipse cx="8" cy="8" rx="4" ry="1.5" fill="rgba(0,0,0,0.10)" />
      </svg>

      {/* Torn top edge */}
      <svg
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: '7px',
        }}
        viewBox="0 0 300 7"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 7 L 8 3 L 20 6 L 35 1 L 52 5 L 68 2 L 85 6 L 105 2 L 125 6 L 145 1 L 162 5 L 180 2 L 198 7 L 215 3 L 232 6 L 248 2 L 262 5 L 278 2 L 300 5 L 300 7 Z"
          fill="rgba(180,160,130,0.18)"
        />
      </svg>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  )
}
