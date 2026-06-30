import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { industries } from '../data/industries'
import logo from '../assets/logo.png'

// ── Load IM Fell English (Koch Antiqua style) once ──────────────────────────
if (typeof document !== 'undefined' && !document.getElementById('koch-antiqua-font')) {
  const link = document.createElement('link')
  link.id = 'koch-antiqua-font'
  link.rel = 'stylesheet'
  link.href = 'https://fonts.googleapis.com/css2?family=IM+Fell+English:ital@0;1&family=Inter:wght@400;500;600&display=swap'
  document.head.appendChild(link)
}

// Inject keyframe CSS once
if (typeof document !== 'undefined' && !document.getElementById('navbar-keyframes')) {
  const style = document.createElement('style')
  style.id = 'navbar-keyframes'
  style.textContent = `
    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-10px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes dropIn {
      from { opacity: 0; transform: translateY(-6px) scaleY(0.95); }
      to   { opacity: 1; transform: translateY(0) scaleY(1); }
    }
    .nav-link-underline {
      position: relative;
    }
    .nav-link-underline::after {
      content: '';
      position: absolute;
      left: 0; bottom: -3px;
      width: 0; height: 2px;
      background: #e05a14;
      transition: width 0.25s ease;
    }
    .nav-link-underline:hover::after,
    .nav-link-underline.active::after {
      width: 100%;
    }
    .mobile-menu-enter {
      animation: slideDown 0.3s ease forwards;
    }
    .dropdown-enter {
      animation: dropIn 0.22s ease forwards;
    }
    .nav-item-stagger > * {
      opacity: 0;
      animation: fadeIn 0.3s ease forwards;
    }
    .nav-item-stagger > *:nth-child(1) { animation-delay: 0.05s; }
    .nav-item-stagger > *:nth-child(2) { animation-delay: 0.10s; }
    .nav-item-stagger > *:nth-child(3) { animation-delay: 0.15s; }
    .nav-item-stagger > *:nth-child(4) { animation-delay: 0.20s; }
    .nav-item-stagger > *:nth-child(5) { animation-delay: 0.25s; }
    .nav-item-stagger > *:nth-child(6) { animation-delay: 0.30s; }
  `
  document.head.appendChild(style)
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen]     = useState(false)
  const [mobileIndOpen, setMobileIndOpen] = useState(false)
  const [dropOpen, setDropOpen]         = useState(false)
  const [scrolled, setScrolled]         = useState(false)
  const dropRef = useRef(null)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setMobileIndOpen(false)
    setDropOpen(false)
  }, [location])

  // Scroll-aware background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const closeAll = () => {
    setMobileOpen(false)
    setMobileIndOpen(false)
    setDropOpen(false)
  }

  return (
    <header
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 200,
        transition: 'background 0.4s ease, box-shadow 0.4s ease, padding 0.3s ease',
        background: scrolled
          ? 'rgba(13,16,22,0.97)'
          : 'linear-gradient(180deg, rgba(13,16,22,0.72) 0%, rgba(13,16,22,0) 100%)',
        boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.35)' : 'none',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
         borderBottom: '1px solid rgba(255,255,255,0.35)',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          height: scrolled ? 70 : 90,
          transition: 'height 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
        }}
      >
        {/* ── Logo ── */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              height: scrolled ? 48 : 60,
              width: 'auto',
              objectFit: 'contain',
              transition: 'height 0.3s ease',
            }}
          />
        </Link>

        {/* ── Desktop Nav ── */}
        <nav
          className="nav-item-stagger"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 32,
            flex: 1,
            justifyContent: 'center',
          }}
          // Hide on mobile via media query handled below via CSS class
        >
          {/* We use a wrapper div to apply responsive hiding */}
          <DesktopNav
            dropOpen={dropOpen}
            setDropOpen={setDropOpen}
            dropRef={dropRef}
            closeAll={closeAll}
          />
        </nav>

        {/* ── Right side ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
          {/* CTA Button — hidden on small screens */}
          <QuoteButton />

          {/* Hamburger */}
          <HamburgerButton open={mobileOpen} onClick={() => setMobileOpen(v => !v)} />
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <MobileMenu
          mobileIndOpen={mobileIndOpen}
          setMobileIndOpen={setMobileIndOpen}
          closeAll={closeAll}
        />
      )}
    </header>
  )
}

// ────────────────────────────────────────────────────────────────────────────
// Sub-components
// ────────────────────────────────────────────────────────────────────────────

