import { Link } from 'react-router-dom'
import { useState } from 'react'

const skillCategories = [
  {
    label: 'Data',
    color: '#3B82F6',
    bg: 'rgba(59,130,246,0.12)',
    border: 'rgba(59,130,246,0.25)',
    skills: [
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
      { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
      { name: 'MS Excel', logo: 'https://img.icons8.com/color/48/microsoft-excel-2019--v1.png' },
    ]
  },
  {
    label: 'ML',
    color: '#8B5CF6',
    bg: 'rgba(139,92,246,0.12)',
    border: 'rgba(139,92,246,0.25)',
    skills: [
      { name: 'Scikit-learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
      { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
      { name: 'Keras', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg' },
      { name: 'OpenCV', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
    ]
  },
  {
    label: 'Viz',
    color: '#06B6D4',
    bg: 'rgba(6,182,212,0.12)',
    border: 'rgba(6,182,212,0.25)',
    skills: [
      { name: 'Power BI', logo: 'https://img.icons8.com/color/48/power-bi.png' },
      { name: 'Tableau', logo: 'https://img.icons8.com/color/48/tableau-software.png' },
      { name: 'Matplotlib', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg' },
      { name: 'Seaborn', logo: 'https://seaborn.pydata.org/_images/logo-mark-lightbg.svg' },
    ]
  },
  {
    label: 'DB',
    color: '#10B981',
    bg: 'rgba(16,185,129,0.12)',
    border: 'rgba(16,185,129,0.25)',
    skills: [
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'SQL Server', logo: 'https://img.icons8.com/color/48/microsoft-sql-server.png' },
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    ]
  },
  {
    label: 'Deploy',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.12)',
    border: 'rgba(245,158,11,0.25)',
    skills: [
      { name: 'Streamlit', logo: 'https://streamlit.io/images/brand/streamlit-mark-color.svg' },
      { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Vercel', logo: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png' },
      { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    ]
  },
]

const stats = [
  { num: '10+', label: 'Projects Built', color: '#3B82F6', bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)' },
  { num: '5+', label: 'Tech Stacks', color: '#8B5CF6', bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.2)' },
  { num: 'BTech CSE', label: 'Graduate 2024', color: '#10B981', bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.2)' },
]

const Hero = () => {
  const [activeTab, setActiveTab] = useState(0)
  const active = skillCategories[activeTab]

  return (
    <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '70px 20px 60px' }}>
      <div className="hero-grid">

        {/* Left */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(59,130,246,0.12)', border: '0.5px solid rgba(59,130,246,0.3)', color: '#93C5FD', padding: '5px 14px', borderRadius: '100px', fontSize: '12px', marginBottom: '24px' }}>
            <span style={{ width: '6px', height: '6px', background: '#3B82F6', borderRadius: '50%' }} />
            Open to opportunities
          </div>

          <h1 className="hero-h1" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: '800', lineHeight: '1.08', letterSpacing: '-1.5px', color: '#F9FAFB', marginBottom: '16px' }}>
            Data Analyst<br />
            <span style={{ background: 'linear-gradient(135deg, #3B82F6, #60A5FA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              & ML Engineer
            </span>
          </h1>

          <p style={{ color: '#C9D1D9', fontSize: '15px', lineHeight: '1.75', maxWidth: '460px', marginBottom: '10px', fontWeight: '400' }}>
            I build machine learning models and data dashboards to analyze complex datasets and turn them into actionable insights that drive smarter decisions and measurable business outcomes.
          </p>

          <p style={{ color: '#E5E7EB', fontSize: '13px', lineHeight: '1.6', maxWidth: '420px', marginBottom: '32px', fontWeight: '300' }}>
            Focused on building models and dashboards that deliver clear, data-driven insights for decision-making.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/projects" style={{ background: '#3B82F6', color: '#fff', padding: '12px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: '500', textDecoration: 'none' }}>
              View Projects →
            </Link>
            <a href="mailto:sujaldeb1@gmail.com" style={{ background: 'transparent', color: '#9CA3AF', padding: '12px 24px', borderRadius: '8px', fontSize: '14px', textDecoration: 'none', border: '0.5px solid rgba(255,255,255,0.15)' }}>
              Let's Talk
            </a>
          </div>

          {/* Stats as glass morphs */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '40px', flexWrap: 'wrap' }}>
            {stats.map(stat => (
              <div key={stat.label} style={{
                background: stat.bg,
                border: `0.5px solid ${stat.border}`,
                borderRadius: '12px',
                padding: '12px 18px',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                display: 'flex', flexDirection: 'column', gap: '2px',
              }}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '18px', fontWeight: '700', color: stat.color, letterSpacing: '-0.5px', lineHeight: '1' }}>
                  {stat.num}
                </div>
                <div style={{ fontSize: '11px', color: '#6B7280', fontWeight: '300' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Skills Card */}
        <div className="hero-skills-wrap">
          <div style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '0.5px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '28px', width: '100%' }}>

            <div style={{ fontSize: '10px', letterSpacing: '2px', color: '#4B5563', textTransform: 'uppercase', fontWeight: '500', marginBottom: '16px' }}>
              Tech Stack
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: '6px', marginBottom: '24px', flexWrap: 'wrap' }}>
              {skillCategories.map((cat, i) => (
                <button key={cat.label} onClick={() => setActiveTab(i)} style={{
                  padding: '6px 16px', borderRadius: '100px', fontSize: '12px',
                  fontWeight: activeTab === i ? '600' : '400',
                  border: activeTab === i ? `0.5px solid ${cat.border}` : '0.5px solid rgba(255,255,255,0.07)',
                  background: activeTab === i ? cat.bg : 'transparent',
                  color: activeTab === i ? cat.color : '#6B7280',
                  cursor: 'pointer', fontFamily: 'Plus Jakarta Sans, sans-serif',
                  transition: 'all 0.2s',
                }}>
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Skill Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {active.skills.map(skill => (
                <div key={skill.name} style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '0.5px solid rgba(255,255,255,0.07)',
                  borderRadius: '12px', padding: '18px 16px',
                  display: 'flex', alignItems: 'center', gap: '12px',
                  transition: 'border-color 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = active.border}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
                >
                  <img src={skill.logo} alt={skill.name} width="28" height="28"
                    style={{ objectFit: 'contain', flexShrink: 0 }}
                    onError={e => { e.target.style.display = 'none' }}
                  />
                  <span style={{ fontSize: '13px', color: '#C9D1D9', fontWeight: '400' }}>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '0.5px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: active.color }} />
              <span style={{ fontSize: '11px', color: '#4B5563', fontWeight: '300' }}>
                {active.skills.length} tools in {active.label}
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
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