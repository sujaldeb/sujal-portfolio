import { Link } from 'react-router-dom'

const tagColors = {
  ML:        { bg: 'rgba(59,130,246,0.15)',  color: '#93C5FD',  accent: '#3B82F6' },
  Analytics: { bg: 'rgba(168,85,247,0.15)', color: '#C4B5FD',  accent: '#8B5CF6' },
  SQL:       { bg: 'rgba(16,185,129,0.15)', color: '#6EE7B7',  accent: '#10B981' },
}

const ProjectCard = ({ project }) => {
  const tag = tagColors[project.tag] || tagColors['ML']

  return (
    <Link to={`/projects/${project.id}`} style={{ textDecoration: 'none' }}>
      <div style={{
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '0.5px solid rgba(255,255,255,0.08)',
        borderRadius: '16px',
        padding: '28px',
        cursor: 'pointer',
        transition: 'border-color 0.2s, transform 0.2s',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
      }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)'
          e.currentTarget.style.transform = 'translateY(-3px)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        {/* Top accent line */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
          background: `linear-gradient(90deg, ${tag.accent}, transparent)`,
        }} />

        {/* Tag */}
        <span style={{
          display: 'inline-block',
          padding: '3px 10px', borderRadius: '4px',
          fontSize: '11px', fontWeight: '500',
          letterSpacing: '0.3px', marginBottom: '16px',
          background: tag.bg, color: tag.color,
        }}>
          {project.tag}
        </span>

        {/* Title */}
        <h3 style={{
          fontFamily: 'Outfit, sans-serif',
          fontSize: '18px', fontWeight: '700',
          color: '#F3F4F6', marginBottom: '10px',
          letterSpacing: '-0.3px',
        }}>
          {project.title}
        </h3>

        {/* Description */}
        <p style={{
          color: '#6B7280', fontSize: '13px',
          lineHeight: '1.65', marginBottom: '24px',
          fontWeight: '300',
        }}>
          {project.shortDesc}
        </p>

        {/* Footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '20px', fontWeight: '700',
              color: '#F9FAFB', letterSpacing: '-0.5px',
            }}>
              {project.metric}
            </div>
            <div style={{ fontSize: '11px', color: '#4B5563', marginTop: '2px' }}>
              {project.metricLabel}
            </div>
          </div>
          <div style={{
            width: '32px', height: '32px',
            border: '0.5px solid rgba(255,255,255,0.1)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#6B7280', fontSize: '14px',
          }}>
            →
          </div>
        </div>

        {/* Tools */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '16px', paddingTop: '16px', borderTop: '0.5px solid rgba(255,255,255,0.05)' }}>
          {project.tools.map(tool => (
            <span key={tool} style={{
              fontSize: '11px', color: '#4B5563',
              background: '#1F2937',
              padding: '3px 8px', borderRadius: '4px',
            }}>
              {tool}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard