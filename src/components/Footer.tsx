import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const GAME_LOGIN_URL = 'https://ramnaam.astroite.com/login';

  return (
    <footer className="footer-wrap">
      <div className="footer-inner">
        <div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Ram Naam</h3>
          <p style={{ maxWidth: '300px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            A modern, educational gaming experience by Astroite Gaming, bridging spiritual tradition with modern digital spaces.
          </p>
        </div>
        <div>
          <h4 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Navigation</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
            <li>
              <a href="#home" style={{ color: 'var(--text-secondary)' }}>Home</a>
            </li>
            <li>
              <a href="#about" style={{ color: 'var(--text-secondary)' }}>About</a>
            </li>
            <li>
              <a href="#faq" style={{ color: 'var(--text-secondary)' }}>FAQ</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Play Portal</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
            <li>
              <a href={GAME_LOGIN_URL} style={{ color: 'var(--golden-accent)', fontWeight: 600 }}>Game Login &rarr;</a>
            </li>
            <li>
              <a href="/llms.txt" style={{ color: 'var(--text-secondary)' }}>llms.txt Index</a>
            </li>
            <li>
              <a href="/sitemap.xml" style={{ color: 'var(--text-secondary)' }}>XML Sitemap</a>
            </li>
            <li>
              <a href="/robots.txt" style={{ color: 'var(--text-secondary)' }}>Robots Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; {currentYear} Astroite Gaming. All rights reserved. Created with high semantic standard.</p>
      </div>
    </footer>
  );
}
