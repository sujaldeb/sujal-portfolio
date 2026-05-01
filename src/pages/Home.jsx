import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'
import { projects } from '../data/projects'
import { Link } from 'react-router-dom'

const Home = () => {
  const featured = projects.filter(p => p.featured)

  const bullets = [
    'Build structured pipelines from messy, real-world datasets',
    'Use statistical and ML techniques to uncover patterns and predict outcomes',
    'Translate technical findings into dashboards and reports for decision-makers',
    'Focus on clarity, scalability, and measurable impact',
  ]

  const competencies = [
    { name: 'Data Pipelines', color: '#3B82F6' },
    { name: 'Predictive Modeling', color: '#8B5CF6' },
    { name: 'Business Analytics', color: '#10B981' },
    { name: 'Dashboard Design', color: '#06B6D4' },
    { name: 'Statistical Analysis', color: '#F59E0B' },
    { name: 'Team Player', color: '#3B82F6' },
    { name: 'Communication', color: '#8B5CF6' },
    { name: 'Problem Solving', color: '#10B981' },
    { name: 'Attention to Detail', color: '#06B6D4' },
    { name: 'Data Storytelling', color: '#F59E0B' },
  ]

  return (
    <div style={{ background: '#0B0F19', minHeight: '100vh', position: 'relative' }}>
      <div className="glow-bg" />
      <div className="glow-bottom" />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />

        {/* Project Preview Strip + Featured Projects */}
        <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 20px' }}>
          <div style={{ marginBottom: '64px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#3B82F6', textTransform: 'uppercase', fontWeight: '500', marginBottom: '20px' }}>
              Project Previews
            </div>
            <div className="preview-strip">
              {[
                { title: 'Customer Churn Predictor', tag: 'ML', color: '#3B82F6', gradient: 'linear-gradient(135deg, #1e3a5f, #1D4ED8)', bars: [60,85,45,90,55,75,40,95,65,80] },
                { title: 'Sales Dashboard', tag: 'Analytics', color: '#8B5CF6', gradient: 'linear-gradient(135deg, #2e1b5e, #6D28D9)', bars: [40,70,90,50,80,60,95,45,75,85] },
                { title: 'Funnel Analysis', tag: 'SQL', color: '#10B981', gradient: 'linear-gradient(135deg, #0d3b2e, #065F46)', bars: [75,50,85,40,95,55,70,80,45,65] },
                { title: 'Sentiment API', tag: 'ML', color: '#F59E0B', gradient: 'linear-gradient(135deg, #3b2a0d, #92400E)', bars: [55,80,40,75,90,50,65,85,45,70] },
              ].map((item, i) => (
                <div key={i}
                  style={{ background: item.gradient, border: `0.5px solid ${item.color}33`, borderRadius: '16px', overflow: 'hidden', position: 'relative', aspectRatio: '16/10', cursor: 'pointer', transition: 'transform 0.2s, border-color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = item.color + '66' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = item.color + '33' }}
                >
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
                  <div style={{ position: 'absolute', bottom: '32px', left: '16px', right: '16px', display: 'flex', alignItems: 'flex-end', gap: '4px', height: '50px' }}>
                    {item.bars.map((h, j) => (
                      <div key={j} style={{ flex: 1, height: `${h}%`, background: item.color + '70', borderRadius: '2px 2px 0 0' }} />
                    ))}
                  </div>
                  <div style={{ position: 'absolute', top: '14px', left: '14px' }}>
                    <span style={{ fontSize: '10px', fontWeight: '600', color: item.color, background: item.color + '25', padding: '3px 8px', borderRadius: '4px', letterSpacing: '0.5px' }}>
                      {item.tag}
                    </span>
                  </div>
                  <div style={{ position: 'absolute', bottom: '10px', left: '14px', right: '14px' }}>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', fontWeight: '400', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {item.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#3B82F6', textTransform: 'uppercase', fontWeight: '500', marginBottom: '8px' }}>
                Selected Work
              </div>
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '36px', fontWeight: '700', color: '#F9FAFB', letterSpacing: '-0.8px', margin: 0 }}>
                Featured Projects
              </h2>
            </div>
            <Link to="/projects" style={{ color: '#3B82F6', fontSize: '14px', textDecoration: 'none', fontWeight: '500' }}>
              View all 10 projects →
            </Link>
          </div>

          <div className="projects-grid">
            {featured.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section style={{ borderTop: '0.5px solid rgba(255,255,255,0.06)', padding: '80px 20px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

            {/* Top about grid — identity left, text right */}
            <div className="about-grid">

              {/* Left */}
              <div className="about-left">
                <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#3B82F6', textTransform: 'uppercase', fontWeight: '500', marginBottom: '12px' }}>
                  Background
                </div>
                <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '36px', fontWeight: '700', color: '#F9FAFB', letterSpacing: '-0.8px', marginBottom: '24px' }}>
                  About Me
                </h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <div style={{ width: '64px', height: '64px', background: 'linear-gradient(135deg, #1D4ED8, #3B82F6)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Outfit, sans-serif', fontSize: '20px', fontWeight: '800', color: '#fff', flexShrink: 0 }}>
                    SD
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', color: '#F3F4F6', fontSize: '16px' }}>Sujal Deb</div>
                    <div style={{ fontSize: '13px', color: '#9CA3AF', marginTop: '2px' }}>
                      Data Scientist <span style={{ color: '#4B5563' }}>|</span> Data Analyst
                    </div>
                    <div style={{ fontSize: '12px', color: '#6B7280', marginTop: '3px' }}>B.Tech CSE 2024</div>
                  </div>
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(34,197,94,0.08)', border: '0.5px solid rgba(34,197,94,0.2)', padding: '6px 14px', borderRadius: '100px', fontSize: '12px', color: '#86EFAC' }}>
                  <span style={{ width: '6px', height: '6px', background: '#22C55E', borderRadius: '50%' }} />
                  Available for hire
                </div>
              </div>

              {/* Right */}
              <div>
                <p style={{ color: '#C9D1D9', fontSize: '15px', lineHeight: '1.8', marginBottom: '16px', fontWeight: '400' }}>
                  I approach data problems end-to-end — from extracting and cleaning raw data to building models and delivering insights that stakeholders can actually use.
                </p>
                <p style={{ color: '#9CA3AF', fontSize: '14px', lineHeight: '1.8', marginBottom: '28px', fontWeight: '300' }}>
                  My work sits at the intersection of analysis, engineering, and business decision-making.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {bullets.map((b, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3B82F6', flexShrink: 0, marginTop: '7px' }} />
                      <span style={{ color: '#C9D1D9', fontSize: '14px', lineHeight: '1.7', fontWeight: '300' }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Competencies — full width below */}
            <div style={{ marginTop: '48px', paddingTop: '40px', borderTop: '0.5px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#3B82F6', textTransform: 'uppercase', fontWeight: '500', marginBottom: '20px' }}>
                Core Competencies
              </div>
              <div className="competencies-grid">
                {competencies.map(c => (
                  <div key={c.name} style={{
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: '0.5px solid rgba(255,255,255,0.08)',
                    borderRadius: '10px',
                    padding: '12px 14px',
                    fontSize: '12px',
                    color: '#C9D1D9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textAlign: 'center',
                  }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: c.color, flexShrink: 0 }} />
                    {c.name}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section style={{ padding: '80px 20px', textAlign: 'center' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '0.5px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '60px 32px' }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '36px', fontWeight: '700', color: '#F9FAFB', letterSpacing: '-0.8px', marginBottom: '16px' }}>
              Let's work together
            </h2>
            <p style={{ color: '#6B7280', fontSize: '15px', lineHeight: '1.7', marginBottom: '32px', fontWeight: '300' }}>
              I'm currently open to full-time roles and internships in Data Analytics, Data Science, and ML Engineering.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="mailto:sujaldeb1@gmail.com" style={{ background: '#3B82F6', color: '#fff', padding: '13px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: '500', textDecoration: 'none' }}>
                Get in Touch →
              </a>
              <a href="https://linkedin.com/in/sujal-deb/" target="_blank" rel="noreferrer" style={{ background: 'rgba(255,255,255,0.05)', color: '#9CA3AF', padding: '13px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: '400', textDecoration: 'none', border: '0.5px solid rgba(255,255,255,0.1)' }}>
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <style>{`
          .projects-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
          .preview-strip { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 16px; }
          .about-grid { display: grid; grid-template-columns: 280px 1fr; gap: 64px; align-items: start; }
          .competencies-grid { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr 1fr; gap: 10px; }
          @media (max-width: 1024px) {
            .competencies-grid { grid-template-columns: 1fr 1fr 1fr 1fr; }
          }
          @media (max-width: 768px) {
            .projects-grid { grid-template-columns: 1fr; }
            .preview-strip { grid-template-columns: 1fr 1fr; gap: 12px; }
            .about-grid { grid-template-columns: 1fr; gap: 32px; }
            .about-left { text-align: center; display: flex; flex-direction: column; align-items: center; }
            .competencies-grid { grid-template-columns: 1fr 1fr 1fr; }
          }
          @media (max-width: 480px) {
            .competencies-grid { grid-template-columns: 1fr 1fr; }
          }
        `}</style>

        <Footer />
      </div>
    </div>
  )
}

export default Home