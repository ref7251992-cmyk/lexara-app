export default function Avatar({ name, size = 28, color = '#3D3FE2' }) {
  const initials = name.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase()
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: 999,
      background: color,
      color: 'white',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: `600 ${Math.floor(size * 0.4)}px/1 var(--font-sans)`,
      flex: 'none',
    }}>
      {initials}
    </div>
  )
}
