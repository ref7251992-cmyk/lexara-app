// Top bar — search, breadcrumb, actions.
const TopBar = ({ title, subtitle, actions }) => (
  <div style={{
    height: 64, flex: "none", borderBottom: "1px solid var(--border)",
    display: "flex", alignItems: "center", padding: "0 24px", gap: 16,
    background: "rgba(255,255,255,0.7)", backdropFilter: "blur(12px)",
  }}>
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ font: "600 16px/22px var(--font-sans)", color: "var(--fg-1)", letterSpacing: "-0.005em" }}>{title}</div>
      {subtitle && <div style={{ font: "400 13px/18px var(--font-sans)", color: "var(--fg-3)" }}>{subtitle}</div>}
    </div>
    <div style={{
      display: "flex", alignItems: "center", gap: 8,
      padding: "7px 12px", borderRadius: 10, border: "1px solid var(--border-strong)",
      background: "white", width: 320, color: "var(--fg-3)",
    }}>
      <Icon name="search" size={16} />
      <span style={{ font: "400 13px/18px var(--font-sans)", flex: 1 }}>Поиск по пунктам и договорам…</span>
      <span style={{ font: "500 11px/14px var(--font-mono)", color: "var(--fg-3)",
        padding: "2px 6px", borderRadius: 4, background: "var(--n-20)" }}>⌘K</span>
    </div>
    {actions}
  </div>
);

window.TopBar = TopBar;
