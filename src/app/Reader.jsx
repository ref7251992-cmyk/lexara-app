import { useState } from 'react'
import Badge from '../components/Badge'
import Button from '../components/Button'
import Card from '../components/Card'
import Icon from '../components/Icon'

const CLAUSES = [
  {
    id: 'p1', n: '1', title: 'Определения',
    body: 'В настоящем Договоре термины, указанные с заглавной буквы, имеют значения, определённые в Приложении А. Если термин не определён, он толкуется в его обычном коммерческом смысле в соответствии с законодательством штата Делавэр.',
  },
  {
    id: 'p2', n: '2', title: 'Услуги',
    body: 'Поставщик оказывает Услуги, описанные в каждом Заказе, заключённом во исполнение настоящего Договора. Каждый Заказ является неотъемлемой частью настоящего Договора и подчиняется его условиям.',
  },
  {
    id: 'p7', n: '7.4', title: 'Возмещение убытков',
    body: 'Совокупная ответственность Поставщика по настоящему Договору не может превышать сумму платежей, уплаченных Заказчиком за шесть (6) месяцев, предшествующих требованию. Данное ограничение применяется независимо от формы предъявленного требования.',
    flag: { tone: 'danger', title: 'Высокий риск · необычно короткий лимит ответственности', note: 'Медиана по рынку для договоров такого размера — 24 месяца. Шестимесячный лимит существенно перекладывает риск на Заказчика.', confidence: 92 },
  },
  {
    id: 'p12', n: '12.1', title: 'Срок действия и расторжение',
    body: 'Настоящий Договор действует тридцать шесть (36) месяцев с Даты вступления в силу, если не будет расторгнут досрочно в соответствии с настоящим разделом.',
    flag: { tone: 'warning', title: 'Нетипичный срок переживания обязательств', note: 'Срок 36 месяцев редко встречается в договорах с поставщиками до $250k. Согласуйте с юристом.', confidence: 71 },
  },
  {
    id: 'p15', n: '15', title: 'Конфиденциальность',
    body: 'Каждая Сторона обязуется сохранять конфиденциальность непубличной информации другой Стороны и не раскрывать такую информацию, кроме как своим аффилированным лицам и консультантам, принявшим на себя эквивалентные обязательства.',
  },
]

