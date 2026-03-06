import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const SECTION_ACCENT = {
  Origin: { badge: 'rgba(45,80,22,0.85)', bg: 'rgba(45,80,22,0.08)', rule: 'rgba(45,80,22,0.30)' },
  Pivot: { badge: 'rgba(160,100,20,0.85)', bg: 'rgba(196,134,42,0.08)', rule: 'rgba(196,134,42,0.35)' },
  Work: { badge: 'rgba(45,80,22,0.85)', bg: 'rgba(45,80,22,0.08)', rule: 'rgba(45,80,22,0.30)' },
  Human: { badge: 'rgba(160,100,20,0.85)', bg: 'rgba(196,134,42,0.08)', rule: 'rgba(196,134,42,0.35)' },
}

export default function TrailheadCard({ story, index }) {
  const [hovered, setHovered] = useState(false)
  const accent = SECTION_ACCENT[story.section] || SECTION_ACCENT.Origin

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/stories/${story.id}`}
        state={{ trailScrollY: window.scrollY }}
        style={{ textDecoration: 'none', display: 'block', height: '100%' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <article
          style={{
            background: hovered ? '#FFFFFF' : 'rgba(255,255,255,0.72)',
            border: hovered ? '1px solid rgba(0,0,0,0.10)' : '1px solid rgba(0,0,0,0.07)',
            borderRadius: '18px',
            padding: '24px',
            transition: 'background 0.24s ease, border-color 0.24s ease, box-shadow 0.24s ease, transform 0.24s ease',
            transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
            boxShadow: hovered ? '0 14px 32px rgba(0,0,0,0.10)' : '0 6px 20px rgba(0,0,0,0.06)',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <span
              style={{
                display: 'inline-block',
                padding: '3px 9px',
                borderRadius: '999px',
                background: accent.bg,
                fontFamily: 'var(--font-sans)',
                fontSize: '9px',
                fontWeight: 700,
                letterSpacing: '0.13em',
                textTransform: 'uppercase',
                color: accent.badge,
              }}
            >
              {story.section}
            </span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: 'var(--color-muted)' }}>
              {story.readingTime} min
            </span>
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 600,
              fontSize: 'clamp(19px, 2vw, 24px)',
              lineHeight: 1.2,
              color: hovered ? 'var(--color-green)' : 'var(--color-text)',
              marginBottom: '10px',
            }}
          >
            {story.title}
          </h3>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              lineHeight: 1.75,
              color: 'var(--color-muted)',
              flex: 1,
            }}
          >
            {story.teaser}
          </p>

          <span
            style={{
              marginTop: '16px',
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: accent.rule,
            }}
          >
            Read Story
          </span>
        </article>
      </Link>
    </motion.div>
  )
}