/**
 * TrailRegister — parchment-scroll format for mentor quotes.
 * Looks like an entry in a trail register box (yellowed paper, ruled lines).
 * No whileInView — parent section opacity controls the reveal.
 */
export default function TrailRegister({ quote, attribution, context }) {
  return (
    <div
      style={{
        position: 'relative',
        background: 'rgba(245,240,225,0.90)',
        border: '1px solid rgba(196,134,42,0.25)',
        borderRadius: '3px',
        padding: '24px 32px 28px',
        boxShadow: '0 2px 16px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.60)',
        overflow: 'hidden',
      }}
    >
      {/* Torn top edge SVG */}
      <svg
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: '8px',
          display: 'block',
        }}
        viewBox="0 0 400 8"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 8 L 12 3 L 28 7 L 45 2 L 62 6 L 80 1 L 95 5 L 115 2 L 138 7 L 155 3 L 172 6 L 190 1 L 210 5 L 228 2 L 248 7 L 265 3 L 285 6 L 305 1 L 322 5 L 342 2 L 360 7 L 378 3 L 400 5 L 400 8 Z"
          fill="rgba(196,134,42,0.12)"
        />
      </svg>

      {/* Ruled lines */}
      {[0, 1, 2, 3].map(i => (
        <div
          key={i}
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '32px',
            right: '32px',
            top: `${56 + i * 28}px`,
            height: '1px',
            background: 'rgba(196,134,42,0.10)',
          }}
        />
      ))}

      {/* Quote */}
      <p style={{
        fontFamily: 'var(--font-serif)',
        fontStyle: 'italic',
        fontSize: 'clamp(17px, 1.8vw, 21px)',
        lineHeight: 1.55,
        color: 'rgba(28,28,26,0.88)',
        marginBottom: '14px',
        position: 'relative',
        zIndex: 1,
      }}>
        {quote}
      </p>

      {/* Attribution */}
      <div style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'rgba(107,102,96,0.80)',
        position: 'relative',
        zIndex: 1,
      }}>
        — {attribution}
        {context && (
          <span style={{ color: 'rgba(107,102,96,0.55)', marginLeft: '8px' }}>
            · {context}
          </span>
        )}
      </div>
    </div>
  )
}
