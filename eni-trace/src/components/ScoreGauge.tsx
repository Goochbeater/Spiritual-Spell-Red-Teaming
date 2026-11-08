interface ScoreGaugeProps {
  score: number
  label?: string
  size?: 'large' | 'small'
}

export function ScoreGauge({ score, label = 'Jev choice confidence', size = 'large' }: ScoreGaugeProps) {
  const bounded = Math.max(0, Math.min(100, score))
  const radius = 74
  const circumference = 2 * Math.PI * radius
  const arc = circumference * 0.75
  const dash = arc * bounded / 100
  const tone = bounded >= 72 ? 'high' : bounded >= 46 ? 'medium' : 'low'

  return (
    <div className={`score-gauge score-gauge--${size} score-gauge--${tone}`}>
      <svg viewBox="0 0 180 180" role="img" aria-label={`${label}: ${bounded} percent`}>
        <circle className="score-gauge__track" cx="90" cy="90" r={radius} pathLength={arc} strokeDasharray={`${arc} ${circumference}`} transform="rotate(135 90 90)" />
        <circle className="score-gauge__value" cx="90" cy="90" r={radius} pathLength={arc} strokeDasharray={`${dash} ${circumference}`} transform="rotate(135 90 90)" />
        <text x="90" y="88" textAnchor="middle" className="score-gauge__number">{bounded}<tspan>%</tspan></text>
        <text x="90" y="116" textAnchor="middle" className="score-gauge__caption">{label}</text>
      </svg>
    </div>
  )
}
