import Card from '../components/Card'
import Badge from '../components/Badge'
import Button from '../components/Button'
import Icon from '../components/Icon'
import { useState } from 'react'

const CONTRACTS = [
  { id: 'c1', title: 'Рамочный договор — Acme Corp',  party: 'Acme Corp',        status: 'danger',  badge: 'Высокий риск',   v: 'v3.2', updated: 'сегодня в 14:02', risks: 12, value: '240 тыс. $' },
  { id: 'c2', title: 'NDA взаимное — DataPilot',      party: 'DataPilot Inc.',   status: 'warning', badge: 'Нужна проверка', v: 'v1.1', updated: 'вчера',           risks: 3,  value: '—' },
  { id: 'c3', title: 'Заказ SaaS — Northwind',        party: 'Northwind Health', status: 'info',    badge: 'В переговорах',  v: 'v2.0', updated: '23 мин назад',    risks: 5,  value: '92 тыс. $' },
  { id: 'c4', title: 'Трудовой — В. Соколов',         party: 'Внутренний',       status: 'success', badge: 'Подписан',       v: 'v1.0', updated: '12 мая',          risks: 0,  value: '—' },
  { id: 'c5', title: 'DPA — Northwind Health',        party: 'Northwind Health', status: 'warning', badge: 'Нужна проверка', v: 'v1.0', updated: '12 мая',          risks: 2,  value: '—' },
  { id: 'c6', title: 'Дилерское соглашение — Helix',  party: 'Helix Bio',        status: 'info',    badge: 'В переговорах',  v: 'v4.1', updated: '11 мая',          risks: 7,  value: '1,2 млн $' },
]

const FILTERS = [
  { id: 'all',     label: 'Все договоры',   count: CONTRACTS.length },
  { id: 'danger',  label: 'Высокий риск',   count: 1 },
  { id: 'warning', label: 'Нужна проверка', count: 2 },
  { id: 'info',    label: 'В переговорах',  count: 2 },
  { id: 'success', label: 'Подписаны',      count: 1 },
]

function Stat({ label, value, delta, tone }) {
  const colors = { danger: 'var(--danger)', info: 'var(--info)', success: 'var(--success)' }
  return (
    <Card padding={16}>
      <div style={{ font: '500 12px/16px var(--font-sans)', color: 'var(--fg-3)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{label}</div>
      <div style={{ font: '600 28px/34px var(--font-sans)', color: 'var(--fg-1)', letterSpacing: '-0.015em', marginTop: 6 }}>{value}</div>
      <div style={{ font: '500 12px/16px var(--font-sans)', color: tone ? colors[tone] : 'var(--fg-3)', marginTop: 4 }}>{delta}</div>
    </Card>
  )
}

export default function Workspace({ onOpen }) {
  const [filter, setFilter] = useState('all')
  const list = filter === 'all' ? CONTRACTS : CONTRACTS.filter(c => c.status === filter)

  return (
    <div style={{ padding: '24px 32px', maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }}>
        <Stat label="Активных договоров" value="14"    delta="+2 за неделю"    />
        <Stat label="Рисков выявлено"    value="29"    delta="3 высоких"       tone="danger" />
        <Stat label="В переговорах"      value="6"     delta="2 ждут ответа"  tone="info" />
        <Stat label="Средний цикл"       value="8,4 д" delta="−1,2 vs Q1"     tone="success" />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
        {FILTERS.map(f => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            style={{
              appearance: 'none',
              cursor: 'pointer',
              border: filter === f.id ? '1px solid var(--brand)' : '1px solid var(--border-strong)',
              background: filter === f.id ? 'var(--brand-soft)' : 'white',
              color: filter === f.id ? 'var(--brand-ink)' : 'var(--fg-1)',
              padding: '6px 12px',
              borderRadius: 999,
              font: '500 13px/18px var(--font-sans)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            {f.label}
            <span style={{ font: '500 11px/14px var(--font-mono)', color: filter === f.id ? 'var(--brand)' : 'var(--fg-3)' }}>{f.count}</span>
          </button>
        ))}
        <div style={{ flex: 1 }} />
        <Button variant="secondary" size="md" icon="filter">Фильтры</Button>
      </div>

      <Card padding={0} style={{ overflow: 'hidden' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,2fr) 1fr 100px 110px 130px 32px',
          gap: 16,
          padding: '12px 18px',
          borderBottom: '1px solid var(--divider)',
          font: '500 11px/14px var(--font-sans)',
          color: 'var(--fg-3)',
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
        }}>
          <span>Договор</span><span>Контрагент</span><span>Риски</span><span>Сумма</span><span>Обновлён</span><span></span>
        </div>
        {list.map((c, i) => (
          <div
            key={c.id}
            onClick={() => onOpen(c)}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--n-10)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0,2fr) 1fr 100px 110px 130px 32px',
              gap: 16,
              padding: '14px 18px',
              borderBottom: i === list.length - 1 ? 'none' : '1px solid var(--divider)',
              alignItems: 'center',
              cursor: 'pointer',
              transition: 'background var(--dur) var(--ease)',
            }}
          >
            <div style={{ minWidth: 0 }}>
              <div style={{ font: '600 14px/20px var(--font-sans)', color: 'var(--fg-1)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.title}</div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 2 }}>
                <Badge tone={c.status} dot>{c.badge}</Badge>
                <span style={{ font: '500 11px/14px var(--font-mono)', color: 'var(--fg-3)' }}>{c.v}</span>
              </div>
            </div>
            <div style={{ font: '400 13px/18px var(--font-sans)', color: 'var(--fg-2)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.party}</div>
            <div style={{ font: '600 14px/20px var(--font-mono)', color: c.risks > 5 ? 'var(--danger)' : c.risks > 0 ? 'var(--warning)' : 'var(--fg-3)' }}>{c.risks}</div>
            <div style={{ font: '400 13px/18px var(--font-mono)', color: 'var(--fg-2)' }}>{c.value}</div>
            <div style={{ font: '400 12px/16px var(--font-sans)', color: 'var(--fg-3)' }}>{c.updated}</div>
            <div style={{ color: 'var(--fg-3)', display: 'flex', justifyContent: 'flex-end' }}>
              <Icon name="more" size={16} />
            </div>
          </div>
        ))}
      </Card>
    </div>
  )
}
