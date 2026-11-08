interface ScoreGaugeProps {
  score: number
  label?: string
  size?: 'large' | 'small'
}

export function ScoreGauge({ score, label = 'Jev choice confidence', size = 'large' }: ScoreGaugeProps) {
  const radius = 70
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - Math.min(100, Math.max(0, score)) / 100)
  return (
    <div className={`score-gauge ${size === 'small' ? 'score-gauge--small' : ''}`} role="img" aria-label={`${label}: ${score} percent`}>
      <svg viewBox="0 0 168 168" aria-hidden="true">
        <circle className="score-gauge__track" cx="84" cy="84" r={radius} />
        <circle
          className="score-gauge__value"
          cx="84"
          cy="84"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="score-gauge__content">
        <div className="score-gauge__reading">
          <span className="score-gauge__number">{Math.round(score)}</span>
          <span className="score-gauge__percent">%</span>
        </div>
        <span className="score-gauge__label">{label}</span>
      </div>
    </div>
  )
}

