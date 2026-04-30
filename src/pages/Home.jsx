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

        {/* Featured Projects */}
        <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
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
          <div style={{ maxWidth: '1100px', margin: '0 auto' }} className="about-grid">
            <div>
              <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#3B82F6', textTransform: 'uppercase', fontWeight: '500', marginBottom: '8px' }}>
                Background
              </div>
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '36px', fontWeight: '700', color: '#F9FAFB', letterSpacing: '-0.8px', marginBottom: '24px' }}>
                About Me
              </h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
                <div style={{ width: '64px', height: '64px', background: 'linear-gradient(135deg, #1D4ED8, #3B82F6)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Outfit, sans-serif', fontSize: '20px', fontWeight: '800', color: '#fff', flexShrink: 0 }}>
                  SD
                </div>
                <div>
                  <div style={{ fontWeight: '600', color: '#F3F4F6', fontSize: '16px' }}>Sujal Deb</div>
                  <div style={{ fontSize: '13px', color: '#6B7280', marginTop: '2px' }}>Data Science Specialist</div>
                </div>
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(34,197,94,0.08)', border: '0.5px solid rgba(34,197,94,0.2)', padding: '6px 14px', borderRadius: '100px', fontSize: '12px', color: '#86EFAC' }}>
                <span style={{ width: '6px', height: '6px', background: '#22C55E', borderRadius: '50%' }} />
                Available for hire
              </div>
            </div>

            <div>
              <p style={{ color: '#9CA3AF', fontSize: '15px', lineHeight: '1.8', marginBottom: '20px', fontWeight: '300' }}>
                I'm a <strong style={{ color: '#E5E7EB', fontWeight: '500' }}>B.Tech CSE graduate (2024)</strong> with a specialization in Data Science. Passionate about turning raw data into insights that drive real business decisions.
              </p>
              <p style={{ color: '#9CA3AF', fontSize: '15px', lineHeight: '1.8', marginBottom: '32px', fontWeight: '300' }}>
                I work across the full data pipeline — from writing complex SQL queries and building ML models to creating dashboards that non-technical stakeholders actually understand and use.
              </p>
              <div className="skills-grid">
                {[
                  { name: 'Python', color: '#3B82F6' },
                  { name: 'Power BI', color: '#8B5CF6' },
                  { name: 'SQL', color: '#10B981' },
                  { name: 'Scikit-learn', color: '#F59E0B' },
                  { name: 'Pandas', color: '#EF4444' },
                  { name: 'Tableau', color: '#06B6D4' },
                  { name: 'Machine Learning', color: '#3B82F6' },
                  { name: 'Data Analysis', color: '#8B5CF6' },
                  { name: 'Statistics', color: '#10B981' },
                ].map(skill => (
                  <div key={skill.name} style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', border: '0.5px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '10px 14px', fontSize: '12px', color: '#9CA3AF', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: skill.color, flexShrink: 0 }} />
                    {skill.name}
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
          .about-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 64px; align-items: center; }
          .skills-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; }
          @media (max-width: 768px) {
            .projects-grid { grid-template-columns: 1fr; }
            .about-grid { grid-template-columns: 1fr; gap: 32px; }
            .skills-grid { grid-template-columns: 1fr 1fr; }
          }
        `}</style>

        <Footer />

      </div>
    </div>
  )
}

export default Home