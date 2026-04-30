import { useState } from 'react'
import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'
import { projects } from '../data/projects'

const filters = ['All', 'ML', 'Analytics', 'SQL']

const Projects = () => {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.tag === active)

  return (
    <div style={{ background: '#0B0F19', minHeight: '100vh' }}>
      <Navbar />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '64px 32px' }}>

        {/* Header */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#3B82F6', textTransform: 'uppercase', fontWeight: '500', marginBottom: '8px' }}>
            All Work
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '42px', fontWeight: '700', color: '#F9FAFB', letterSpacing: '-1px', margin: 0 }}>
              Projects
            </h1>
            <p style={{ color: '#6B7280', fontSize: '14px', fontWeight: '300', margin: 0 }}>
              {filtered.length} projects
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '40px' }}>
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                padding: '7px 18px',
                borderRadius: '100px',
                fontSize: '13px',
                border: active === f ? 'none' : '0.5px solid rgba(255,255,255,0.1)',
                background: active === f ? '#3B82F6' : 'transparent',
                color: active === f ? '#fff' : '#6B7280',
                cursor: 'pointer',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontWeight: active === f ? '500' : '400',
                transition: 'all 0.2s',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Projects