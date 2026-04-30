import { Link } from 'react-router-dom'
import { useState } from 'react'

const skillCategories = [
  {
    label: 'Data',
    icon: '📊',
    color: '#3B82F6',
    bg: 'rgba(59,130,246,0.12)',
    border: 'rgba(59,130,246,0.25)',
    skills: [
      { name: 'Pandas', icon: '🐼' },
      { name: 'NumPy', icon: '🔢' },
      { name: 'MS Excel', icon: '📗' },
      { name: 'ETL', icon: '🔄' },
    ]
  },
  {
    label: 'ML',
    icon: '🤖',
    color: '#8B5CF6',
    bg: 'rgba(139,92,246,0.12)',
    border: 'rgba(139,92,246,0.25)',
    skills: [
      { name: 'Scikit-learn', icon: '⚙️' },
      { name: 'TensorFlow', icon: '🧠' },
      { name: 'XGBoost', icon: '🚀' },
      { name: 'NLP', icon: '💬' },
    ]
  },
  {
    label: 'Viz',
    icon: '📈',
    color: '#06B6D4',
    bg: 'rgba(6,182,212,0.12)',
    border: 'rgba(6,182,212,0.25)',
    skills: [
      { name: 'Power BI', icon: '📊' },
      { name: 'Tableau', icon: '📉' },
      { name: 'Matplotlib', icon: '🎨' },
      { name: 'Seaborn', icon: '🌊' },
    ]
  },
  {
    label: 'DB',
    icon: '🗄️',
    color: '#10B981',
    bg: 'rgba(16,185,129,0.12)',
    border: 'rgba(16,185,129,0.25)',
    skills: [
      { name: 'SQL', icon: '🔍' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MySQL', icon: '🐬' },
      { name: 'SQLite', icon: '💾' },
    ]
  },
  {
    label: 'Deploy',
    icon: '🚀',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.12)',
    border: 'rgba(245,158,11,0.25)',
    skills: [
      { name: 'Streamlit', icon: '⚡' },
      { name: 'Flask', icon: '🌶️' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'Vercel', icon: '▲' },
    ]
  },
]

const Hero = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '70px 20px 60px' }}>

      {/* Top Hero Grid */}
      <div className="hero-grid">

        {/* Left Side */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(59,130,246,0.12)', border: '0.5px solid rgba(59,130,246,0.3)', color: '#93C5FD', padding: '5px 14px', borderRadius: '100px', fontSize: '12px', marginBottom: '24px' }}>
            <span style={{ width: '6px', height: '6px', background: '#3B82F6', borderRadius: '50%' }} />
            Open to opportunities
          </div>

          <h1 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: '800', lineHeight: '1.08', letterSpacing: '-1.5px', color: '#F9FAFB', marginBottom: '16px' }} className="hero-h1">
            Data Analyst<br />
            <span style={{ background: 'linear-gradient(135deg, #3B82F6, #60A5FA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              & ML Engineer
            </span>
          </h1>

          <p style={{ color: '#C9D1D9', fontSize: '15px', lineHeight: '1.75', maxWidth: '460px', marginBottom: '10px', fontWeight: '400' }}>
            I build machine learning models and data dashboards to analyze complex datasets and turn them into actionable insights that drive smarter decisions and measurable business outcomes.
          </p>

          <p style={{ color: '#6B7280', fontSize: '13px', lineHeight: '1.6', maxWidth: '420px', marginBottom: '32px', fontWeight: '300', fontStyle: 'italic' }}>
            Focused on building models and dashboards that deliver clear, data-driven insights for decision-making.
          </p>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link to="/projects" style={{ background: '#3B82F6', color: '#fff', padding: '12px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: '500', textDecoration: 'none' }}>
              View Projects →
            </Link>
            <a href="mailto:sujaldeb1@gmail.com" style={{ background: 'transparent', color: '#9CA3AF', padding: '12px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: '400', textDecoration: 'none', border: '0.5px solid rgba(255,255,255,0.15)' }}>
              Let's Talk
            </a>
          </div>

          <div style={{ display: 'flex', gap: '32px', marginTop: '48px', paddingTop: '32px', borderTop: '0.5px solid rgba(255,255,255,0.06)' }}>
            {[
              { num: '10+', label: 'Projects Built' },
              { num: '5+', label: 'Tools & Stacks' },
              { num: 'BTech CSE', label: 'Graduate 2024' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '22px', fontWeight: '800', color: '#F9FAFB', letterSpacing: '-0.5px' }}>
                  {stat.num}
                </div>
                <div style={{ fontSize: '11px', color: '#6B7280', marginTop: '2px', fontWeight: '300' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Skills Card */}
        <div className="hero-skills-wrap">
          <div style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '0.5px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '24px', width: '100%' }}>

            {/* Card Header */}
            <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#6B7280', textTransform: 'uppercase', fontWeight: '500', marginBottom: '16px' }}>
              Tech Stack
            </div>

            {/* Tab Buttons */}
            <div style={{ display: 'flex', gap: '6px', marginBottom: '20px', flexWrap: 'wrap' }}>
              {skillCategories.map((cat, i) => (
                <button
                  key={cat.label}
                  onClick={() => setActiveTab(i)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '5px',
                    padding: '6px 12px', borderRadius: '8px', fontSize: '12px',
                    fontWeight: activeTab === i ? '600' : '400',
                    border: activeTab === i ? `0.5px solid ${cat.border}` : '0.5px solid rgba(255,255,255,0.06)',
                    background: activeTab === i ? cat.bg : 'transparent',
                    color: activeTab === i ? cat.color : '#6B7280',
                    cursor: 'pointer', fontFamily: 'Plus Jakarta Sans, sans-serif',
                    transition: 'all 0.2s',
                  }}
                >
                  <span>{cat.icon}</span>
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Active Skills */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {skillCategories[activeTab].skills.map(skill => (
                <div key={skill.name} style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: `0.5px solid ${skillCategories[activeTab].border}`,
                  borderRadius: '10px', padding: '12px 14px',
                  display: 'flex', alignItems: 'center', gap: '10px',
                }}>
                  <span style={{ fontSize: '18px' }}>{skill.icon}</span>
                  <span style={{ fontSize: '13px', color: '#C9D1D9', fontWeight: '400' }}>{skill.name}</span>
                </div>
              ))}
            </div>

            {/* Bottom Tag */}
            <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '0.5px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: skillCategories[activeTab].color }} />
              <span style={{ fontSize: '11px', color: '#4B5563', fontWeight: '300' }}>
                {skillCategories[activeTab].skills.length} tools in {skillCategories[activeTab].label}
              </span>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .hero-h1 { font-size: 48px; }
        .hero-skills-wrap { display: flex; justify-content: flex-end; width: 100%; }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr; gap: 40px; }
          .hero-h1 { font-size: 34px; letter-spacing: -1px; }
          .hero-skills-wrap { justify-content: flex-start; }
        }
      `}</style>
    </section>
  )
}

export default Hero