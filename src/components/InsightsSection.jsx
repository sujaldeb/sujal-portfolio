const breakthroughs = [
  {
    tag: 'Quantum Computing',
    color: '#8B5CF6',
    text: "Google's Willow chip achieved \"below-threshold\" error correction \u2014 the first time adding more qubits reduced the error rate instead of increasing it.",
  },
  {
    tag: 'AI / ML',
    color: '#3B82F6',
    text: 'Foundation models are shifting from bigger-is-better to efficiency-focused architectures, enabling capable models to run on-device instead of only in the cloud.',
  },
  {
    tag: 'Data Engineering',
    color: '#10B981',
    text: 'Vector databases have become standard infrastructure for AI applications, changing how teams store and query unstructured data.',
  },
]

const stats = [
  { value: '10', label: 'End-to-End Projects', color: '#3B82F6' },
  { value: '40M+', label: 'Records Analyzed', color: '#8B5CF6' },
  { value: '12+', label: 'ML Algorithms Deployed', color: '#10B981' },
  { value: '6', label: 'Statistical Methods Applied', color: '#F59E0B' },
]

const cardStyle = {
  background: 'rgba(255,255,255,0.03)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: '0.5px solid rgba(255,255,255,0.08)',
  borderRadius: '16px',
  padding: '28px',
  height: '100%',
  boxSizing: 'border-box',
}

const InsightsSection = () => {
  return (
    <div className="insights-grid">
      {/* Card 1 — Field Notes */}
      <div style={{ ...cardStyle, borderTop: '2px solid #8B5CF6' }}>
        <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#8B5CF6', textTransform: 'uppercase', fontWeight: '500', marginBottom: '6px' }}>
          Field Notes
        </div>
        <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '18px', fontWeight: '700', color: '#F9FAFB', marginBottom: '20px' }}>
          What I'm Reading About
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {breakthroughs.map((b, i) => (
            <div key={i} style={{ paddingBottom: i < breakthroughs.length - 1 ? '18px' : 0, borderBottom: i < breakthroughs.length - 1 ? '0.5px solid rgba(255,255,255,0.06)' : 'none' }}>
              <span style={{
                display: 'inline-block', fontSize: '10px', fontWeight: '600', letterSpacing: '0.5px',
                color: b.color, background: b.color + '18', border: `0.5px solid ${b.color}35`,
                padding: '3px 9px', borderRadius: '5px', marginBottom: '8px',
              }}>
                {b.tag}
              </span>
              <p style={{ color: '#C9D1D9', fontSize: '13px', lineHeight: '1.65', fontWeight: '300', margin: 0 }}>
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Card 2 — Portfolio by the Numbers */}
      <div style={{ ...cardStyle, borderTop: '2px solid #3B82F6' }}>
        <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#3B82F6', textTransform: 'uppercase', fontWeight: '500', marginBottom: '6px' }}>
          By The Numbers
        </div>
        <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '18px', fontWeight: '700', color: '#F9FAFB', marginBottom: '20px' }}>
          Portfolio at a Glance
        </h3>
        <div className="stats-2x2">
          {stats.map((s, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.03)', border: `0.5px solid ${s.color}30`,
              borderRadius: '12px', padding: '18px 14px', textAlign: 'center',
            }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '26px', fontWeight: '800', color: s.color, letterSpacing: '-0.5px', marginBottom: '4px' }}>
                {s.value}
              </div>
              <div style={{ fontSize: '11px', color: '#9CA3AF', fontWeight: '300', lineHeight: '1.4' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .insights-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .stats-2x2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        @media (max-width: 768px) {
          .insights-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  )
}

export default InsightsSection