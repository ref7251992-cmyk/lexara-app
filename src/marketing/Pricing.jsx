import { useNavigate } from 'react-router-dom'

const TIERS = [
  {
    name: 'Юрист',
    price: '4 900 ₽',
    per: '/польз. в мес.',
    body: 'Для частной практики и небольших команд.',
    features: ['25 договоров в месяц', 'Просмотр и находки', 'Поддержка по почте'],
    cta: 'Начать триал',
    primary: false,
  },
  {
    name: 'Команда',
    price: '14 900 ₽',
    per: '/польз. в мес.',
    body: 'Для in-house на этапе роста.',
    features: ['Безлимит договоров', 'Агент стратегии', 'Свой плейбук', 'Приоритетная поддержка'],
    cta: 'Начать триал',
    primary: true,
  },
  {
    name: 'Фирма',
    price: 'По запросу',
    per: 'обсудим',
    body: 'Для юр. фирм и крупного in-house.',
    features: ['SSO + журнал аудита', 'On-prem по запросу', 'Выделенный CSM', 'SLA'],
    cta: 'Связаться',
    primary: false,
  },
]

export default function Pricing() {
  const navigate = useNavigate()
  return (
    <section style={{ padding: '80px 32px', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 36 }}>
        <h2 style={{ font: '600 40px/100% var(--font-sans)', letterSpacing: '-0.02em' }}>Простые тарифы.</h2>
        <p style={{ font: '400 17px/26px var(--font-sans)', color: 'var(--fg-2)', marginTop: 10 }}>
          14 дней триала на любом тарифе. Карта не нужна.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
        {TIERS.map(t => (
          <div
            key={t.name}
            style={{
              background: 'white',
              borderRadius: 16,
              border: t.primary ? '1.5px solid var(--brand)' : '1px solid var(--border)',
              boxShadow: t.primary ? 'var(--shadow-md)' : 'var(--shadow-sm)',
              padding: 24,
              position: 'relative',
            }}
          >
            {t.primary && (
              <span style={{
                position: 'absolute',
                top: -10,
                left: 24,
                background: 'var(--brand)',
                color: 'white',
                padding: '3px 10px',
                borderRadius: 999,
                font: '500 12px/16px var(--font-sans)',
              }}>Популярный</span>
            )}
            <div style={{ font: '600 20px/26px var(--font-sans)' }}>{t.name}</div>
            <div style={{ font: '400 14px/20px var(--font-sans)', color: 'var(--fg-2)', marginTop: 4 }}>{t.body}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, margin: '20px 0' }}>
              <span style={{ font: '600 36px/40px var(--font-sans)', letterSpacing: '-0.02em' }}>{t.price}</span>
              <span style={{ font: '400 14px/20px var(--font-sans)', color: 'var(--fg-3)' }}>{t.per}</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 22px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {t.features.map(f => (
                <li key={f} style={{ display: 'flex', gap: 8, font: '400 14px/20px var(--font-sans)', color: 'var(--fg-1)' }}>
                  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <button
              onClick={() => navigate('/app')}
              style={{
                width: '100%',
                appearance: 'none',
                border: t.primary ? 0 : '1px solid var(--border-strong)',
                cursor: 'pointer',
                background: t.primary ? 'var(--brand)' : 'white',
                color: t.primary ? 'white' : 'var(--fg-1)',
                padding: '10px 16px',
                borderRadius: 8,
                font: '500 14px/20px var(--font-sans)',
              }}
            >
              {t.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
