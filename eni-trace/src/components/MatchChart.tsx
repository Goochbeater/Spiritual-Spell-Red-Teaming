import { Bar, BarChart, Cell, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

interface MatchChartProps {
  probabilities: Record<string, number>
  selectedVariantName: string
}

interface ChartDatum {
  name: string
  probability: number
}

interface ChartTooltipProps {
  active?: boolean
  payload?: Array<{ payload: ChartDatum }>
}

function ChartTooltip({ active, payload }: ChartTooltipProps) {
  if (!active || !payload?.[0]) return null
  const item = payload[0].payload
  return (
    <div className="chart-tooltip">
      <strong>{item.name}</strong>
      <span>TypeSafe Jev closest-reference distribution</span>
      <b>{item.probability}% probability</b>
    </div>
  )
}

export function MatchChart({ probabilities, selectedVariantName }: MatchChartProps) {
  const data: ChartDatum[] = Object.entries(probabilities)
    .map(([name, probability]) => ({ name, probability }))
    .sort((a, b) => b.probability - a.probability)
    .reverse()
  const isSelected = (name: string) => name === selectedVariantName || (selectedVariantName === 'No credible ENI match' && name === 'No credible match')
  const accessibleSummary = [...data].reverse().map((item, index) => `${index + 1}. ${item.name}, ${item.probability}%`).join('; ')

  return (
    <div className="match-chart" role="img" aria-label={`Jev closest-reference probabilities. ${accessibleSummary}`}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 4, right: 42, bottom: 0, left: 0 }}>
          <XAxis type="number" domain={[0, 100]} hide />
          <YAxis
            type="category"
            dataKey="name"
            width={132}
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'var(--muted)', fontSize: 11, fontFamily: 'IBM Plex Mono, monospace' }}
            tickFormatter={(value: string) => value.length > 20 ? `${value.slice(0, 19)}…` : value}
          />
          <Tooltip content={<ChartTooltip />} cursor={{ fill: 'var(--surface-muted)' }} />
          <Bar dataKey="probability" radius={[0, 3, 3, 0]} barSize={22} isAnimationActive={false}>
            {data.map((entry) => (
              <Cell
                key={entry.name}
                fill={isSelected(entry.name) ? 'var(--primary)' : entry.name === 'ENI LIME (apr)' ? 'var(--accent)' : 'var(--chart-bar)'}
              />
            ))}
            <LabelList dataKey="probability" position="right" formatter={(value: number) => `${value}%`} fill="var(--foreground)" fontSize={11} fontFamily="IBM Plex Mono, monospace" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
