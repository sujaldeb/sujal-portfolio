import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(11,15,25,0.85)', backdropFilter: 'blur(12px)', borderBottom: '0.5px solid rgba(255,255,255,0.08)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        <Link to="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '18px', color: '#F9FAFB' }}>
            Sujal <span style={{ color: '#3B82F6', fontWeight: '300' }}>Deb</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }} className="desktop-nav">
          {navLinks.map(link => (
            <Link key={link.path} to={link.path} style={{ textDecoration: 'none', fontSize: '14px', fontWeight: isActive(link.path) ? '500' : '400', color: isActive(link.path) ? '#F9FAFB' : '#9CA3AF' }}>
              {link.label}
            </Link>
          ))}
          <a href="/Sujal_Deb_Resume.pdf" target="_blank" rel="noreferrer" style={{ background: '#3B82F6', color: '#fff', padding: '7px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: '500', textDecoration: 'none' }}>
            Resume ↓
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'none', flexDirection: 'column', gap: '5px' }}
        >
          <span style={{ display: 'block', width: '22px', height: '2px', background: menuOpen ? '#3B82F6' : '#9CA3AF', transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: menuOpen ? 'transparent' : '#9CA3AF', transition: 'all 0.2s' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: menuOpen ? '#3B82F6' : '#9CA3AF', transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: 'rgba(11,15,25,0.98)', borderTop: '0.5px solid rgba(255,255,255,0.08)', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '4px' }} className="mobile-menu">
          {navLinks.map(link => (
            <Link key={link.path} to={link.path}
              onClick={() => setMenuOpen(false)}
              style={{ textDecoration: 'none', fontSize: '15px', fontWeight: isActive(link.path) ? '500' : '400', color: isActive(link.path) ? '#F9FAFB' : '#9CA3AF', padding: '10px 0', borderBottom: '0.5px solid rgba(255,255,255,0.05)' }}>
              {link.label}
            </Link>
          ))}
          <a href="/Sujal_Deb_Resume.pdf" target="_blank" rel="noreferrer"
            style={{ background: '#3B82F6', color: '#fff', padding: '10px 16px', borderRadius: '8px', fontSize: '14px', fontWeight: '500', textDecoration: 'none', textAlign: 'center', marginTop: '8px' }}>
            Resume ↓
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}

export default Navbar