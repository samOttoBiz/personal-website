import { motion } from 'framer-motion'
import WaypointMarker from './trail/WaypointMarker'
import Campfire from './trail/Campfire'

const projects = [
  {
    number: '01',
    tag: 'Hackathon · Cal Poly',
    title: 'Prism',
    context: 'Cal Poly\'s first AI hackathon. We almost imploded before we wrote a line of code.',
    description: 'Built at Poly Prompt, Prism converts live lecture audio into real-time visual aids using the Claude API. But the actual challenge wasn\'t technical. A team conflict threatened to unravel everything in the first hour. I put the code down and created space for everyone to be heard. We resolved it, got building, and shipped something we were genuinely proud of. We didn\'t win, but we were winners.',
    tags: ['Claude API', 'Team Leadership', 'Audio-to-Visual'],
    rotation: 0.8,
  },
  {
    number: '02',
    tag: 'Student Organization',
    title: 'Cal Poly Vibe Coding',
    context: 'The classroom is built months before the quarter starts. It can\'t teach what\'s happening in AI right now.',
    description: 'VP of External Relations for Cal Poly\'s Vibe Coding club — bringing technical and non-technical students together to build real AI apps. It\'s an opportunity for me to be around people I believe in, working towards a mission I know is worthwhile, and learn by doing, what we Cal Poly students do best.',
    tags: ['Community Building', 'AI Education', 'External Partnerships'],
    rotation: -0.6,
  },
  {
    number: '03',
    tag: 'Academic Research',
    title: 'Prompt Engineering Study',
    context: 'What actually changes when you teach students to prompt better?',
    description: 'Co-investigator on an IRB-approved study with Dr. Immanuel Williams at Cal Poly. We designed five experimental conditions to measure how structured prompting affects student performance. I built an interactive R/Shiny simulation to demonstrate the methodology — in R specifically, because that\'s what my professor uses, even though I\'m more comfortable in Excel. I\'ve learned to meet people where they are.',
    tags: ['Prompt Engineering', 'R/Shiny', 'Academic Research'],
    rotation: 0.5,
  },
]

/* Small trail blaze triangle icon */
function TrailBlaze() {
  return (
    <svg
      width="20" height="20" viewBox="0 0 20 20"
      style={{ position: 'absolute', top: '16px', right: '20px' }}
      aria-hidden="true"
    >
      <polygon
        points="10,3 3,17 17,17"
        stroke="rgba(45, 80, 22, 0.20)"
        fill="none"
        strokeWidth="1.5"
      />
    </svg>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.1 }}
      whileHover={{ y: -4, boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}
      style={{
        background: 'var(--color-surface)',
        borderRadius: '6px',
        padding: '36px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 2px 24px rgba(0,0,0,0.06)',
        transition: 'box-shadow 0.25s ease',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        transform: `rotate(${project.rotation}deg)`,
      }}
    >
      <TrailBlaze />

      <span style={{
        fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 500,
        letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-green)',
      }}>
        {project.tag}
      </span>

      <h3 style={{
        fontFamily: 'var(--font-serif)', fontWeight: 600,
        fontSize: '26px', color: 'var(--color-text)', lineHeight: 1.2,
      }}>
        {project.title}
      </h3>

      <p style={{
        fontFamily: 'var(--font-sans)', fontSize: '15px',
        fontStyle: 'italic', color: 'var(--color-muted)', lineHeight: 1.5,
      }}>
        {project.context}
      </p>

      <p style={{
        fontFamily: 'var(--font-sans)', fontSize: '15px',
        lineHeight: 1.7, color: 'var(--color-text)', flex: 1,
      }}>
        {project.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
        {project.tags.map(tag => (
          <span key={tag} style={{
            fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 500,
            letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-green)',
          }}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Work() {
  return (
    <section
      id="work"
      style={{
        padding: '120px 48px 100px',
        background: 'var(--color-bg-deep)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <WaypointMarker number="4" label="Campsite" />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ marginBottom: '64px' }}
        >
          <span className="label" style={{ marginBottom: '24px', display: 'block' }}>
            03 — Work
          </span>

          <h2 style={{
            fontFamily: 'var(--font-serif)', fontWeight: 600,
            fontSize: 'clamp(36px, 4vw, 52px)', lineHeight: 1.15,
            color: 'var(--color-text)', marginBottom: '16px',
          }}>
            What I've been building.
          </h2>

          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', color: 'var(--color-muted)' }}>
            Three projects. Each one taught me something the classroom couldn't.
          </p>
        </motion.div>

        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px', alignItems: 'start' }}
          className="work-grid"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>

      {/* Campfire — bottom right atmosphere */}
      <Campfire />

      <style>{`
        @media (max-width: 1024px) { .work-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 768px)  { #work { padding: 80px 24px 80px !important; } .work-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
