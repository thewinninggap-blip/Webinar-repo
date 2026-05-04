const LOGO_SRC = '/emc-logo.png'

export default function EMCLogo({ height = 40, showTagline = true, className = '' }) {
  const logoScale = showTagline ? 1.2 : 1.45

  return (
    <div
      className={className}
      aria-label="EMC — Error Makes Clever"
      style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1, overflow: 'visible' }}
    >
      <img
        src={LOGO_SRC}
        alt="EMC logo"
        height={height}
        style={{ width: 'auto', display: 'block', transform: `scale(${logoScale})`, transformOrigin: 'left center' }}
      />
      {showTagline && (
        <span
          style={{
            marginTop: 6,
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontWeight: 500,
            fontSize: 13,
            letterSpacing: '0.03em',
            color: '#1a1a1a',
            textTransform: 'lowercase',
          }}
        >
          error makes clever
        </span>
      )}
    </div>
  )
}
