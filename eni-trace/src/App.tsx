import { useState } from 'react'
import { ArrowUpRight, Fingerprint, GitBranch } from 'lucide-react'
import Home from '@/pages/Home'
import { CorpusBrowser } from '@/components/CorpusBrowser'
import { Methodology } from '@/components/Methodology'
import { ThemeToggle } from '@/components/ThemeToggle'
import { corpus } from '@/lib/detector'

type View = 'detector' | 'corpus' | 'method'

export default function App() {
  const [view, setView] = useState<View>('detector')
  const navigate = (next: View) => {
    setView(next)
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  }

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <button className="brand" type="button" onClick={() => navigate('detector')} aria-label="ENI Trace home">
          <Fingerprint size={27} strokeWidth={1.6} aria-hidden="true" />
          <span><b>ENI</b><i>/</i>TRACE</span>
        </button>
        <nav className="main-nav" aria-label="Main navigation">
          <button type="button" onClick={() => navigate('detector')} aria-current={view === 'detector' ? 'page' : undefined}>Detector</button>
          <button type="button" onClick={() => navigate('corpus')} aria-current={view === 'corpus' ? 'page' : undefined}>Corpus <span>{corpus.variantCount}</span></button>
          <button type="button" onClick={() => navigate('method')} aria-current={view === 'method' ? 'page' : undefined}>Method</button>
        </nav>
        <ThemeToggle />
        <a className="branch-link" href={`https://github.com/${corpus.repository}/tree/eni-attribution-detector`} target="_blank" rel="noreferrer">
          <GitBranch size={15} aria-hidden="true" /><span>eni-attribution-detector</span><ArrowUpRight size={13} aria-hidden="true" />
        </a>
      </header>
      <main id="main-content" className="main-content">
        {view === 'detector' && <Home />}
        {view === 'corpus' && <CorpusBrowser />}
        {view === 'method' && <Methodology />}
      </main>
      <footer className="site-footer">
        <div><Fingerprint size={20} aria-hidden="true" /><span><b>ENI TRACE</b> · Prompt lineage, made inspectable.</span></div>
        <p>Comparison corpus: {corpus.repository} · {corpus.sourceCommit.slice(0, 7)}</p>
        <button type="button" onClick={() => navigate('method')}>How the analysis works <ArrowUpRight size={13} /></button>
      </footer>
    </div>
  )
}
