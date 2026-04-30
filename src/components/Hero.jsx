import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '100px 32px 80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>

      <div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(59,130,246,0.12)', border: '0.5px solid rgba(59,130,246,0.3)', color: '#93C5FD', padding: '5px 14px', borderRadius: '100px', fontSize: '12px', marginBottom: '24px' }}>
          <span style={{ width: '6px', height: '6px', background: '#3B82F6', borderRadius: '50%' }} />
          Open to opportunities
        </div>

        <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '52px', fontWeight: '800', lineHeight: '1.08', letterSpacing: '-1.5px', color: '#F9FAFB', marginBottom: '20px' }}>
          Data Analyst<br />
          <span style={{ background: 'linear-gradient(135deg, #3B82F6, #60A5FA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            & ML Engineer
          </span>
        </h1>

        <p style={{ color: '#9CA3AF', fontSize: '16px', lineHeight: '1.7', maxWidth: '420px', marginBottom: '32px', fontWeight: '300' }}>
          Hi, I'm <strong style={{ color: '#E5E7EB', fontWeight: '500' }}>Sujal Deb</strong> — a CSE graduate specializing in Data Science. I turn messy data into clear decisions through ML models and dashboards that business teams actually understand.
        </p>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Link to="/projects" style={{ background: '#3B82F6', color: '#fff', padding: '12px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: '500', textDecoration: 'none' }}>
            View Projects →
          </Link>
          <a href="mailto:sujaldeb@email.com" style={{ background: 'transparent', color: '#9CA3AF', padding: '12px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: '400', textDecoration: 'none', border: '0.5px solid rgba(255,255,255,0.15)' }}>
            Let's Talk
          </a>
        </div>

        <div style={{ display: 'flex', gap: '32px', marginTop: '48px', paddingTop: '32px', borderTop: '0.5px solid rgba(255,255,255,0.06)' }}>
          {[
            { num: '10+', label: 'Projects Built' },
            { num: '3+', label: 'Tools & Stacks' },
            { num: '2024', label: 'BTech Graduate' },
          ].map(stat => (
            <div key={stat.label}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '24px', fontWeight: '800', color: '#F9FAFB', letterSpacing: '-0.5px' }}>
                {stat.num}
              </div>
              <div style={{ fontSize: '12px', color: '#6B7280', marginTop: '2px', fontWeight: '300' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ background: 'rgba(255,255,255,0.04)',
backdropFilter: 'blur(16px)',
WebkitBackdropFilter: 'blur(16px)',
border: '0.5px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px', width: '320px', fontFamily: 'monospace', fontSize: '13px' }}>
          <div style={{ display: 'flex', gap: '6px', marginBottom: '20px' }}>
            {['#EF4444', '#F59E0B', '#22C55E'].map(color => (
              <div key={color} style={{ width: '10px', height: '10px', borderRadius: '50%', background: color }} />
            ))}
          </div>

          {[
            { text: '# Sujal Deb', color: '#6B7280' },
            { text: 'import pandas as pd', color: '#9CA3AF' },
            { text: 'from sklearn.ensemble import', color: '#9CA3AF' },
            { text: '    RandomForestClassifier', color: '#60A5FA' },
            { text: '', color: '' },
            { text: 'model.fit(X_train, y_train)', color: '#9CA3AF' },
            { text: 'accuracy = 0.94', color: '#FBBF24' },
            { text: '', color: '' },
            { text: '✓ Model trained successfully', color: '#4ADE80' },
            { text: '✓ Ready to solve problems', color: '#4ADE80' },
          ].map((line, i) => (
            <div key={i} style={{ color: line.color, lineHeight: '1.8', fontSize: '12px' }}>
              {line.text || '\u00A0'}
            </div>
          ))}

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
            <span style={{ color: '#6B7280', fontSize: '12px' }}>$</span>
            <span style={{ display: 'inline-block', width: '8px', height: '14px', background: '#3B82F6' }} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>

    </section>
  )
}

export default Hero