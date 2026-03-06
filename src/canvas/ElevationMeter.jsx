import { useRef, useState } from 'react'
import { useMotionValueEvent } from 'framer-motion'
import { useScrollContext } from '../context/ScrollContext'

const MAX_ELEVATION = 12000

function HikerIcon({ summit }) {
  return (
    <svg
      width="22"
      height="30"
      viewBox="0 0 22 30"
      fill="none"
      aria-hidden="true"
      style={{ filter: summit ? 'drop-shadow(0 0 4px rgba(196,134,42,0.45))' : 'none' }}
    >
      <circle cx="11" cy="4" r="2.4" fill="rgba(232,226,214,0.95)" />
      <line x1="11" y1="7" x2="11" y2="17" stroke="rgba(232,226,214,0.95)" strokeWidth="2" strokeLinecap="round" />
      <line x1="11" y1="10" x2="7" y2="14" stroke="rgba(232,226,214,0.95)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="11" y1="10" x2="15" y2="13" stroke="rgba(232,226,214,0.95)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="11" y1="17" x2="8" y2="27" stroke="rgba(232,226,214,0.95)" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="11" y1="17" x2="14" y2="26" stroke="rgba(232,226,214,0.95)" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="11.8" y="8" width="4.2" height="6" rx="1.3" fill="rgba(180,145,90,0.85)" />
      {summit && <polygon points="11,0 8,3.5 14,3.5" fill="rgba(196,134,42,0.80)" />}
    </svg>
  )
}

export default function ElevationMeter() {
  const { mountainProgress } = useScrollContext()
  const trackRef = useRef(null)
  const hikerRef = useRef(null)
  const labelRef = useRef(null)

  const [atSummit, setAtSummit] = useState(false)

  useMotionValueEvent(mountainProgress, 'change', (value) => {
    if (!trackRef.current || !hikerRef.current || !labelRef.current) return

    const p = Math.min(1, Math.max(0, value))
    const trackH = trackRef.current.offsetHeight
    const offsetFromTop = trackH * (1 - p)

    const bob = Math.sin(p * Math.PI * 14) * 1.4
    hikerRef.current.style.transform = `translate(-50%, ${offsetFromTop + bob}px)`

    labelRef.current.textContent = `${Math.round(p * MAX_ELEVATION).toLocaleString()} ft`
    setAtSummit(p >= 0.98)
  })

  return (
    <div
      aria-hidden="true"
      className="elevation-meter"
      style={{
        position: 'fixed',
        right: '8px',
        top: '18vh',
        height: '60vh',
        width: '44px',
        zIndex: 60,
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'rgba(10,8,5,0.42)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderRadius: '22px',
        border: '1px solid rgba(255,255,255,0.08)',
        padding: '10px 0',
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ opacity: atSummit ? 0.92 : 0.36, transition: 'opacity 0.35s ease' }}>
        <line x1="3" y1="1" x2="3" y2="13" stroke="rgba(232,226,214,0.7)" strokeWidth="1.2" />
        <polygon points="3,1 12,4.2 3,7.2" fill="rgba(196,134,42,0.85)" />
      </svg>

      <div
        ref={trackRef}
        style={{
          position: 'relative',
          width: '2px',
          flex: 1,
          borderRadius: '999px',
          background: 'rgba(255,255,255,0.20)',
          marginTop: '6px',
        }}
      >
        <div
          ref={hikerRef}
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translate(-50%, 0px)',
          }}
        >
          <HikerIcon summit={atSummit} />
        </div>
      </div>

      <div
        ref={labelRef}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '8px',
          color: 'rgba(232,226,214,0.78)',
          marginTop: '8px',
          whiteSpace: 'nowrap',
        }}
      >
        0 ft
      </div>
    </div>
  )
}