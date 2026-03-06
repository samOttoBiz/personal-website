import { motion } from 'framer-motion'
import TrailheadCard from './TrailheadCard'
import stories from '../data/stories.json'

export default function TrailheadGrid() {
  return (
    <section
      id="stories"
      style={{
        position: 'relative',
        zIndex: 10,
        padding: '200px 0 96px',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div style={{ marginBottom: '54px' }}>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(196,134,42,0.85)',
              marginBottom: '14px',
            }}
          >
            Stories
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 600,
              fontSize: 'clamp(34px, 5vw, 56px)',
              lineHeight: 1.12,
              color: 'var(--color-text)',
              marginBottom: '16px',
            }}
          >
            Every mile has a story.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'var(--color-muted)',
              maxWidth: '560px',
            }}
          >
            {stories.length} stories from my trail — from my origins to my work today, and what it means to be human through all of it.
          </motion.p>
        </div>

        <div className="trailhead-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {stories.map((story, i) => (
            <TrailheadCard key={story.id} story={story} index={i} />
          ))}
        </div>

        <style>{`
          .max-w-6xl { max-width: 72rem; }
          .mx-auto { margin-left: auto; margin-right: auto; }
          .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
          @media (max-width: 980px) {
            .trailhead-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 640px) {
            .trailhead-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  )
}
