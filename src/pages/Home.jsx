import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'
import { projects } from '../data/projects'
import { Link } from 'react-router-dom'

const Home = () => {
  const featured = projects.filter(p => p.featured)

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

            {/* Section label */}
            <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#3B82F6', textTransform: 'uppercase', fontWeight: '500', marginBottom: '12px' }}>
              Background
            </div>

            {/* Heading + Identity Row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '36px', fontWeight: '700', color: '#F9FAFB', letterSpacing: '-0.8px', margin: 0 }}>
                About Me
              </h2>

              {/* Identity pill */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', border: '0.5px solid rgba(255,255,255,0.08)', borderRadius: '100px', padding: '8px 16px 8px 8px' }}>
                <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #1D4ED8, #3B82F6)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '800', color: '#fff', flexShrink: 0 }}>
                  SD
                </div>
                <div>
                  <div style={{ fontWeight: '600', color: '#F3F4F6', fontSize: '13px', lineHeight: '1.2' }}>Sujal Deb</div>
                  <div style={{ fontSize: '11px', color: '#6B7280', marginTop: '1px' }}>Data Scientist · Data Analyst · B.Tech CSE 2024</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginLeft: '8px', paddingLeft: '12px', borderLeft: '0.5px solid rgba(255,255,255,0.08)' }}>
                  <span style={{ width: '6px', height: '6px', background: '#22C55E', borderRadius: '50%' }} />
                  <span style={{ fontSize: '11px', color: '#86EFAC' }}>Available</span>
                </div>
              </div>
            </div>

            {/* Main Glass Card */}
            <div style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '0.5px solid rgba(255,255,255,0.08)', borderRadius: '20px', overflow: 'hidden', borderLeft: '3px solid #3B82F6' }}>
              <div className="about-card-grid">

                {/* Left — Bio */}
                <div style={{ padding: '32px', borderRight: '0.5px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontSize: '10px', letterSpacing: '2px', color: '#3B82F6', textTransform: 'uppercase', fontWeight: '500', marginBottom: '16px' }}>
                    Who I Am
                  </div>
                  <p style={{ color: '#C9D1D9', fontSize: '14.5px', lineHeight: '1.85', marginBottom: '16px', fontWeight: '400' }}>
                    I approach data problems end-to-end — from extracting and cleaning raw datasets to engineering features, training models, and delivering insights that stakeholders can actually act on.
                  </p>
                  <p style={{ color: '#9CA3AF', fontSize: '14px', lineHeight: '1.85', marginBottom: '16px', fontWeight: '300' }}>
                    My work sits at the intersection of analysis, engineering, and business decision-making — bridging the gap between technical complexity and real-world outcomes.
                  </p>
                  <p style={{ color: '#9CA3AF', fontSize: '14px', lineHeight: '1.85', margin: 0, fontWeight: '300' }}>
                    I care deeply about building things that are not just accurate but also explainable, scalable, and useful to the people who rely on them.
                  </p>
                </div>

                {/* Right — Bullets */}
                <div style={{ padding: '32px' }}>
                  <div style={{ fontSize: '10px', letterSpacing: '2px', color: '#3B82F6', textTransform: 'uppercase', fontWeight: '500', marginBottom: '16px' }}>
                    What I Do
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {[
                      { text: 'Build structured pipelines from messy, real-world data', color: '#3B82F6' },
                      { text: 'Apply ML & statistical methods to predict outcomes and uncover patterns', color: '#8B5CF6' },
                      { text: 'Turn technical findings into dashboards and reports stakeholders actually use', color: '#10B981' },
                      { text: 'Write clean, optimized SQL to extract and transform data at scale', color: '#06B6D4' },
                      { text: 'Prioritize clarity, scalability, and measurable business impact in every project', color: '#F59E0B' },
                    ].map((b, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: b.color + '20', border: `0.5px solid ${b.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4L3.5 6.5L9 1" stroke={b.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span style={{ color: '#C9D1D9', fontSize: '14px', lineHeight: '1.7', fontWeight: '300' }}>{b.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Competencies */}
            <div style={{ marginTop: '48px', paddingTop: '40px', borderTop: '0.5px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#3B82F6', textTransform: 'uppercase', fontWeight: '500', marginBottom: '20px' }}>
                Core Competencies
              </div>
              <div className="competencies-grid">
                {[
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
                ].map(c => (
                  <div key={c.name} style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', border: '0.5px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '12px 14px', fontSize: '12px', color: '#C9D1D9', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', textAlign: 'center' }}>
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
          .about-card-grid { display: grid; grid-template-columns: 1fr 1fr; }
          .competencies-grid { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr 1fr; gap: 10px; }
          @media (max-width: 1024px) {
            .competencies-grid { grid-template-columns: 1fr 1fr 1fr 1fr; }
          }
          @media (max-width: 768px) {
            .projects-grid { grid-template-columns: 1fr; }
            .preview-strip { grid-template-columns: 1fr 1fr; gap: 12px; }
            .about-card-grid { grid-template-columns: 1fr; }
            .about-card-grid > div:first-child { border-right: none !important; border-bottom: 0.5px solid rgba(255,255,255,0.06); }
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