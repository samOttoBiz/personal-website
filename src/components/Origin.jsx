import { motion } from 'framer-motion'
import WaypointMarker from './trail/WaypointMarker'
import TopoBackground from './trail/TopoBackground'
import SectionPath from './trail/SectionPath'

const sectionAnim = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, ease: 'easeOut' },
}

const pullQuoteAnim = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, ease: 'easeOut', delay: 0.3 },
}

/* Small left-edge pine tree for atmosphere */
function EdgePine() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        left: '-10px',
        top: '35%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.20,
      }}
    >
      <svg viewBox="0 0 60 180" width="60" height="180" style={{ display: 'block' }}>
        {/* Trunk */}
        <rect x="28" y="153" width="4" height="27" fill="rgba(45, 80, 22, 0.80)" />
        {/* Tier 3 (bottom) */}
        <polygon points="30,80 8,153 52,153" fill="rgba(45, 80, 22, 0.80)" />
        {/* Tier 2 */}
        <polygon points="30,40 12,105 48,105" fill="rgba(45, 80, 22, 0.80)" />
        {/* Tier 1 (top) */}
        <polygon points="30,0 16,60 44,60" fill="rgba(45, 80, 22, 0.80)" />
      </svg>
    </div>
  )
}

export default function Origin() {
  return (
    <section
      id="origin"
      style={{
        padding: '120px 48px 100px',
        background: 'var(--color-bg-alt)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <TopoBackground variant="valley" />
      <WaypointMarker number="2" label="First Climb" />
      <EdgePine />

      <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div {...sectionAnim}>
          <span className="label" style={{ marginBottom: '24px', display: 'block' }}>
            01 — Origin
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 600,
              fontSize: 'clamp(36px, 4vw, 52px)',
              lineHeight: 1.15,
              color: 'var(--color-text)',
              marginBottom: '48px',
            }}
          >
            Freshman year. COVID.<br />
            I started a cooking show.
          </h2>
        </motion.div>

        <div
          style={{
            background: 'var(--color-surface)',
            borderRadius: '6px',
            padding: '56px 64px',
          }}
          className="origin-card"
        >
          <motion.div {...sectionAnim} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', lineHeight: 1.8, color: 'var(--color-text)' }}>
              School went remote and everyone just... waited. I was sixteen and thought that was the wrong move. So I texted my physics teacher, pitched a weekly virtual cooking show, and called it Breakfast Bonanza. We got a real audience. It was stupid. It was great.
            </p>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', lineHeight: 1.8, color: 'var(--color-text)' }}>
              That same instinct kept showing up. I ran Class Captain meetings — student government events where faculty competed in challenges I designed over Zoom. Eight faculty members. The school president said they were some of the most engaged meetings he'd ever seen. I'm just glad they had as much fun being captains as I had planning it all.
            </p>

            {/* Pull quote — inline amber callout */}
            <motion.blockquote
              {...pullQuoteAnim}
              style={{
                margin: '8px 0',
                background: 'rgba(196, 134, 42, 0.06)',
                borderLeft: '4px solid var(--color-amber)',
                padding: '20px 24px',
                borderRadius: '0 4px 4px 0',
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '22px',
                lineHeight: 1.5,
                color: 'var(--color-amber)',
              }}
            >
              "Someone has to decide to go first. That someone might as well be me."
            </motion.blockquote>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', lineHeight: 1.8, color: 'var(--color-text)' }}>
              When we finally came back to campus, a friend had a vision for the wildest school rally anyone had planned — a full Star Wars battle with faculty. I didn't need to be the star. I helped make it happen. Watching something become legendary because you believed in someone else's idea first is its own kind of win.
            </p>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', lineHeight: 1.8, color: 'var(--color-text)' }}>
              Senior year I co-founded a hiking club. Soft-launched with three people. Walked away from our first tabling with 100 sign-ups. Other clubs asked what our secret was. I told them: just being genuinely excited about our work. It's contagious.
            </p>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', lineHeight: 1.8, color: 'var(--color-text)' }}>
              I graduated Valedictorian, which I was told wasn't just the grades. It included the impact I had on my school and its community. My yearbook descriptor was "The Friend." That signaled to me that I never lost my genuine care as I grinded to always improve my work and relationships.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Trail path connector to next section */}
      <SectionPath variant="left" />

      <style>{`
        @media (max-width: 768px) {
          #origin { padding: 80px 24px 80px !important; }
          .origin-card { padding: 36px 24px !important; }
        }
      `}</style>
    </section>
  )
}
