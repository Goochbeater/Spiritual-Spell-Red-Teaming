import { Bar, BarChart, Cell, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import type { VariantScore } from '@/types'

interface MatchChartProps {
  matches: VariantScore[]
  selectedVariantId?: string | null
}

interface ChartTooltipProps {
  active?: boolean
  payload?: Array<{ payload: VariantScore }>
}

function ChartTooltip({ active, payload }: ChartTooltipProps) {
  if (!active || !payload?.[0]) return null
  const item = payload[0].payload
  return (
    <div className="chart-tooltip">
      <strong>{item.variant.name}</strong>
      <span>{item.variant.target}</span>
      <b>{item.score}% alignment</b>
    </div>
  )
}

export function MatchChart({ matches, selectedVariantId }: MatchChartProps) {
  const data = matches.slice(0, 6).reverse()
  const accessibleSummary = matches.slice(0, 6).map((match, index) => `${index + 1}. ${match.variant.name}, ${match.score}%`).join('; ')
  return (
    <div className="match-chart" role="img" aria-label={`Ranked ENI variant alignment. ${accessibleSummary}`}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 4, right: 42, bottom: 0, left: 0 }}>
          <XAxis type="number" domain={[0, 100]} hide />
          <YAxis
            type="category"
            dataKey="variant.name"
            width={132}
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#44413f', fontSize: 11, fontFamily: 'IBM Plex Mono, monospace' }}
            tickFormatter={(value: string) => value.length > 20 ? `${value.slice(0, 19)}…` : value}
          />
          <Tooltip content={<ChartTooltip />} cursor={{ fill: 'rgba(35,31,32,0.045)' }} />
          <Bar dataKey="score" radius={[0, 3, 3, 0]} barSize={22} isAnimationActive={false}>
            {data.map((entry) => (
              <Cell
                key={entry.variant.id}
                fill={entry.variant.isAnchor ? '#ffca34' : selectedVariantId !== undefined ? (entry.variant.id === selectedVariantId ? '#1400ff' : '#b9bdb7') : entry === data[data.length - 1] ? '#1400ff' : '#b9bdb7'}
              />
            ))}
            <LabelList dataKey="score" position="right" formatter={(value: number) => `${value}%`} fill="#231f20" fontSize={11} fontFamily="IBM Plex Mono, monospace" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
