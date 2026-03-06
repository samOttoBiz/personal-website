import { useEffect } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import stories from '../data/stories.json'

function estimateReadingTime(body) {
  const wordCount = body.join(' ').split(/\s+/).length
  return Math.max(1, Math.ceil(wordCount / 200))
}

export default function StoryPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  const story = stories.find((s) => s.id === id)
  const storyIndex = stories.findIndex((s) => s.id === id)
  const prevStory = storyIndex > 0 ? stories[storyIndex - 1] : null
  const nextStory = storyIndex < stories.length - 1 ? stories[storyIndex + 1] : null

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [id])

  if (!story) {
    return (
      <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: '#F7F3EC' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: '12px', fontFamily: 'var(--font-sans)', color: 'var(--color-muted)' }}>Story not found.</p>
          <Link to="/" style={{ color: 'var(--color-green)', textDecoration: 'none' }}>← Back to Trail</Link>
        </div>
      </div>
    )
  }

  const readingTime = story.readingTime || estimateReadingTime(story.body)
  const returnY = Number(location.state?.trailScrollY ?? 0)
  const bodyParagraphs = story.closingLine ? story.body : story.body.slice(0, -1)
  const closingLine = story.closingLine || story.body[story.body.length - 1]
  const linkState = { trailScrollY: returnY }

  const isOrigin = story.section === 'Origin'
  const isPivot  = story.section === 'Pivot'
  const accentColor = (isOrigin || story.section === 'Work') ? 'rgba(45,80,22,0.85)' : 'rgba(196,134,42,0.90)'

  return (
    <div style={{ minHeight: '100vh', background: '#F5F0E8' }}>

      {/* ── Sticky nav ─────────────────────────────────────────── */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 40px',
          background: 'rgba(245,240,232,0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(45,38,30,0.10)',
        }}
      >
        <button
          onClick={() => navigate('/', { state: { restoreTrail: true, restoreY: returnY } })}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'var(--font-sans)',
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.06em',
            color: accentColor,
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          ← Back to Trail
        </button>

        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--color-text)', letterSpacing: '-0.01em' }}>
          S.O.
        </span>

        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.08em', color: 'rgba(107,102,96,0.65)' }}>
          {storyIndex + 1} / {stories.length}
        </span>
      </nav>

      {/* ── Article ────────────────────────────────────────────── */}
      <article
        style={{
          maxWidth: '720px',
          margin: '0 auto',
          padding: '72px 48px 100px',
        }}
      >

        {/* Section + read time */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.13em',
              textTransform: 'uppercase',
              color: accentColor,
            }}
          >
            {story.section}
          </span>
          <span style={{ width: '1px', height: '12px', background: 'rgba(107,102,96,0.25)' }} />
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '10px',
              letterSpacing: '0.08em',
              color: 'rgba(107,102,96,0.60)',
              textTransform: 'uppercase',
            }}
          >
            {readingTime} min read
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 600,
            fontSize: 'clamp(38px, 5.5vw, 60px)',
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            color: 'var(--color-text)',
            marginBottom: '24px',
          }}
        >
          {story.title}
        </h1>

        {/* Teaser */}
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(18px, 2.2vw, 22px)',
            lineHeight: 1.65,
            color: 'rgba(107,102,96,0.80)',
            marginBottom: '48px',
          }}
        >
          {story.teaser}
        </p>

        {/* Decorative divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px' }}>
          <div style={{ flex: 1, height: '1px', background: 'rgba(45,38,30,0.12)' }} />
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <circle cx="7" cy="7" r="2.5" fill={accentColor} opacity="0.5" />
            <circle cx="1.5" cy="7" r="1.5" fill={accentColor} opacity="0.25" />
            <circle cx="12.5" cy="7" r="1.5" fill={accentColor} opacity="0.25" />
          </svg>
          <div style={{ flex: 1, height: '1px', background: 'rgba(45,38,30,0.12)' }} />
        </div>

        {/* Optional image */}
        {story.image && (
          <img
            src={story.image}
            alt={story.title}
            style={{
              width: '100%',
              borderRadius: '6px',
              marginBottom: '48px',
              border: '1px solid rgba(45,38,30,0.08)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            }}
          />
        )}

        {/* Body paragraphs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {bodyParagraphs.map((para, i) => (
            <p
              key={`${story.id}-${i}`}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '17px',
                lineHeight: 1.88,
                color: 'rgba(45,38,30,0.88)',
                margin: 0,
              }}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Closing line */}
        <p
          style={{
            marginTop: '52px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(45,38,30,0.10)',
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(20px, 2.4vw, 25px)',
            lineHeight: 1.55,
            color: 'rgba(107,102,96,0.85)',
          }}
        >
          {closingLine}
        </p>

        {/* Prev / Back / Next footer */}
        <div
          style={{
            marginTop: '72px',
            paddingTop: '32px',
            borderTop: '1px solid rgba(45,38,30,0.10)',
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          {/* Prev */}
          {prevStory ? (
            <Link
              to={`/stories/${prevStory.id}`}
              state={linkState}
              style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}
            >
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'rgba(107,102,96,0.55)' }}>
                ← Previous
              </span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: accentColor, lineHeight: 1.3 }}>
                {prevStory.title}
              </span>
            </Link>
          ) : <span />}

          {/* Back to trail */}
          <Link
            to="/"
            state={{ restoreTrail: true, restoreY: returnY }}
            style={{
              textDecoration: 'none',
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              letterSpacing: '0.10em',
              textTransform: 'uppercase',
              color: 'rgba(107,102,96,0.65)',
              whiteSpace: 'nowrap',
            }}
          >
            Back to Trail
          </Link>

          {/* Next */}
          {nextStory ? (
            <Link
              to={`/stories/${nextStory.id}`}
              state={linkState}
              style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-end' }}
            >
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'rgba(107,102,96,0.55)' }}>
                Next →
              </span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: accentColor, lineHeight: 1.3, textAlign: 'right' }}>
                {nextStory.title}
              </span>
            </Link>
          ) : <span />}
        </div>
      </article>

      <style>{`
        @media (max-width: 600px) {
          article { padding: 48px 24px 80px !important; }
          nav { padding: 0 20px !important; }
        }
      `}</style>
    </div>
  )
}
