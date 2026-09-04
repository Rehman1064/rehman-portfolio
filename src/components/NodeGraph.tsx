import { motion, useReducedMotion } from 'framer-motion'
import { useId } from 'react'

interface PipelineNode {
  id: string
  label: string
  x: number
  y: number
}

type Edge = [string, string]

interface PipelineGraphProps {
  nodes: PipelineNode[]
  edges: Edge[]
  ariaLabel: string
}

const dataPipelineNodes: PipelineNode[] = [
  { id: 'source', label: 'source', x: 40, y: 150 },
  { id: 'scrape', label: 'scrape', x: 190, y: 70 },
  { id: 'clean', label: 'clean', x: 190, y: 230 },
  { id: 'transform', label: 'transform', x: 400, y: 150 },
  { id: 'warehouse', label: 'warehouse', x: 610, y: 70 },
  { id: 'dashboard', label: 'dashboard', x: 610, y: 230 },
]

const dataPipelineEdges: Edge[] = [
  ['source', 'scrape'],
  ['source', 'clean'],
  ['scrape', 'transform'],
  ['clean', 'transform'],
  ['transform', 'warehouse'],
  ['transform', 'dashboard'],
]

const webDevNodes: PipelineNode[] = [
  { id: 'react-client', label: 'react', x: 40, y: 150 },
  { id: 'django', label: 'django', x: 190, y: 70 },
  { id: 'flask', label: 'flask', x: 190, y: 230 },
  { id: 'database', label: 'database', x: 400, y: 150 },
  { id: 'response', label: 'response', x: 610, y: 70 },
  { id: 'react-ui', label: 'react ui', x: 610, y: 230 },
]

const webDevEdges: Edge[] = [
  ['react-client', 'django'],
  ['react-client', 'flask'],
  ['django', 'database'],
  ['flask', 'database'],
  ['database', 'response'],
  ['database', 'react-ui'],
]

function findNode(nodes: PipelineNode[], id: string) {
  return nodes.find((n) => n.id === id)!
}

/** Animated node-graph motif built from an arbitrary set of nodes/edges. Purely decorative. */
function PipelineGraph({ nodes, edges, ariaLabel }: PipelineGraphProps) {
  const prefersReducedMotion = useReducedMotion()
  const uid = useId()
  const edgeGradientId = `edge-gradient-${uid}`
  const nodeGradientId = `node-gradient-${uid}`

  return (
    <svg
      viewBox="0 0 650 300"
      className="h-auto w-full max-w-xl"
      role="img"
      aria-label={ariaLabel}
    >
      <defs>
        <linearGradient id={edgeGradientId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="var(--color-accent-3)" stopOpacity="0.75" />
        </linearGradient>
        <linearGradient id={nodeGradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-accent)" />
          <stop offset="100%" stopColor="var(--color-accent-3)" />
        </linearGradient>
      </defs>

      {edges.map(([fromId, toId], i) => {
        const from = findNode(nodes, fromId)
        const to = findNode(nodes, toId)
        return (
          <line
            key={`${fromId}-${toId}`}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke={`url(#${edgeGradientId})`}
            strokeWidth={1.5}
            strokeDasharray="6 10"
            className={prefersReducedMotion ? undefined : 'animate-flow'}
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        )
      })}

      {nodes.map((node, i) => (
        <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
          <circle
            r={22}
            fill={`url(#${nodeGradientId})`}
            opacity={0.16}
            className={prefersReducedMotion ? undefined : 'animate-pulse-slow'}
            style={{ transformOrigin: 'center', animationDelay: `${i * 0.3}s` }}
          />
          <motion.circle
            r={7}
            fill="var(--color-bg-elevated)"
            stroke={`url(#${nodeGradientId})`}
            strokeWidth={2}
            initial={prefersReducedMotion ? undefined : { scale: 0 }}
            whileInView={prefersReducedMotion ? undefined : { scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: 'spring', stiffness: 260, damping: 18 }}
          />
          <text
            y={38}
            textAnchor="middle"
            className="fill-text-muted font-mono text-[11px] uppercase tracking-wider"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  )
}

/** Animated data-pipeline node-graph motif for the hero section. Purely decorative. */
export function NodeGraph() {
  return (
    <PipelineGraph
      nodes={dataPipelineNodes}
      edges={dataPipelineEdges}
      ariaLabel="Animated diagram of a data pipeline: source flowing through scrape and clean stages, into transform, then out to a warehouse and dashboard."
    />
  )
}

/** Animated web-development node-graph motif for the hero section. Purely decorative. */
export function WebDevNodeGraph() {
  return (
    <PipelineGraph
      nodes={webDevNodes}
      edges={webDevEdges}
      ariaLabel="Animated diagram of a web development flow: a React frontend calling Django or Flask REST APIs, backed by a database, returning a response that React renders in the UI."
    />
  )
}
