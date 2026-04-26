import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import Button from '../components/Button'
import Avatar from '../components/Avatar'
import lexaraMark from '../assets/lexara-mark.svg'

const PRIMARY_ITEMS = [
  { id: 'workspace', label: 'Договоры',              icon: 'folder' },
  { id: 'reader',    label: 'Просмотр договора',     icon: 'file-text' },
  { id: 'strategy',  label: 'Стратегия переговоров', icon: 'sparkles' },
]

const SECONDARY_ITEMS = [
  { id: 'playbook', label: 'Плейбук',   icon: 'shield' },
  { id: 'history',  label: 'История',   icon: 'clock' },
  { id: 'settings', label: 'Настройки', icon: 'settings' },
]

function NavItem({ id, label, icon, badge, active, onClick }) {
  return (
    <div
      onClick={() => onClick(id)}
      onMouseEnter={e => { if (!active) e.currentTarget.style.background = 'var(--n-20)' }}
      onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent' }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '8px 10px',
        borderRadius: 10,
        cursor: 'pointer',
        background: active ? 'var(--brand-soft)' : 'transparent',
        color: active ? 'var(--brand-ink)' : 'var(--fg-1)',
        font: '500 13px/18px var(--font-sans)',
        transition: 'all var(--dur) var(--ease)',
      }}
    >
      <Icon name={icon} size={18} stroke={1.6} />
      <span style={{ flex: 1 }}>{label}</span>
      {badge != null && (
        <span style={{ font: '500 11px/14px var(--font-mono)', color: 'var(--fg-3)' }}>{badge}</span>
      )}
    </div>
  )
}

export default function Sidebar({ view, setView, counts }) {
  const navigate = useNavigate()
  return (
    <aside style={{
      width: 240,
      flex: 'none',
      height: '100%',
      borderRight: '1px solid var(--border)',
      background: 'white',
      display: 'flex',
      flexDirection: 'column',
      padding: '14px 12px',
    }}>
      <div
        style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 6px 18px', cursor: 'pointer' }}
        onClick={() => navigate('/')}
      >
        <img src={lexaraMark} width={28} height={28} alt="" />
        <span style={{ font: '600 17px/22px var(--font-sans)', letterSpacing: '-0.01em' }}>Lexara</span>
      </div>

      <Button variant="primary" size="md" icon="plus">Новый договор</Button>

      <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <NavItem {...PRIMARY_ITEMS[0]} badge={counts.workspace} active={view === 'workspace'} onClick={setView} />
        <NavItem {...PRIMARY_ITEMS[1]} active={view === 'reader'} onClick={setView} />
        <NavItem {...PRIMARY_ITEMS[2]} badge={counts.strategy} active={view === 'strategy'} onClick={setView} />
      </div>

      <div style={{
        font: '500 11px/14px var(--font-sans)',
        color: 'var(--fg-3)',
        textTransform: 'uppercase',
        letterSpacing: '0.04em',
        padding: '20px 10px 6px',
      }}>Библиотека</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {SECONDARY_ITEMS.map(it => (
          <NavItem key={it.id} {...it} active={view === it.id} onClick={setView} />
        ))}
      </div>

      <div style={{ flex: 1 }} />

      <div style={{ padding: 12, borderRadius: 16, background: 'var(--brand-soft)', border: 0 }}>
        <div style={{ font: '600 13px/18px var(--font-sans)', color: 'var(--brand-ink)' }}>Триал · осталось 12 дней</div>
        <div style={{ font: '400 12px/16px var(--font-sans)', color: 'var(--brand-ink)', opacity: 0.75, marginTop: 2 }}>
          7 / 25 договоров проанализировано
        </div>
        <div style={{ height: 4, borderRadius: 999, background: 'rgba(26,27,107,0.15)', marginTop: 10 }}>
          <div style={{ height: '100%', width: '28%', borderRadius: 999, background: 'var(--brand)' }} />
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 6px 0' }}>
        <Avatar name="Мира Волкова" />
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <div style={{ font: '600 13px/18px var(--font-sans)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Мира Волкова</div>
          <div style={{ font: '400 12px/16px var(--font-sans)', color: 'var(--fg-3)' }}>Юрист · Acme</div>
        </div>
      </div>
    </aside>
  )
}
