export default function SummitMarkerCTA() {
  return (
    <section id="connect" className="py-24 md:py-32 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div
          style={{
            maxWidth: '760px',
            margin: '0 auto',
            borderTop: '1px solid rgba(196,134,42,0.34)',
            borderBottom: '1px solid rgba(196,134,42,0.2)',
            padding: '30px 0',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(45,80,22,0.72)',
            }}
          >
            Summit Marker
          </p>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(22px, 3.2vw, 34px)',
              lineHeight: 1.35,
              color: 'var(--color-text)',
              marginTop: '10px',
            }}
          >
            If this resonated, I'd love to hear your story too.
          </p>
          <a
            href="mailto:samotto.business@gmail.com"
            style={{
              display: 'inline-block',
              marginTop: '18px',
              fontFamily: 'var(--font-sans)',
              fontSize: '12px',
              letterSpacing: '0.09em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              color: 'var(--color-green)',
              border: '1px solid rgba(45,80,22,0.28)',
              borderRadius: '999px',
              padding: '10px 16px',
            }}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}