import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(11,15,25,0.85)', backdropFilter: 'blur(12px)', borderBottom: '0.5px solid rgba(255,255,255,0.08)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        <Link to="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '20px', color: '#F9FAFB', letterSpacing: '-0.5px' }}>
            Sujal<span style={{ color: '#3B82F6',fontWeight: '300' }}> Deb</span>
          </span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {navLinks.map(link => (
            <Link key={link.path} to={link.path} style={{ textDecoration: 'none', fontSize: '14px', fontWeight: isActive(link.path) ? '500' : '400', color: isActive(link.path) ? '#F9FAFB' : '#9CA3AF' }}>
              {link.label}
            </Link>
          ))}
          <a href="/Sujal_Deb_Resume.pdf" target="_blank" rel="noreferrer" style={{ background: '#3B82F6', color: '#fff', padding: '8px 18px', borderRadius: '8px', fontSize: '13px', fontWeight: '500', textDecoration: 'none' }}>
            Resume ↓
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar