import React from 'react';

const GAME_LOGIN_URL = 'https://ramnaam.astroite.com/login';

export default function Header() {
  return (
    <header className="header-glass glass-panel">
      <div className="header-inner">
        <a href="#home" className="logo" style={{ background: 'none', WebkitTextFillColor: 'initial' }}>
          <span style={{ fontSize: '1.6rem' }}>🕉️</span>
          <span className="orange-brand-text" style={{ fontSize: '1.5rem' }}>Ram Naam</span>
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <ul className="nav-links">
            <li>
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#faq" className="nav-link">
                FAQ
              </a>
            </li>
          </ul>
          <a
            href={GAME_LOGIN_URL}
            className="btn-primary"
            style={{
              padding: '0.5rem 1.25rem',
              fontSize: '0.85rem',
              backgroundColor: 'var(--primary-orange)',
            }}
          >
            Play Now
          </a>
        </nav>
      </div>
    </header>
  );
}
