export default function Field({ label, value, onChange, placeholder, error, type = 'text' }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%' }}>
      {label && <span style={{ font: '500 13px/18px var(--font-sans)', color: 'var(--fg-1)' }}>{label}</span>}
      <input
        type={type}
        value={value ?? ''}
        onChange={e => onChange?.(e.target.value)}
        placeholder={placeholder}
        style={{
          font: '400 14px/20px var(--font-sans)',
          padding: '9px 12px',
          borderRadius: 8,
          border: `1px solid ${error ? 'var(--danger)' : 'var(--border-strong)'}`,
          background: 'white',
          color: 'var(--fg-1)',
          outline: 'none',
          transition: 'all var(--dur) var(--ease)',
        }}
      />
      {error && <span style={{ font: '400 12px/16px var(--font-sans)', color: 'var(--danger)' }}>{error}</span>}
    </label>
  )
}
