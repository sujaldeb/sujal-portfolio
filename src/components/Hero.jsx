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
      { name: 'Statistics', logo: 'https://img.icons8.com/color/48/normal-distribution-histogram.png' },
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

const impactCards = [
  { metric: '94%', desc: 'Accuracy in Customer Churn Prediction model', color: '#3B82F6', bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)', projectId: 'project-1' },
  { metric: '8 hrs', desc: 'Saved weekly via automated Power BI reporting', color: '#8B5CF6', bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.2)', projectId: 'project-2' },
  { metric: '+23%', desc: 'Conversion lift from SQL Funnel Analysis', color: '#10B981', bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.2)', projectId: 'project-3' },
  { metric: '89%', desc: 'F1 Score on Sentiment Analysis NLP model', color: '#F59E0B', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)', projectId: 'project-4' },
]

const getSkillGrid = (label, count) => {
  if (label === 'DB') return '1fr 1fr'
  if (count === 5) return '1fr 1fr'
  if (count === 3) return '1fr 1fr 1fr'
  return '1fr 1fr'
}

const Hero = () => {
  const [activeTab, setActiveTab] = useState(0)
  const active = skillCategories[activeTab]

  return (
    <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '70px 20px 60px' }}>

      {/* Top Hero Grid */}
      <div className="hero-grid">

        {/* Left */}
        <div className="hero-left">
         <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(34,197,94,0.1)', border: '0.5px solid rgba(34,197,94,0.3)', color: '#86EFAC', padding: '5px 14px', borderRadius: '100px', fontSize: '12px', marginBottom: '24px' }}>
  <span style={{ width: '6px', height: '6px', background: '#22C55E', borderRadius: '50%' }} />
            Open to opportunities
          </div>

          <h1 className="hero-h1" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: '800', lineHeight: '1.08', letterSpacing: '-1.5px', color: '#F9FAFB', marginBottom: '20px' }}>
            Data Analyst<br />
            <span style={{ background: 'linear-gradient(135deg, #3B82F6, #60A5FA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              & ML Engineer
            </span>
          </h1>

          <p style={{ color: '#C9D1D9', fontSize: '15px', lineHeight: '1.8', maxWidth: '460px', marginBottom: '8px', fontWeight: '400' }}>
            I turn messy data into intelligent systems and dashboards that drive real business decisions.
          </p>
          <p style={{ color: '#E5E7EB', fontSize: '13.5px', lineHeight: '1.7', maxWidth: '440px', marginBottom: '32px', fontWeight: '300' }}>
            From high-accuracy ML models to automated analytics workflows.<br />
            I focus on results you can measure.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/projects" style={{ background: '#3B82F6', color: '#fff', padding: '12px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: '500', textDecoration: 'none' }}>
              View Projects →
            </Link>
            <a href="mailto:sujaldeb1@gmail.com" style={{ background: 'transparent', color: '#9CA3AF', padding: '12px 24px', borderRadius: '8px', fontSize: '14px', textDecoration: 'none', border: '0.5px solid rgba(255,255,255,0.35)' }}>
              Let's Talk
            </a>
          </div>
        </div>

        {/* Right - Skills Card */}
        <div className="hero-skills-wrap">
          <div style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '0.5px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '24px', width: '100%', boxSizing: 'border-box' }}>

            <div style={{ fontSize: '10px', letterSpacing: '2px', color: '#9CA3AF', textTransform: 'uppercase', fontWeight: '500', marginBottom: '14px' }}>
              Tech Stack
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: '5px', marginBottom: '18px', flexWrap: 'wrap' }}>
              {skillCategories.map((cat, i) => (
                <button key={cat.label} onClick={() => setActiveTab(i)} style={{
                  padding: '5px 11px', borderRadius: '100px', fontSize: '11px',
                  fontWeight: activeTab === i ? '600' : '400',
                  border: activeTab === i ? `0.5px solid ${cat.border}` : '0.5px solid rgba(255,255,255,0.07)',
                  background: activeTab === i ? cat.bg : 'transparent',
                  color: activeTab === i ? cat.color : '#6B7280',
                  cursor: 'pointer', fontFamily: 'Plus Jakarta Sans, sans-serif',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Skill Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: getSkillGrid(active.label, active.skills.length), gap: '10px' }}>
              {active.skills.map(skill => (
                <div key={skill.name} style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '0.5px solid rgba(255,255,255,0.07)',
                  borderRadius: '10px', padding: '12px',
                  display: 'flex', alignItems: 'center', gap: '8px',
                  transition: 'border-color 0.2s',
                  minWidth: 0,
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = active.border}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
                >
                  <img src={skill.logo} alt={skill.name} width="22" height="22"
                    style={{ objectFit: 'contain', flexShrink: 0 }}
                    onError={e => { e.target.style.display = 'none' }}
                  />
                  <span style={{ fontSize: '12px', color: '#C9D1D9', fontWeight: '400', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '0.5px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: active.color }} />
              <span style={{ fontSize: '11px', color: '#9CA3AF', fontWeight: '300' }}>
                {active.skills.length} tools in {active.label}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Cards — full width below hero */}
      <div className="impact-strip">
        {impactCards.map((card, i) => (
          <Link key={i} to={`/projects/${card.projectId}`} style={{ textDecoration: 'none', flex: '1 1 0', minWidth: 0 }}>
            <div style={{
              background: card.bg,
              border: `0.5px solid ${card.border}`,
              borderRadius: '12px',
              padding: '20px 14px',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              cursor: 'pointer',
              transition: 'transform 0.2s, border-color 0.2s',
              textAlign: 'center',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxSizing: 'border-box',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = card.color + '60' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = card.border }}
            >
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '22px', fontWeight: '700', color: card.color, letterSpacing: '-0.5px', lineHeight: '1' }}>
                {card.metric}
              </div>
              <div style={{ fontSize: '11px', color: '#C9D1D9', fontWeight: '300', lineHeight: '1.5', textAlign: 'center' }}>
                {card.desc}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
        }
        .hero-h1 { font-size: 48px; }
        .hero-skills-wrap {
          display: flex;
          justify-content: flex-end;
          width: 100%;
          min-width: 0;
          overflow: hidden;
        }
        .hero-skills-wrap > div {
          width: 100%;
          min-width: 0;
          overflow: hidden;
        }
        .impact-strip {
          display: flex;
          flex-direction: row;
          gap: 12px;
          margin-top: 32px;
          width: 100%;
        }
        .impact-strip > a {
          flex: 1 1 0;
          min-width: 0;
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr; gap: 32px; }
          .hero-h1 { font-size: 34px; letter-spacing: -1px; }
          .hero-left { text-align: center; align-items: center; display: flex; flex-direction: column; }
          .hero-left p { text-align: center; }
          .hero-skills-wrap { justify-content: center; width: 100%; }
          .impact-strip {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
          .impact-strip > a {
            flex: unset;
          }
          .impact-strip > a > div {
            padding: 16px 10px;
          }
          .impact-strip > a > div > div:first-child {
            font-size: 18px;
          }
          .impact-strip > a > div > div:last-child {
            font-size: 10px;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero