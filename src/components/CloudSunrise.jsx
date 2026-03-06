import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/**
 * CloudSunrise — final emotional landing section (post-canvas, normal flow)
 *
 * outdoor.jpg with object-contain so the full image is visible.
 * Dark #0D0B08 background fills letterbox bars so no white shows.
 * Clean opacity fade-in entrance (no blur gimmicks), subtle parallax drift.
 * "The trail doesn't end here." + single "Say hello" CTA.
 */
export default function CloudSunrise() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Photo fades in immediately as section enters view — no dead zone
  const photoOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 1])
  // Subtle upward parallax drift
  const photoY = useTransform(scrollYProgress, [0, 1], ['3%', '-4%'])

  // Text content fades in shortly after photo
  const contentOpacity = useTransform(scrollYProgress, [0.08, 0.28], [0, 1])
  const contentY = useTransform(scrollYProgress, [0.08, 0.28], [28, 0])

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#0D0B08',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Photo — object-contain so entire image is visible */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: photoOpacity,
          y: photoY,
          willChange: 'transform, opacity',
        }}
      >
        <img
          src="/images/outdoor.jpg"
          alt="Summit portrait — the trail doesn't end here"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center center',
          }}
        />
      </motion.div>

      {/* Dark overlay for legibility */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(13,11,8,0.52) 0%, rgba(13,11,8,0.28) 45%, rgba(13,11,8,0.64) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Amber horizon glow — subtle warmth at bottom */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '35%',
          background: 'linear-gradient(to top, rgba(196,134,42,0.10) 0%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Text content */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '680px',
          padding: '0 32px',
          textAlign: 'center',
          opacity: contentOpacity,
          y: contentY,
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(28px, 4.5vw, 52px)',
            lineHeight: 1.25,
            color: 'rgba(255, 248, 228, 0.97)',
            textShadow: '0 2px 24px rgba(0,0,0,0.60)',
            marginBottom: '40px',
            letterSpacing: '-0.01em',
          }}
        >
          The trail doesn't end here.
        </p>

        <a
          href="mailto:samotto.business@gmail.com"
          style={{
            display: 'inline-block',
            fontFamily: 'var(--font-sans)',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: 'rgba(255, 248, 228, 0.90)',
            border: '1px solid rgba(196,134,42,0.55)',
            borderRadius: '999px',
            padding: '13px 28px',
            transition: 'border-color 0.2s ease, color 0.2s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(196,134,42,0.90)'
            e.currentTarget.style.color = 'rgba(255,248,228,1)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(196,134,42,0.55)'
            e.currentTarget.style.color = 'rgba(255,248,228,0.90)'
          }}
        >
          Let's Talk
        </a>
      </motion.div>
    </section>
  )
}
