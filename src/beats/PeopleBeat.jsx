import { useIsInScrollRange, useScrollRangeOpacity } from '../hooks/useIsInScrollRange'
import TrailRegister from '../markers/TrailRegister'

const MENTORS = [
  {
    quote: '"There are many ways to the top of the mountain. Choose one. There are many ways to the top of the mountain. Know many."',
    attribution: 'Dr. Immanuel Williams',
    context: 'On strategy and versatility',
  },
  {
    quote: '"Mentorship isn\'t all about the mentee. It\'s a two-way street."',
    attribution: 'Steve Ashford',
    context: 'On what it means to show up for someone',
  },
  {
    quote: '"I don\'t \'network.\' I build genuine relationships."',
    attribution: 'Tim Ridout',
    context: 'On how to actually connect with people',
  },
  {
    quote: '"Love life and life will love you back."',
    attribution: 'Dana Otto',
    context: 'On the only investment that compounds forever',
  },
  {
    quote: '"Don\'t grow old chasing achievement; grow young chasing what fuels your soul."',
    attribution: 'Dr. Ronda Beaman',
    context: "On what's actually worth running toward",
  },
]

export default function PeopleBeat() {
  // mount early so nav-click to 670vh lands with content ready
  const visible = useIsInScrollRange(0.66, 0.85, 0.00)
  // Work fully gone at 0.73 — People fades IN over 0.73→0.76, fully visible at 0.76
  const sectionOpacity = useScrollRangeOpacity(0.76, 0.85, 0.03, 0.03)
  if (!visible) return null

  return (
    <section
      id="people"
      style={{
        position: 'absolute',
        top: '660vh',
        left: 0,
        right: 0,
        zIndex: 10,
        padding: '120px 0 100px',
        pointerEvents: 'none',
        opacity: sectionOpacity,
        transition: 'opacity 0.4s ease',
      }}
    >
      {/* Shelter roof SVG */}
      <svg
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: '100px',
          display: 'block',
          pointerEvents: 'none',
          opacity: 0.7,
        }}
        viewBox="0 0 1440 100"
        preserveAspectRatio="xMidYMin meet"
      >
        <line x1="0"    y1="60"  x2="600"  y2="10"  stroke="rgba(45,80,22,0.18)" strokeWidth="2" />
        <line x1="600"  y1="10"  x2="1440" y2="70"  stroke="rgba(45,80,22,0.18)" strokeWidth="2" />
        <line x1="0"    y1="60"  x2="0"    y2="100" stroke="rgba(45,80,22,0.18)" strokeWidth="2" />
        <line x1="600"  y1="10"  x2="600"  y2="100" stroke="rgba(45,80,22,0.14)" strokeWidth="1.5" />
        <line x1="1440" y1="70"  x2="1440" y2="100" stroke="rgba(45,80,22,0.18)" strokeWidth="2" />
        <line x1="560"  y1="40"  x2="640"  y2="40"  stroke="rgba(45,80,22,0.09)" strokeWidth="1" />
        <line x1="560"  y1="60"  x2="640"  y2="60"  stroke="rgba(45,80,22,0.09)" strokeWidth="1" />
        <line x1="560"  y1="80"  x2="640"  y2="80"  stroke="rgba(45,80,22,0.09)" strokeWidth="1" />
      </svg>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 48px', pointerEvents: 'auto' }}>

        {/* Label — section opacity drives reveal; no whileInView needed */}
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
          04 — People
        </div>

        {/* H2 */}
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 600,
            fontSize: 'clamp(32px, 4vw, 48px)',
            lineHeight: 1.15,
            color: 'var(--color-text)',
            marginBottom: '20px',
          }}
        >
          The people who've shaped<br />
          how I think.
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '17px',
            lineHeight: 1.82,
            color: 'var(--color-text)',
            marginBottom: '52px',
          }}
        >
          Everyone who's been in my corner has left something behind. A question I'm still sitting with. A way of framing a decision. A standard I try to hold myself to. I carry those things into every room I enter.
        </p>

        {/* Trail register entries */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {MENTORS.map((m, i) => (
            <TrailRegister
              key={i}
              quote={m.quote}
              attribution={m.attribution}
              context={m.context}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
