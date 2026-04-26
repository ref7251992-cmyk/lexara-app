export default function Card({ children, padding = 18, style, onClick, inset }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: 'var(--bg-elevated)',
        borderRadius: 'var(--r-lg)',
        border: inset ? '1px solid var(--divider)' : '1px solid var(--border)',
        boxShadow: inset ? 'none' : 'var(--shadow-sm)',
        padding,
        cursor: onClick ? 'pointer' : undefined,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
