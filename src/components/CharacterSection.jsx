import { motion } from 'framer-motion'

const CHARACTERS = [
  {
    name: 'Raymond Reddington',
    show: 'The Blacklist',
    trait: 'Strategery',
    traitColor: 'green',
    description: 'The ability to read three moves ahead while making everyone in the room feel like the most important person there.',
  },
  {
    name: 'Leslie Knope',
    show: 'Parks & Recreation',
    trait: 'Heart',
    traitColor: 'amber',
    description: 'Relentless optimism in the face of every obstacle. She genuinely believes the work matters — and that belief is contagious.',
  },
  {
    name: 'Chandler Bing',
    show: 'Friends',
    trait: 'Wit',
    traitColor: 'green',
    description: 'Using humor to disarm tension and make hard conversations feel human. Laughter as a form of connection, not avoidance.',
  },
  {
    name: 'Data',
    show: 'Star Trek: TNG',
    trait: 'Love of the Human Experience',
    traitColor: 'amber',
    description: 'Endlessly curious about what makes people tick. Approaching every situation with wonder rather than assumption.',
  },
  {
    name: 'The Professor',
    show: 'Money Heist',
    trait: 'Architectural Thinking',
    traitColor: 'green',
    description: 'Building systems that account for the unpredictable. Designing for people, not just outcomes.',
  },
]

export default function CharacterSection() {
  return (
    <section
      style={{
        padding: '0 0 96px',
        background: '#F0EBE2',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 48px' }}>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
          <div style={{ flex: 1, height: '1px', background: 'rgba(45,80,22,0.14)' }} />
          <svg width="18" height="16" viewBox="0 0 18 16" fill="none" aria-hidden="true">
            <polygon points="9,1 1,15 17,15" stroke="rgba(196,134,42,0.55)" fill="none" strokeWidth="1.4" />
          </svg>
          <div style={{ flex: 1, height: '1px', background: 'rgba(45,80,22,0.14)' }} />
        </div>

        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(45,80,22,0.75)',
            marginBottom: '12px',
          }}
        >
          If I were five characters
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.70, ease: [0.22, 1, 0.36, 1], delay: 0.07 }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 600,
            fontSize: 'clamp(28px, 3.5vw, 42px)',
            lineHeight: 1.18,
            color: 'var(--color-text)',
            marginBottom: '48px',
          }}
        >
          The people I'd be made of.
        </motion.h2>

        {/* Cards grid */}
        <div
          className="character-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
        >
          {CHARACTERS.map((c, i) => (
            <CharacterCard key={c.name} character={c} index={i} />
          ))}
        </div>

        <style>{`
          @media (max-width: 1024px) { .character-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 640px)  { .character-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>
    </section>
  )
}

function CharacterCard({ character: c, index: i }) {
  const isAmber = c.traitColor === 'amber'
  const accentColor = isAmber ? 'rgba(196,134,42,0.92)' : 'rgba(45,80,22,0.88)'
  const accentBg    = isAmber ? 'rgba(196,134,42,0.11)' : 'rgba(45,80,22,0.09)'
  const borderColor = isAmber ? 'rgba(196,134,42,0.24)' : 'rgba(45,80,22,0.18)'
  const tilt = ['-0.8deg', '0.6deg', '-0.5deg', '0.9deg', '-0.7deg'][i % 5]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
      style={{
        // 5th card spans 2 columns so the bottom row fills cleanly
        ...(i === 4 ? { gridColumn: 'span 2', maxWidth: '420px' } : {}),
      }}
    >
      <div
        style={{
          background: 'rgba(245,241,230,0.92)',
          border: `1px solid ${borderColor}`,
          borderRadius: '4px',
          padding: '26px 24px 24px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.04)',
          transform: `rotate(${tilt})`,
          position: 'relative',
          height: '100%',
        }}
      >
        {/* Notebook ruled line beneath trait badge */}
        <div style={{
          position: 'absolute',
          top: '50px',
          left: '24px',
          right: '24px',
          height: '1px',
          background: 'rgba(196,134,42,0.14)',
        }} />

        {/* Trait badge */}
        <div style={{ marginBottom: '16px' }}>
          <span style={{
            display: 'inline-block',
            padding: '3px 10px',
            borderRadius: '999px',
            background: accentBg,
            fontFamily: 'var(--font-sans)',
            fontSize: '9px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: accentColor,
          }}>
            {c.trait}
          </span>
        </div>

        {/* Character name */}
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 600,
          fontSize: 'clamp(17px, 1.8vw, 21px)',
          lineHeight: 1.2,
          color: 'var(--color-text)',
          marginBottom: '4px',
        }}>
          {c.name}
        </p>

        {/* Show */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '11px',
          color: 'rgba(107,102,96,0.65)',
          fontStyle: 'italic',
          marginBottom: '14px',
        }}>
          {c.show}
        </p>

        {/* Description */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '13px',
          lineHeight: 1.72,
          color: 'rgba(45,38,30,0.78)',
        }}>
          {c.description}
        </p>
      </div>
    </motion.div>
  )
}
