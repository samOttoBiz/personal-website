/**
 * TrailSign — weathered wooden trail sign plaque for project entries.
 * No whileInView — parent section opacity controls reveal.
 * Props:
 *   number: '01' | '02' | '03'
 *   tag: string (small label)
 *   title: string
 *   context: string (italic tagline)
 *   description: string
 *   tags: string[]
 *   side: 'left' | 'right' (which side of viewport)
 *   delay: number (unused, kept for API compat)
 */
export default function TrailSign({ number, tag, title, context, description, tags, side = 'left' }) {
  return (
    <div
      style={{
        position: 'relative',
        maxWidth: '360px',
        marginLeft: side === 'left' ? '0' : 'auto',
        marginRight: side === 'right' ? '0' : 'auto',
        transform: `rotate(${side === 'left' ? '-1.2' : '1.2'}deg)`,
      }}
    >
      {/* Post */}
      <div
        aria-hidden="true"
        style={{
          width: '4px',
          height: '48px',
          background: 'rgba(45,80,22,0.40)',
          margin: '0 auto',
          borderRadius: '2px',
        }}
      />

      {/* Sign plaque */}
      <div
        style={{
          background: 'rgba(245,238,220,0.92)',
          border: '1.5px solid rgba(45,80,22,0.25)',
          borderRadius: '4px 4px 6px 6px',
          padding: '24px 28px 28px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.50)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Wood grain filter */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
          <defs>
            <filter id="woodgrain">
              <feTurbulence type="fractalNoise" baseFrequency="0.65 0.05" numOctaves="3" result="noise" />
              <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
              <feBlend in="SourceGraphic" in2="gray" mode="overlay" result="blend" />
              <feComposite in="blend" in2="SourceGraphic" operator="in" />
            </filter>
          </defs>
        </svg>

        {/* Trail blaze triangle */}
        <svg
          width="16" height="16" viewBox="0 0 20 20"
          style={{ position: 'absolute', top: '12px', right: '14px' }}
          aria-hidden="true"
        >
          <polygon
            points="10,3 3,17 17,17"
            stroke="rgba(45,80,22,0.30)"
            fill="none"
            strokeWidth="1.5"
          />
        </svg>

        {/* Number */}
        <div style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '0.12em',
          color: 'rgba(45,80,22,0.50)',
          marginBottom: '4px',
        }}>
          {number}
        </div>

        {/* Tag */}
        <div style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '10px',
          fontWeight: 500,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--color-green)',
          marginBottom: '10px',
        }}>
          {tag}
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 700,
          fontSize: '22px',
          color: 'rgba(28,28,26,0.90)',
          lineHeight: 1.2,
          marginBottom: '10px',
        }}>
          {title}
        </h3>

        {/* Context — italic tagline */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '13px',
          fontStyle: 'italic',
          color: 'rgba(107,102,96,0.90)',
          lineHeight: 1.5,
          marginBottom: '12px',
        }}>
          {context}
        </p>

        {/* Ruled line */}
        <div style={{ borderTop: '1px solid rgba(45,80,22,0.12)', marginBottom: '12px' }} />

        {/* Description */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '13px',
          lineHeight: 1.70,
          color: 'rgba(28,28,26,0.80)',
        }}>
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '14px' }}>
            {tags.map(t => (
              <span key={t} style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '9px',
                fontWeight: 600,
                letterSpacing: '0.10em',
                textTransform: 'uppercase',
                color: 'rgba(45,80,22,0.70)',
                padding: '3px 8px',
                border: '1px solid rgba(45,80,22,0.20)',
                borderRadius: '2px',
              }}>
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
