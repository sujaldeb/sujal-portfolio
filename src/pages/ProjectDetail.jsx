import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { projects } from '../data/projects'

const tagColors = {
  ML:        { bg: 'rgba(59,130,246,0.15)',  color: '#93C5FD',  accent: '#3B82F6' },
  Analytics: { bg: 'rgba(168,85,247,0.15)', color: '#C4B5FD',  accent: '#8B5CF6' },
  SQL:       { bg: 'rgba(16,185,129,0.15)', color: '#6EE7B7',  accent: '#10B981' },
}

const ProjectDetail = () => {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div style={{ background: '#0B0F19', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 32px', textAlign: 'center' }}>
          <h1 style={{ color: '#F9FAFB', fontFamily: 'Outfit, sans-serif' }}>Project not found</h1>
          <Link to="/projects" style={{ color: '#3B82F6', marginTop: '16px', display: 'inline-block' }}>← Back to Projects</Link>
        </div>
      </div>
    )
  }

  const tag = tagColors[project.tag] || tagColors['ML']

  return (
    <div style={{ background: '#0B0F19', minHeight: '100vh' }}>
      <Navbar />

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 32px' }}>

        {/* Back Link */}
        <Link to="/projects" style={{ color: '#6B7280', fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '40px' }}>
          ← Back to Projects
        </Link>

        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500', background: tag.bg, color: tag.color, marginBottom: '16px' }}>
            {project.tag}
          </span>
          <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '42px', fontWeight: '700', color: '#F9FAFB', letterSpacing: '-1px', marginBottom: '16px', lineHeight: '1.1' }}>
            {project.title}
          </h1>
          <p style={{ color: '#9CA3AF', fontSize: '16px', lineHeight: '1.7', fontWeight: '300' }}>
            {project.shortDesc}
          </p>
        </div>

        {/* Metric Banner */}
        <div style={{ background: '#111827', border: '0.5px solid rgba(255,255,255,0.07)', borderRadius: '16px', padding: '32px', marginBottom: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '52px', fontWeight: '800', color: tag.color, letterSpacing: '-2px', lineHeight: '1' }}>
              {project.metric}
            </div>
            <div style={{ fontSize: '14px', color: '#6B7280', marginTop: '8px', fontWeight: '300' }}>
              {project.metricLabel}
            </div>
          </div>
        </div>

        {/* Case Study Sections */}
        {[
          { label: '01 — Problem', content: project.problem },
          { label: '02 — Approach', content: project.approach },
          { label: '03 — Result', content: project.result },
        ].map(section => (
          <div key={section.label} style={{ marginBottom: '40px', paddingBottom: '40px', borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: '11px', letterSpacing: '2px', color: tag.color, textTransform: 'uppercase', fontWeight: '500', marginBottom: '12px' }}>
              {section.label}
            </div>
            <p style={{ color: '#9CA3AF', fontSize: '15px', lineHeight: '1.8', fontWeight: '300', margin: 0 }}>
              {section.content}
            </p>
          </div>
        ))}

        {/* Tools Used */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '2px', color: tag.color, textTransform: 'uppercase', fontWeight: '500', marginBottom: '16px' }}>
            04 — Tools Used
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {project.tools.map(tool => (
              <span key={tool} style={{ fontSize: '13px', color: '#9CA3AF', background: '#1F2937', border: '0.5px solid rgba(255,255,255,0.06)', padding: '6px 14px', borderRadius: '6px' }}>
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {project.github && project.github !== '#' && (
            <a href={project.github} target="_blank" rel="noreferrer" style={{ background: '#1F2937', color: '#E5E7EB', padding: '12px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: '500', textDecoration: 'none', border: '0.5px solid rgba(255,255,255,0.08)' }}>
              View on GitHub →
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" style={{ background: '#3B82F6', color: '#fff', padding: '12px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: '500', textDecoration: 'none' }}>
              Live Demo →
            </a>
          )}
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default ProjectDetail