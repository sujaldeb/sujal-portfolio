import { Link } from 'react-router-dom'

const tagColors = {
  ML:        { bg: 'rgba(59,130,246,0.15)',  color: '#93C5FD',  accent: '#3B82F6' },
  Analytics: { bg: 'rgba(168,85,247,0.15)', color: '#C4B5FD',  accent: '#8B5CF6' },
  SQL:       { bg: 'rgba(16,185,129,0.15)', color: '#6EE7B7',  accent: '#10B981' },
}

const toolColors = {
  'Python':                 '#3B82F6',
  'Pandas':                 '#8B5CF6',
  'NumPy':                  '#06B6D4',
  'SQLite':                 '#10B981',
  'Scikit-learn':           '#F59E0B',
  'SciPy':                  '#EF4444',
  'Power BI':               '#F59E0B',
  'SQL':                    '#10B981',
  'MySQL':                  '#06B6D4',
  'PostgreSQL':             '#3B82F6',
  'CTEs':                   '#8B5CF6',
  'Window Functions':       '#10B981',
  'Excel':                  '#22C55E',
  'DAX':                    '#F59E0B',
  'Tableau':                '#06B6D4',
  'HuggingFace':            '#F59E0B',
  'Flask':                  '#9CA3AF',
  'BERT':                   '#8B5CF6',
  'Seaborn':                '#06B6D4',
  'Matplotlib':             '#EF4444',
  'PCA':                    '#8B5CF6',
  'K-Means':                '#3B82F6',
  'Prophet':                '#10B981',
  'ARIMA':                  '#06B6D4',
  'TF-IDF':                 '#F59E0B',
  'SVD':                    '#8B5CF6',
  'WHO Data':               '#22C55E',
  'SQL Server':             '#EF4444',
  'LightGBM':               '#22C55E',
  'XGBoost':                '#F59E0B',
  'Streamlit':              '#EF4444',
  'Plotly':                 '#3B82F6',
  'Statsmodels':            '#8B5CF6',
  'MLxtend':                '#06B6D4',
  'Parquet':                '#F59E0B',
  'Stored Procedures':      '#10B981',
  'Star Schema':            '#3B82F6',
  'Medallion Architecture': '#8B5CF6',
  'GitHub':                 '#9CA3AF',
  'Git':                    '#EF4444',
  'Git LFS':                '#F59E0B',
  'SHAP':                   '#22C55E',
  'Isolation Forest':       '#8B5CF6',
  'Logistic Regression':    '#06B6D4',
  'Random Forest':          '#22C55E',
  'FastAPI':                '#06B6D4',
  'Google BigQuery':        '#3B82F6',
  'Sentence Transformers':  '#8B5CF6',
  'PyTorch':                '#EF4444',
  'pdfplumber':             '#F59E0B',
  'python-docx':            '#3B82F6',
  'Google Gemini API':      '#10B981',
  'ESCO Skills':            '#06B6D4',
}

const getToolColor = (tool) => toolColors[tool] || '#6B7280'

const ProjectCard = ({ project }) => {
  const tag = tagColors[project.tag] || tagColors['ML']

  return (
    <Link to={`/projects/${project.id}`} style={{ textDecoration: 'none' }}>
      <div style={{
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '0.5px solid rgba(255,255,255,0.07)',
        borderRadius: '16px',
        padding: '28px',
        cursor: 'pointer',
        transition: 'border-color 0.2s, transform 0.2s',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
        boxSizing: 'border-box',
      }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = tag.accent + '60'
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
          display: 'inline-block', padding: '3px 10px', borderRadius: '4px',
          fontSize: '11px', fontWeight: '500', letterSpacing: '0.3px', marginBottom: '16px',
          background: tag.bg, color: tag.color,
        }}>
          {project.tag}
        </span>

        {/* Title */}
        <h3 style={{
          fontFamily: 'Outfit, sans-serif', fontSize: '18px', fontWeight: '700',
          color: '#F3F4F6', marginBottom: '10px', letterSpacing: '-0.3px',
        }}>
          {project.title}
        </h3>

        {/* Description */}
        <p style={{
          color: '#9CA3AF', fontSize: '13px', lineHeight: '1.65',
          marginBottom: '24px', fontWeight: '300',
        }}>
          {project.shortDesc}
        </p>

        {/* Metric */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div>
            <div style={{
              fontFamily: 'Outfit, sans-serif', fontSize: '20px', fontWeight: '700',
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
            borderRadius: '50%', display: 'flex', alignItems: 'center',
            justifyContent: 'center', color: '#6B7280', fontSize: '14px',
          }}>
            →
          </div>
        </div>

        {/* Tools with colors */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', paddingTop: '14px', borderTop: '0.5px solid rgba(255,255,255,0.05)' }}>
          {project.tools.map(tool => {
            const color = getToolColor(tool)
            return (
              <span key={tool} style={{
                fontSize: '11px',
                color: color,
                background: color + '15',
                border: `0.5px solid ${color}40`,
                padding: '3px 8px',
                borderRadius: '4px',
                fontWeight: '400',
              }}>
                {tool}
              </span>
            )
          })}
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard