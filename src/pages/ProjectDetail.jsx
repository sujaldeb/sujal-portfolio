import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { projects } from '../data/projects'

const tagColors = {
  ML:        { bg: 'rgba(59,130,246,0.15)',  color: '#93C5FD',  accent: '#3B82F6' },
  Analytics: { bg: 'rgba(168,85,247,0.15)', color: '#C4B5FD',  accent: '#8B5CF6' },
  SQL:       { bg: 'rgba(16,185,129,0.15)', color: '#6EE7B7',  accent: '#10B981' },
}

const placeholderImages = (color) => [
  { label: 'Overview', bg: `linear-gradient(135deg, ${color}22, ${color}44)` },
  { label: 'Analysis', bg: `linear-gradient(135deg, ${color}15, ${color}35)` },
  { label: 'Results',  bg: `linear-gradient(135deg, ${color}20, ${color}40)` },
  { label: 'Details',  bg: `linear-gradient(135deg, ${color}18, ${color}38)` },
]

const ProjectDetail = () => {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)
  const [activeImage, setActiveImage] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  if (!project) {
    return (
      <div style={{ background: '#0B0F19', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 20px', textAlign: 'center' }}>
          <h1 style={{ color: '#F9FAFB', fontFamily: 'Outfit, sans-serif' }}>Project not found</h1>
          <Link to="/projects" style={{ color: '#3B82F6', marginTop: '16px', display: 'inline-block' }}>← Back to Projects</Link>
        </div>
      </div>
    )
  }

  const tag = tagColors[project.tag] || tagColors['ML']
  const images = placeholderImages(tag.accent)

  return (
    <div style={{ background: '#0B0F19', minHeight: '100vh', position: 'relative' }}>
      <div className="glow-bg" />
      <Navbar />

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '56px 20px 80px', position: 'relative', zIndex: 1 }}>

        {/* Back */}
        <Link to="/projects" style={{ color: '#6B7280', fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '36px', transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#E5E7EB'}
          onMouseLeave={e => e.currentTarget.style.color = '#6B7280'}
        >
          ← Back to Projects
        </Link>

        {/* Tag */}
        <span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '500', background: tag.bg, color: tag.color, marginBottom: '14px', letterSpacing: '0.3px' }}>
          {project.tag}
        </span>

        {/* Title */}
        <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '40px', fontWeight: '700', color: '#F9FAFB', letterSpacing: '-1px', marginBottom: '14px', lineHeight: '1.1' }}>
          {project.title}
        </h1>

        {/* Subtitle */}
        <p style={{ color: '#C9D1D9', fontSize: '16px', lineHeight: '1.7', fontWeight: '300', marginBottom: '32px', maxWidth: '700px' }}>
          {project.shortDesc}
        </p>

        {/* Metric + Image Cards — symmetric */}
        <div className="detail-cards-grid" style={{ marginBottom: '48px' }}>

          {/* Metric Card */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: `0.5px solid ${tag.accent}33`,
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 24px',
            gap: '8px',
            borderTop: `2px solid ${tag.accent}`,
          }}>
            <div style={{ fontSize: '10px', letterSpacing: '2px', color: tag.color, textTransform: 'uppercase', fontWeight: '500', marginBottom: '8px' }}>
              Key Result
            </div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '64px', fontWeight: '800', color: tag.color, letterSpacing: '-2px', lineHeight: '1', textShadow: `0 0 30px ${tag.accent}40` }}>
              {project.metric}
            </div>
            <div style={{ fontSize: '14px', color: '#E5E7EB', marginTop: '4px', fontWeight: '300' }}>
              {project.metricLabel}
            </div>

            {/* Divider */}
            <div style={{ width: '40px', height: '1px', background: `${tag.accent}40`, margin: '12px 0' }} />

            {/* Mini stats */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', paddingTop: '4px' }}>
              {project.tools.slice(0, 3).map(tool => (
                <div key={tool} style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: tag.accent }} />
                  <span style={{ fontSize: '12px', color: '#9CA3AF', fontWeight: '300' }}>{tool}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Card */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: `0.5px solid ${tag.accent}33`,
            borderRadius: '16px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            borderTop: `2px solid ${tag.accent}`,
          }}>
            {/* Image Area */}
            <div
              onClick={() => setLightbox(true)}
              style={{
                flex: 1,
                background: images[activeImage].bg,
                position: 'relative',
                cursor: 'zoom-in',
                minHeight: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
                backgroundSize: '24px 24px',
              }}
            >
              {/* Placeholder chart bars */}
              <div style={{ position: 'absolute', bottom: '40px', left: '24px', right: '24px', display: 'flex', alignItems: 'flex-end', gap: '6px', height: '80px' }}>
                {[65, 45, 80, 55, 90, 40, 75, 60, 85, 50, 70, 95].map((h, j) => (
                  <div key={j} style={{ flex: 1, height: `${h}%`, background: tag.accent + '50', borderRadius: '3px 3px 0 0', transition: 'height 0.3s' }} />
                ))}
              </div>

              {/* Image label */}
              <div style={{ position: 'absolute', top: '14px', left: '14px', background: tag.accent + '25', border: `0.5px solid ${tag.accent}40`, padding: '3px 10px', borderRadius: '4px', fontSize: '10px', color: tag.color, fontWeight: '500', letterSpacing: '0.5px' }}>
                {images[activeImage].label} · {activeImage + 1}/{images.length}
              </div>

              {/* Zoom hint */}
              <div style={{ position: 'absolute', bottom: '14px', right: '14px', background: 'rgba(0,0,0,0.4)', padding: '4px 8px', borderRadius: '6px', fontSize: '10px', color: '#9CA3AF' }}>
                click to enlarge
              </div>

              {/* Prev / Next arrows */}
              {activeImage > 0 && (
                <button onClick={e => { e.stopPropagation(); setActiveImage(activeImage - 1) }} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff', width: '28px', height: '28px', borderRadius: '50%', cursor: 'pointer', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  ‹
                </button>
              )}
              {activeImage < images.length - 1 && (
                <button onClick={e => { e.stopPropagation(); setActiveImage(activeImage + 1) }} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff', width: '28px', height: '28px', borderRadius: '50%', cursor: 'pointer', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  ›
                </button>
              )}
            </div>

            {/* Dot indicators + thumbnails */}
            <div style={{ padding: '16px 20px', borderTop: `0.5px solid ${tag.accent}20`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                {images.map((_, i) => (
                  <button key={i} onClick={() => setActiveImage(i)} style={{ width: activeImage === i ? '20px' : '6px', height: '6px', borderRadius: '3px', background: activeImage === i ? tag.accent : tag.accent + '40', border: 'none', cursor: 'pointer', transition: 'all 0.2s', padding: 0 }} />
                ))}
              </div>
              <span style={{ fontSize: '11px', color: '#4B5563' }}>
                {images[activeImage].label}
              </span>
            </div>
          </div>
        </div>

        {/* Case Study */}
        {[
          { label: '01 — Problem', content: project.problem },
          { label: '02 — Approach', content: project.approach },
          { label: '03 — Result', content: project.result },
        ].map(section => (
          <div key={section.label} style={{ marginBottom: '36px', paddingBottom: '36px', borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: '11px', letterSpacing: '2px', color: tag.color, textTransform: 'uppercase', fontWeight: '500', marginBottom: '12px' }}>
              {section.label}
            </div>
            <p style={{ color: '#E5E7EB', fontSize: '15px', lineHeight: '1.8', fontWeight: '300', margin: 0 }}>
              {section.content}
            </p>
          </div>
        ))}

        {/* Tools */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '2px', color: tag.color, textTransform: 'uppercase', fontWeight: '500', marginBottom: '16px' }}>
            04 — Tools Used
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {project.tools.map(tool => (
              <span key={tool} style={{ fontSize: '13px', color: '#E5E7EB', background: 'rgba(255,255,255,0.05)', border: '0.5px solid rgba(255,255,255,0.1)', padding: '6px 14px', borderRadius: '6px', fontWeight: '300' }}>
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {project.github && project.github !== '#' && (
            <a href={project.github} target="_blank" rel="noreferrer" style={{ background: 'rgba(255,255,255,0.05)', color: '#E5E7EB', padding: '12px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: '500', textDecoration: 'none', border: '0.5px solid rgba(255,255,255,0.1)' }}>
              View on GitHub →
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" style={{ background: tag.accent, color: '#fff', padding: '12px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: '500', textDecoration: 'none' }}>
              Live Demo →
            </a>
          )}
        </div>

      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
        >
          <div style={{ width: '100%', maxWidth: '800px', aspectRatio: '16/10', background: images[activeImage].bg, borderRadius: '16px', border: `0.5px solid ${tag.accent}40`, position: 'relative', display: 'flex', alignItems: 'flex-end', padding: '32px' }}>
            <div style={{ position: 'absolute', bottom: '48px', left: '32px', right: '32px', display: 'flex', alignItems: 'flex-end', gap: '8px', height: '120px' }}>
              {[65,45,80,55,90,40,75,60,85,50,70,95].map((h, j) => (
                <div key={j} style={{ flex: 1, height: `${h}%`, background: tag.accent + '60', borderRadius: '4px 4px 0 0' }} />
              ))}
            </div>
            <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(0,0,0,0.6)', color: '#9CA3AF', fontSize: '12px', padding: '6px 12px', borderRadius: '6px' }}>
              click anywhere to close
            </div>
            <div style={{ position: 'absolute', top: '16px', left: '16px', background: tag.accent + '25', border: `0.5px solid ${tag.accent}40`, padding: '4px 12px', borderRadius: '4px', fontSize: '11px', color: tag.color, fontWeight: '500' }}>
              {images[activeImage].label} · {activeImage + 1}/{images.length}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .glow-bg {
          position: fixed; top: 0; left: 0;
          width: 100vw; height: 100vh;
          pointer-events: none; z-index: 0; overflow: hidden;
        }
        .glow-bg::before {
          content: ''; position: absolute;
          top: -200px; left: -100px;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%);
          border-radius: 50%;
        }
        .detail-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 640px) {
          .detail-cards-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <Footer />
    </div>
  )
}

export default ProjectDetail