function Inspector({ pickedId }) {
  const cl = CLAUSES.find(c => c.id === pickedId) || CLAUSES.find(c => c.flag)
  if (!cl?.flag) return null
  return (
    <aside style={{ borderLeft: '1px solid var(--border)', background: 'white', padding: '24px 22px', overflow: 'auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <div style={{ font: '500 11px/14px var(--font-mono)', color: 'var(--fg-3)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Пункт {cl.n} · {cl.title}</div>
        <div style={{ font: '600 18px/24px var(--font-sans)', color: 'var(--fg-1)', marginTop: 4 }}>{cl.flag.title}</div>
      </div>

      <Card inset padding={14}>
        <div style={{ font: '500 11px/14px var(--font-sans)', color: 'var(--fg-3)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Lexara рекомендует</div>
        <div style={{ font: '400 14px/22px var(--font-sans)', color: 'var(--fg-1)', marginTop: 6 }}>
          Предложить лимит ответственности{' '}
          <span style={{ fontFamily: 'var(--font-mono)', background: '#E5F4E5', color: '#005C00', padding: '1px 4px', borderRadius: 3 }}>24 месяца</span>
          {' '}и добавить исключение по нарушению ИС.
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <Button variant="primary" size="sm" icon="check">Принять</Button>
          <Button variant="secondary" size="sm" icon="edit">Изменить</Button>
        </div>
      </Card>

      <div>
        <div style={{ font: '500 11px/14px var(--font-sans)', color: 'var(--fg-3)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 8 }}>Diff с вашим плейбуком</div>
        <div style={{ fontFamily: 'var(--font-mono)', font: '400 13px/22px var(--font-mono)', padding: 12, borderRadius: 10, background: 'var(--n-10)', border: '1px solid var(--border)' }}>
          <div><span style={{ background: '#FCE4E8', color: '#B00020', padding: '1px 4px', borderRadius: 3, textDecoration: 'line-through' }}>шесть (6) месяцев</span></div>
          <div style={{ marginTop: 4 }}><span style={{ background: '#E5F4E5', color: '#007D00', padding: '1px 4px', borderRadius: 3 }}>двадцать четыре (24) месяца</span></div>
        </div>
      </div>

      <div>
        <div style={{ font: '500 11px/14px var(--font-sans)', color: 'var(--fg-3)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 8 }}>Уверенность</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ flex: 1, height: 6, borderRadius: 999, background: 'var(--n-30)' }}>
            <div style={{ width: `${cl.flag.confidence}%`, height: '100%', borderRadius: 999, background: 'var(--brand)' }} />
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', font: '500 13px/18px var(--font-mono)', color: 'var(--fg-1)' }}>{cl.flag.confidence}%</span>
        </div>
        <div style={{ font: '400 12px/16px var(--font-sans)', color: 'var(--fg-3)', marginTop: 6 }}>На основе 1 240 похожих рамочных договоров.</div>
      </div>

      <div style={{ marginTop: 'auto', display: 'flex', gap: 8 }}>
        <Button variant="secondary" size="sm" icon="message">Спросить Lexara</Button>
        <Button variant="ghost" size="sm" icon="more" />
      </div>
    </aside>
  )
}

export default function Reader({ contract, picked, onPickClause }) {
  return (
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 384px', overflow: 'hidden' }}>
      <div style={{ overflow: 'auto', padding: '32px 48px', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ font: '500 12px/16px var(--font-mono)', color: 'var(--fg-3)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            {contract.v} · посл. ред. сегодня в 14:02
          </div>
          <h1 style={{ font: '600 30px/110% var(--font-sans)', letterSpacing: '-0.015em', marginTop: 6, color: 'var(--fg-1)' }}>{contract.title}</h1>
          <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
            <Badge tone={contract.status} dot>{contract.badge}</Badge>
            <Badge tone="brand">12 находок Lexara</Badge>
          </div>

          <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 22 }}>
            {CLAUSES.map(cl => {
              const active = picked === cl.id
              const borderColor = cl.flag?.tone === 'danger' ? 'var(--danger)' : 'var(--warning)'
              return (
                <div
                  key={cl.id}
                  onClick={() => cl.flag && onPickClause(cl.id)}
                  style={{
                    position: 'relative',
                    cursor: cl.flag ? 'pointer' : 'default',
                    paddingLeft: 16,
                    borderLeft: cl.flag ? `3px solid ${borderColor}` : '3px solid transparent',
                  }}
                >
                  <div style={{ font: '500 12px/16px var(--font-mono)', color: 'var(--fg-3)' }}>п. {cl.n}</div>
                  <div style={{ font: '600 18px/26px var(--font-sans)', color: 'var(--fg-1)', marginTop: 2 }}>{cl.title}</div>
                  <div style={{ font: '400 16px/26px var(--font-sans)', color: 'var(--fg-2)', marginTop: 8 }}>{cl.body}</div>
                  {cl.flag && (
                    <div style={{
                      marginTop: 12,
                      padding: '10px 12px',
                      borderRadius: 10,
                      background: cl.flag.tone === 'danger' ? '#FCE4E8' : '#FFEEDF',
                      border: `1px solid ${active ? 'var(--brand)' : 'transparent'}`,
                      display: 'flex',
                      gap: 10,
                      alignItems: 'flex-start',
                    }}>
                      <Icon name="alert" size={18} style={{ color: cl.flag.tone === 'danger' ? 'var(--danger)' : 'var(--warning)' }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ font: '600 13px/18px var(--font-sans)', color: cl.flag.tone === 'danger' ? '#7A0017' : '#8A3000' }}>{cl.flag.title}</div>
                        <div style={{ font: '400 13px/18px var(--font-sans)', color: cl.flag.tone === 'danger' ? '#7A0017' : '#8A3000', opacity: 0.9, marginTop: 2 }}>{cl.flag.note}</div>
                      </div>
                      <div style={{ font: '500 11px/14px var(--font-mono)', color: cl.flag.tone === 'danger' ? '#7A0017' : '#8A3000' }}>{cl.flag.confidence}%</div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Inspector pickedId={picked} />
    </div>
  )
}
