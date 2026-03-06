import { useIsInScrollRange, useScrollRangeOpacity } from '../hooks/useIsInScrollRange'
import JournalEntry from '../markers/JournalEntry'

const FACTS = [
  {
    id: 'reading',
    pinColor: 'amber',
    rotation: 1.2,
    content: (
      <>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--color-green)', display: 'block', marginBottom: '10px' }}>
          Currently reading
        </span>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 600, lineHeight: 1.3, marginBottom: '6px', color: 'var(--color-text)' }}>
          Jonathan Livingston Seagull
        </p>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--color-muted)' }}>
          Next up: Siddhartha
        </p>
      </>
    ),
  },
  {
    id: 'book',
    pinColor: 'green',
    rotation: -1.0,
    content: (
      <>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--color-green)', display: 'block', marginBottom: '10px' }}>
          Favorite book of all time
        </span>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 600, lineHeight: 1.3, marginBottom: '6px', color: 'var(--color-text)' }}>
          The Alchemist
        </p>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--color-muted)', fontStyle: 'italic' }}>
          My gateway to deep fiction.
        </p>
      </>
    ),
  },
  {
    id: 'morning',
    pinColor: 'amber',
    rotation: 0,
    wide: true,
    content: (
      <>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '19px', fontWeight: 600, lineHeight: 1.4, marginBottom: '12px', color: 'var(--color-text)' }}>
          Up at 5am. Not because I have to.
        </p>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.72, color: 'var(--color-text)' }}>
          Bootcamp is where I find my people and my energy for the day. One morning, I had not slept the entire weekend for a hackathon. I still showed up. At some point it stopped being a discipline and became just... who I am.
        </p>
      </>
    ),
  },
  {
    id: 'tritip',
    pinColor: 'amber',
    rotation: -0.8,
    content: (
      <>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--color-amber)', display: 'block', marginBottom: '8px' }}>
          The Tri Tip Challenge
        </span>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '17px', lineHeight: 1.5, color: 'var(--color-text)', marginBottom: '0' }}>
          Three mountains. One sandwich. Conversations I&apos;ll never forget.
        </p>
      </>
    ),
  },
]

const TRIATHLON = {
  id: 'triathlon',
  pinColor: 'green',
  rotation: 1.5,
  content: (
    <>
      <p style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 600, lineHeight: 1.3, marginBottom: '8px', color: 'var(--color-text)' }}>
        Finished a triathlon.<br />Almost didn't make it out of the water.
      </p>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', lineHeight: 1.65, color: 'var(--color-muted)', fontStyle: 'italic' }}>
        When I commit, I finish. No matter what the course looks like.
      </p>
    </>
  ),
}

export default function HumanBeat() {
  const visible = useIsInScrollRange(0.78, 1.00, 0.02)
  const sectionOpacity = useScrollRangeOpacity(0.88, 1.00, 0.00, 0.01)
  if (!visible) return null

  return (
    <section
      id="human"
      style={{
        position: 'absolute',
        top: '780vh',
        left: 0,
        right: 0,
        zIndex: 10,
        padding: '60px 0 100px',
        pointerEvents: 'none',
        opacity: sectionOpacity,
        transition: 'opacity 0.4s ease',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 48px', pointerEvents: 'auto' }}>

        {/* Label */}
        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.10em',
            textTransform: 'uppercase',
            color: 'rgba(45,80,22,0.80)',
            marginBottom: '20px',
          }}
        >
          05 — The Human
        </div>

        {/* H2 */}
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 600,
            fontSize: 'clamp(32px, 4vw, 48px)',
            lineHeight: 1.15,
            color: 'var(--color-text)',
            marginBottom: '52px',
          }}
        >
          I'm always building<br />my personal legend.
        </h2>

        {/* Journal entries grid */}
        <div
          className="journal-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
            alignItems: 'start',
          }}
        >
          {/* First 4 cards */}
          {FACTS.map((fact) => (
            <JournalEntry
              key={fact.id}
              rotation={fact.rotation}
              pinColor={fact.pinColor}
              style={fact.wide ? { gridColumn: 'span 2' } : undefined}
            >
              {fact.content}
            </JournalEntry>
          ))}

          {/* 5th row: triathlon card + photo side by side, spanning all 3 columns */}
          <div
            className="triathlon-row"
            style={{
              gridColumn: 'span 3',
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '32px',
              alignItems: 'stretch',
            }}
          >
            {/* Triathlon card */}
            <JournalEntry
              rotation={TRIATHLON.rotation}
              pinColor={TRIATHLON.pinColor}
            >
              {TRIATHLON.content}
            </JournalEntry>

            {/* Triathlon photo */}
            <div
              style={{
                borderRadius: '3px',
                overflow: 'hidden',
                boxShadow: '0 3px 20px rgba(0,0,0,0.12)',
                transform: 'rotate(-0.6deg)',
                maxHeight: '280px',
              }}
            >
              <img
                src="/images/triathlon.jpeg"
                alt="Sam at the triathlon finish"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .journal-grid { grid-template-columns: repeat(2, 1fr) !important; } .triathlon-row { grid-column: span 2 !important; grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 768px)  { .journal-grid { grid-template-columns: 1fr !important; } .triathlon-row { grid-column: span 1 !important; grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
