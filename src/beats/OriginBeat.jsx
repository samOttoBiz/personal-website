import { motion } from 'framer-motion'
import { useIsInScrollRange, useScrollRangeOpacity } from '../hooks/useIsInScrollRange'

const PARAS = [
  {
    text: "School went remote and everyone just… waited. I was sixteen and thought that was the wrong move. So I texted my physics teacher, pitched a weekly virtual cooking show, and called it Breakfast Bonanza. We got a real audience. It was stupid. It was great.",
  },
  {
    text: "That same instinct kept showing up. I ran Class Captain meetings — student government events where faculty competed in challenges I designed over Zoom. Eight faculty members. The school president said they were some of the most engaged meetings he'd ever seen. I'm just glad they had as much fun being captains as I had planning it all.",
  },
  {
    pullQuote: '"Someone has to decide to go first. That someone might as well be me."',
  },
  {
    text: "When we finally came back to campus, a friend had a vision for the wildest school rally anyone had ever planned — a full Star Wars battle with faculty. I didn't need to be the star. I helped make it happen. Watching something become legendary because you believed in someone else's idea first is its own kind of win.",
  },
  {
    text: "Senior year I co-founded a hiking club. Soft-launched with three people. Walked away from our first tabling with 100 sign-ups. Other clubs asked what our secret was. I told them: just being genuinely excited about our work. It's contagious.",
  },
  {
    text: "I graduated Valedictorian, which I was told wasn't just the grades. It included the impact I had on my school and its community. My yearbook descriptor was \"The Friend.\" That signaled to me that I never lost my genuine care as I grinded to always improve my work and relationships.",
  },
]

export default function OriginBeat() {
  const visible = useIsInScrollRange(0.08, 0.24)
  const sectionOpacity = useScrollRangeOpacity(0.08, 0.22, 0.10, 0.02)
  if (!visible) return null

  return (
    <section
      id="origin"
      style={{
        position: 'absolute',
        top: '100vh',
        left: 0,
        right: 0,
        zIndex: 10,
        padding: '100px 0',
        pointerEvents: 'none',
        opacity: sectionOpacity,
        transition: 'opacity 0.4s ease',
      }}
    >
      {/* Left-edge pine silhouette */}
      <svg
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-8px',
          top: '80px',
          width: '80px',
          height: '200px',
          opacity: 0.22,
          pointerEvents: 'none',
        }}
        viewBox="0 0 80 200"
      >
        <polygon points="40,10 10,80 70,80" fill="rgba(45,80,22,1)" />
        <polygon points="40,50 5,130 75,130" fill="rgba(45,80,22,1)" />
        <polygon points="40,100 0,180 80,180" fill="rgba(45,80,22,1)" />
        <rect x="37" y="180" width="6" height="20" fill="rgba(45,80,22,0.80)" />
      </svg>

      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 48px', pointerEvents: 'auto' }}>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
          01 — Origin
        </motion.div>

        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 600,
            fontSize: 'clamp(32px, 4vw, 48px)',
            lineHeight: 1.15,
            color: 'var(--color-text)',
            marginBottom: '40px',
          }}
        >
          Freshman year. COVID.<br />
          I started a cooking show.
        </motion.h2>

        {/* Paragraphs and pull quote */}
        {PARAS.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
          >
            {p.pullQuote ? (
              <blockquote
                style={{
                  margin: '32px 0',
                  background: 'rgba(0,0,0,0.22)',
                  borderLeft: '4px solid rgba(255,255,255,0.55)',
                  padding: '20px 24px',
                  borderRadius: '3px',
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(18px, 2vw, 22px)',
                  lineHeight: 1.45,
                  color: 'rgba(255,248,232,0.95)',
                }}
              >
                {p.pullQuote}
              </blockquote>
            ) : (
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '17px',
                lineHeight: 1.82,
                color: 'var(--color-text)',
                marginBottom: '22px',
              }}>
                {p.text}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Section path — winding connector */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '80px',
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <svg viewBox="0 0 1440 80" style={{ width: '100%', height: '100%', display: 'block' }}>
          <path
            d="M -20 70 C 200 30, 400 60, 600 40 C 800 20, 1000 55, 1460 35"
            stroke="rgba(45,80,22,0.15)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="8 5"
          />
        </svg>
      </div>
    </section>
  )
}
