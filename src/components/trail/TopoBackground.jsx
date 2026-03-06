/**
 * Topographic contour-line texture — purely decorative SVG background.
 * Positioned absolute, fills its nearest position:relative parent (the section).
 * pointerEvents: none, z-index: 0 so it never interferes with content.
 *
 * Props:
 *   variant — 'valley' | 'ridge' | 'plateau'
 */
export default function TopoBackground({ variant = 'valley' }) {
  const configs = {
    valley:  { lineCount: 9,  amplitude: 18, frequency: 0.0055, spacing: 65,  color: 'rgba(45, 80, 22, 0.07)'   },
    ridge:   { lineCount: 7,  amplitude: 30, frequency: 0.0045, spacing: 80,  color: 'rgba(196, 134, 42, 0.065)' },
    plateau: { lineCount: 11, amplitude: 12, frequency: 0.0070, spacing: 52,  color: 'rgba(45, 80, 22, 0.07)'   },
  }

  const cfg = configs[variant] || configs.valley
  const svgWidth  = 1600
  const stepX     = 32
  const pointsPerLine = Math.ceil(svgWidth / stepX) + 2

  const lines = Array.from({ length: cfg.lineCount }, (_, li) => {
    const baseY = 60 + li * cfg.spacing
    const phase = li * 0.55
    const points = Array.from({ length: pointsPerLine }, (_, i) => {
      const x = i * stepX - 80
      const y =
        baseY
        + Math.sin(x * cfg.frequency + phase) * cfg.amplitude
        + Math.sin(x * cfg.frequency * 2.1 + phase * 1.6) * (cfg.amplitude * 0.38)
        + Math.sin(x * cfg.frequency * 0.4 + phase * 0.8) * (cfg.amplitude * 0.22)
      return `${x.toFixed(1)},${y.toFixed(1)}`
    }).join(' ')
    return points
  })

  return (
    <div
      className="topo-background"
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <svg
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        preserveAspectRatio="xMidYMid slice"
      >
        {lines.map((points, i) => (
          <polyline
            key={i}
            points={points}
            fill="none"
            stroke={cfg.color}
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  )
}
