import { motion } from 'framer-motion'

// ─── SummitClosing ────────────────────────────────────────────────────────────
// The "06 — What's Next" section that follows the TrailheadGrid in normal
// document flow (post-canvas). Extracted from SummitBeat so it doesn't
// compete for space inside the 1000vh mountain canvas.

const PARAS = [
  "My dad spent 30 years in sales. I watched him build relationships that outlasted the products, the companies, the industry shifts. He always said people remember how you made them feel — not what you sold them.",
  "I might go deep into AI. I might go deep into finance. I might find something at the intersection of both that I can't see from here yet. What I know is: my values don't change with the market. My relationships are the longest investment I make.",
  "And I genuinely love what I'm doing right now. Which, in my experience, means life keeps showing you the next door. You just have to be paying attention when it opens.",
  "If something here resonated, I'd love to hear from you.",
]

export default function SummitClosing() {
  return (
    <section
      id="contact"
      style={{
        background: 'var(--color-bg, #F0EBE2)',
        padding: 'clamp(80px, 10vw, 140px) 0 clamp(80px, 10vw, 140px)',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 48px' }}>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.10em',
            textTransform: 'uppercase',
            color: 'rgba(45,80,22,0.80)',
            display: 'block',
            marginBottom: '28px',
          }}>
            06 — What&apos;s Next
          </span>
        </motion.div>

        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 600,
            fontSize: 'clamp(36px, 5vw, 56px)',
            lineHeight: 1.15,
            color: 'var(--color-text)',
            marginBottom: '44px',
          }}
        >
          Honestly?<br />
          I have no idea what comes next.
        </motion.h2>

        {/* Body paragraphs */}
        {PARAS.map((text, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '18px',
              lineHeight: 1.85,
              color: 'var(--color-text)',
              marginBottom: '20px',
            }}
          >
            {text}
          </motion.p>
        ))}

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '14px',
            flexWrap: 'wrap',
            fontFamily: 'var(--font-sans)',
            fontSize: '16px',
            margin: '52px 0 80px',
          }}
        >
          <a
            href="mailto:samotto.business@gmail.com"
            style={{ color: 'var(--color-green)', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
          >
            samotto.business@gmail.com
          </a>
          <span style={{ color: 'var(--color-muted)' }}>·</span>
          <a
            href="https://linkedin.com/in/sotto27"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--color-green)', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
          >
            LinkedIn
          </a>
        </motion.div>

        {/* Philosophy beat */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ margin: '20px 0 0' }}
        >
          <div style={{
            width: '36px',
            height: '1px',
            background: 'rgba(196,134,42,0.40)',
            margin: '0 auto 32px',
          }} />

          <p style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(18px, 2.2vw, 24px)',
            lineHeight: 1.55,
            color: 'var(--color-muted)',
            marginBottom: '20px',
          }}>
            Success isn&apos;t a title.
            It&apos;s who you become on the way there.
          </p>

          <blockquote style={{
            margin: '0 0 28px',
            borderLeft: '3px solid rgba(196,134,42,0.35)',
            paddingLeft: '20px',
            textAlign: 'left',
          }}>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(16px, 1.8vw, 20px)',
              lineHeight: 1.6,
              color: 'var(--color-text)',
              marginBottom: '8px',
            }}>
              &ldquo;What good is the warmth of summer without the cold of winter
              to give it sweetness.&rdquo;
            </p>
            <cite style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-muted)',
              fontStyle: 'normal',
            }}>
              — John Steinbeck
            </cite>
          </blockquote>

          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '16px',
            lineHeight: 1.75,
            color: 'var(--color-text)',
            marginBottom: '40px',
          }}>
            I love stories — so please ask me about mine,
            and tell me about yours. I&apos;m all ears.
          </p>

          <p style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '22px',
            lineHeight: 1.5,
            color: 'var(--color-muted)',
            opacity: 0.70,
          }}>
            The trail doesn&apos;t end here.<br />
            It just gets harder to map.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
