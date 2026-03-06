import { motion } from 'framer-motion'

/**
 * AboutSection — minimal About section (id="about")
 * Sits between TrailheadGrid and CloudSunrise in post-canvas flow.
 * Design consistent with existing site: same background, serif typography,
 * same color tokens and spacing patterns as TrailheadGrid / SummitMarkerCTA.
 */
export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: '96px 0',
        background: '#F0EBE2',
      }}
    >
      <div
        style={{
          maxWidth: '720px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(196,134,42,0.85)',
              marginBottom: '20px',
            }}
          >
            About
          </p>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 600,
              fontSize: 'clamp(30px, 4vw, 46px)',
              lineHeight: 1.15,
              color: 'var(--color-text)',
              marginBottom: '28px',
            }}
          >
            The person behind the trail.
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '17px',
              lineHeight: 1.82,
              color: 'var(--color-text)',
              marginBottom: '18px',
            }}
          >
            I'm Sam — a Cal Poly student studying finance with a genuine obsession
            for the intersection of technology and people. I think the best work
            comes from combining rigorous thinking with real human connection.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '17px',
              lineHeight: 1.82,
              color: 'var(--color-text)',
              marginBottom: '18px',
            }}
          >
            I've led teams through hackathons, co-investigated academic research,
            and built communities from scratch — always with the belief that showing
            up with your whole self is the only strategy worth running.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '17px',
              lineHeight: 1.82,
              color: 'var(--color-muted)',
            }}
          >
            This page is a work in progress — like most things worth caring about.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
