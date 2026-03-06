const BIO_PARAGRAPHS = [
  'I used to think success meant perfect grades and the right college acceptance letter. I chased that hard — sometimes too hard.',
  'But life has a way of humbling you. Over time, I learned that growth matters more than outcomes, and relationships matter more than recognition. The quality of my life became indistinguishable from the quality of the people in my corner.',
  'Today, I’m a finance-focused storyteller. I love looking at numbers, interpreting what they mean, and helping teams see the future more clearly. Finance isn’t just spreadsheets — it’s narrative, strategy, and trust.',
  'I’ve been told I’m “naturally smart.” The truth is I learned how to learn. I grinded. I failed. I tried again. From being told I was the “bottom of the top” to standing as Valedictorian — from losing elections to leading teams — every chapter reinforced the same lesson: no single setback defines you.',
  'I care deeply. I work hard. I stay curious.',
  'And I believe the best stories are still being written.',
]

const CHARACTERS = [
  'Raymond Reddington - Strategery',
  'Leslie Knope - Heart',
  'Chandler Bing - Wit',
  'Data - Love of the Human Experience',
  'The Professor - Architectural Thinking',
]

export default function PhilosophySection() {
  return (
    <section id="about" className="py-24 md:py-32 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '11px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(45,80,22,0.8)',
            marginBottom: '16px',
          }}
        >
          About
        </p>

        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 600,
            fontSize: 'clamp(32px, 4.4vw, 52px)',
            lineHeight: 1.16,
            color: 'var(--color-text)',
            marginBottom: '28px',
          }}
        >
          Philosophy
        </h2>

        <div className="max-w-3xl space-y-6">
          {BIO_PARAGRAPHS.map((paragraph) => (
            <p
              key={paragraph}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '17px',
                lineHeight: 1.85,
                color: 'var(--color-text)',
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div
          style={{
            marginTop: '56px',
            borderTop: '1px solid rgba(0,0,0,0.09)',
            paddingTop: '28px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-muted)',
              marginBottom: '14px',
            }}
          >
            Characters
          </p>
          <div className="max-w-3xl space-y-3">
            {CHARACTERS.map((line) => (
              <p
                key={line}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '22px',
                  lineHeight: 1.35,
                  color: 'var(--color-text)',
                }}
              >
                {line}
              </p>
            ))}
          </div>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              lineHeight: 1.7,
              color: 'var(--color-muted)',
              marginTop: '22px',
            }}
          >
            Mentors I carry with me: Dr. Immanuel Williams, Dr. Ronda Beaman, Steve Ashford, Tim Ridout, and Dana Otto.
          </p>
        </div>
      </div>
    </section>
  )
}