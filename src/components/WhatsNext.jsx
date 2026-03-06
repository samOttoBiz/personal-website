import { motion } from 'framer-motion'
import WaypointMarker from './trail/WaypointMarker'
import MountainBackground from './trail/MountainBackground'

export default function WhatsNext() {
  return (
    <section
      id="contact"
      style={{
        padding: '120px 48px 320px',
        background: 'var(--color-bg-alt)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <WaypointMarker number="7" label="Summit" />

      {/* Warm sky gradient at top */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(to bottom, rgba(196, 134, 42, 0.04), transparent)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.span
          className="label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ display: 'block', marginBottom: '32px' }}
        >
          06 — What's Next
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 600,
            fontSize: 'clamp(40px, 5vw, 56px)',
            lineHeight: 1.15,
            color: 'var(--color-text)',
            marginBottom: '48px',
          }}
        >
          Honestly?<br />
          I have no idea what comes next.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '64px' }}
        >
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '18px', lineHeight: 1.85, color: 'var(--color-text)' }}>
            My dad spent 30 years in sales. I watched him build relationships that outlasted the products, the companies, the industry shifts. He always said people remember how you made them feel — not what you sold them.
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '18px', lineHeight: 1.85, color: 'var(--color-text)' }}>
            I might go deep into AI. I might go deep into finance. I might find something at the intersection of both that I can't see from here yet. What I know is: my values don't change with the market. My relationships are the longest investment I make.
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '18px', lineHeight: 1.85, color: 'var(--color-text)' }}>
            And I genuinely love what I'm doing right now. Which, in my experience, means life keeps showing you the next door. You just have to be paying attention when it opens.
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '18px', lineHeight: 1.85, color: 'var(--color-text)' }}>
            If something here resonated, I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.35 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            fontSize: '16px',
            fontFamily: 'var(--font-sans)',
            marginBottom: '80px',
          }}
        >
          <a href="mailto:samotto.business@gmail.com" style={{ color: 'var(--color-green)', textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
            onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}>
            samotto.business@gmail.com
          </a>
          <span style={{ color: 'var(--color-muted)' }}>·</span>
          <a href="https://linkedin.com/in/sotto27" target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--color-green)', textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
            onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}>
            LinkedIn
          </a>
        </motion.div>

        {/* Closing line — upgraded */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.0, ease: 'easeOut', delay: 0.5 }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '24px',
            lineHeight: 1.5,
            color: 'var(--color-muted)',
            opacity: 0.75,
          }}
        >
          The trail doesn't end here.<br />
          It just gets harder to map.
        </motion.p>
      </div>

      {/* Mountain background — the summit view */}
      <MountainBackground />

      <style>{`
        @media (max-width: 768px) { #contact { padding: 80px 24px 240px !important; } }
      `}</style>
    </section>
  )
}
