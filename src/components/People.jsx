import { motion } from 'framer-motion'
import WaypointMarker from './trail/WaypointMarker'
import TopoBackground from './trail/TopoBackground'

const mentors = [
  {
    quote: '"There are many ways to the top of the mountain. Choose one. There are many ways to the top of the mountain. Know many."',
    attribution: 'Dr. Immanuel Williams',
    context: 'On strategy and versatility',
    isReal: true,
  },
  {
    quote: '"Mentorship isn\'t all about the mentee. It\'s a two-way street."',
    attribution: 'Steve Ashford',
    context: 'On what it means to show up for someone',
    isReal: true,
  },
  {
    quote: '"I don\'t \'network.\' I build genuine relationships."',
    attribution: 'Tim Ridout',
    context: 'On how to actually connect with people',
    isReal: true,
  },
  {
    quote: '"Love life and life will love you back."',
    attribution: 'Dana Otto',
    context: 'On the only investment that compounds forever',
    isReal: true,
  },
  {
    quote: '"Don\'t grow old chasing achievement; grow young chasing what fuels your soul."',
    attribution: 'Dr. Ronda Beaman',
    context: 'On what\'s actually worth running toward',
    isReal: true,
  },
]

/* Lean-to shelter roof at top of section */
function ShelterRoof() {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.2, delay: 0.2 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '100px',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="xMidYMin meet"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        {/* Ridge lines — lean-to roof shape */}
        <line x1="0"    y1="60"  x2="600"  y2="10"  stroke="rgba(45, 80, 22, 0.15)" strokeWidth="2" />
        <line x1="600"  y1="10"  x2="1440" y2="70"  stroke="rgba(45, 80, 22, 0.15)" strokeWidth="2" />
        {/* Vertical support poles */}
        <line x1="0"    y1="60"  x2="0"    y2="100" stroke="rgba(45, 80, 22, 0.15)" strokeWidth="2" />
        <line x1="600"  y1="10"  x2="600"  y2="100" stroke="rgba(45, 80, 22, 0.12)" strokeWidth="1.5" />
        <line x1="1440" y1="70"  x2="1440" y2="100" stroke="rgba(45, 80, 22, 0.15)" strokeWidth="2" />
        {/* Crosshatch detail on right pole */}
        <line x1="560"  y1="40"  x2="640"  y2="40"  stroke="rgba(45, 80, 22, 0.08)" strokeWidth="1" />
        <line x1="560"  y1="60"  x2="640"  y2="60"  stroke="rgba(45, 80, 22, 0.08)" strokeWidth="1" />
        <line x1="560"  y1="80"  x2="640"  y2="80"  stroke="rgba(45, 80, 22, 0.08)" strokeWidth="1" />
      </svg>
    </motion.div>
  )
}

function MentorEntry({ mentor, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.15 }}
      style={{
        background: 'var(--color-surface)',
        borderLeft: '3px solid var(--color-amber)',
        padding: '28px 32px',
        borderRadius: '4px',
        boxShadow: '0 2px 16px rgba(0, 0, 0, 0.05)',
      }}
    >
      {mentor.isReal ? (
        <>
          <p style={{
            fontFamily: 'var(--font-serif)', fontStyle: 'italic',
            fontSize: '24px', lineHeight: 1.5, color: 'var(--color-text)', marginBottom: '12px',
          }}>
            {mentor.quote}
          </p>
          <span style={{
            fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 500,
            letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-muted)',
          }}>
            — {mentor.attribution} · {mentor.context}
          </span>
        </>
      ) : (
        /* MENTOR PLACEHOLDER — Sam to fill in */
        <>
          <p style={{
            fontFamily: 'var(--font-serif)', fontStyle: 'italic',
            fontSize: '24px', lineHeight: 1.5, color: 'var(--color-muted)', opacity: 0.35, marginBottom: '12px',
          }}>
            "A lesson from someone who changed how you operate..."
          </p>
          <span style={{
            fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 500,
            letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-muted)', opacity: 0.35,
          }}>
            — Name · The moment or context
          </span>
        </>
      )}
    </motion.div>
  )
}

export default function People() {
  return (
    <section
      id="people"
      style={{
        padding: '160px 48px 120px',
        background: 'var(--color-bg)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <TopoBackground variant="plateau" />
      <ShelterRoof />
      <WaypointMarker number="5" label="Fellow Hikers" />

      <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ marginBottom: '64px' }}
        >
          <span className="label" style={{ marginBottom: '24px', display: 'block' }}>
            04 — People
          </span>

          <h2 style={{
            fontFamily: 'var(--font-serif)', fontWeight: 600,
            fontSize: 'clamp(36px, 4vw, 52px)', lineHeight: 1.15,
            color: 'var(--color-text)', marginBottom: '24px',
          }}>
            The people who've shaped<br />
            how I think.
          </h2>

          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', color: 'var(--color-text)', lineHeight: 1.8 }}>
            Everyone who's been in my corner has left something behind. A question I'm still sitting with. A way of framing a decision. A standard I try to hold myself to. I carry those things into every room I enter.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {mentors.map((mentor, i) => (
            <MentorEntry key={i} mentor={mentor} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { #people { padding: 120px 24px 80px !important; } }
      `}</style>
    </section>
  )
}
