import { useRef } from 'react'
import { Routes, Route } from 'react-router-dom'

// ── Story page ────────────────────────────────────────────────────────────────
import StoryPage from './pages/StoryPage'

// ── Home: fixed environment ───────────────────────────────────────────────────
import { ScrollProvider } from './context/ScrollContext'
import Nav from './components/Nav'
import SkyCanvas from './canvas/SkyCanvas'
import TerrainCanvas from './canvas/TerrainCanvas'
import CloudLayer from './canvas/CloudLayer'
import ForestLayer from './canvas/ForestLayer'
import TrailCanvas from './canvas/TrailCanvas'
import ElevationMeter from './canvas/ElevationMeter'
import CampfireScene from './environment/CampfireScene'
import SummitPanorama from './environment/SummitPanorama'
import Footer from './components/Footer'

// ── Home: narrative beats — absolute on 1000vh canvas ────────────────────────
import HeroBeat from './beats/HeroBeat'
import OriginBeat from './beats/OriginBeat'
import PivotBeat from './beats/PivotBeat'
import WorkBeat from './beats/WorkBeat'
import PeopleBeat from './beats/PeopleBeat'
import HumanBeat from './beats/HumanBeat'
import SummitBeat from './beats/SummitBeat'

// ── Post-canvas sections ──────────────────────────────────────────────────────
import TrailheadGrid from './components/TrailheadGrid'
import CharacterSection from './components/CharacterSection'
import AboutSection from './components/AboutSection'
import CloudSunrise from './components/CloudSunrise'

// ─── Home page ────────────────────────────────────────────────────────────────

function HomePage() {
  // mountainRef targets ONLY the 1000vh <main> so mountainProgress
  // goes 0→1 over the mountain canvas, independent of post-canvas content.
  const mountainRef = useRef(null)

  return (
    <ScrollProvider mountainRef={mountainRef}>

      {/* ── Fixed: Environmental world ────────────────────────── */}
      <SkyCanvas />        {/* z: 0 — sky gradient */}
      <TerrainCanvas />    {/* z: 1 — distant mountains + rocks */}
      <CloudLayer />       {/* z: 2 — drifting clouds */}
      <ForestLayer />      {/* z: 3 — parallax trees */}
      <CampfireScene />    {/* z: 4 — fire, scroll-range visible */}
      <TrailCanvas />      {/* z: 5 — animated trail path */}
      <SummitPanorama />   {/* z: 1 — summit peaks, visible at 84%+ */}
      <ElevationMeter />   {/* z: 50 — right-edge elevation hiker */}

      {/* ── Fixed nav ─────────────────────────────────────────── */}
      <Nav />

      {/* ── 1000vh mountain canvas ────────────────────────────── */}
      <main
        ref={mountainRef}
        id="main-content"
        style={{
          position: 'relative',
          height: '1000vh',
          overflow: 'hidden',
          // clip-path enforces hard pixel clipping even for composited/will-change layers
          // that bypass overflow:hidden (Framer Motion willChange:transform elements)
          clipPath: 'inset(0)',
        }}
      >
        {/* Narrative beats — absolute, culled by useIsInScrollRange */}
        <HeroBeat />    {/* top: 0vh    — mountain: 0.00–0.15 */}
        <OriginBeat />  {/* top: 100vh  — mountain: 0.08–0.30 */}
        <PivotBeat />   {/* top: 260vh  — mountain: 0.24–0.48 */}
        <WorkBeat />    {/* top: 410vh  — mountain: 0.38–0.62 */}
        <PeopleBeat />  {/* top: 660vh  — mountain: 0.61–0.81 */}
        <HumanBeat />   {/* top: 780vh  — mountain: 0.73–0.92 */}
        <SummitBeat />  {/* top: 880vh  — mountain: 0.86–1.00 */}
      </main>

      {/* ── Post-canvas: normal document flow ─────────────────── */}
      <div style={{
        position: 'relative',
        zIndex: 20,
        background: '#F0EBE2',
      }}>
        {/* Slow dark-to-light bridge — trail descends from the summit into daylight */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '280px',
          background: 'linear-gradient(180deg, #0C0905 0%, rgba(12,9,5,0.55) 40%, rgba(240,235,226,0) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }} />
        <TrailheadGrid />
        <CharacterSection />
        <AboutSection />
        <CloudSunrise />
      </div>

      <Footer />
    </ScrollProvider>
  )
}

// ─── App — Router ─────────────────────────────────────────────────────────────

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/stories/:id" element={<StoryPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}
