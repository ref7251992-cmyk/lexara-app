import Icon from './Icon'

const SIZES = {
  sm: { fontSize: 13, padding: '6px 10px', borderRadius: 8 },
  md: { fontSize: 14, padding: '8px 14px', borderRadius: 8, lineHeight: '20px' },
  lg: { fontSize: 15, padding: '10px 18px', borderRadius: 10 },
}

const VARIANTS = {
  primary:   { background: 'var(--brand)', color: 'white', border: 0, boxShadow: '0 1px 0 rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.18)' },
  secondary: { background: 'white', color: 'var(--fg-1)', border: '1px solid var(--border-strong)', boxShadow: 'var(--shadow-sm)' },
  ghost:     { background: 'transparent', color: 'var(--fg-1)', border: 0 },
  danger:    { background: 'var(--danger)', color: 'white', border: 0 },
  glass:     { background: 'linear-gradient(180deg,rgba(255,255,255,.5),rgba(255,255,255,.25))', border: '1px solid rgba(255,255,255,.6)', backdropFilter: 'blur(20px)', color: 'var(--fg-1)', boxShadow: 'var(--shadow-glass)' },
}

export default function Button({ variant = 'primary', size = 'md', icon, iconRight, children, onClick, disabled, style }) {
  const iconSize = size === 'sm' ? 14 : 16
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        appearance: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontFamily: 'var(--font-sans)',
        fontWeight: 500,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        transition: 'all var(--dur) var(--ease)',
        opacity: disabled ? 0.5 : 1,
        ...SIZES[size],
        ...VARIANTS[variant],
        ...style,
      }}
    >
      {icon && <Icon name={icon} size={iconSize} />}
      {children}
      {iconRight && <Icon name={iconRight} size={iconSize} />}
    </button>
  )
}
