import { motion } from 'framer-motion'
import WaypointMarker from './trail/WaypointMarker'
import Pushpin from './trail/Pushpin'

function FactCard({ card, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.08 }}
      style={{
        background: 'var(--color-surface)',
        borderRadius: '6px',
        padding: card.size === 'small' ? '28px 24px' : card.size === 'wide' ? '36px 40px' : '28px 32px',
        boxShadow: '0 2px 24px rgba(0,0,0,0.06)',
        transform: `rotate(${card.rotation}deg)`,
        borderLeft: card.borderAccent ? '3px solid var(--color-green)' : 'none',
        gridColumn: card.size === 'wide' ? 'span 2' : 'span 1',
        position: 'relative',
      }}
      className="fact-card"
    >
      <Pushpin color={card.pinColor || 'amber'} />
      {card.content}
    </motion.div>
  )
}

const factCards = [
  {
    id: 'reading', size: 'medium', rotation: 1.2, pinColor: 'amber',
    content: (
      <>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-green)', display: 'block', marginBottom: '10px' }}>Currently reading</span>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 600, lineHeight: 1.3, marginBottom: '6px' }}>Jonathan Livingston Seagull</p>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--color-muted)' }}>Next up: Siddhartha</p>
      </>
    ),
  },
  {
    id: 'book', size: 'medium', rotation: -1.0, pinColor: 'green',
    content: (
      <>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-green)', display: 'block', marginBottom: '10px' }}>Favorite book of all time</span>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 600, lineHeight: 1.3, marginBottom: '6px' }}>The Alchemist</p>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--color-muted)', fontStyle: 'italic' }}>(Fiction with a deeper meaning. Always.)</p>
      </>
    ),
  },
  {
    id: 'morning', size: 'wide', rotation: 0, borderAccent: true, pinColor: 'amber',
    content: (
      <>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 600, lineHeight: 1.4, marginBottom: '12px' }}>Up at 5am. Not because I have to.</p>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.7, color: 'var(--color-text)' }}>
          Bootcamp is where I find my people and my energy for the day. There was one morning during hackathon prep — sleep-deprived, running on nothing — I still showed up. At some point it stopped being a discipline and became just... who I am.
        </p>
      </>
    ),
  },
  {
    id: 'triathlon', size: 'medium', rotation: 1.5, pinColor: 'green',
    content: (
      <>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 600, lineHeight: 1.3, marginBottom: '12px' }}>Finished a triathlon once.<br />Almost didn't make it out of the water.</p>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.7, color: 'var(--color-text)' }}>
          Three minutes to round the buoy or I'd be disqualified. I put my head down. I'm not a great swimmer. I finished.
        </p>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.7, color: 'var(--color-muted)', marginTop: '8px', fontStyle: 'italic' }}>
          Now I know: when I commit to something, I finish it. No matter what the course looks like.
        </p>
      </>
    ),
  },
  {
    id: 'characters', size: 'medium', rotation: -0.8, pinColor: 'amber',
    content: (
      <>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--color-muted)', marginBottom: '12px' }}>Three TV characters, one person:</p>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', lineHeight: 1.7 }}>
          Raymond Reddington's charm.<br />
          Leslie Knope's heart.<br />
          Chandler Bing's timing.
        </p>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--color-muted)', marginTop: '10px', fontStyle: 'italic' }}>(My friends will confirm all three.)</p>
      </>
    ),
  },
  {
    id: 'sarcasm', size: 'small', rotation: -1.5, pinColor: 'green',
    content: (
      <>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--color-muted)', marginBottom: '8px', lineHeight: 1.5 }}>Most annoying quality,<br />per every person who knows me:</p>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 600 }}>Sarcasm.</p>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--color-muted)', marginTop: '4px', fontStyle: 'italic' }}>(I've tried to dial it back. I haven't.)</p>
      </>
    ),
  },
]

export default function Human() {
  return (
    <section
      id="human"
      className="corkboard-texture"
      style={{
        padding: '120px 48px',
        background: 'var(--color-bg-deep)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <WaypointMarker number="6" label="Rest Stop" />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ marginBottom: '80px' }}
        >
          <span className="label" style={{ marginBottom: '24px', display: 'block' }}>
            05 — The Human
          </span>

          <h2 style={{
            fontFamily: 'var(--font-serif)', fontWeight: 600,
            fontSize: 'clamp(36px, 4vw, 52px)', lineHeight: 1.15, color: 'var(--color-text)',
          }}>
            A few things that don't<br />fit on a resume.
          </h2>
        </motion.div>

        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px', alignItems: 'start' }}
          className="fact-grid"
        >
          {factCards.map((card, i) => (
            <FactCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px)  { #human { padding: 80px 24px !important; } .fact-grid { grid-template-columns: 1fr !important; } .fact-card { transform: none !important; grid-column: span 1 !important; } }
        @media (max-width: 1024px) { .fact-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  )
}
