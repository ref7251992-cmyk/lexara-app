import { useState } from 'react'
import Badge from '../components/Badge'
import Button from '../components/Button'
import Card from '../components/Card'
import Icon from '../components/Icon'

const SEED = [
  {
    who: 'user',
    text: 'Acme прислал v3.2. Покажи, что изменилось, и где стоит давить.',
  },
  {
    who: 'agent',
    thinking: [
      'Сравниваю v3.2 с v3.1 — найдено 4 существенных изменения.',
      'Сверяю с вашим плейбуком для рамочных договоров такого размера.',
      'Подтягиваю 1 240 похожих договоров для оценки гибкости контрагента по лимиту ответственности.',
    ],
    text: 'Три изменения в v3.2, которые имеют значение:',
    moves: [
      { tone: 'danger',  title: '§7.4 — лимит ответственности сокращён до 6 месяцев',  body: 'Самый существенный сдвиг. Ваш плейбук требует минимум 24 месяца на этом размере сделки. Контрпредложение: 24 + исключение по ИС — Acme принял аналогичную формулировку в 7 из 9 последних сделок.' },
      { tone: 'warning', title: '§12.1 — срок переживания продлён до 36 месяцев',       body: 'Нетипично для этого размера. Скорее всего, мягкая позиция. Открыть с 18 месяцами, согласиться на 24, если будут давить.' },
      { tone: 'info',    title: '§9 — добавлен пункт MFN (новый)',                       body: 'Acme добавил оговорку о наибольшем благоприятствовании. Обычно выгодно Заказчику; можно принимать, если цена зафиксирована.' },
    ],
  },
]

function UserMsg({ text }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div style={{
        maxWidth: 480,
        padding: '10px 14px',
        borderRadius: 14,
        background: 'var(--brand)',
        color: 'white',
        font: '400 14px/22px var(--font-sans)',
        boxShadow: 'var(--shadow-sm)',
      }}>
        {text}
      </div>
    </div>
  )
}

const MOVE_TONES = {
  danger:  { bg: '#FCE4E8', fg: '#7A0017', icon: 'alert' },
  warning: { bg: '#FFEEDF', fg: '#8A3000', icon: 'alert' },
  info:    { bg: '#E3EEFB', fg: '#0A4F9F', icon: 'alert' },
  success: { bg: '#E5F4E5', fg: '#005C00', icon: 'check-circle' },
}

function MoveCard({ tone, title, body }) {
  const t = MOVE_TONES[tone]
  return (
    <Card padding={14} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
      <div style={{ width: 32, height: 32, borderRadius: 8, background: t.bg, color: t.fg, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
        <Icon name={t.icon} size={16} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ font: '600 14px/20px var(--font-sans)', color: 'var(--fg-1)' }}>{title}</div>
        <div style={{ font: '400 13px/20px var(--font-sans)', color: 'var(--fg-2)', marginTop: 4 }}>{body}</div>
      </div>
      <Icon name="chevron-r" size={16} style={{ color: 'var(--fg-3)', marginTop: 8 }} />
    </Card>
  )
}

function AgentMsg({ thinking, text, moves }) {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
      <div style={{ width: 28, height: 28, borderRadius: 999, background: 'linear-gradient(135deg,#3D3FE2,#7147FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
        <Icon name="sparkles" size={14} style={{ color: 'white' }} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        {thinking && (
          <div style={{ background: 'var(--n-10)', border: '1px solid var(--divider)', borderRadius: 16, padding: '10px 12px', marginBottom: 8 }}>
            <div style={{ font: '500 11px/14px var(--font-sans)', color: 'var(--fg-3)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 6 }}>Размышляет</div>
            {thinking.map((t, i) => (
              <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginTop: i ? 4 : 0 }}>
                <Icon name="check" size={12} style={{ color: 'var(--success)', marginTop: 4 }} />
                <span style={{ font: '400 13px/18px var(--font-sans)', color: 'var(--fg-2)' }}>{t}</span>
              </div>
            ))}
          </div>
        )}
        <div style={{ font: '400 14px/22px var(--font-sans)', color: 'var(--fg-1)' }}>{text}</div>
        {moves && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12 }}>
            {moves.map((mv, i) => <MoveCard key={i} {...mv} />)}
          </div>
        )}
      </div>
    </div>
  )
}

function ThinkingPulse() {
  return (
    <>
      <style>{`@keyframes lx-pulse { 0%,100% { opacity: 0.3; transform: translateY(0) } 50% { opacity: 1; transform: translateY(-2px) } }`}</style>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <div style={{ width: 28, height: 28, borderRadius: 999, background: 'linear-gradient(135deg,#3D3FE2,#7147FF)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="sparkles" size={14} style={{ color: 'white' }} />
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--brand)', animation: `lx-pulse 1.2s ${i * 0.15}s infinite` }} />
          ))}
        </div>
      </div>
    </>
  )
}

export default function Strategy({ contract }) {
  const [msgs, setMsgs] = useState(SEED)
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)

  const send = () => {
    if (!input.trim()) return
    const text = input
    setInput('')
    setMsgs(m => [...m, { who: 'user', text }])
    setBusy(true)
    setTimeout(() => {
      setMsgs(m => [...m, {
        who: 'agent',
        thinking: ['Перепроверяю плейбук по §7.4.', 'Готовлю редлайн.'],
        text: 'Подготовил контрформулировку §7.4 — 24 месяца + исключение по ИС, по образцу формулировки, которую Acme принял в сделке с Helix Bio (март 2025).',
        moves: [{ tone: 'success', title: 'Контрформулировка готова · §7.4', body: 'Откройте просмотр, чтобы применить, или отправьте письмом в Acme напрямую.' }],
      }])
      setBusy(false)
    }, 1100)
  }

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'var(--bg)' }}>
      <div style={{ overflow: 'auto', padding: '28px 32px 16px', flex: 1 }}>
        <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Icon name="sparkles" size={20} style={{ color: 'var(--brand)' }} />
            <div style={{ font: '600 24px/32px var(--font-sans)', letterSpacing: '-0.01em', color: 'var(--fg-1)' }}>Стратегия переговоров</div>
            <Badge tone="brand">Активно · {contract?.title || 'Рамочный договор — Acme Corp'}</Badge>
          </div>

          {msgs.map((m, i) =>
            m.who === 'user'
              ? <UserMsg key={i} text={m.text} />
              : <AgentMsg key={i} {...m} />
          )}
          {busy && <ThinkingPulse />}
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border)', padding: '14px 32px 18px', background: 'white' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{
            borderRadius: 14,
            padding: '10px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            background: 'white',
            border: '1px solid var(--border-strong)',
            boxShadow: 'var(--shadow-sm)',
          }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Спросите Lexara про этот договор…"
              style={{ flex: 1, border: 0, outline: 'none', background: 'transparent', font: '400 14px/20px var(--font-sans)', color: 'var(--fg-1)' }}
            />
            <Button variant="ghost" size="sm" icon="lightning">Подсказать ходы</Button>
            <Button variant="primary" size="sm" icon="send" onClick={send}>Отправить</Button>
          </div>
          <div style={{ font: '400 12px/16px var(--font-sans)', color: 'var(--fg-3)', marginTop: 8, textAlign: 'center' }}>
            Lexara указывает источники; проверьте перед отправкой. Уверенность указана для каждой находки.
          </div>
        </div>
      </div>
    </div>
  )
}
