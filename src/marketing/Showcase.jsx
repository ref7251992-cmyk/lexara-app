const BULLETS = [
  'Подсветка рисков с уровнем уверенности',
  'Diff с вашим плейбуком — в один клик',
  'Контрформулировка в буфер или в письмо одной кнопкой',
]

export default function Showcase() {
  return (
    <section style={{ padding: '80px 32px', background: 'var(--n-10)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
        <div>
          <div style={{ font: '500 13px/18px var(--font-sans)', color: 'var(--brand)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Просмотр договора</div>
          <h2 style={{ font: '600 36px/110% var(--font-sans)', letterSpacing: '-0.02em', margin: '10px 0 14px' }}>
            Находки — прямо в тексте документа.
          </h2>
          <p style={{ font: '400 16px/26px var(--font-sans)', color: 'var(--fg-2)' }}>
            Lexara подсвечивает важные пункты, объясняет почему и показывает diff с вашим плейбуком одним кликом. Решение за юристом — Lexara не действует автоматически.
          </p>
          <ul style={{ paddingLeft: 0, listStyle: 'none', marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {BULLETS.map(t => (
              <li key={t} style={{ display: 'flex', gap: 10, font: '400 15px/22px var(--font-sans)', color: 'var(--fg-1)' }}>
                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 2 }}>
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ background: 'white', borderRadius: 16, border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)', padding: 22 }}>
          <div style={{ font: '500 12px/16px var(--font-mono)', color: 'var(--fg-3)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>п. 7.4 · ответственность</div>
          <div style={{ font: '600 18px/26px var(--font-sans)', color: 'var(--fg-1)', marginTop: 4 }}>Возмещение убытков</div>
          <div style={{ font: '400 15px/24px var(--font-sans)', color: 'var(--fg-2)', marginTop: 8 }}>
            Совокупная ответственность Поставщика по настоящему Договору не превышает сумму платежей, уплаченных Заказчиком за{' '}
            <span style={{ background: '#FCE4E8', color: '#B00020', padding: '1px 4px', borderRadius: 3, textDecoration: 'line-through' }}>шесть (6) месяцев</span>{' '}
            до даты требования.
          </div>
          <div style={{ marginTop: 14, padding: '10px 12px', borderRadius: 10, background: '#FCE4E8', display: 'flex', gap: 10 }}>
            <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#B00020" strokeWidth={1.6}>
              <circle cx="12" cy="12" r="9"/><path d="M12 8v4"/>
            </svg>
            <div style={{ flex: 1 }}>
              <div style={{ font: '600 13px/18px var(--font-sans)', color: '#7A0017' }}>Высокий риск · нетипично короткий лимит ответственности</div>
              <div style={{ font: '400 13px/18px var(--font-sans)', color: '#7A0017', opacity: 0.9, marginTop: 2 }}>Медиана по рынку для договоров такого размера — 24 месяца. Уверенность 92%.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