function DesktopNav({ dropOpen, setDropOpen, dropRef, closeAll }) {
  const linkStyle = (isActive) => ({
    fontFamily: "'IM Fell English', Georgia, serif",
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: '0.02em',
    color: isActive ? '#e05a14' : '#fff',
    textDecoration: 'none',
    transition: 'color 0.2s',
    whiteSpace: 'nowrap',
  })

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 32,
      }}
      className="desktop-nav-inner"
    >
      <style>{`
        @media (max-width: 767px) { .desktop-nav-inner { display: none !important; } }
      `}</style>

      <NavLink to="/" end className="nav-link-underline" style={({ isActive }) => linkStyle(isActive)}>
        Home
      </NavLink>

      <NavLink to="/company" className="nav-link-underline" style={({ isActive }) => linkStyle(isActive)}>
        Company
      </NavLink>

      {/* Industries Dropdown */}
      <div ref={dropRef} style={{ position: 'relative' }}>
        <button
          onClick={() => setDropOpen(v => !v)}
          onMouseEnter={() => setDropOpen(true)}
          style={{
            ...linkStyle(false),
            display: 'flex', alignItems: 'center', gap: 5,
            background: 'none', border: 'none', cursor: 'pointer', padding: 0,
          }}
          className="nav-link-underline"
        >
          Industries
          <span
            style={{
              fontSize: 10,
              display: 'inline-block',
              transition: 'transform 0.22s ease',
              transform: dropOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              marginTop: 1,
            }}
          >▾</span>
        </button>

        {dropOpen && (
          <div
            className="dropdown-enter"
            onMouseLeave={() => setDropOpen(false)}
            style={{
              position: 'absolute',
              top: 'calc(100% + 14px)',
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#fff',
              borderRadius: 10,
              boxShadow: '0 8px 40px rgba(0,0,0,0.18)',
              minWidth: 280,
              padding: '8px 6px',
              zIndex: 300,
            }}
          >
            {/* Arrow pointer */}
            <div style={{
              position: 'absolute',
              top: -7, left: '50%', transform: 'translateX(-50%)',
              width: 14, height: 14,
              background: '#fff',
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            }} />

            {industries.map((ind, i) => (
              <Link
                key={ind.slug}
                to={`/industries/${ind.slug}`}
                onClick={closeAll}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '10px 14px',
                  borderRadius: 7,
                  fontSize: 14,
                  color: '#374151',
                  textDecoration: 'none',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  transition: 'background 0.15s, color 0.15s',
                  animationDelay: `${i * 0.04}s`,
                  opacity: 0,
                  animation: 'fadeIn 0.2s ease forwards',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#fff7f3'; e.currentTarget.style.color = '#e05a14' }}
                onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.color = '#374151' }}
              >
                <span style={{ fontSize: 18, lineHeight: 1 }}>{ind.icon}</span>
                {ind.title}
              </Link>
            ))}

            <div style={{ borderTop: '1px solid #f0f0f0', margin: '6px 6px 2px' }} />
            <Link
              to="/industries"
              onClick={closeAll}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '9px 14px',
                fontSize: 13,
                fontWeight: 600,
                color: '#e05a14',
                textDecoration: 'none',
                fontFamily: "'Inter', sans-serif",
                borderRadius: 7,
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#fff7f3'}
              onMouseLeave={e => e.currentTarget.style.background = ''}
            >
              View All Industries →
            </Link>
          </div>
        )}
      </div>

      <NavLink to="/clientele" className="nav-link-underline" style={({ isActive }) => linkStyle(isActive)}>
        Clientele
      </NavLink>

      <NavLink to="/news" className="nav-link-underline" style={({ isActive }) => linkStyle(isActive)}>
        Services
      </NavLink>

      <NavLink to="/contacts" className="nav-link-underline" style={({ isActive }) => linkStyle(isActive)}>
        Contact
      </NavLink>
    </div>
  )
}

// ── CTA button ───────────────────────────────────────────────────────────────
function QuoteButton() {
  return (
    <div className="quote-btn-wrap">
      <style>{`
        .quote-btn-wrap { display: flex; }
        @media (max-width: 767px) { .quote-btn-wrap { display: none !important; } }
      `}</style>
      <Link
        to="/contacts"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          padding: '10px 22px',
          borderRadius: 6,
          background: '#e05a14',
          color: '#fff',
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          fontSize: 13,
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          letterSpacing: '0.02em',
          transition: 'background 0.2s, transform 0.15s, box-shadow 0.2s',
          boxShadow: '0 2px 12px rgba(224,90,20,0.35)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = '#c44e0f'
          e.currentTarget.style.transform = 'translateY(-1px)'
          e.currentTarget.style.boxShadow = '0 4px 18px rgba(224,90,20,0.45)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = '#e05a14'
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = '0 2px 12px rgba(224,90,20,0.35)'
        }}
      >
        Request A Quote →
      </Link>
    </div>
  )
}

