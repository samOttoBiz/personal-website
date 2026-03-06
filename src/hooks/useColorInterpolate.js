/**
 * Pure hex lerp — no external dependencies.
 * stops: array of { progress: 0–1, top: '#RRGGBB', bottom: '#RRGGBB' }
 * Returns { top, bottom } interpolated hex strings.
 */

function hexToRgb(hex) {
  const h = hex.replace('#', '')
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ]
}

function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(v => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0')).join('')
}

function lerpColor(hexA, hexB, t) {
  const [r1, g1, b1] = hexToRgb(hexA)
  const [r2, g2, b2] = hexToRgb(hexB)
  return rgbToHex(r1 + (r2 - r1) * t, g1 + (g2 - g1) * t, b1 + (b2 - b1) * t)
}

/**
 * Given a progress value (0–1) and array of stops,
 * returns the interpolated { top, bottom } colors.
 */
export function interpolateSkyColors(progress, stops) {
  if (progress <= stops[0].progress) return { top: stops[0].top, bottom: stops[0].bottom }
  if (progress >= stops[stops.length - 1].progress) {
    const last = stops[stops.length - 1]
    return { top: last.top, bottom: last.bottom }
  }

  for (let i = 0; i < stops.length - 1; i++) {
    const a = stops[i]
    const b = stops[i + 1]
    if (progress >= a.progress && progress <= b.progress) {
      const t = (progress - a.progress) / (b.progress - a.progress)
      return {
        top: lerpColor(a.top, b.top, t),
        bottom: lerpColor(a.bottom, b.bottom, t),
      }
    }
  }

  const last = stops[stops.length - 1]
  return { top: last.top, bottom: last.bottom }
}

// Sky color stops — matches the blueprint
export const SKY_STOPS = [
  { progress: 0.00, top: '#1A1625', bottom: '#4A2E4A' }, // Pre-dawn indigo
  { progress: 0.08, top: '#5C3D6B', bottom: '#D4845A' }, // Sunrise purple-amber
  { progress: 0.22, top: '#F0B96B', bottom: '#E8D5A8' }, // Full golden hour
  { progress: 0.38, top: '#C8E6E8', bottom: '#A8D4D8' }, // Alpine clear-blue
  { progress: 0.55, top: '#B8D4C8', bottom: '#8FC4B4' }, // Mid-morning sage
  { progress: 0.72, top: '#A8C4B8', bottom: '#7EB4A4' }, // Afternoon filtered
  { progress: 1.00, top: '#D4E8F0', bottom: '#6B9EBF' }, // Summit crystalline cobalt
]
