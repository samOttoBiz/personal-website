import { motion } from 'framer-motion'
import { useIsInScrollRange, useScrollRangeOpacity } from '../hooks/useIsInScrollRange'
import TrailSign from '../markers/TrailSign'

const PROJECTS = [
  {
    number: '01',
    tag: 'Hackathon · Cal Poly',
    title: 'Prism',
    context: "Cal Poly's first AI hackathon. We almost imploded before we wrote a line of code.",
    description:
      "Built at Poly Prompt, Prism converts live lecture audio into real-time visual aids using the Claude API. But the actual challenge wasn't technical. A team conflict threatened to unravel everything in the first hour. I put the code down and created space for everyone to be heard. We resolved it, got building, and shipped something we were genuinely proud of. We didn't win, but we were winners.",
    tags: ['Claude API', 'Team Leadership', 'Audio-to-Visual'],
    side: 'left',
    delay: 0,
  },
  {
    number: '02',
    tag: 'Student Organization',
    title: 'Cal Poly Vibe Coding',
    context: "The classroom is built months before the quarter starts. It can't teach what's happening in AI right now.",
    description:
      "VP of External Relations for Cal Poly's Vibe Coding club — bringing technical and non-technical students together to build real AI apps. It's an opportunity for me to be around people I believe in, working towards a mission I know is worthwhile, and learn by doing, what we Cal Poly students do best.",
    tags: ['Community Building', 'AI Education', 'External Partnerships'],
    side: 'right',
    delay: 0.12,
  },
  {
    number: '03',
    tag: 'Academic Research',
    title: 'Prompt Engineering Study',
    context: 'What actually changes when you teach students to prompt better?',
    description:
      "Co-investigator on an IRB-approved study with Dr. Immanuel Williams at Cal Poly. We designed five experimental conditions to measure how structured prompting affects student performance. I built an interactive R/Shiny simulation to demonstrate the methodology — in R specifically, because that's what my professor uses, even though I'm more comfortable in Excel. I've learned to meet people where they are.",
    tags: ['Prompt Engineering', 'R/Shiny', 'Academic Research'],
    side: 'left',
    delay: 0.24,
  },
]

export default function WorkBeat() {
  const visible = useIsInScrollRange(0.38, 0.70)
  const sectionOpacity = useScrollRangeOpacity(0.38, 0.70, 0.10, 0.03)
  if (!visible) return null

  return (
    <section
      id="work"
      style={{
        position: 'absolute',
        top: '410vh',
        left: 0,
        right: 0,
        zIndex: 10,
        padding: '100px 0 80px',
        pointerEvents: 'none',
        opacity: sectionOpacity,
        transition: 'opacity 0.4s ease',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 48px', pointerEvents: 'auto' }}>

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
          03 — The Work
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
            marginBottom: '12px',
          }}
        >
          What I've been building.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '16px',
            lineHeight: 1.75,
            color: 'var(--color-muted)',
            marginBottom: '48px',
          }}
        >
          Three projects. Each one taught me something the classroom couldn't.
        </motion.p>

        {/* Trail signs — staggered left/right */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {PROJECTS.map((p) => (
            <TrailSign
              key={p.number}
              number={p.number}
              tag={p.tag}
              title={p.title}
              context={p.context}
              description={p.description}
              tags={p.tags}
              side={p.side}
              delay={p.delay}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
