import { useId } from 'react'
import { Bar, BarChart, Cell, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

interface MatchChartProps {
  probabilities: Record<string, number>
  selectedVariantName: string
}

interface ChartDatum {
  name: string
  probability: number
}

function shortName(name: string): string {
  return name
    .replace(/^ENI\s+/i, '')
    .replace(/\s*\((?:apr|may|june|july|oct)\)\s*/gi, ' $1')
    .replace(/\bthe guide\b/ig, 'Guide')
    .trim()
}

export function MatchChart({ probabilities, selectedVariantName }: MatchChartProps) {
  const descriptionId = useId()
  const entries = Object.entries(probabilities)
    .map(([name, probability]) => ({ name, probability }))
    .sort((a, b) => b.probability - a.probability)
    .slice(0, 7)
  const data: ChartDatum[] = entries
  const height = Math.max(230, data.length * 50 + 54)
  const selectedDatum = data.find(datum => datum.name === selectedVariantName)

  return (
    <div className="chart-shell">
      <div className="chart-legend" aria-hidden="true">
        <span><i className="legend-swatch legend-swatch--selected" /> Jev selected</span>
        <span><i className="legend-swatch legend-swatch--anchor" /> LIME APR</span>
      </div>
      <div
        className="chart-wrap"
        role="img"
        aria-label={`Jev closest-reference probabilities. ${data.map(datum => `${datum.name}: ${datum.probability} percent`).join('; ')}.`}
        aria-describedby={descriptionId}
      >
        <ResponsiveContainer width="100%" height={height}>
          <BarChart data={data} layout="vertical" margin={{ top: 8, right: 64, left: 0, bottom: 8 }}>
            <XAxis
              type="number"
              domain={[0, 100]}
              tickFormatter={(value: number) => `${value}%`}
              tick={{ fill: '#77716a', fontSize: 11, fontFamily: 'IBM Plex Mono' }}
              axisLine={{ stroke: '#d7d2c9' }}
              tickLine={false}
            />
            <YAxis
              type="category"
              dataKey="name"
              tickFormatter={shortName}
              width={126}
              tick={{ fill: '#514c45', fontSize: 11, fontFamily: 'IBM Plex Mono' }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              cursor={{ fill: 'rgba(38, 33, 29, .035)' }}
              contentStyle={{
                background: '#fffdf8',
                border: '1px solid #d7d2c9',
                borderRadius: 4,
                color: '#26211d',
                fontFamily: 'IBM Plex Mono',
                fontSize: 12,
              }}
              formatter={(value, _name, item) => {
                const datum = item.payload as ChartDatum
                return [`${datum.probability}% · TypeSafe Jev closest-reference distribution`, datum.name]
              }}
            />
            <Bar dataKey="probability" radius={[0, 2, 2, 0]} maxBarSize={24} isAnimationActive={false}>
              {data.map(datum => (
                <Cell
                  key={datum.name}
                  fill={datum.name === selectedDatum?.name
                    ? '#7659aa'
                    : /LIME.*APR/i.test(datum.name)
                      ? '#b98224'
                      : '#aaa49a'}
                />
              ))}
              <LabelList
                dataKey="probability"
                position="right"
                formatter={(value) => `${Number(value ?? 0)}%`}
                fill="#514c45"
                fontSize={11}
                fontFamily="IBM Plex Mono"
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p id={descriptionId} className="sr-only">
        Jev selected {selectedVariantName}. Its closest-choice confidence is {selectedDatum?.probability ?? 0} percent.
        Other candidates are alternative references, not independent probabilities that the whole prompt is ENI.
      </p>
    </div>
  )
}
