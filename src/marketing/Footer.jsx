import lexaraWordmarkInverse from '../assets/lexara-wordmark-inverse.svg'

const COLS = [
  { t: 'Продукт',     l: ['Просмотр', 'Агент стратегии', 'Плейбук', 'Интеграции'] },
  { t: 'Компания',    l: ['О нас', 'Клиенты', 'Карьера', 'Пресса'] },
  { t: 'Юридическое', l: ['Конфиденциальность', 'Условия', 'Безопасность', 'DPA'] },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0A0A12', color: 'rgba(255,255,255,0.7)', padding: '56px 32px 28px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 32 }}>
        <div>
          <img src={lexaraWordmarkInverse} height={32} alt="Lexara" />
          <p style={{ font: '400 14px/22px var(--font-sans)', marginTop: 14, maxWidth: 320 }}>
            Агентная AI-система для анализа договоров и стратегии переговоров. Мы делаем её вместе с юристами.
          </p>
        </div>
        {COLS.map(col => (
          <div key={col.t}>
            <div style={{ font: '600 13px/18px var(--font-sans)', color: 'white', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>{col.t}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {col.l.map(l => (
                <li key={l}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', font: '400 14px/20px var(--font-sans)' }}>{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{
        maxWidth: 1100,
        margin: '32px auto 0',
        paddingTop: 20,
        borderTop: '1px solid rgba(255,255,255,0.08)',
        display: 'flex',
        justifyContent: 'space-between',
        font: '400 12px/16px var(--font-mono)',
        color: 'rgba(255,255,255,0.5)',
      }}>
        <span>© 2026 Lexara</span>
        <span>SOC 2 Type II · ISO 27001</span>
      </div>
    </footer>
  )
}