// ── Hamburger ────────────────────────────────────────────────────────────────
function HamburgerButton({ open, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? 'Close menu' : 'Open menu'}
      className="hamburger-btn"
      style={{
        background: 'none',
        border: '1.5px solid rgba(255,255,255,0.3)',
        borderRadius: 7,
        width: 40, height: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        cursor: 'pointer',
        padding: 0,
        transition: 'border-color 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = '#e05a14'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'}
    >
      <style>{`
        .hamburger-btn { display: none !important; }
        @media (max-width: 767px) { .hamburger-btn { display: flex !important; } }
      `}</style>
      {[0, 1, 2].map(i => (
        <span
          key={i}
          style={{
            display: 'block',
            width: i === 1 ? (open ? 16 : 20) : 20,
            height: 2,
            background: '#fff',
            borderRadius: 2,
            transition: 'width 0.2s ease, transform 0.25s ease, opacity 0.2s',
            transformOrigin: 'center',
            transform: open
              ? i === 0 ? 'translateY(7px) rotate(45deg)'
              : i === 2 ? 'translateY(-7px) rotate(-45deg)'
              : 'scaleX(0)'
              : 'none',
            opacity: open && i === 1 ? 0 : 1,
          }}
        />
      ))}
    </button>
  )
}

// ── Mobile Menu ──────────────────────────────────────────────────────────────
function MobileMenu({ mobileIndOpen, setMobileIndOpen, closeAll }) {
  const mobileLinkStyle = {
    display: 'block',
    fontFamily: "'IM Fell English', Georgia, serif",
    fontSize: 18,
    fontWeight: 400,
    letterSpacing: '0.02em',
    color: '#fff',
    textDecoration: 'none',
    padding: '13px 0',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    transition: 'color 0.2s, padding-left 0.2s',
  }

  return (
    <div
      className="mobile-menu-enter"
      style={{
        background: 'rgba(13,16,22,0.98)',
        backdropFilter: 'blur(16px)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '12px 24px 24px',
        maxHeight: '85vh',
        overflowY: 'auto',
      }}
    >
      <NavLink
        to="/"
        end
        onClick={closeAll}
        style={({ isActive }) => ({ ...mobileLinkStyle, color: isActive ? '#e05a14' : '#fff' })}
      >
        Home
      </NavLink>

      <NavLink
        to="/company"
        onClick={closeAll}
        style={({ isActive }) => ({ ...mobileLinkStyle, color: isActive ? '#e05a14' : '#fff' })}
      >
        Company
      </NavLink>

      {/* Industries accordion */}
      <div>
        <button
          onClick={() => setMobileIndOpen(v => !v)}
          style={{
            ...mobileLinkStyle,
            background: 'none',
            border: 'none',
            width: '100%',
            textAlign: 'left',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: mobileIndOpen ? '#e05a14' : '#fff',
          }}
        >
          <span>Industries</span>
          <span
            style={{
              fontSize: 12,
              transition: 'transform 0.22s ease',
              transform: mobileIndOpen ? 'rotate(180deg)' : 'rotate(0)',
              color: 'rgba(255,255,255,0.5)',
            }}
          >▾</span>
        </button>

        {mobileIndOpen && (
          <div
            className="mobile-menu-enter"
            style={{
              background: 'rgba(255,255,255,0.04)',
              borderRadius: 8,
              marginBottom: 4,
              padding: '4px 0',
            }}
          >
            {industries.map((ind, i) => (
              <Link
                key={ind.slug}
                to={`/industries/${ind.slug}`}
                onClick={closeAll}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '11px 16px',
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.82)',
                  textDecoration: 'none',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  borderRadius: 6,
                  transition: 'color 0.15s, background 0.15s',
                  animationDelay: `${i * 0.035}s`,
                  opacity: 0,
                  animation: 'fadeIn 0.25s ease forwards',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#e05a14'; e.currentTarget.style.background = 'rgba(224,90,20,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.82)'; e.currentTarget.style.background = '' }}
              >
                <span style={{ fontSize: 18 }}>{ind.icon}</span>
                {ind.title}
              </Link>
            ))}

            <Link
              to="/industries"
              onClick={closeAll}
              style={{
                display: 'block',
                padding: '11px 16px',
                fontSize: 13,
                fontWeight: 600,
                color: '#e05a14',
                textDecoration: 'none',
                fontFamily: "'Inter', sans-serif",
                borderTop: '1px solid rgba(255,255,255,0.08)',
                marginTop: 4,
              }}
            >
              View All Industries →
            </Link>
          </div>
        )}
      </div>

      <NavLink
        to="/clientele"
        onClick={closeAll}
        style={({ isActive }) => ({ ...mobileLinkStyle, color: isActive ? '#e05a14' : '#fff' })}
      >
        Clientele
      </NavLink>

      <NavLink
        to="/news"
        onClick={closeAll}
        style={({ isActive }) => ({ ...mobileLinkStyle, color: isActive ? '#e05a14' : '#fff' })}
      >
        Services
      </NavLink>

      <NavLink
        to="/contacts"
        onClick={closeAll}
        style={({ isActive }) => ({ ...mobileLinkStyle, color: isActive ? '#e05a14' : '#fff' })}
      >
        Contact
      </NavLink>

      {/* Mobile bottom section */}
      <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        {/* CTA */}
        <Link
          to="/contacts"
          onClick={closeAll}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '13px 0',
            borderRadius: 8,
            background: '#e05a14',
            color: '#fff',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: 15,
            textDecoration: 'none',
            letterSpacing: '0.02em',
            boxShadow: '0 3px 16px rgba(224,90,20,0.4)',
          }}
        >
          Request A Quote →
        </Link>
      </div>
    </div>
  )
}