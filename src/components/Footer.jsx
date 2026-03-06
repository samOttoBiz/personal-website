export default function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 200,
        background: 'var(--color-text)',
        color: '#F7F4EF',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 48px',
        fontFamily: 'var(--font-sans)',
        fontSize: '14px',
      }}
    >
      <span style={{ opacity: 0.7 }}>© 2026 Sam Otto</span>

      <a
        href="https://linkedin.com/in/sotto27"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#F7F4EF',
          textDecoration: 'none',
          opacity: 0.7,
          transition: 'opacity 0.2s ease',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '1'}
        onMouseLeave={e => e.currentTarget.style.opacity = '0.7'}
      >
        LinkedIn
      </a>

      <style>{`
        @media (max-width: 768px) {
          footer { padding: 0 24px !important; }
        }
      `}</style>
    </footer>
  )
}
