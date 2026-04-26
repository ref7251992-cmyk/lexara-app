const TONES = {
  neutral: { bg: 'var(--n-30)',         fg: 'var(--fg-1)' },
  success: { bg: '#E5F4E5',             fg: '#005C00' },
  warning: { bg: '#FFEEDF',             fg: '#8A3000' },
  danger:  { bg: '#FCE4E8',             fg: '#7A0017' },
  info:    { bg: '#E3EEFB',             fg: '#0A4F9F' },
  brand:   { bg: 'var(--brand-soft)',   fg: 'var(--brand-ink)' },
  accent:  { bg: 'var(--accent-soft)',  fg: '#7A5800' },
}

export default function Badge({ tone = 'neutral', dot, children }) {
  const t = TONES[tone] ?? TONES.neutral
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: t.bg,
      color: t.fg,
      padding: '3px 10px',
      borderRadius: 999,
      font: '500 12px/16px var(--font-sans)',
      whiteSpace: 'nowrap',
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: 999, background: 'currentColor' }} />}
      {children}
    </span>
  )
}
